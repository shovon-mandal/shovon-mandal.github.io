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
      setTimeout(checkRepoText, 0);
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
  renderForms();
  $("#json-area").value = JSON.stringify(state, null, 2);
}

/* ---------------- tabs ---------------- */
$$(".tabs button").forEach(b => b.addEventListener("click", () => {
  $$(".tabs button").forEach(x => x.classList.toggle("on", x === b));
  $$(".panel").forEach(p => p.hidden = p.dataset.panel !== b.dataset.tab);
  if (b.dataset.tab === "json") $("#json-area").value = JSON.stringify(state, null, 2);
  if (state && ["site", "news", "cv", "coauthors"].includes(b.dataset.tab)) { FIELDS = []; Object.keys(BUILDERS).forEach(renderBuilder); }
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

/* Edit dialog: graphical form by default, "Edit as JSON" switch for code */
let EDITOR = null;
function openEditor(title, obj, cfg) {
  const dlg = $("#editor");
  EDITOR = Object.assign({ obj: clone(obj), json: false, final: null }, cfg);
  $("#editor-title").textContent = title;
  $$("#editor-form button[value=cancel]").forEach(b => b.setAttribute("formnovalidate", ""));
  $("#editor-mode").hidden = !!cfg.jsonOnly;
  $("#editor-json-hint").textContent = cfg.jsonHint || "Edit the fields directly. Must be valid JSON.";
  if (!cfg.jsonOnly) $("#editor-body").innerHTML = cfg.formFor(EDITOR.obj);
  setEditorMode(!!cfg.jsonOnly, cfg.jsonOnly ? cfg.jsonText : null);
  dlg.returnValue = "";
  dlg.onclose = () => { if (dlg.returnValue === "save" && EDITOR.final) EDITOR.onSave(EDITOR.final); };
  dlg.showModal();
}
function setEditorMode(json, text) {
  EDITOR.json = json;
  $("#editor-body").hidden = json;
  $("#editor-json").hidden = !json;
  $("#editor-json-msg").textContent = "";
  $("#editor-mode").textContent = json ? "Back to form" : "Edit as JSON";
  $$("#editor-body [required]").forEach(el => json ? el.removeAttribute("required") : null);
  if (json) $("#editor-json-area").value = text != null ? text : JSON.stringify(EDITOR.obj, null, 2);
}
function editorCurrent() {
  if (EDITOR.json) return JSON.parse($("#editor-json-area").value);
  return EDITOR.readInto(clone(EDITOR.obj), readForm($("#editor-body")));
}
$("#editor-mode").addEventListener("click", () => {
  try {
    if (!EDITOR.json) { EDITOR.obj = editorCurrent(); setEditorMode(true); }
    else {
      const o = JSON.parse($("#editor-json-area").value);
      if (!o || typeof o !== "object" || Array.isArray(o)) throw new Error("it must be one object: { ... }");
      EDITOR.obj = o;
      $("#editor-body").innerHTML = EDITOR.formFor(o);
      setEditorMode(false);
    }
  } catch (err) { $("#editor-json-msg").textContent = "Cannot switch: " + err.message; }
});
$("#editor-form").addEventListener("submit", e => {
  if (!e.submitter || e.submitter.value !== "save") return;
  try {
    const v = editorCurrent();
    const list = Array.isArray(v) ? v : [v];
    if (!list.length || list.some(x => !x || typeof x !== "object" || !String(x.title || "").trim())) throw new Error("every item needs a \"title\"");
    if (Array.isArray(v) && !EDITOR.jsonOnly) throw new Error("use one object { ... } here");
    EDITOR.final = v;
  } catch (err) {
    e.preventDefault();
    if (!EDITOR.json) setEditorMode(true);
    $("#editor-json-msg").textContent = "Not saved: " + err.message;
  }
});

function paperFromForm(p, f) {
  const oldStatus = p.status;
  Object.assign(p, f);
  if (!f.statusText) delete p.statusText;
  if (!f.cvAuthors) delete p.cvAuthors;
  delete p.doiUrl;
  if (p.doi) p.doi = p.doi.replace(/^https?:\/\/(dx\.)?doi\.org\//i, "");
  if (oldStatus && oldStatus !== f.status) { p.status = oldStatus; applyStatusChange(p, f.status); if (f.statusText) p.statusText = f.statusText; }
  return p;
}
const NEW_PAPER = () => ({ status: "Under Review", title: "", authors: "", year: String(new Date().getFullYear()), venue: "", conference: "", cvPrefix: "submitted to the", location: "", pages: "", doi: "", type: "Conference Manuscript", role: "Co-author", area: "", detail: "", publisher: "", keywords: "", core: false, showOnWebsite: true, showOnCV: false });
function editPaper(i) {
  const isNew = i < 0;
  const p = isNew ? NEW_PAPER() : state.publications[i];
  openEditor(isNew ? "Add paper" : "Edit paper", p, {
    formFor: paperForm, readInto: paperFromForm,
    onSave: v => {
      if (isNew) { v.id = v.id || newId("p"); state.publications.unshift(v); } else state.publications[i] = v;
      markDirty(); renderPapers();
      toast(isNew ? "Paper added. Click Publish changes to put it online." : "Paper updated. Click Publish changes to put it online.");
    }
  });
}
function addFromJson(kind) {
  const isPaper = kind === "paper";
  const sample = isPaper ? NEW_PAPER() : NEW_PROJECT();
  if (isPaper) { sample.title = "Paper title"; sample.authors = "A. Author, S. Mandal, and B. Author"; }
  else sample.title = "Project title";
  openEditor(isPaper ? "Add papers from JSON" : "Add projects from JSON", {}, {
    jsonOnly: true,
    jsonText: JSON.stringify(sample, null, 2),
    jsonHint: "Paste one object { ... } or a list [ {...}, {...} ]. Every item needs a title. Missing fields get default values.",
    onSave: v => {
      const list = (Array.isArray(v) ? v : [v]).map(x => Object.assign(isPaper ? NEW_PAPER() : NEW_PROJECT(), x));
      list.forEach(x => { x.id = x.id || newId(isPaper ? "p" : "r"); });
      const arr = isPaper ? state.publications : state.projects;
      arr.unshift(...list);
      markDirty();
      isPaper ? renderPapers() : renderProjects();
      toast(`${list.length} ${isPaper ? "paper" : "project"}${list.length > 1 ? "s" : ""} added. Click Publish changes to put ${list.length > 1 ? "them" : "it"} online.`);
    }
  });
}
$("#btn-json-paper").addEventListener("click", () => addFromJson("paper"));
$("#btn-json-project").addEventListener("click", () => addFromJson("project"));

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

function projectFromForm(p, f) {
  const tags = PROJECT_TAGS.filter(t => f["tag_" + t]);
  PROJECT_TAGS.forEach(t => delete f["tag_" + t]);
  p.filter = [...tags, f.filterExtra].filter(Boolean).join(" ");
  delete f.filterExtra;
  Object.assign(p, f);
  p.highlights = lines(f.highlights);
  p.cvBullets = lines(f.cvBullets);
  p.tools = String(f.tools || "").split(",").map(x => x.trim()).filter(Boolean);
  return p;
}
function NEW_PROJECT() { return { title: "", type: "", category: "", description: "", highlights: [], tools: [], url: "", filter: "", showOnWebsite: true, cvSection: "none", cvType: "", cvBullets: [], relatedOutput: "" }; }
function editProject(i) {
  const isNew = i < 0;
  const p = isNew ? NEW_PROJECT() : state.projects[i];
  openEditor(isNew ? "Add project" : "Edit project", p, {
    formFor: projectForm, readInto: projectFromForm,
    onSave: v => {
      if (isNew) { v.id = v.id || newId("r"); state.projects.unshift(v); } else state.projects[i] = v;
      markDirty(); renderProjects();
      toast(isNew ? "Project added. Click Publish changes to put it online." : "Project updated. Click Publish changes to put it online.");
    }
  });
}

/* ================= graphical editors (form builder) =================
   Every section is edited with normal form fields. Each list also has an
   "Edit as JSON" switch for anyone who prefers to paste or edit code. */
const ensure = (obj, key, def) => { if (obj[key] == null) obj[key] = def; return obj[key]; };
const SECTIONS = [
  ["#home", "Top of page"], ["#research-profile", "About"], ["#news", "Updates"], ["#future-research-plan", "Research Plan"],
  ["#education", "Education"], ["#publications", "Publications"], ["#projects", "Projects"], ["#skills", "Skills"],
  ["#experience", "Experience"], ["#references", "References"], ["#honors", "Honors"], ["#contact", "Contact"]
];

let FIELDS = [];      // simple fields, by index
const REPS = {};      // list editors, by id

/* value converters for list-item sub-fields */
function toUi(t, v) {
  if (t === "lines") return (v || []).join("\n");
  if (t === "csv") return (v || []).join(", ");
  if (t === "pairs") return (v || []).map(x => `${x.label || ""} | ${x.url || ""}`).join("\n");
  return v == null ? "" : v;
}
function fromUi(t, v, checked) {
  if (t === "check") return checked;
  if (t === "lines") return lines(v);
  if (t === "csv") return String(v).split(",").map(x => x.trim()).filter(Boolean);
  if (t === "pairs") return pairs(v).filter(x => x.url);
  return v;
}

function subFieldHtml(f, val) {
  const hint = f.hint ? ` <small>${esc(f.hint)}</small>` : "";
  const wide = f.wide || ["area", "lines", "pairs"].includes(f.t) ? " wide" : "";
  if (f.t === "check") return `<label class="check${wide}"><input type="checkbox" data-k="${f.k}" data-t="check" ${val ? "checked" : ""}/> ${esc(f.label)}</label>`;
  if (f.t === "select") {
    const opts = f.opts.map(o => { const [v, l] = Array.isArray(o) ? o : [o, o]; return `<option value="${esc(v)}" ${v === val ? "selected" : ""}>${esc(l)}</option>`; }).join("");
    const extra = f.opts.some(o => (Array.isArray(o) ? o[0] : o) === val) || !val ? "" : `<option selected value="${esc(val)}">${esc(val)}</option>`;
    return `<label class="${wide}">${esc(f.label)}${hint}<select data-k="${f.k}" data-t="select">${extra}${opts}</select></label>`;
  }
  const v = esc(toUi(f.t, val));
  if (["area", "lines", "pairs"].includes(f.t)) {
    const rows = f.rows || (f.t === "area" ? 3 : 4);
    return `<label class="${wide}">${esc(f.label)}${hint}<textarea data-k="${f.k}" data-t="${f.t}" rows="${rows}">${v}</textarea></label>`;
  }
  return `<label class="${wide}">${esc(f.label)}${hint}<input data-k="${f.k}" data-t="${f.t || "text"}" value="${v}" placeholder="${esc(f.ph || "")}"/></label>`;
}

function repTitle(cfg, item, i) {
  if (cfg.simple) { const t = String(item || "").trim(); return t ? (t.length > 70 ? t.slice(0, 70) + "..." : t) : `${cfg.noun} ${i + 1}`; }
  const k = cfg.titleKey || (cfg.fields[0] && cfg.fields[0].k);
  const t = String((item && item[k]) || "").replace(/<[^>]+>/g, "").trim();
  return t ? (t.length > 70 ? t.slice(0, 70) + "..." : t) : `${cfg.noun} ${i + 1}`;
}

function renderRep(id) {
  const cfg = REPS[id];
  const box = document.getElementById("rep-" + id);
  if (!box) return;
  cfg.open = cfg.open || new Set();
  const items = cfg.work;
  const actions = (i) => `<span class="rep-actions">
      <button type="button" class="btn small icon-btn" data-ra="up" aria-label="Move up" ${i === 0 ? "disabled" : ""}>↑</button>
      <button type="button" class="btn small icon-btn" data-ra="down" aria-label="Move down" ${i === items.length - 1 ? "disabled" : ""}>↓</button>
      <button type="button" class="btn small danger" data-ra="del">Remove</button></span>`;
  const body = items.map((item, i) => {
    if (cfg.simple) {
      const v = esc(item == null ? "" : item);
      const ctl = cfg.simple === "area"
        ? `<textarea data-k="" data-t="text" rows="${cfg.rows || 3}" aria-label="${esc(cfg.noun)} ${i + 1}">${v}</textarea>`
        : `<input data-k="" data-t="text" value="${v}" aria-label="${esc(cfg.noun)} ${i + 1}"/>`;
      return `<div class="rep-item simple" data-rep="${id}" data-i="${i}"><span class="rep-n">${i + 1}</span><div class="rep-ctl">${ctl}</div>${actions(i)}</div>`;
    }
    const open = cfg.open.has(i);
    return `<div class="rep-item ${open ? "open" : ""}" data-rep="${id}" data-i="${i}">
      <div class="rep-head">
        <button type="button" class="rep-toggle" data-ra="toggle" aria-expanded="${open}"><span class="chev" aria-hidden="true">▸</span><span class="rep-n">${i + 1}</span><b class="rep-title">${esc(repTitle(cfg, item, i))}</b></button>
        ${actions(i)}</div>
      <div class="rep-fields">${cfg.fields.map(f => subFieldHtml(f, item ? item[f.k] : "")).join("")}</div>
    </div>`;
  }).join("");
  box.innerHTML = `<div class="rep-list">${body || `<p class="hint">Nothing here yet.</p>`}</div>
    <button type="button" class="btn small add-btn" data-ra="add" data-rep="${id}">+ Add ${esc(cfg.noun.toLowerCase())}</button>`;
}

function commitRep(id) {
  const cfg = REPS[id];
  cfg.set(clone(cfg.work));
  markDirty();
}

function fieldHtml(f) {
  if (f.kind === "rep") {
    REPS[f.id] = f;
    f.work = clone(f.get() || []);
    const hint = f.hint ? `<small>${esc(f.hint)}</small>` : "";
    return `<div class="rep-wrap">
      <div class="rep-top"><div class="rep-label">${esc(f.label)} ${hint}</div>
        <button type="button" class="btn small ghost" data-json-toggle="${f.id}">Edit as JSON</button></div>
      <div class="rep" id="rep-${f.id}"></div>
      <div class="rep-json" id="repjson-${f.id}" hidden>
        <textarea class="mono" rows="14" spellcheck="false"></textarea>
        <div class="row-actions"><button type="button" class="btn small primary" data-json-apply="${f.id}">Apply JSON</button>
        <button type="button" class="btn small ghost" data-json-toggle="${f.id}">Back to form</button></div>
        <p class="form-msg"></p>
      </div>
    </div>`;
  }
  const i = FIELDS.push(f) - 1;
  const hint = f.hint ? ` <small>${esc(f.hint)}</small>` : "";
  const val = f.get();
  if (f.kind === "check") return `<label class="check"><input type="checkbox" data-f="${i}" ${val ? "checked" : ""}/> ${esc(f.label)}</label>`;
  if (f.kind === "area") return `<label>${esc(f.label)}${hint}<textarea data-f="${i}" rows="${f.rows || 4}">${esc(val == null ? "" : val)}</textarea></label>`;
  return `<label>${esc(f.label)}${hint}<input data-f="${i}" value="${esc(val == null ? "" : val)}"/></label>`;
}

function renderBuilder(name) {
  const host = document.querySelector(`[data-builder="${name}"]`);
  if (!host || !state) return;
  const groups = BUILDERS[name]();
  const jump = groups.length > 2 ? `<div class="jump-row">${groups.map(g => `<button class="btn ghost small" type="button" data-jump="bg-${name}-${g.id}">${esc(g.title)}</button>`).join("")}</div>` : "";
  host.innerHTML = jump + groups.map(g => `
    <div class="site-group" id="bg-${name}-${g.id}">
      ${groups.length > 1 ? `<h3>${esc(g.title)}</h3>` : ""}
      <div class="form">${g.fields.map(fieldHtml).join("")}</div>
    </div>`).join("");
  groups.forEach(g => g.fields.forEach(f => { if (f.kind === "rep") renderRep(f.id); }));
}

function renderForms() {
  FIELDS = [];
  Object.keys(BUILDERS).forEach(renderBuilder);
}

/* ----- field shortcuts ----- */
const T = (label, get, set, hint) => ({ kind: "text", label, get, set, hint });
const A = (label, get, set, hint, rows) => ({ kind: "area", label, get, set, hint, rows });
const K = (label, get, set) => ({ kind: "check", label, get, set });
const R = (id, label, noun, get, set, fields, extra) => Object.assign({ kind: "rep", id, label, noun, get, set, fields }, extra || {});
const SEC = SECTIONS.map(([v, l]) => [v, `${l} (${v})`]);

const BUILDERS = {
  site: () => {
    const S = ensure(state, "site", {}), P = ensure(state, "profile", {}), F = ensure(state, "futureResearchPlan", {});
    return [
      { id: "top", title: "Top section", fields: [
        T("Role line", () => S.role, v => S.role = v),
        T("Institution line", () => S.affiliation, v => S.affiliation = v),
        K("Show the green sliding lines under the goal title", () => S.showRotatingLines !== false, v => S.showRotatingLines = v),
        K("Show the \"Latest\" updates box (text comes from the Updates tab)", () => S.showHeroUpdates !== false, v => S.showHeroUpdates = v),
        T("Goal box title", () => S.goalLabel, v => S.goalLabel = v),
        R("rot", "Green sliding lines", "Line", () => S.rotatingWords, v => S.rotatingWords = v, null, { simple: "text", hint: "They change one after another." }),
        A("Goal text", () => S.goal, v => S.goal = v, "", 6),
        A("Headline under the goal box", () => S.headline, v => S.headline = v, "", 2)
      ]},
      { id: "links", title: "Profile links", fields: [
        R("links", "Links under the buttons", "Link", () => state.links, v => state.links = v, [
          { k: "label", label: "Label", ph: "Google Scholar" }, { k: "url", label: "URL", ph: "https://..." }])
      ]},
      { id: "snap", title: "Snapshot and numbers", fields: [
        R("snapshot", "Academic Snapshot rows", "Row", () => state.snapshot, v => state.snapshot = v, [
          { k: "label", label: "Label" }, { k: "value", label: "Value" }]),
        R("fast", "Fast Review buttons", "Button", () => state.fastReview, v => state.fastReview = v, [
          { k: "label", label: "Button text" }, { k: "target", label: "Goes to", t: "select", opts: SEC }]),
        R("metrics", "Number cards", "Card", () => state.metrics, v => state.metrics = v, [
          { k: "value", label: "Value", hint: "Automatic: {{published}} {{inPress}} {{accepted}} {{review}}" },
          { k: "label", label: "Label" }, { k: "target", label: "Goes to", t: "select", opts: SEC }], { titleKey: "label" })
      ]},
      { id: "about", title: "About Me", fields: [
        R("paras", "Paragraphs", "Paragraph", () => P.paragraphs, v => P.paragraphs = v, null, { simple: "area", rows: 4 }),
        R("cards", "Small cards", "Card", () => P.cards, v => P.cards = v, [
          { k: "title", label: "Title" }, { k: "target", label: "Goes to", t: "select", opts: SEC },
          { k: "text", label: "Text", t: "area", hint: "{{AcceptedWord}} and {{reviewClause}} fill in automatically" }]),
        R("tags", "Research tags", "Tag", () => P.tags, v => P.tags = v, null, { simple: "text" })
      ]},
      { id: "plan", title: "Future Research Plan", fields: [
        A("Opening text", () => F.lead, v => F.lead = v, "", 3),
        R("plan", "Cards", "Card", () => F.cards, v => F.cards = v, [
          { k: "title", label: "Title", wide: true }, { k: "text", label: "Text", t: "area", rows: 4 }])
      ]},
      { id: "skills", title: "Technical Skills", fields: [
        R("skills", "Skill groups", "Group", () => state.skills, v => state.skills = v, [
          { k: "title", label: "Group title" }, { k: "icon", label: "Icon", ph: "⌘" },
          { k: "items", label: "Skills", t: "csv", wide: true, hint: "Separate with commas" }])
      ]},
      { id: "edu", title: "Education", fields: [
        R("edu", "Degrees", "Degree", () => state.education, v => state.education = v, [
          { k: "degree", label: "Degree" }, { k: "period", label: "Period", ph: "Jul 2022 - Present" },
          { k: "institution", label: "Institution" }, { k: "url", label: "Institution link" },
          { k: "badge", label: "Badge", ph: "Highest Distinction" },
          { k: "items", label: "Details", t: "lines", rows: 6, hint: "One per line. <strong>Label:</strong> makes the label bold" }])
      ]},
      { id: "exp", title: "Teaching Experience", fields: [
        R("exp", "Positions", "Position", () => state.experience, v => state.experience = v, [
          { k: "title", label: "Title", wide: true }, { k: "roleLabel", label: "Short role label", ph: "Lecturer" },
          { k: "period", label: "Period", ph: "Mar 2024 - Present" },
          { k: "place", label: "Institution" }, { k: "placeUrl", label: "Institution link" },
          { k: "durationStart", label: "Start (YYYY-MM)", hint: "For the automatic duration" },
          { k: "durationEnd", label: "End (YYYY-MM or present)" },
          { k: "text", label: "Description", t: "area" },
          { k: "courseHeading", label: "Courses heading", ph: "Courses Taught" },
          { k: "responsibilityHeading", label: "Responsibilities heading" },
          { k: "courses", label: "Courses", t: "lines", hint: "One per line" },
          { k: "responsibilities", label: "Responsibilities", t: "lines", hint: "One per line" }])
      ]},
      { id: "honors", title: "Honors and Service", fields: [
        R("honors", "Boxes", "Box",
          () => Object.entries(state.honors || {}).map(([title, items]) => ({ title, items })),
          v => { const o = {}; v.forEach(b => { const t = b.title || "Untitled"; o[t] = (o[t] || []).concat(b.items || []); }); state.honors = o; },
          [{ k: "title", label: "Box title", wide: true }, { k: "items", label: "Items", t: "lines", rows: 6, hint: "One per line" }])
      ]},
      { id: "contact", title: "Contact", fields: [
        A("Text under the Contact heading", () => ensure(state, "contact", {}).lead, v => ensure(state, "contact", {}).lead = v, "", 2),
        R("contact", "Contact cards", "Card", () => ensure(state, "contact", {}).cards, v => ensure(state, "contact", {}).cards = v, [
          { k: "title", label: "Title", ph: "Email for Contact" }, { k: "icon", label: "Short icon text", ph: "E" },
          { k: "text", label: "Second line", ph: "shovonmandal@gmail.com" },
          { k: "url", label: "Link", ph: "mailto:... or https://..." }])
      ]},
      { id: "refs", title: "References", fields: [
        T("Note above the references", () => state.referencesNote, v => state.referencesNote = v),
        R("refs", "References", "Reference", () => state.references, v => state.references = v, [
          { k: "name", label: "Name" }, { k: "role", label: "Role" }, { k: "affiliation", label: "Affiliation", wide: true },
          { k: "relation", label: "Relation", t: "area" },
          { k: "links", label: "Links", t: "pairs", rows: 2, hint: "One per line: Label | URL" }])
      ]}
    ];
  },
  news: () => {
    const S = ensure(state, "site", {});
    return [{ id: "n", title: "Updates", fields: [
      K("Show the \"Latest\" sliding box in the top section of the website", () => S.showHeroUpdates !== false, v => S.showHeroUpdates = v),
      R("news", "Updates, newest first", "Update", () => state.news, v => state.news = v, [
        { k: "date", label: "Date", ph: "Oct 2026" }, { k: "text", label: "Text", t: "area", rows: 2 }], { titleKey: "text" })
    ]}];
  },
  cv: () => {
    const cv = ensure(state, "cv", {});
    return [
      { id: "head", title: "Header", fields: [
        T("Header line", () => cv.headerLine, v => cv.headerLine = v),
        T("Email", () => cv.email, v => cv.email = v),
        R("cvlinks", "Header links", "Link", () => cv.links, v => cv.links = v, [{ k: "label", label: "Label" }, { k: "url", label: "URL" }])
      ]},
      { id: "prof", title: "Profile", fields: [
        A("Research profile", () => cv.researchProfile, v => cv.researchProfile = v, "", 6),
        A("Research interests", () => cv.researchInterests, v => cv.researchInterests = v, "", 3),
        K("Show the \"Manuscripts Under Review\" section in the CV", () => !!cv.showUnderReview, v => cv.showUnderReview = v)
      ]},
      { id: "edu", title: "Education", fields: [
        R("cvedu", "Degrees", "Degree", () => cv.education, v => cv.education = v, [
          { k: "title", label: "Degree", wide: true }, { k: "period", label: "Period" }, { k: "url", label: "Link" },
          { k: "institution", label: "Institution (italic)", wide: true },
          { k: "lines", label: "Lines", t: "lines", rows: 4, hint: "One per line. **bold**, [text](link)" }])
      ]},
      { id: "exp", title: "Teaching Experience", fields: [
        R("cvexp", "Positions", "Position", () => cv.experience, v => cv.experience = v, [
          { k: "title", label: "Title" }, { k: "period", label: "Period" },
          { k: "place", label: "Institution (italic)" }, { k: "url", label: "Link" },
          { k: "bullets", label: "Bullet points", t: "lines", hint: "One per line" },
          { k: "lines", label: "Extra lines", t: "lines", hint: "e.g. **Courses Taught:** ..." }])
      ]},
      { id: "skills", title: "Skills and Honors", fields: [
        R("cvskills", "Technical skills", "Line", () => cv.skills, v => cv.skills = v, null, { simple: "text", hint: "e.g. **Programming:** Python, Java" }),
        R("cvhonors", "Honors, scholarships and service", "Item", () => cv.honors, v => cv.honors = v, null, { simple: "text", hint: "Printed in two columns" }),
        T("Closing note", () => cv.footerNote, v => cv.footerNote = v)
      ]}
    ];
  },
  coauthors: () => {
    const S = ensure(state, "site", {});
    return [{ id: "co", title: "Co-authors", fields: [
      T("Your name in author lists", () => S.authorName || "S. Mandal", v => S.authorName = v.trim() || "S. Mandal", "Printed in bold"),
      R("co", "Co-author links", "Co-author",
        () => Object.entries(state.coauthors || {}).map(([name, url]) => ({ name, url })),
        v => { const o = {}; v.forEach(x => { if (x.name) o[x.name.trim()] = x.url || ""; }); state.coauthors = o; },
        [{ k: "name", label: "Name exactly as in author lists", ph: "A. Ghosh" }, { k: "url", label: "Google Scholar link" }])
    ]}];
  }
};

/* ----- builder events ----- */
document.addEventListener("input", e => {
  const t = e.target;
  if (t.dataset.f !== undefined && t.closest(".builder")) {
    const f = FIELDS[+t.dataset.f];
    f.set(t.type === "checkbox" ? t.checked : t.value);
    markDirty();
    return;
  }
  const item = t.closest(".rep-item");
  if (item && t.dataset.k !== undefined) {
    const cfg = REPS[item.dataset.rep], i = +item.dataset.i;
    if (cfg.simple) cfg.work[i] = t.value;
    else {
      cfg.work[i] = cfg.work[i] || {};
      cfg.work[i][t.dataset.k] = fromUi(t.dataset.t, t.value, t.checked);
    }
    const tt = item.querySelector(".rep-title");
    if (tt) tt.textContent = repTitle(cfg, cfg.work[i], i);
    commitRep(item.dataset.rep);
  }
});
document.addEventListener("change", e => {
  const t = e.target;
  if (t.tagName === "SELECT" && t.closest(".rep-item")) t.dispatchEvent(new Event("input", { bubbles: true }));
});
document.addEventListener("click", e => {
  const jb = e.target.closest("[data-jump]");
  if (jb) { document.getElementById(jb.dataset.jump).scrollIntoView({ behavior: "smooth", block: "start" }); return; }

  const ra = e.target.closest("[data-ra]");
  if (ra) {
    const id = ra.dataset.rep || ra.closest(".rep-item").dataset.rep;
    const cfg = REPS[id];
    const i = ra.closest(".rep-item") ? +ra.closest(".rep-item").dataset.i : -1;
    const w = cfg.work;
    if (ra.dataset.ra === "toggle") {
      cfg.open = cfg.open || new Set();
      cfg.open.has(i) ? cfg.open.delete(i) : cfg.open.add(i);
      ra.closest(".rep-item").classList.toggle("open");
      ra.setAttribute("aria-expanded", cfg.open.has(i));
      return;
    }
    cfg.open = cfg.open || new Set();
    const wasOpen = cfg.open.has(i);
    if (ra.dataset.ra === "add") { cfg.open.add(w.length); }
    if (ra.dataset.ra === "up" && i > 0) { cfg.open.delete(i); if (wasOpen) cfg.open.add(i - 1); }
    if (ra.dataset.ra === "down" && i < w.length - 1) { cfg.open.delete(i); if (wasOpen) cfg.open.add(i + 1); }
    if (ra.dataset.ra === "del") cfg.open = new Set();
    if (ra.dataset.ra === "add") w.push(cfg.simple ? "" : Object.fromEntries(cfg.fields.map(f => [f.k, ["lines", "csv", "pairs"].includes(f.t) ? [] : f.t === "check" ? false : ""])));
    if (ra.dataset.ra === "up" && i > 0) [w[i - 1], w[i]] = [w[i], w[i - 1]];
    if (ra.dataset.ra === "down" && i < w.length - 1) [w[i + 1], w[i]] = [w[i], w[i + 1]];
    if (ra.dataset.ra === "del") {
      if (!confirm(`Remove "${repTitle(cfg, w[i], i)}"?`)) return;
      w.splice(i, 1);
    }
    renderRep(id);
    commitRep(id);
    if (ra.dataset.ra === "add") {
      const items = document.querySelectorAll(`#rep-${id} .rep-item`);
      const last = items[items.length - 1];
      if (last) { const inp = last.querySelector("input,textarea,select"); if (inp) inp.focus(); }
    }
    return;
  }

  const jt = e.target.closest("[data-json-toggle]");
  if (jt) {
    const id = jt.dataset.jsonToggle, box = document.getElementById("repjson-" + id), form = document.getElementById("rep-" + id);
    const toJson = box.hidden;
    if (toJson) box.querySelector("textarea").value = JSON.stringify(REPS[id].work, null, 2);
    box.hidden = !toJson; form.hidden = toJson;
    box.querySelector(".form-msg").textContent = "";
    return;
  }
  const ja = e.target.closest("[data-json-apply]");
  if (ja) {
    const id = ja.dataset.jsonApply, box = document.getElementById("repjson-" + id), msg = box.querySelector(".form-msg");
    try {
      const v = JSON.parse(box.querySelector("textarea").value);
      if (!Array.isArray(v)) throw new Error("it must be a list: [ ... ]");
      REPS[id].work = v;
      commitRep(id);
      renderRep(id);
      box.hidden = true; document.getElementById("rep-" + id).hidden = false;
      toast("Applied. Click Publish changes to put it online.");
    } catch (err) {
      msg.textContent = "Not applied: " + err.message;
      msg.classList.add("err");
    }
  }
});

/* ---------------- new website text from the repository ----------------
   When a new version of data/site-data.json is pushed to GitHub, its text
   can be merged in WITHOUT touching papers, projects, co-authors or CV details. */
const KEEP_KEYS = ["publications", "projects", "coauthors", "cv", "meta"];
async function checkRepoText() {
  let repo;
  try { repo = await fetchJsonFile(); } catch (e) { return; }
  const repoV = (repo.meta && repo.meta.contentVersion) || 0;
  const liveV = (state.meta && state.meta.contentVersion) || 0;
  if (repoV <= liveV) return;
  const b = $("#banner");
  b.innerHTML = `New website text is available from GitHub (version ${repoV}). Your papers, co-authors and CV details stay exactly as they are. Existing projects only get the new description wording; projects you added stay as they are. <button class="btn small primary" id="btn-merge" type="button">Apply new text</button>`;
  b.classList.remove("ok");
  b.hidden = false;
  $("#btn-merge").addEventListener("click", () => {
    const authorName = state.site && state.site.authorName;
    /* if the live data already has an earlier text version, apply only the sections changed since then */
    let only = null;
    const changes = (repo.meta && repo.meta.changes) || {};
    if (liveV >= 3) {
      only = new Set();
      Object.keys(changes).forEach(v => { if (+v > liveV) changes[v].forEach(k => only.add(k)); });
    }
    Object.keys(repo).forEach(k => {
      if (KEEP_KEYS.includes(k)) return;
      if (only && !only.has(k)) return;
      if (k === "news" && Array.isArray(state.news) && state.news.length) return;
      state[k] = repo[k];
    });
    if (authorName) state.site.authorName = authorName;
    /* new wording for projects that came from the repository (matched by id); new projects you added are untouched */
    if (!only) (repo.projects || []).forEach(rp => {
      const lp = (state.projects || []).find(x => x.id && x.id === rp.id);
      if (lp) ["title", "description", "highlights", "tools"].forEach(f => { if (rp[f] !== undefined) lp[f] = rp[f]; });
    });
    state.meta = Object.assign({}, state.meta, { contentVersion: repoV });
    renderAll();
    markDirty();
    showBanner("New text applied in the editor. Check it with View website after publishing. Click <b>Publish changes</b> to make it live.", true);
  });
}

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
