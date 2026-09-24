/* Content editor for shovon-mandal.github.io
   - Signs in with Google (Firebase Auth)
   - Edits the single content document portfolio/site in Firestore
   - Only the admin email can write (enforced by firestore.rules, not by this file) */

const CFG = window.PORTFOLIO_FIREBASE || {};
const C = window.PortfolioCore;
const SDK = "https://www.gstatic.com/firebasejs/10.12.2/";

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
const esc = C.esc;

let fb = null;          // firebase handles
let user = null;
let state = null;       // the full website data being edited
let dirty = false;
let liveExists = false;
let mode = "firebase";  // or "local"

const STATUSES = ["Published", "Accepted", "In press", "Under Review", "Draft / rejected (hidden)"];
const PREFIX_DEFAULT = { published: "in", accepted: "accepted for presentation at the", inpress: "in", review: "submitted to the" };
const PROJECT_TAGS = ["research", "automation", "hardware", "blockchain", "connected", "distributed"];

/* ---------------- helpers ---------------- */
function toast(msg, isErr) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.toggle("err", !!isErr);
  t.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => t.classList.remove("show"), isErr ? 6000 : 3200);
}
function setConn(text) { $("#conn-state").textContent = text; }
function markDirty() {
  dirty = true;
  $("#btn-publish").classList.add("dirty");
  setConn(mode === "local" ? "Local mode - unsaved changes" : "Unsaved changes - click Publish changes");
}
function clearDirty() {
  dirty = false;
  $("#btn-publish").classList.remove("dirty");
}
function lines(text) { return String(text || "").split("\n").map(s => s.trim()).filter(Boolean); }
function pairs(text) {
  return lines(text).map(l => {
    const i = l.indexOf("|");
    return i < 0 ? null : { label: l.slice(0, i).trim(), url: l.slice(i + 1).trim() };
  }).filter(Boolean);
}
function newId(prefix) { return prefix + Date.now().toString(36); }
function clone(o) { return JSON.parse(JSON.stringify(o)); }
function downloadJson() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "site-data.json";
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 2000);
}
window.addEventListener("beforeunload", e => { if (dirty) { e.preventDefault(); e.returnValue = ""; } });

/* ---------------- start ---------------- */
async function boot() {
  $("#btn-local").addEventListener("click", startLocal);
  if (!C.isConfigured()) {
    setConn("Firebase not connected");
    $("#gate-msg").textContent = "The editor needs Firebase to publish changes.";
    $("#setup-note").hidden = false;
    return;
  }
  try {
    const [app, auth, fs] = await Promise.all([
      import(SDK + "firebase-app.js"),
      import(SDK + "firebase-auth.js"),
      import(SDK + "firebase-firestore.js")
    ]);
    const fapp = app.initializeApp(CFG.config);
    fb = { auth: auth.getAuth(fapp), db: fs.getFirestore(fapp), A: auth, F: fs };
  } catch (err) {
    console.error(err);
    setConn("Could not load Firebase");
    $("#gate-msg").textContent = "Firebase could not be loaded. Check your internet connection and firebase-config.js.";
    $("#setup-note").hidden = false;
    return;
  }
  setConn("Not signed in");
  const btn = $("#btn-signin");
  btn.hidden = false;
  btn.addEventListener("click", signIn);
  $("#btn-signout").addEventListener("click", () => fb.A.signOut(fb.auth));
  fb.A.onAuthStateChanged(fb.auth, onAuth);
}

async function signIn() {
  const provider = new fb.A.GoogleAuthProvider();
  provider.setCustomParameters({ login_hint: CFG.adminEmail || "", prompt: "select_account" });
  try {
    await fb.A.signInWithPopup(fb.auth, provider);
  } catch (err) {
    if (err.code === "auth/unauthorized-domain") {
      toast("This domain is not authorised in Firebase. Add it under Authentication > Settings > Authorized domains.", true);
    } else if (err.code !== "auth/popup-closed-by-user" && err.code !== "auth/cancelled-popup-request") {
      toast("Sign-in failed: " + (err.code || err.message), true);
    }
  }
}

async function onAuth(u) {
  user = u;
  $("#btn-signout").hidden = !u;
  if (!u) {
    $("#app").hidden = true;
    $("#gate").hidden = false;
    $("#btn-signin").hidden = false;
    $("#gate-msg").textContent = "Sign in with your Google account to update papers, projects and CV details.";
    setConn("Not signed in");
    return;
  }
  if ((u.email || "").toLowerCase() !== String(CFG.adminEmail || "").toLowerCase()) {
    $("#app").hidden = true;
    $("#gate").hidden = false;
    $("#btn-signin").hidden = true;
    $("#gate-msg").textContent = `Signed in as ${u.email}. This account cannot edit this website.`;
    setConn("No edit access");
    return;
  }
  setConn("Signed in as " + u.email);
  await loadLive();
}

async function loadLive() {
  const { F } = fb;
  try {
    const snap = await F.getDoc(F.doc(fb.db, ...(CFG.docPath || ["portfolio", "site"])));
    if (snap.exists() && snap.data().json) {
      state = JSON.parse(snap.data().json);
      liveExists = true;
      const ts = snap.data().updatedAt;
      showBanner(`Live content loaded. Last published ${ts ? C.formatDate(ts.toDate(), true) : "earlier"}.`, true);
    } else {
      state = await fetchJsonFile();
      liveExists = false;
      showBanner("Firebase has no content yet. This is the content from data/site-data.json. Check it, then click <b>Publish changes</b> to put it online.");
    }
  } catch (err) {
    console.error(err);
    toast("Could not read Firestore: " + (err.code || err.message), true);
    return;
  }
  startEditor();
}

async function fetchJsonFile() {
  const r = await fetch("data/site-data.json", { cache: "no-store" });
  if (!r.ok) throw new Error("data/site-data.json not found");
  return r.json();
}

async function startLocal() {
  mode = "local";
  try { state = await fetchJsonFile(); } catch (e) { toast(e.message, true); return; }
  $("#btn-publish").textContent = "Download JSON";
  showBanner("Local mode: nothing is published. When you finish, click <b>Download JSON</b> and replace <code>data/site-data.json</code> in your repository.");
  setConn("Local mode");
  startEditor();
}

function showBanner(html, ok) {
  const b = $("#banner");
  b.innerHTML = html;
  b.classList.toggle("ok", !!ok);
  b.hidden = false;
}

function startEditor() {
  state.publications = state.publications || [];
  state.projects = state.projects || [];
  state.cv = state.cv || {};
  state.coauthors = state.coauthors || {};
  state.site = state.site || {};
  $("#gate").hidden = true;
  $("#app").hidden = false;
  $("#btn-publish").disabled = false;
  $("#btn-preview-cv").disabled = false;
  clearDirty();
  renderAll();
}

function renderAll() {
  renderPapers();
  renderProjects();
  fillCvForm();
  fillCoForm();
  $("#json-area").value = JSON.stringify(state, null, 2);
}

/* ---------------- tabs ---------------- */
$$(".tabs button").forEach(b => b.addEventListener("click", () => {
  $$(".tabs button").forEach(x => x.classList.toggle("on", x === b));
  $$(".panel").forEach(p => p.hidden = p.dataset.panel !== b.dataset.tab);
  if (b.dataset.tab === "json") $("#json-area").value = JSON.stringify(state, null, 2);
  if (b.dataset.tab === "history") loadHistory();
}));

/* ---------------- papers ---------------- */
function statusOptions(current) {
  const list = STATUSES.includes(current) || !current ? STATUSES : [current, ...STATUSES];
  return list.map(s => `<option ${s === current ? "selected" : ""}>${esc(s)}</option>`).join("");
}

function renderPapers() {
  const el = $("#paper-list");
  if (!state.publications.length) {
    el.innerHTML = `<p class="hint">No papers yet. Click <b>Add paper</b>.</p>`;
    return;
  }
  el.innerHTML = state.publications.map((p, i) => {
    const kind = C.statusKind(p.status);
    const hidden = kind === "hidden" || p.showOnWebsite === false;
    return `
    <div class="item ${hidden ? "muted" : ""}" data-i="${i}">
      <span class="num">${String(i + 1).padStart(2, "0")}</span>
      <div>
        <h4>${esc(p.title || "(untitled)")}</h4>
        <div class="meta">${esc(p.venue || p.conference || "")}${p.year ? " · " + esc(p.year) : ""}${p.role ? " · " + esc(p.role) : ""}${p.doi ? " · DOI" : ""}</div>
        <div class="flags">
          <span class="flag ${p.showOnWebsite === false ? "off" : ""}">Website</span>
          <span class="flag ${p.showOnCV === false ? "off" : ""}">CV</span>
          ${p.core ? `<span class="flag">Core research</span>` : ""}
        </div>
      </div>
      <div class="item-actions">
        <select class="st-${kind}" data-act="status" aria-label="Status">${statusOptions(p.status)}</select>
        <button class="btn small icon-btn" data-act="up" aria-label="Move up" ${i === 0 ? "disabled" : ""}>↑</button>
        <button class="btn small icon-btn" data-act="down" aria-label="Move down" ${i === state.publications.length - 1 ? "disabled" : ""}>↓</button>
        <button class="btn small" data-act="edit">Edit</button>
        <button class="btn small danger" data-act="del">Delete</button>
      </div>
    </div>`;
  }).join("");
}

function applyStatusChange(p, status) {
  const kind = C.statusKind(status);
  const oldKind = C.statusKind(p.status);
  p.status = status;
  if (kind === oldKind) return;
  delete p.statusText;
  const prefixes = Object.values(PREFIX_DEFAULT).concat([""]);
  if (prefixes.includes(p.cvPrefix || "") && PREFIX_DEFAULT[kind] !== undefined) p.cvPrefix = PREFIX_DEFAULT[kind];
  const shortVenue = (p.venue || "").split(" - ")[0];
  const label = { published: "Published", accepted: "Accepted", inpress: "In press", review: "Under review" }[kind];
  if (label) p.publisher = shortVenue && shortVenue.length < 40 ? `${shortVenue} / ${label}` : label;
  if (kind === "published" && p.doi) p.publisher = (shortVenue && shortVenue.length < 40 ? shortVenue + " / " : "") + "DOI available";
  if (/manuscript/i.test(p.type || "") && kind !== "review") p.type = "Conference Paper";
  if (kind === "review" && !/manuscript/i.test(p.type || "") && !/journal/i.test(p.type || "")) p.type = "Conference Manuscript";
  if (["published", "accepted", "inpress"].includes(kind)) p.showOnCV = true;
}

$("#paper-list").addEventListener("change", e => {
  if (e.target.dataset.act !== "status") return;
  const i = +e.target.closest(".item").dataset.i;
  applyStatusChange(state.publications[i], e.target.value);
  markDirty();
  renderPapers();
  toast("Status changed. Open Edit to add the DOI, pages or final venue if you have them.");
});

$("#paper-list").addEventListener("click", e => {
  const b = e.target.closest("button[data-act]");
  if (!b) return;
  const i = +b.closest(".item").dataset.i;
  listAction(state.publications, i, b.dataset.act, renderPapers, editPaper, "paper");
});

function listAction(arr, i, act, rerender, edit, noun) {
  if (act === "up" && i > 0) { [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]]; markDirty(); rerender(); }
  if (act === "down" && i < arr.length - 1) { [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]]; markDirty(); rerender(); }
  if (act === "edit") edit(i);
  if (act === "del") {
    if (confirm(`Delete this ${noun}?\n\n"${arr[i].title}"\n\nTip: to hide it without deleting, turn off "Show on website" instead.`)) {
      arr.splice(i, 1); markDirty(); rerender();
    }
  }
}

$("#btn-add-paper").addEventListener("click", () => editPaper(-1));

function paperForm(p) {
  const v = k => esc(p[k] == null ? "" : p[k]);
  return `
    <div class="grid2">
      <label>Status<select name="status">${statusOptions(p.status || "Under Review")}</select></label>
      <label>Status note <small>Leave empty for automatic text</small><input name="statusText" value="${v("statusText")}" placeholder="e.g. Accepted for presentation; DOI not assigned yet"/></label>
    </div>
    <label>Title<input name="title" required value="${v("title")}"/></label>
    <label>Authors <small>Plain text, e.g. A. Ghosh, S. Mandal, and R. Baidya</small><textarea name="authors" rows="2">${v("authors")}</textarea></label>
    <label>Shorter author list for the CV <small>Optional, e.g. M. Keya, S. Mandal, S. Dhar, et al.</small><input name="cvAuthors" value="${v("cvAuthors")}"/></label>
    <div class="grid3">
      <label>Year<input name="year" value="${v("year")}"/></label>
      <label>Short venue <small>Website</small><input name="venue" value="${v("venue")}" placeholder="ICCIT 2024 - IEEE"/></label>
      <label>Type<input name="type" list="dl-type" value="${v("type")}"/></label>
    </div>
    <label>Full conference or journal name <small>Printed in italic in the CV</small><input name="conference" value="${v("conference")}" placeholder="2024 27th International Conference on Computer and Information Technology (ICCIT)"/></label>
    <div class="grid3">
      <label>Words before venue <small>CV</small><input name="cvPrefix" list="dl-prefix" value="${v("cvPrefix")}"/></label>
      <label>Location / volume<input name="location" value="${v("location")}" placeholder="Dhaka, Bangladesh"/></label>
      <label>Pages<input name="pages" value="${v("pages")}" placeholder="387-392"/></label>
    </div>
    <label>DOI <small>e.g. 10.1109/ICCIT64611.2024.11021995</small><input name="doi" value="${v("doi")}"/></label>
    <div class="grid2">
      <label>Your role<input name="role" list="dl-role" value="${v("role")}"/></label>
      <label>Research area<input name="area" value="${v("area")}"/></label>
    </div>
    <label>One-line summary <small>Website</small><textarea name="detail" rows="2">${v("detail")}</textarea></label>
    <div class="grid2">
      <label>Publisher / status line <small>Website</small><input name="publisher" value="${v("publisher")}"/></label>
      <label>Search keywords <small>For website filters</small><input name="keywords" value="${v("keywords")}"/></label>
    </div>
    <div class="checks">
      <label><input type="checkbox" name="showOnWebsite" ${p.showOnWebsite !== false ? "checked" : ""}/> Show on website</label>
      <label><input type="checkbox" name="showOnCV" ${p.showOnCV !== false ? "checked" : ""}/> Show in CV</label>
      <label><input type="checkbox" name="core" ${p.core ? "checked" : ""}/> Core research</label>
    </div>
    <datalist id="dl-type"><option>IEEE Conference Paper</option><option>Conference Paper</option><option>Conference Manuscript</option><option>Journal Article</option><option>Journal Manuscript</option></datalist>
    <datalist id="dl-prefix"><option>in</option><option>accepted for presentation at the</option><option>submitted to the</option><option>accepted for publication in</option></datalist>
    <datalist id="dl-role"><option>First author</option><option>Co-author</option><option>Corresponding author</option></datalist>`;
}

function readForm(body) {
  const out = {};
  $$("input, select, textarea", body).forEach(el => {
    if (!el.name) return;
    out[el.name] = el.type === "checkbox" ? el.checked : el.value.trim();
  });
  return out;
}

function openEditor(title, html, onSave) {
  const dlg = $("#editor");
  $("#editor-title").textContent = title;
  $("#editor-body").innerHTML = html;
  $$("#editor-form button[value=cancel]").forEach(b => b.setAttribute("formnovalidate", ""));
  dlg.returnValue = "";
  dlg.onclose = () => { if (dlg.returnValue === "save") onSave(readForm($("#editor-body"))); };
  dlg.showModal();
}

function editPaper(i) {
  const isNew = i < 0;
  const p = isNew ? { status: "Under Review", showOnWebsite: true, showOnCV: false, role: "Co-author", type: "Conference Manuscript", cvPrefix: "submitted to the", year: String(new Date().getFullYear()) } : clone(state.publications[i]);
  openEditor(isNew ? "Add paper" : "Edit paper", paperForm(p), f => {
    const oldStatus = p.status;
    Object.assign(p, f);
    if (!f.statusText) delete p.statusText;
    if (!f.cvAuthors) delete p.cvAuthors;
    delete p.doiUrl;
    if (p.doi) p.doi = p.doi.replace(/^https?:\/\/(dx\.)?doi\.org\//i, "");
    if (!isNew && oldStatus !== f.status) { const s = f.status; p.status = oldStatus; applyStatusChange(p, s); if (f.statusText) p.statusText = f.statusText; }
    if (isNew) { p.id = newId("p"); state.publications.unshift(p); } else state.publications[i] = p;
    markDirty();
    renderPapers();
    toast(isNew ? "Paper added. Click Publish changes to put it online." : "Paper updated. Click Publish changes to put it online.");
  });
}

/* ---------------- projects ---------------- */
function renderProjects() {
  const el = $("#project-list");
  if (!state.projects.length) { el.innerHTML = `<p class="hint">No projects yet. Click <b>Add project</b>.</p>`; return; }
  const cvLabel = { selected: "CV: Selected", additional: "CV: Additional" };
  el.innerHTML = state.projects.map((p, i) => `
    <div class="item ${p.showOnWebsite === false && (!p.cvSection || p.cvSection === "none") ? "muted" : ""}" data-i="${i}">
      <span class="num">${String(i + 1).padStart(2, "0")}</span>
      <div>
        <h4>${esc(p.title || "(untitled)")}</h4>
        <div class="meta">${esc(p.type || "")}${p.url ? " · " + esc(p.url.replace(/^https?:\/\//, "")) : ""}</div>
        <div class="flags">
          <span class="flag ${p.showOnWebsite === false ? "off" : ""}">Website</span>
          <span class="flag ${cvLabel[p.cvSection] ? "" : "off"}">${cvLabel[p.cvSection] || "CV"}</span>
        </div>
      </div>
      <div class="item-actions">
        <button class="btn small icon-btn" data-act="up" aria-label="Move up" ${i === 0 ? "disabled" : ""}>↑</button>
        <button class="btn small icon-btn" data-act="down" aria-label="Move down" ${i === state.projects.length - 1 ? "disabled" : ""}>↓</button>
        <button class="btn small" data-act="edit">Edit</button>
        <button class="btn small danger" data-act="del">Delete</button>
      </div>
    </div>`).join("");
}

$("#project-list").addEventListener("click", e => {
  const b = e.target.closest("button[data-act]");
  if (!b) return;
  listAction(state.projects, +b.closest(".item").dataset.i, b.dataset.act, renderProjects, editProject, "project");
});
$("#btn-add-project").addEventListener("click", () => editProject(-1));

function projectForm(p) {
  const v = k => esc(p[k] == null ? "" : p[k]);
  const words = String(p.filter || "").toLowerCase().split(/\s+/);
  const extra = words.filter(w => w && !PROJECT_TAGS.includes(w)).join(" ");
  return `
    <label>Title<input name="title" required value="${v("title")}"/></label>
    <div class="grid2">
      <label>Type<input name="type" value="${v("type")}" placeholder="Research Prototype"/></label>
      <label>Category <small>Website</small><input name="category" value="${v("category")}" placeholder="Distributed Ledger · Web Transaction"/></label>
    </div>
    <label>Description <small>Website</small><textarea name="description" rows="3">${v("description")}</textarea></label>
    <label>Highlights <small>Website, one per line</small><textarea name="highlights" rows="3">${esc((p.highlights || []).join("\n"))}</textarea></label>
    <label>Tools <small>Comma separated</small><input name="tools" value="${esc((p.tools || []).join(", "))}"/></label>
    <label>Repository or project link<input name="url" value="${v("url")}" placeholder="https://github.com/shovon-mandal/..."/></label>
    <fieldset><legend>Website</legend>
      <div class="checks">
        <label><input type="checkbox" name="showOnWebsite" ${p.showOnWebsite !== false ? "checked" : ""}/> Show on website</label>
      </div>
      <div class="checks">${PROJECT_TAGS.map(t => `<label><input type="checkbox" name="tag_${t}" ${words.includes(t) ? "checked" : ""}/> ${t === "connected" ? "Connected devices" : t === "distributed" ? "Distributed ledger" : t.charAt(0).toUpperCase() + t.slice(1)}</label>`).join("")}</div>
      <label>Extra filter keywords<input name="filterExtra" value="${esc(extra)}"/></label>
    </fieldset>
    <fieldset><legend>CV</legend>
      <div class="grid2">
        <label>CV section<select name="cvSection">
          <option value="none" ${!p.cvSection || p.cvSection === "none" ? "selected" : ""}>Not in CV</option>
          <option value="selected" ${p.cvSection === "selected" ? "selected" : ""}>Selected Research and Development Projects</option>
          <option value="additional" ${p.cvSection === "additional" ? "selected" : ""}>Additional Technical Projects</option>
        </select></label>
        <label>Subtitle in CV<input name="cvType" value="${v("cvType")}" placeholder="Thesis-Supporting Research Implementation"/></label>
      </div>
      <label>CV bullet points <small>One per line</small><textarea name="cvBullets" rows="3">${esc((p.cvBullets || []).join("\n"))}</textarea></label>
      <label>Related output <small>Optional, e.g. ICKECS 2024 paper on Blockchain with NFC.</small><input name="relatedOutput" value="${v("relatedOutput")}"/></label>
    </fieldset>`;
}

function editProject(i) {
  const isNew = i < 0;
  const p = isNew ? { showOnWebsite: true, cvSection: "none", tools: [], highlights: [], cvBullets: [] } : clone(state.projects[i]);
  openEditor(isNew ? "Add project" : "Edit project", projectForm(p), f => {
    const tags = PROJECT_TAGS.filter(t => f["tag_" + t]);
    PROJECT_TAGS.forEach(t => delete f["tag_" + t]);
    p.filter = [...tags, f.filterExtra].filter(Boolean).join(" ");
    delete f.filterExtra;
    Object.assign(p, f);
    p.highlights = lines(f.highlights);
    p.cvBullets = lines(f.cvBullets);
    p.tools = String(f.tools || "").split(",").map(s => s.trim()).filter(Boolean);
    if (isNew) { p.id = newId("r"); state.projects.unshift(p); } else state.projects[i] = p;
    markDirty();
    renderProjects();
    toast(isNew ? "Project added. Click Publish changes to put it online." : "Project updated. Click Publish changes to put it online.");
  });
}

/* ---------------- CV details ---------------- */
function fillCvForm() {
  const f = $("#cv-form"), cv = state.cv;
  f.headerLine.value = cv.headerLine || "";
  f.email.value = cv.email || "";
  f.links.value = (cv.links || []).map(l => `${l.label} | ${l.url}`).join("\n");
  f.researchProfile.value = cv.researchProfile || "";
  f.researchInterests.value = cv.researchInterests || "";
  f.showUnderReview.checked = !!cv.showUnderReview;
  f.skills.value = (cv.skills || []).join("\n");
  f.honors.value = (cv.honors || []).join("\n");
  f.footerNote.value = cv.footerNote || "";
  f.education.value = JSON.stringify(cv.education || [], null, 2);
  f.experience.value = JSON.stringify(cv.experience || [], null, 2);
  $("#cv-msg").textContent = "";
}

$("#cv-form").addEventListener("input", e => {
  const f = $("#cv-form"), cv = state.cv, n = e.target.name, msg = $("#cv-msg");
  if (n === "links") cv.links = pairs(f.links.value);
  else if (n === "skills" || n === "honors") cv[n] = lines(f[n].value);
  else if (n === "showUnderReview") cv.showUnderReview = f.showUnderReview.checked;
  else if (n === "education" || n === "experience") {
    try {
      const val = JSON.parse(f[n].value);
      if (!Array.isArray(val)) throw new Error("must be a list [ ... ]");
      cv[n] = val;
      msg.textContent = ""; msg.classList.remove("err");
    } catch (err) {
      msg.textContent = `${n === "education" ? "Education" : "Teaching experience"} is not valid JSON yet (${err.message}). It is not saved until it is valid.`;
      msg.classList.add("err");
      return;
    }
  } else cv[n] = f[n].value;
  markDirty();
});

/* ---------------- co-authors ---------------- */
function fillCoForm() {
  const f = $("#co-form");
  f.authorName.value = state.site.authorName || "S. Mandal";
  f.coauthors.value = Object.entries(state.coauthors || {}).map(([k, v]) => `${k} | ${v}`).join("\n");
}
$("#co-form").addEventListener("input", () => {
  const f = $("#co-form");
  state.site.authorName = f.authorName.value.trim() || "S. Mandal";
  const map = {};
  pairs(f.coauthors.value).forEach(p => { if (p.label && p.url) map[p.label] = p.url; });
  state.coauthors = map;
  markDirty();
});

/* ---------------- all data ---------------- */
$("#btn-apply-json").addEventListener("click", () => applyJsonText($("#json-area").value));
$("#btn-download-json").addEventListener("click", downloadJson);
$("#file-json").addEventListener("change", async e => {
  const file = e.target.files[0];
  if (!file) return;
  applyJsonText(await file.text());
  e.target.value = "";
});
function applyJsonText(text) {
  const msg = $("#json-msg");
  try {
    const val = JSON.parse(text);
    if (!val || !Array.isArray(val.publications) || !Array.isArray(val.projects) || !val.site) {
      throw new Error("the data must contain site, publications and projects");
    }
    state = val;
    msg.textContent = "Applied. Click Publish changes to put it online.";
    msg.classList.remove("err");
    markDirty();
    renderAll();
  } catch (err) {
    msg.textContent = "Not applied: " + err.message;
    msg.classList.add("err");
  }
}

/* ---------------- backups ---------------- */
$("#btn-load-history").addEventListener("click", loadHistory);
async function loadHistory() {
  const el = $("#history-list");
  if (mode === "local" || !fb) { el.innerHTML = `<p class="hint">Backups are available when Firebase is connected.</p>`; return; }
  el.innerHTML = `<p class="hint">Loading...</p>`;
  const { F } = fb;
  try {
    const q = F.query(F.collection(fb.db, CFG.historyCollection || "portfolio_history"), F.orderBy("savedAt", "desc"), F.limit(25));
    const snap = await F.getDocs(q);
    if (snap.empty) { el.innerHTML = `<p class="hint">No backups yet. One is created every time you publish.</p>`; return; }
    const rows = [];
    snap.forEach(d => rows.push({ id: d.id, ...d.data() }));
    el.innerHTML = rows.map((r, i) => {
      let info = "";
      try { const d = JSON.parse(r.json); info = `${(d.publications || []).length} papers · ${(d.projects || []).length} projects`; } catch (e) { info = "unreadable"; }
      return `<div class="item" data-i="${i}"><span class="num">${String(i + 1).padStart(2, "0")}</span>
        <div><h4>${r.savedAt ? esc(C.formatDate(r.savedAt.toDate(), true)) : "Unknown date"}</h4><div class="meta">${esc(info)}</div></div>
        <div class="item-actions"><button class="btn small" data-restore="${i}">Restore into editor</button></div></div>`;
    }).join("");
    $$("[data-restore]", el).forEach(b => b.addEventListener("click", () => {
      if (dirty && !confirm("Replace your unsaved changes with this backup?")) return;
      state = JSON.parse(rows[+b.dataset.restore].json);
      startEditor();
      markDirty();
      toast("Backup loaded into the editor. Click Publish changes to make it live.");
    }));
  } catch (err) {
    el.innerHTML = `<p class="hint">Could not load backups: ${esc(err.code || err.message)}</p>`;
  }
}

/* ---------------- publish ---------------- */
$("#btn-publish").addEventListener("click", publish);
async function publish() {
  if (mode === "local") { downloadJson(); clearDirty(); setConn("Local mode - JSON downloaded"); return; }
  const btn = $("#btn-publish");
  btn.disabled = true;
  btn.textContent = "Publishing...";
  const { F } = fb;
  try {
    state.meta = Object.assign({}, state.meta, { updatedAt: new Date().toISOString(), schema: 2 });
    const json = JSON.stringify(state);
    const ref = F.doc(fb.db, ...(CFG.docPath || ["portfolio", "site"]));
    if (liveExists) {
      const old = await F.getDoc(ref);
      if (old.exists() && old.data().json) {
        await F.addDoc(F.collection(fb.db, CFG.historyCollection || "portfolio_history"), { json: old.data().json, savedAt: F.serverTimestamp() });
      }
    }
    await F.setDoc(ref, { json, updatedAt: F.serverTimestamp(), updatedBy: user.email });
    liveExists = true;
    clearDirty();
    setConn("Published " + C.formatDate(new Date(), true));
    showBanner("Published. The website and the Download CV button now use this content (refresh the website to see it).", true);
    toast("Published.");
  } catch (err) {
    console.error(err);
    toast(err.code === "permission-denied"
      ? "Firebase refused the write. Check that firestore.rules are published and that you are signed in as " + CFG.adminEmail + "."
      : "Publish failed: " + (err.code || err.message), true);
  } finally {
    btn.disabled = false;
    btn.textContent = "Publish changes";
  }
}

/* ---------------- CV preview ---------------- */
$("#btn-preview-cv").addEventListener("click", () => {
  try {
    const doc = window.CVPDF.build(C.prepare(state), { updatedAt: new Date(), downloadedAt: new Date(), siteUrl: "https://shovon-mandal.github.io/" });
    const url = doc.output("bloburl");
    const w = window.open(url, "_blank");
    if (!w) doc.save("Shovon_Mandal_CV_preview.pdf");
  } catch (err) {
    console.error(err);
    toast("CV preview failed: " + err.message, true);
  }
});

boot();
