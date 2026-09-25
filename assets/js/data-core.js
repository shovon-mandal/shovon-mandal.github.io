/* Shared helpers used by the public site (main.js), the CV PDF generator and the admin page.
   Public visitors only READ from Firestore through the REST API (no SDK, no login). */
(function (g) {
  "use strict";

  var WORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
    "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];

  function word(n) { return WORDS[n] || String(n); }
  function cap(s) { return s ? s.charAt(0).toUpperCase() + s.slice(1) : s; }

  /* Normalised status: published | accepted | inpress | review | hidden | other */
  function statusKind(status) {
    var s = String(status || "").toLowerCase();
    if (s.indexOf("review") > -1 || s.indexOf("submitted") > -1) return "review";
    if (s.indexOf("press") > -1) return "inpress";
    if (s.indexOf("accept") > -1) return "accepted";
    if (s.indexOf("publish") > -1) return "published";
    if (s.indexOf("reject") > -1 || s.indexOf("withdraw") > -1 || s.indexOf("draft") > -1) return "hidden";
    return "other";
  }

  function websitePubs(data) {
    return (data.publications || []).filter(function (p) {
      return p.showOnWebsite !== false && statusKind(p.status) !== "hidden";
    });
  }
  function websiteProjects(data) {
    return (data.projects || []).filter(function (p) { return p.showOnWebsite !== false; });
  }

  function counts(data) {
    var c = { published: 0, accepted: 0, inpress: 0, review: 0 };
    websitePubs(data).forEach(function (p) {
      var k = statusKind(p.status);
      if (c[k] !== undefined) c[k]++;
    });
    return c;
  }

  /* {{tokens}} that can be written inside any text on the site, so numbers update automatically */
  function tokenMap(data) {
    var c = counts(data);
    var acc = c.published + c.accepted + c.inpress;
    var rev = c.review;
    return {
      published: String(c.published),
      inPress: String(c.accepted + c.inpress),
      accepted: String(acc),
      acceptedWord: word(acc),
      AcceptedWord: cap(word(acc)),
      review: String(rev),
      reviewWord: word(rev),
      ReviewWord: cap(word(rev)),
      reviewLabel: rev === 1 ? "Manuscript Under Review" : "Manuscripts Under Review",
      reviewClause: rev > 0 ? " and " + word(rev) + (rev === 1 ? " manuscript" : " manuscripts") + " under review" : "",
      projects: String(websiteProjects(data).length),
      firstAuthor: String(websitePubs(data).filter(function (p) {
        var k = statusKind(p.status);
        return /first/i.test(p.role || "") && (k === "published" || k === "accepted" || k === "inpress");
      }).length)
    };
  }

  function applyTokens(obj, map) {
    if (typeof obj === "string") {
      return obj.replace(/\{\{(\w+)\}\}/g, function (m, k) { return map[k] !== undefined ? map[k] : m; });
    }
    if (Array.isArray(obj)) return obj.map(function (x) { return applyTokens(x, map); });
    if (obj && typeof obj === "object") {
      var out = {};
      Object.keys(obj).forEach(function (k) { out[k] = applyTokens(obj[k], map); });
      return out;
    }
    return obj;
  }

  function prepare(data) {
    return applyTokens(data, tokenMap(data));
  }

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function doiUrl(doi) {
    if (!doi) return "";
    doi = String(doi).trim();
    if (/^https?:\/\//i.test(doi)) return doi;
    return "https://doi.org/" + doi.replace(/^doi:\s*/i, "");
  }

  /* Split "A. Ghosh, S. Mandal, and R. Baidya" into [{name}, {sep}] parts */
  function splitAuthors(text) {
    var parts = String(text || "").split(/(,\s*and\s+|,\s*|\s+and\s+)/);
    return parts.map(function (p, i) { return i % 2 ? { sep: p } : { name: p }; });
  }

  /* Plain author text -> HTML with "me" in bold and known co-authors linked.
     If the text already contains HTML it is used as it is (old format). */
  function authorsHtml(text, coauthors, me) {
    text = String(text || "");
    if (text.indexOf("<") > -1) return text;
    coauthors = coauthors || {};
    me = me || "S. Mandal";
    return splitAuthors(text).map(function (part) {
      if (part.sep !== undefined) return esc(part.sep);
      var n = part.name.trim();
      var lead = part.name.slice(0, part.name.indexOf(n));
      var trail = part.name.slice(part.name.indexOf(n) + n.length);
      var core = n.replace(/\s*,?\s*et al\.?$/i, "");
      var rest = n.slice(core.length);
      var html;
      if (core === me) html = "<strong class='author-me'>" + esc(core) + "</strong>";
      else if (coauthors[core]) html = "<a class='author-link' href='" + esc(coauthors[core]) + "' target='_blank' rel='noopener'>" + esc(core) + " ↗</a>";
      else html = esc(core);
      return esc(lead) + html + esc(rest) + esc(trail);
    }).join("");
  }

  function fb() { return g.PORTFOLIO_FIREBASE || {}; }
  function isConfigured() {
    var c = fb();
    return !!(c.enabled && c.config && c.config.projectId && c.config.apiKey && c.config.apiKey.indexOf("PASTE") === -1);
  }

  /* Read the live content document with the Firestore REST API. Returns {data, updatedAt} or null. */
  function loadRemote(timeoutMs) {
    if (!isConfigured() || typeof fetch !== "function") return Promise.resolve(null);
    var c = fb();
    var path = (c.docPath || ["portfolio", "site"]).join("/");
    var url = "https://firestore.googleapis.com/v1/projects/" + encodeURIComponent(c.config.projectId) +
      "/databases/(default)/documents/" + path + "?key=" + encodeURIComponent(c.config.apiKey);
    var ctrl = typeof AbortController !== "undefined" ? new AbortController() : null;
    var timer = setTimeout(function () { if (ctrl) ctrl.abort(); }, timeoutMs || 4000);
    return fetch(url, { cache: "no-store", signal: ctrl ? ctrl.signal : undefined })
      .then(function (r) { if (!r.ok) throw new Error("Firestore " + r.status); return r.json(); })
      .then(function (doc) {
        clearTimeout(timer);
        var f = doc.fields || {};
        if (!f.json || !f.json.stringValue) return null;
        var data = JSON.parse(f.json.stringValue);
        var updatedAt = (f.updatedAt && f.updatedAt.timestampValue) || (data.meta && data.meta.updatedAt) || doc.updateTime;
        return { data: data, updatedAt: updatedAt };
      })
      .catch(function () { clearTimeout(timer); return null; });
  }

  function formatDate(value, withTime) {
    var d = value ? new Date(value) : new Date();
    if (isNaN(d.getTime())) d = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var s = d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
    if (withTime) {
      var h = d.getHours(), m = d.getMinutes();
      var ap = h >= 12 ? "PM" : "AM";
      h = h % 12 || 12;
      s += ", " + h + ":" + (m < 10 ? "0" : "") + m + " " + ap;
    }
    return s;
  }

  g.PortfolioCore = {
    statusKind: statusKind,
    websitePubs: websitePubs,
    websiteProjects: websiteProjects,
    counts: counts,
    tokenMap: tokenMap,
    applyTokens: applyTokens,
    prepare: prepare,
    esc: esc,
    doiUrl: doiUrl,
    splitAuthors: splitAuthors,
    authorsHtml: authorsHtml,
    isConfigured: isConfigured,
    loadRemote: loadRemote,
    formatDate: formatDate
  };
})(typeof window !== "undefined" ? window : globalThis);
