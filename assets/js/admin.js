
const ADMIN_PASSCODE = "shovon-admin-2026";

const loginPanel = document.getElementById("login-panel");
const editorPanel = document.getElementById("editor-panel");
const passcode = document.getElementById("passcode");
const editor = document.getElementById("json-editor");
const statusBox = document.getElementById("editor-status");

let siteData = null;

function setStatus(message, good = true) {
  statusBox.textContent = message;
  statusBox.style.color = good ? "#155724" : "#b00020";
}

async function loadData() {
  const response = await fetch("data/site-data.json", { cache: "no-cache" });
  if (!response.ok) throw new Error("Could not load data/site-data.json");
  siteData = await response.json();
  editor.value = JSON.stringify(siteData, null, 2);
}

function currentJson() {
  return JSON.parse(editor.value);
}

function writeJson(data) {
  siteData = data;
  editor.value = JSON.stringify(siteData, null, 2);
}

function download(filename, text) {
  const blob = new Blob([text], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

document.getElementById("login-btn").addEventListener("click", async () => {
  if (passcode.value !== ADMIN_PASSCODE) {
    alert("Incorrect passcode.");
    return;
  }
  loginPanel.classList.add("hidden");
  editorPanel.classList.remove("hidden");
  try {
    await loadData();
    setStatus("Loaded data/site-data.json successfully.");
  } catch (error) {
    setStatus(error.message, false);
  }
});

document.getElementById("validate-json").addEventListener("click", () => {
  try {
    currentJson();
    setStatus("JSON is valid.");
  } catch (error) {
    setStatus("Invalid JSON: " + error.message, false);
  }
});

document.getElementById("download-json").addEventListener("click", () => {
  try {
    const data = currentJson();
    download("site-data.json", JSON.stringify(data, null, 2));
    setStatus("Downloaded updated site-data.json. Replace data/site-data.json in your GitHub repository.");
  } catch (error) {
    setStatus("Invalid JSON: " + error.message, false);
  }
});

document.getElementById("add-publication").addEventListener("click", () => {
  try {
    const data = currentJson();
    const doi = document.getElementById("pub-doi").value.trim();
    const title = document.getElementById("pub-title").value.trim();
    if (!title) {
      setStatus("Paper title is required.", false);
      return;
    }
    data.publications.unshift({
      authors: document.getElementById("pub-authors").value.trim(),
      year: document.getElementById("pub-year").value.trim(),
      title,
      venue: document.getElementById("pub-venue").value.trim(),
      status: document.getElementById("pub-status").value.trim() || "Published",
      doi,
      url: doi ? `https://doi.org/${doi}` : "",
      category: "Core Research",
      featured: false
    });
    writeJson(data);
    setStatus("Publication added. Download and replace site-data.json after final edits.");
  } catch (error) {
    setStatus("Could not add publication: " + error.message, false);
  }
});

document.getElementById("add-project").addEventListener("click", () => {
  try {
    const data = currentJson();
    const title = document.getElementById("project-title").value.trim();
    if (!title) {
      setStatus("Project title is required.", false);
      return;
    }
    const tools = document.getElementById("project-tools").value.split(",").map(x => x.trim()).filter(Boolean);
    data.projects.unshift({
      title,
      type: document.getElementById("project-type").value.trim() || "Project",
      url: document.getElementById("project-url").value.trim(),
      category: "Updated",
      description: document.getElementById("project-description").value.trim(),
      highlights: ["Add project highlights here."],
      tools
    });
    writeJson(data);
    setStatus("Project added. Download and replace site-data.json after final edits.");
  } catch (error) {
    setStatus("Could not add project: " + error.message, false);
  }
});
