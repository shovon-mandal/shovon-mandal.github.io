/* Builds the academic CV as a real-text PDF (Times, US Letter) from the live website data.
   Same layout as the Word CV. Needs jsPDF (assets/vendor/jspdf.umd.min.js) and data-core.js. */
(function (g) {
  "use strict";

  var PAGE_W = 612, PAGE_H = 792;
  var ML = 38, MR = 38, MT = 38, MB = 44;
  var CW = PAGE_W - ML - MR;
  var FS = 10.1;           // body font size
  var LH = 16.4;           // body line height
  var BLUE = [31, 78, 121];      // headings, name
  var LINK = [5, 99, 193];       // title links
  var TEXT = [20, 20, 20];
  var GREY = [90, 90, 90];

  function core() { return g.PortfolioCore; }

  /* jsPDF standard fonts only cover Latin-1: normalise punctuation */
  function clean(s) {
    return String(s == null ? "" : s)
      .replace(/[\u2018\u2019\u201B\u2032]/g, "'")
      .replace(/[\u201C\u201D\u201F\u2033]/g, '"')
      .replace(/[\u2013\u2014\u2012\u2212]/g, "-")
      .replace(/\u2026/g, "...")
      .replace(/\u2197|\u2192/g, "")
            .replace(/<[^>]+>/g, "")
      .replace(/[^\x00-\xFF]/g, "");
  }

  /* Mini markup: **bold**, *italic*, [text](url)  ->  runs */
  function parse(str, base) {
    base = base || {};
    var runs = [];
    var re = /(\*\*([^*]+)\*\*)|(\*([^*]+)\*)|(\[([^\]]+)\]\(([^)]+)\))/g;
    var last = 0, m;
    str = String(str == null ? "" : str);
    function push(text, extra) {
      if (!text) return;
      var r = {};
      for (var k in base) r[k] = base[k];
      for (var k2 in extra) r[k2] = extra[k2];
      r.text = clean(text);
      runs.push(r);
    }
    while ((m = re.exec(str))) {
      push(str.slice(last, m.index), {});
      if (m[1]) push(m[2], { b: true });
      else if (m[3]) push(m[4], { i: true });
      else if (m[5]) push(m[6], { link: m[7], u: true, color: BLUE });
      last = re.lastIndex;
    }
    push(str.slice(last), {});
    return runs;
  }

  function Writer(doc) {
    this.doc = doc;
    this.y = MT;
  }

  Writer.prototype.font = function (r) {
    var style = r.b && r.i ? "bolditalic" : r.b ? "bold" : r.i ? "italic" : "normal";
    this.doc.setFont("times", style);
    this.doc.setFontSize(r.size || FS);
  };

  Writer.prototype.width = function (piece) {
    this.font(piece);
    return this.doc.getTextWidth(piece.text);
  };

  /* Break runs into words; a word may contain several styled pieces */
  Writer.prototype.words = function (runs) {
    var words = [], cur = [];
    runs.forEach(function (r) {
      var parts = r.text.split(/([ \t\n\r]+)/);
      parts.forEach(function (p) {
        if (!p) return;
        if (/^[ \t\n\r]+$/.test(p)) {
          if (cur.length) { words.push(cur); cur = []; }
        } else {
          var piece = {};
          for (var k in r) piece[k] = r[k];
          piece.text = p;
          cur.push(piece);
        }
      });
    });
    if (cur.length) words.push(cur);
    var self = this;
    return words.map(function (pieces) {
      var w = 0;
      pieces.forEach(function (pc) { pc.w = self.width(pc); w += pc.w; });
      return { pieces: pieces, w: w };
    });
  };

  Writer.prototype.lines = function (runs, width, size) {
    var words = this.words(runs);
    this.doc.setFont("times", "normal");
    this.doc.setFontSize(size || FS);
    var sw = this.doc.getTextWidth(" ");
    var lines = [], line = [], lw = 0;
    words.forEach(function (w) {
      var add = line.length ? sw + w.w : w.w;
      if (line.length && lw + add > width) {
        lines.push({ words: line, w: lw });
        line = [w]; lw = w.w;
      } else {
        line.push(w); lw += add;
      }
    });
    if (line.length) lines.push({ words: line, w: lw });
    return { lines: lines, sw: sw };
  };

  Writer.prototype.ensure = function (h) {
    if (this.y + h > PAGE_H - MB) {
      this.doc.addPage();
      this.y = MT;
      return true;
    }
    return false;
  };

  /* opts: x, width, align (left|center|justify), lh, size, keep (min lines on the page) */
  Writer.prototype.para = function (runs, opts) {
    opts = opts || {};
    var x = opts.x != null ? opts.x : ML;
    var width = opts.width != null ? opts.width : CW;
    var lh = opts.lh || LH;
    var size = opts.size || FS;
    if (opts.size) runs = runs.map(function (r) { var c = {}; for (var k in r) c[k] = r[k]; c.size = c.size || opts.size; return c; });
    var laid = this.lines(runs, width, size);
    var doc = this.doc, self = this;
    if (opts.keep) this.ensure(lh * Math.min(opts.keep, laid.lines.length));
    laid.lines.forEach(function (ln, idx) {
      self.ensure(lh);
      var baseline = self.y + size;
      var last = idx === laid.lines.length - 1;
      var gap = laid.sw;
      var cx = x;
      if (opts.align === "center") cx = x + (width - ln.w) / 2;
      else if (opts.align === "right") cx = x + width - ln.w;
      else if (opts.align === "justify" && !last && ln.words.length > 1) {
        gap = laid.sw + (width - ln.w) / (ln.words.length - 1);
      }
      ln.words.forEach(function (w, wi) {
        w.pieces.forEach(function (pc) {
          self.font(pc);
          var col = pc.color || TEXT;
          doc.setTextColor(col[0], col[1], col[2]);
          doc.text(pc.text, cx, baseline);
          if (pc.u) {
            doc.setDrawColor(col[0], col[1], col[2]);
            doc.setLineWidth(0.5);
            doc.line(cx, baseline + 1.6, cx + pc.w, baseline + 1.6);
          }
          if (pc.link) doc.link(cx, baseline - size + 1, pc.w, size + 2, { url: pc.link });
          cx += pc.w;
        });
        if (wi < ln.words.length - 1) {
          /* keep underline continuous between words of the same link */
          var a = w.pieces[w.pieces.length - 1], b = ln.words[wi + 1].pieces[0];
          if (a.u && b.u && a.link === b.link) {
            var col2 = a.color || TEXT;
            doc.setDrawColor(col2[0], col2[1], col2[2]);
            doc.line(cx, baseline + 1.6, cx + gap, baseline + 1.6);
            if (a.link) doc.link(cx, baseline - size + 1, gap, size + 2, { url: a.link });
          }
          cx += gap;
        }
      });
      self.y += lh;
    });
    return laid.lines.length;
  };

  Writer.prototype.heading = function (text) {
    this.y += 7;
    this.ensure(18 + LH * 3);
    var doc = this.doc;
    doc.setFont("times", "bold");
    doc.setFontSize(12);
    doc.setTextColor(BLUE[0], BLUE[1], BLUE[2]);
    doc.text(clean(text).toUpperCase(), ML, this.y + 12);
    this.y += 17;
    doc.setDrawColor(BLUE[0], BLUE[1], BLUE[2]);
    doc.setLineWidth(0.8);
    doc.line(ML, this.y, PAGE_W - MR, this.y);
    this.y += 6;
  };

  /* Bold blue underlined title (optional link) + "| italic subtitle" on the left, bold period on the right */
  Writer.prototype.entryTitle = function (title, url, subtitleRuns, period) {
    var doc = this.doc;
    this.ensure(LH * 3);
    var right = 0;
    if (period) {
      doc.setFont("times", "bold"); doc.setFontSize(FS);
      right = doc.getTextWidth(clean(period)) + 12;
      doc.setTextColor(TEXT[0], TEXT[1], TEXT[2]);
      doc.text(clean(period), PAGE_W - MR, this.y + FS, { align: "right" });
    }
    var runs = [{ text: clean(title), b: true, u: true, color: LINK, link: url || null }];
    if (subtitleRuns && subtitleRuns.length) {
      runs.push({ text: " | ", color: GREY });
      runs = runs.concat(subtitleRuns);
    }
    this.para(runs, { width: CW - right });
  };

  /* opts.x = left edge of the bullet, opts.width = space available from x */
  Writer.prototype.bullet = function (runs, opts) {
    opts = opts || {};
    var indent = opts.indent || 10;
    var x = opts.x != null ? opts.x : ML;
    var avail = (opts.width != null ? opts.width : CW - (x - ML)) - indent;
    var laid = this.lines(runs, avail);
    this.ensure(LH * Math.min(2, laid.lines.length));
    var doc = this.doc;
    doc.setFont("times", "normal"); doc.setFontSize(FS);
    doc.setTextColor(TEXT[0], TEXT[1], TEXT[2]);
    doc.text("\u2022", x + 1, this.y + FS);
    this.para(runs, { x: x + indent, width: avail, align: opts.align });
  };

  Writer.prototype.numbered = function (n, runs) {
    var indent = 20;
    var laid = this.lines(runs, CW - indent);
    this.ensure(LH * Math.min(2, laid.lines.length));
    var doc = this.doc;
    doc.setFont("times", "bold"); doc.setFontSize(FS);
    doc.setTextColor(TEXT[0], TEXT[1], TEXT[2]);
    doc.text(n + ".", ML, this.y + FS);
    this.para(runs, { x: ML + indent, width: CW - indent, align: "justify" });
  };

  Writer.prototype.subhead = function (text) {
    this.y += 2;
    this.ensure(LH * 3);
    this.para([{ text: clean(text), b: true, u: true, color: LINK }]);
    this.y += 2;
  };

  /* ---------- citation for one publication ---------- */
  function citationRuns(p, data) {
    var C = core();
    var me = (data.site && data.site.authorName) || "S. Mandal";
    var runs = [];
    var authors = p.cvAuthors || p.authors || "";
    C.splitAuthors(clean(authors)).forEach(function (part) {
      if (part.sep !== undefined) { runs.push({ text: part.sep }); return; }
      var n = part.name;
      var idx = n.indexOf(me);
      if (idx > -1) {
        if (idx) runs.push({ text: n.slice(0, idx) });
        runs.push({ text: me, b: true });
        if (n.slice(idx + me.length)) runs.push({ text: n.slice(idx + me.length) });
      } else runs.push({ text: n });
    });
    runs.push({ text: ', "' + clean(p.title) + '," ' });
    var kind = C.statusKind(p.status);
    if (p.cvPrefix) runs.push({ text: clean(p.cvPrefix) + " " });
    var venue = p.conference || p.venue || "";
    runs.push({ text: clean(venue), i: true });
    var tail = "";
    if (p.location) tail += ", " + clean(p.location);
    if (p.year) tail += ", " + clean(p.year);
    if (p.pages) tail += ", " + ((/^pp?\./.test(p.pages) ? "" : "pp. ") + clean(p.pages)).replace(/ /g, "\u00A0");
    if (kind === "inpress") tail += ", in press";
    if (kind === "review") tail += ", under review";
    if (p.doi) {
      runs.push({ text: tail + ", " });
      runs.push({ text: "DOI", link: C.doiUrl(p.doi), u: true, color: BLUE });
      runs.push({ text: "." });
    } else {
      runs.push({ text: tail + "." });
    }
    return runs;
  }

  function isJournal(p) { return /journal|article|transactions/i.test((p.type || "") + " " + (p.conference || "")); }

  function pubGroups(data) {
    var C = core();
    var cv = data.cv || {};
    var list = (data.publications || []).filter(function (p) { return p.showOnCV !== false && C.statusKind(p.status) !== "hidden"; });
    var byKind = function (kinds) { return list.filter(function (p) { return kinds.indexOf(C.statusKind(p.status)) > -1; }); };
    var published = byKind(["published", "other"]);
    var journals = published.filter(isJournal);
    var confs = published.filter(function (p) { return !isJournal(p); });
    var accepted = byKind(["accepted", "inpress"]);
    var review = cv.showUnderReview ? byKind(["review"]) : [];
    var groups = [];
    if (journals.length) groups.push({ title: "Published Journal Articles", items: journals });
    if (confs.length) groups.push({ title: journals.length ? "Published Conference Papers" : "Published Conference Papers", items: confs });
    if (accepted.length) groups.push({ title: accepted.some(isJournal) ? "Accepted / In Press Papers" : "Accepted / In Press Conference Papers", items: accepted });
    if (review.length) groups.push({ title: "Manuscripts Under Review", items: review });
    return groups;
  }

  function repoLabel(url) { return clean(String(url).replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")); }

  /* ---------- build ---------- */
  function build(data, opts) {
    opts = opts || {};
    var C = core();
    var JsPDF = opts.jsPDF || (g.jspdf && g.jspdf.jsPDF);
    if (!JsPDF) throw new Error("jsPDF not loaded");
    var doc = new JsPDF({ unit: "pt", format: "letter", compress: true });
    var cv = data.cv || {};
    var site = data.site || {};
    var w = new Writer(doc);

    doc.setProperties({
      title: (site.name || "Shovon Mandal") + " Academic CV",
      subject: "Academic CV",
      author: site.name || "Shovon Mandal",
      keywords: "CV, academic, computer science",
      creator: "shovon-mandal.github.io"
    });

    /* Header */
    doc.setFont("times", "bold"); doc.setFontSize(22);
    doc.setTextColor(BLUE[0], BLUE[1], BLUE[2]);
    doc.text(clean(site.name || "Shovon Mandal").toUpperCase(), PAGE_W / 2, w.y + 18, { align: "center" });
    w.y += 26;
    w.para(parse(cv.headerLine || ""), { align: "center", lh: 14.5, size: 9.9 });
    var contact = [{ text: "Email: " }];
    if (cv.email) contact.push({ text: cv.email, link: "mailto:" + cv.email, u: true, color: BLUE });
    (cv.links || []).forEach(function (l) {
      contact.push({ text: " | ", color: TEXT });
      contact.push({ text: clean(l.label), link: l.url, u: true, color: BLUE });
    });
    w.para(contact, { align: "center", lh: 14.5, size: 9.9 });
    w.y += 2;

    if (cv.researchProfile) {
      w.heading("Research Profile");
      w.para(parse(cv.researchProfile), { align: "justify" });
    }
    if (cv.researchInterests) {
      w.heading("Research Interests");
      w.para(parse(cv.researchInterests), { align: "justify" });
    }

    if ((cv.education || []).length) {
      w.heading("Education");
      cv.education.forEach(function (e, i) {
        if (i) w.y += 6;
        w.entryTitle(e.title, e.url, null, e.period);
        if (e.institution) w.para([{ text: clean(e.institution), i: true }]);
        (e.lines || []).forEach(function (l) { w.para(parse(l), { align: "left" }); });
      });
    }

    var groups = pubGroups(data);
    if (groups.length) {
      w.heading(cv.publicationsHeading || "Publications and Research");
      groups.forEach(function (gr, gi) {
        if (gi) w.y += 4;
        w.subhead(gr.title);
        gr.items.forEach(function (p, i) { w.numbered(i + 1, citationRuns(p, data)); });
      });
    }

    var projects = (data.projects || []);
    var selected = projects.filter(function (p) { return p.cvSection === "selected"; });
    if (selected.length) {
      w.heading(cv.projectsHeading || "Selected Research and Development Projects");
      selected.forEach(function (p, i) {
        if (i) w.y += 5;
        var sub = p.cvType || p.type ? [{ text: clean(p.cvType || p.type), i: true }] : null;
        w.entryTitle(p.title, p.url, sub, null);
        (p.cvBullets || []).forEach(function (b) { w.bullet(parse(b)); });
        var foot = [];
        if (p.url) {
          foot.push({ text: "Repository: ", b: true });
          foot.push({ text: repoLabel(p.url), link: p.url, u: true, color: BLUE });
        }
        if (p.relatedOutput) {
          if (foot.length) foot.push({ text: " | " });
          foot.push({ text: "Related Output: ", b: true });
          foot = foot.concat(parse(p.relatedOutput));
        }
        if (foot.length) w.bullet(foot);
      });
    }

    if ((cv.experience || []).length) {
      w.heading(cv.experienceHeading || "Academic Appointments and Teaching Experience");
      cv.experience.forEach(function (e, i) {
        if (i) w.y += 5;
        w.entryTitle(e.title, e.url, e.place ? [{ text: clean(e.place), i: true }] : null, e.period);
        (e.bullets || []).forEach(function (b) { w.bullet(parse(b)); });
        (e.lines || []).forEach(function (l) { w.para(parse(l), { align: "justify" }); });
      });
    }

    var additional = projects.filter(function (p) { return p.cvSection === "additional"; });
    if (additional.length) {
      w.heading(cv.additionalProjectsHeading || "Additional Technical Projects");
      additional.forEach(function (p, i) {
        if (i) w.y += 3;
        var sub = [];
        if (p.cvType || p.type) sub.push({ text: clean(p.cvType || p.type), i: true });
        if (p.url) {
          if (sub.length) sub.push({ text: " | ", color: GREY });
          sub.push({ text: "GitHub Repository", link: p.url, u: true, color: BLUE });
        }
        w.entryTitle(p.title, p.url || null, sub, null);
        (p.cvBullets || []).forEach(function (b) { w.bullet(parse(b)); });
      });
    }

    if ((cv.skills || []).length) {
      w.heading(cv.skillsHeading || "Technical Skills");
      cv.skills.forEach(function (s) { w.para(parse(s)); });
    }

    var honors = cv.honors || [];
    if (honors.length) {
      w.heading(cv.honorsHeading || "Honors, Scholarships, and Academic Service");
      var half = Math.ceil(honors.length / 2);
      var colW = CW / 2 - 6;
      var left = honors.slice(0, half), rightCol = honors.slice(half);
      /* measure both columns so the block is not split across pages */
      var measure = function (items) {
        return items.reduce(function (h, t) { return h + w.lines(parse(t), colW - 12).lines.length * LH; }, 0);
      };
      w.ensure(Math.max(measure(left), measure(rightCol)));
      var startY = w.y;
      left.forEach(function (t) { w.bullet(parse(t), { x: ML + 4, width: colW }); });
      var endL = w.y;
      w.y = startY;
      rightCol.forEach(function (t) { w.bullet(parse(t), { x: ML + CW / 2 + 4, width: colW }); });
      w.y = Math.max(endL, w.y);
    }

    if (cv.footerNote) {
      w.y += 4;
      w.para([{ text: clean(cv.footerNote), i: true }]);
      w.y += 2;
      doc.setDrawColor(BLUE[0], BLUE[1], BLUE[2]);
      doc.setLineWidth(0.8);
      doc.line(ML, w.y, PAGE_W - MR, w.y);
    }

    /* Updated / downloaded stamp at the end of the last page */
    var stamp = "Last updated on " + C.formatDate(opts.updatedAt) +
      "  |  Downloaded on " + C.formatDate(opts.downloadedAt || new Date(), true) +
      "  |  Latest version: " + repoLabel(opts.siteUrl || "https://shovon-mandal.github.io/");
    doc.setPage(doc.getNumberOfPages());
    doc.setFont("times", "italic"); doc.setFontSize(8.5);
    doc.setTextColor(GREY[0], GREY[1], GREY[2]);
    doc.text(clean(stamp), PAGE_W / 2, PAGE_H - 24, { align: "center" });
    return doc;
  }

  g.CVPDF = { build: build, citationRuns: citationRuns, pubGroups: pubGroups };
})(typeof window !== "undefined" ? window : globalThis);
