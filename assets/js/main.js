const $ = (id) => document.getElementById(id);

function create(tag, className, html) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (html) el.innerHTML = html;
  return el;
}

function safeArray(value) {
  return Array.isArray(value) ? value : [];
}

async function loadSite() {
  const response = await fetch("data/site-data.json");
  const data = await response.json();

  document.title = `${data.site.name || "Shovon Mandal"} | Academic Portfolio`;

  $("hero-goal").textContent = data.site.graduateGoal || data.site.aspiration || "";
  $("profile-name").textContent = data.site.name || "Shovon Mandal";
  $("profile-title").textContent = `${data.site.title || ""} · ${data.site.affiliation || ""}`;
  $("year").textContent = new Date().getFullYear();

  renderProfileLinks(data.links);
  renderSnapshot(data.academicSnapshot);
  renderHomeEvidence(data.homeEvidence);
  renderMetrics(data.metrics);
  renderGraduateFit(data.graduateFit);
  renderSupervisorReasons(data.supervisorReasons);
  renderAbout(data.about);
  renderTags(data.researchInterests);
  renderPublications(data.publications);
  renderProjects(data.projects);
  renderAutomation(data.automationSystems);
  renderTeaching(data.teaching);
  renderEducation(data.education);
  renderSkills(data.skills);
  renderService(data.academicService);
  renderHonors(data.honors);
  setupEmailForm(data.site.email || "shovonmandal@gmail.com");
  setupReveal();
}

function renderProfileLinks(links = {}) {
  const box = $("profile-links");
  box.innerHTML = "";
  Object.entries(links).forEach(([label, url]) => {
    const a = create("a", "", label);
    a.href = url;
    a.target = label === "Email" ? "_self" : "_blank";
    a.rel = "noopener";
    box.appendChild(a);
  });
}

function renderSnapshot(items = []) {
  const box = $("academic-snapshot");
  box.innerHTML = "";
  safeArray(items).forEach(item => {
    box.appendChild(create("div", "snap-item", `<span>${item.label}</span><strong>${item.value}</strong>`));
  });
}

function renderHomeEvidence(items = []) {
  const box = $("home-evidence");
  box.innerHTML = "";
  safeArray(items).forEach(item => {
    box.appendChild(create("article", "evidence-card", `<span>${item.label}</span><h3>${item.title}</h3><p>${item.text}</p>`));
  });
}

function renderMetrics(metrics = []) {
  const box = $("metrics");
  box.innerHTML = "";
  safeArray(metrics).forEach(item => {
    box.appendChild(create("article", "metric-card", `<strong>${item.value}</strong><span>${item.label}</span>`));
  });
}

function renderGraduateFit(items = []) {
  const box = $("graduate-fit-list");
  box.innerHTML = "";
  safeArray(items).forEach(item => {
    box.appendChild(create("article", "fit-card", `<span>${item.label}</span><h3>${item.title}</h3><p>${item.text}</p>`));
  });
}

function renderSupervisorReasons(items = []) {
  const box = $("supervisor-reasons-list");
  box.innerHTML = "";
  safeArray(items).forEach((item, index) => {
    box.appendChild(create("article", "reason-card", `<b>${String(index + 1).padStart(2, "0")}</b><h3>${item.title}</h3><p>${item.text}</p>`));
  });
}

function renderAbout(items = []) {
  const box = $("about-list");
  box.innerHTML = "";
  safeArray(items).forEach(text => box.appendChild(create("p", "", text)));
}

function renderTags(items = []) {
  const box = $("research-tags");
  box.innerHTML = "";
  safeArray(items).forEach(text => box.appendChild(create("span", "", text)));
}

function renderPublications(items = []) {
  const box = $("publication-list");
  box.innerHTML = "";
  safeArray(items).forEach((pub, index) => {
    const doi = pub.doi ? `<a href="${pub.doi.startsWith("http") ? pub.doi : "https://doi.org/" + pub.doi}" target="_blank" rel="noopener">DOI / Link</a>` : "";
    const status = pub.status ? `<span>${pub.status}</span>` : "";
    box.appendChild(create("article", "publication-card", `
      <div class="pub-index">${String(index + 1).padStart(2, "0")}</div>
      <div>
        <h3>${pub.title || ""}</h3>
        <p>${pub.authors || ""}</p>
        <small>${pub.venue || ""} ${pub.year ? "· " + pub.year : ""}</small>
        <div class="pub-links">${status}${doi}</div>
      </div>
    `));
  });
}

function renderProjects(items = []) {
  const box = $("project-list");
  box.innerHTML = "";
  safeArray(items).forEach(project => {
    const link = project.url ? `<a href="${project.url}" target="_blank" rel="noopener">View Repository</a>` : "";
    const tools = safeArray(project.tools).map(t => `<span>${t}</span>`).join("");
    const highlights = safeArray(project.highlights).slice(0, 3).map(h => `<li>${h}</li>`).join("");
    box.appendChild(create("article", "project-card", `
      <div class="project-top"><span>${project.category || project.type || "Project"}</span>${link}</div>
      <h3>${project.title || ""}</h3>
      <p>${project.description || ""}</p>
      ${highlights ? `<ul>${highlights}</ul>` : ""}
      <div class="tool-row">${tools}</div>
    `));
  });
}

function renderAutomation(items = []) {
  const box = $("automation-list");
  box.innerHTML = "";
  safeArray(items).forEach(item => {
    const points = safeArray(item.points).slice(0, 3).map(p => `<li>${p}</li>`).join("");
    box.appendChild(create("article", "automation-card", `
      <span>${item.category || "Automation"}</span>
      <h3>${item.title || ""}</h3>
      <p>${item.description || ""}</p>
      ${points ? `<ul>${points}</ul>` : ""}
    `));
  });
}

function renderTeaching(items = []) {
  const box = $("teaching-list");
  box.innerHTML = "";
  safeArray(items).forEach(item => {
    const courses = safeArray(item.courses).map(c => `<span>${c}</span>`).join("");
    const institution = item.institutionUrl ? `<a href="${item.institutionUrl}" target="_blank" rel="noopener">${item.institution}</a>` : item.institution;
    box.appendChild(create("article", "timeline-card", `
      <div class="time">${item.period || ""}</div>
      <div>
        <h3>${item.role || ""}</h3>
        <p class="institution">${institution || ""}</p>
        <p>${item.description || ""}</p>
        <div class="course-row">${courses}</div>
      </div>
    `));
  });
}

function renderEducation(items = []) {
  const box = $("education-list");
  box.innerHTML = "";
  safeArray(items).forEach(item => {
    const institution = item.institutionUrl ? `<a href="${item.institutionUrl}" target="_blank" rel="noopener">${item.institution}</a>` : item.institution;
    const details = safeArray(item.details).map(d => `<li>${d}</li>`).join("");
    box.appendChild(create("article", "timeline-card", `
      <div class="time">${item.period || ""}</div>
      <div>
        <h3>${item.degree || ""}</h3>
        <p class="institution">${institution || ""}</p>
        ${item.thesis ? `<p><strong>Thesis:</strong> ${item.thesis}</p>` : ""}
        ${details ? `<ul>${details}</ul>` : ""}
      </div>
    `));
  });
}

function renderSkills(groups = {}) {
  const box = $("skills-list");
  box.innerHTML = "";
  Object.entries(groups || {}).forEach(([group, skills]) => {
    const list = safeArray(skills).map(s => `<span>${s}</span>`).join("");
    box.appendChild(create("article", "skill-card", `<h3>${group}</h3><div>${list}</div>`));
  });
}

function renderService(items = []) {
  const box = $("academic-service-list");
  box.innerHTML = "";
  safeArray(items).forEach(item => {
    box.appendChild(create("article", "service-card", `<span>${item.organization || ""}</span><h3>${item.title || ""}</h3><p>${item.description || ""}</p>`));
  });
}

function renderHonors(items = []) {
  const box = $("honors-list");
  box.innerHTML = "";
  safeArray(items).forEach(item => {
    if (typeof item === "string") {
      box.appendChild(create("article", "honor-card", `<h3>${item}</h3>`));
    } else {
      box.appendChild(create("article", "honor-card", `<h3>${item.title || ""}</h3><p>${item.description || ""}</p>`));
    }
  });
}

function setupEmailForm(email) {
  const btn = $("email-form-btn");
  btn.addEventListener("click", () => {
    const name = $("sender-name").value.trim();
    const senderEmail = $("sender-email").value.trim();
    const message = $("sender-message").value.trim();
    const subject = encodeURIComponent("Academic inquiry from portfolio website");
    const body = encodeURIComponent(`Dear Shovon Mandal,\n\n${message || "I visited your academic portfolio and would like to connect regarding academic/research opportunities."}\n\nBest regards,\n${name || ""}\n${senderEmail || ""}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  });
}

function setupReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

loadSite().catch(err => console.error(err));
