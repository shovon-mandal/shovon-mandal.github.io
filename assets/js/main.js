
/* V104: early no-language-bar spacing normalization */
(function(){
  if (document.body) {
    document.body.classList.add("no-language-bar");
    document.body.classList.remove("language-row-visible", "language-row-scrolled");
  } else {
    document.addEventListener("DOMContentLoaded", function(){
      document.body.classList.add("no-language-bar");
      document.body.classList.remove("language-row-visible", "language-row-scrolled");
    });
  }
})();
const FALLBACK_DATA = {"site":{"name":"Shovon Mandal","firstName":"Shovon","lastName":"Mandal","title":"Academic Portfolio","role":"Lecturer, Department of Computer Science and Engineering","affiliation":"Northern University of Business and Technology Khulna, Bangladesh","email":"shovonmandal@gmail.com","cv":"assets/docs/Shovon_Mandal_CV.pdf","photo":"assets/img/profile.jpg","goalLabel":"Academic Research Goal","goal":"My academic goal is to pursue advanced graduate study (M.Sc./Ph.D.) in secure distributed systems, blockchain-based payment security, contactless transaction security, and hardware-oriented computing, while contributing to rigorous research, teaching support, technical implementation, and scholarly collaboration. My profile combines peer-reviewed publications, secure payment prototypes, undergraduate teaching experience, academic automation systems, and hardware-oriented project engagement.","headline":"Secure Distributed Systems · Payment Security · Hardware-Oriented Computing · Contactless Transaction Security · Research Implementation","rotatingWords":["M.Sc./Ph.D. Higher Study Goal","Secure Distributed Systems Research","Payment Security and Contactless Transactions","Hardware-Oriented Computing Implementation"]},"links":[{"label":"Faculty Profile","url":"https://nubtkhulna.ac.bd/sd/275/Shovon%20Mandal"},{"label":"Google Scholar","url":"https://scholar.google.com/citations?user=h6Imiq4AAAAJ&hl=en"},{"label":"ResearchGate","url":"https://www.researchgate.net/profile/Shovon-Mandal-2"},{"label":"ORCID","url":"https://orcid.org/0009-0003-6302-9484"},{"label":"GitHub","url":"https://github.com/shovon-mandal"},{"label":"LinkedIn","url":"https://www.linkedin.com/in/shovonmandal/"},{"label":"Email","url":"mailto:shovonmandal@gmail.com"}],"fastReview":[{"label":"Research Fit","target":"#research-fit"},{"label":"Publications","target":"#publications"},{"label":"Projects","target":"#projects"},{"label":"Experience","target":"#experience"}],"snapshot":[{"label":"B.Sc. CGPA","value":"3.80 out of 4.00"},{"label":"Academic Standing","value":"Highest Distinction"},{"label":"Teaching Experience","value":"4+ Years Undergraduate Teaching"},{"label":"Higher Study Goal","value":"M.Sc./Ph.D. Research"},{"label":"Research Alignment","value":"Secure Distributed Systems · Payment Security · Hardware-Oriented Computing"},{"label":"Implementation Evidence","value":"Secure Payment Prototypes + Academic Systems"}],"metrics":[{"value":"6","label":"Research Papers","target":"#publications"},{"value":"4+","label":"Teaching Years","target":"#experience"},{"value":"4+","label":"Implementation Projects","target":"#projects"},{"value":"3+","label":"Academic Systems","target":"#systems"}],"researchFit":[{"title":"Core Research Alignment","text":"Secure distributed systems, blockchain-based payment security, contactless transaction security, and hardware-oriented computing implementation form the core direction for future M.Sc./Ph.D. study."},{"title":"Publication Evidence","text":"Six research papers across blockchain, distributed ledger systems, machine learning, and NLP demonstrate a visible research trajectory with published and accepted conference work."},{"title":"Implementation Evidence","text":"Secure payment prototypes, academic automation systems, and public GitHub repositories show the ability to move from research idea to working system and technical documentation."},{"title":"Teaching and Academic Support","text":"4+ years of undergraduate teaching experience, including university teaching and Rajshahi University-affiliated college teaching, supports readiness for teaching, lab, mentoring, and research-support roles."}],"profile":{"paragraphs":["I am a Computer Science and Engineering lecturer whose profile combines secure computing research, implementation work, and university teaching.","For a research supervisor, my strongest value is the combination of research alignment, hands-on prototype development, publication evidence, and teaching/lab readiness. I can contribute to a research group not only as a student, but also as an implementation-focused collaborator who can document, test, teach, and mentor."],"cards":[{"title":"Core Research Alignment","text":"M.Sc./Ph.D. interest in secure distributed systems, payment security, contactless transaction security, and hardware-oriented computing implementation.","target":"#research-fit"},{"title":"Publication Evidence","text":"Six research papers across blockchain, distributed ledger, AI/ML, and NLP, with published DOI-backed work and accepted/in-press IEEE conference papers.","target":"#publications"},{"title":"Implementation Ability","text":"Working research prototypes, payment system demonstrations, academic automation systems, and public GitHub repositories.","target":"#projects"},{"title":"Teaching Experience","text":"4+ years of undergraduate teaching experience, including university teaching and Rajshahi University-affiliated college teaching.","target":"#experience"}],"tags":["Secure Distributed Systems","Blockchain-Based Payment Security","Contactless Transaction Security","Digital Payment Systems","Applied Cryptography","Smart Contracts","IOTA / Distributed Ledger","Academic Automation","Hardware-Oriented Computing","Machine Learning"],"strengths":["Research alignment covers secure distributed systems, payment security, contactless transaction security, and hardware-oriented computing implementation.","Six research papers show a visible publication trajectory across security, distributed systems, machine learning, and NLP.","GitHub-backed prototypes demonstrate implementation ability, technical documentation, and working-system development.","4+ years of undergraduate teaching experience supports teaching, lab, mentoring, and academic support roles.","Academic automation projects show structured workflow thinking, reproducibility, and practical institutional problem-solving."]},"education":[{"period":"Jul 2022 – Present","degree":"M.Sc. in Computer Science and Engineering","institution":"Khulna University of Engineering & Technology","url":"https://www.kuet.ac.bd/","badge":"Defense Pending","items":["<strong>Academic Status:</strong> Defense Pending","<strong>Thesis:</strong> Blockchain Technology Based Smart E-Payment Strategy for Secure Cashless Payment","<strong>Supervisor:</strong> <a class='inline-academic-link' href='https://scholar.google.com/citations?user=w3eyrycAAAAJ&hl=en' target='_blank' rel='noopener'>Dr. Pintu Chandra Shill ↗</a>","<strong>Relevant Coursework:</strong> Principles of Cryptography; Advanced Network Security; Cloud Computing; Neural Networks"]},{"period":"Spring 2018 – Spring 2022","degree":"B.Sc. in Computer Science and Engineering","institution":"BRAC University","url":"https://www.bracu.ac.bd/","badge":"Highest Distinction","items":["<strong>CGPA:</strong> 3.80 out of 4.00","<strong>Academic Standing:</strong> Highest Distinction","<strong>Vice Chancellor's List:</strong> 5 consecutive semesters","<strong>Dean's List:</strong> 2 consecutive semesters","<strong>Thesis:</strong> Blockchain-based Micropayment System for Secured Cashless Small Payments","<strong>Supervisor:</strong> <a class='inline-academic-link' href='https://www.bracu.ac.bd/about/people/md-golam-rabiul-alam-phd' target='_blank' rel='noopener'>Md. Golam Rabiul Alam, PhD ↗</a>"]}],"publications":[{"status":"Published","filter":"published core","title":"Ensuring Security and Efficiency in Digital Payments using Blockchain with NFC","authors":"<strong class='author-me'>Mandal, S.</strong>, & Shill, P. C.","venue":"ICKECS 2024 — IEEE","year":"2024","doi":"10.1109/ICKECS61492.2024.10616703","doiUrl":"https://doi.org/10.1109/ICKECS61492.2024.10616703","type":"IEEE Conference Paper","area":"Blockchain, NFC, secure digital payment systems","role":"First author","detail":"Published IEEE conference paper with DOI; directly connected to secure cashless payment and contactless transaction security.","publisher":"IEEE / DOI available"},{"status":"Published","filter":"published core","title":"Q-learning based Automated Message Multicast in Gossip Protocol for Node Confirmation in IOTA Tangle","authors":"Keya, M., <strong class='author-me'>Mandal, S.</strong>, et al.","venue":"ICCIT 2024 — IEEE","year":"2024","doi":"10.1109/ICCIT64611.2024.11021995","doiUrl":"https://doi.org/10.1109/ICCIT64611.2024.11021995","type":"IEEE Conference Paper","area":"IOTA Tangle, distributed ledger, gossip protocol, Q-learning","role":"Co-author","detail":"Published IEEE conference paper with DOI; demonstrates distributed ledger and network protocol research exposure.","publisher":"IEEE / DOI available"},{"status":"Published","filter":"published","title":"Comparative Evaluation of Multiple CNN Architectures for Dermoscopic Skin Lesion Classification using ISIC Dataset","authors":"Ghosh, A., <strong class='author-me'>Mandal, S.</strong>, Islam, M. J., Islam, K. M., Dhar, S., & Baidya, R.","venue":"QPAIN 2026 — IEEE","year":"2026","doi":"10.1109/QPAIN69676.2026.11545903","doiUrl":"https://doi.org/10.1109/QPAIN69676.2026.11545903","type":"IEEE Conference Paper","area":"Deep learning, medical image classification, CNN architectures","role":"Co-author","detail":"Published IEEE conference paper with DOI; shows applied AI research contribution.","publisher":"IEEE / DOI available"},{"status":"Published","filter":"published","title":"A Machine Learning and DEM-Based Approach for Predicting Sea Level Rise and Assessing Coastal Risk in Bangladesh Using AI Insights","authors":"Ghosh, A., Pinki, F. T., Baidya, R., Alam, F., & <strong class='author-me'>Mandal, S.</strong>","venue":"CSNT 2026 — IEEE","year":"2026","doi":"10.1109/CSNT69054.2026.11502358","doiUrl":"https://doi.org/10.1109/CSNT69054.2026.11502358","type":"IEEE Conference Paper","area":"Machine learning, DEM-based coastal risk prediction, AI insights","role":"Co-author","detail":"Published IEEE conference paper with DOI; demonstrates interdisciplinary AI application.","publisher":"IEEE / DOI available"},{"status":"In press","filter":"accepted in press icccnt implementation arcore android learning technology","title":"Revolutionizing Academic Learning and Research with the Integration of Leap Motion and ARCore in Android","authors":"<strong class='author-me'>Mandal, S.</strong>, et al.","venue":"16th International Conference on Computing, Communication and Networking Technologies (ICCCNT 2025), IIT Indore, Madhya Pradesh, India","year":"2025","type":"Conference Paper","area":"ARCore, Leap Motion, Android, academic learning technology","role":"First author","detail":"Accepted/in-press ICCCNT 2025 conference paper; demonstrates academic technology implementation, interactive learning-system development, Android implementation, and research-to-prototype ability.","publisher":"ICCCNT 2025 / In press","conferenceUrl":"","doi":"","doiUrl":""},{"status":"In press","filter":"accepted in press icccnt nlp sentiment analysis deep learning","title":"Advancing Sentiment Analysis Through Natural Language Processing and Deep Learning","authors":"Ghosh, A., <strong class='author-me'>Mandal, S.</strong>, et al.","venue":"16th International Conference on Computing, Communication and Networking Technologies (ICCCNT 2025), IIT Indore, Madhya Pradesh, India","year":"2025","type":"Conference Paper","area":"Natural language processing, sentiment analysis, deep learning","role":"Co-author","detail":"Accepted/in-press ICCCNT 2025 conference paper; demonstrates AI/NLP research involvement, deep-learning-based sentiment-analysis work, and collaborative publication experience.","publisher":"ICCCNT 2025 / In press","conferenceUrl":"","doi":"","doiUrl":""}],"projects":[{"title":"Blockchain and NFC-Based Secure Cashless Payment Prototype","type":"Thesis-Supporting Research Implementation","category":"Secure Payments · Contactless Interaction · Hardware Integration","filter":"research hardware blockchain connected device secure payment","description":"Research prototype connecting blockchain-based verification with contactless transaction interaction and hardware-supported payment demonstration.","tools":["Blockchain","NFC Module","Arduino","Python","Secure payment flow","Prototype documentation"],"highlights":["Connects secure payment research with implementation-oriented prototyping.","Demonstrates contactless cashless transaction interaction at the hardware level.","Supports thesis direction in secure digital payment systems — related to ICKECS 2024 paper."],"url":"https://github.com/shovon-mandal/NFC"},{"title":"IOTA-Based Payment Website and Decentralized Transaction Demonstration","type":"Research Prototype","category":"Distributed Ledger · Web Transaction","filter":"research distributed ledger web transaction","description":"Web prototype for distributed-ledger-supported payment and decentralized transaction flow demonstration, with frontend and backend components built for experimental validation.","tools":["IOTA / Distributed Ledger","JavaScript","Web transaction flow","Payment demonstration"],"highlights":["Demonstrates distributed ledger-based payment flow and decentralized transaction concepts.","Shows web-facing implementation of IOTA Tangle integration.","Related to ICCIT 2024 IEEE paper on Q-learning and Gossip Protocol."],"url":"https://github.com/shovon-mandal/IOTA-Website"},{"title":"Academic Routine Management System — Google Sheets and Apps Script","type":"Academic Automation","category":"Google Apps Script · Google Sheets · Academic Workflow","filter":"automation apps script google sheets academic","description":"Google Sheets and Apps Script system for course offering, faculty/section routine retrieval, protected views, and PDF generation.","tools":["Google Apps Script","Google Sheets","Protected views","PDF generation","Routine retrieval"],"highlights":["Improves routine retrieval and academic workflow clarity.","Supports institutional record organization.","Demonstrates automation ability beyond classroom programming."],"url":"https://github.com/shovon-mandal/academic-routine-management-appscript"},{"title":"Python-Based Discord Server Management Bot for Academic Communication","type":"Academic Communication Automation","category":"Python · Discord Bot · Role Management","filter":"automation python discord bot communication","description":"Python bot for student verification, role management, announcements, reminders, and controlled academic communication.","tools":["Python","Discord Bot API","Role automation","Student verification","Reminder workflow"],"highlights":["Applies automation to student verification and academic communication.","Supports structured digital classroom community management.","Demonstrates practical Python automation beyond coursework."],"url":"https://github.com/shovon-mandal/academic-discord-management-bot"}],"systems":[{"title":"Class Routine Automation","text":"Structured course and section routine management with protected views and clean retrieval."},{"title":"Assessment Workflow Support","text":"Marking, record organization, and academic evaluation support using structured digital tools."},{"title":"Academic Communication Bot","text":"Student verification, role management, announcements, and controlled academic communication."},{"title":"Adaptive Technical Practice","text":"Ability to learn new tools and apply them to research, teaching, and institutional workflow problems."}],"experience":[{"period":"Mar 2024 – Present","title":"Lecturer, Department of Computer Science and Engineering","place":"Northern University of Business and Technology Khulna, Bangladesh","roleLabel":"Lecturer","roleClass":"current-university-teaching","text":"Current university teaching role covering undergraduate CSE theory and laboratory teaching, course material preparation, student assessment, mentoring, and student research/project supervision.","courseHeading":"Courses Taught","courses":["Computer Architecture","Digital Logic Design","Object-Oriented Programming with Java","Technical Writing","Linear Programming and Combinatorial Optimization"],"responsibilityHeading":"Teaching, Assessment, and Supervision","responsibilities":["Theory lecture delivery","Lab work and practical class support","Question and assessment preparation","Answer-script and assignment evaluation","Student mentoring","Student research and project supervision"],"placeUrl":"https://nubtkhulna.ac.bd/","durationStart":"2024-03","durationEnd":"present","durationLabel":"Duration"},{"period":"Jul 2022 – Jun 2024","title":"Lecturer (Adjunct), Department of Computer Science and Engineering","place":"Imperial College of Engineering, Khulna — Affiliated with Rajshahi University","roleLabel":"Adjunct Lecturer","roleClass":"rajshahi-affiliated","text":"Two years of undergraduate teaching experience at Imperial College of Engineering, Khulna, affiliated with Rajshahi University. Responsibilities included CSE theory lecture support, lab work, course assistance, assessment support, and student mentoring.","courseHeading":"Courses Taught","courses":["Database Management Systems","Computer Peripherals and Interfacing","Computer Architecture and Organization","Computer Graphics","Web Engineering","Microprocessor and Microcontrollers"],"responsibilityHeading":"Instructional Responsibilities","responsibilities":["Theory class instruction","Lab work and practical session support","Assessment preparation","Student performance evaluation","Project guidance","Academic support"],"placeUrl":"https://www.imperial.edu.bd/","durationStart":"2022-07","durationEnd":"2024-06","durationLabel":"Duration"},{"period":"Jul 2023 – Dec 2023","title":"Teaching Assistant, Department of Computer Science and Engineering","place":"Khulna University of Engineering & Technology","roleLabel":"Teaching Assistant","roleClass":"role-ta","text":"Assisted course teachers with laboratory sessions, assignment checking, evaluation support, academic record preparation, student guidance, and course-related instructional activities.","courseHeading":"Courses Assisted","courses":["Embedded Systems","Electronic Devices and Circuits"],"responsibilityHeading":"Teaching Assistant Support","responsibilities":["Assisted course teachers","Supported laboratory sessions","Checked assignments","Helped with evaluation","Prepared academic records","Guided students during course activities"],"placeUrl":"https://www.kuet.ac.bd/","durationStart":"2023-07","durationEnd":"2023-12","durationLabel":"Duration"},{"period":"Feb 2022 – Apr 2022","title":"Student Tutor, Department of Computer Science and Engineering","place":"BRAC University","roleLabel":"Student Tutor","roleClass":"role-tutor","text":"Helped students understand course materials, supported problem-solving practice, assisted the course instructor with assignment checking, and provided academic support during tutorials.","courseHeading":"Tutorial Course","courses":["Electronic Devices and Circuits"],"responsibilityHeading":"Student Tutor Support","responsibilities":["Helped students understand course topics","Supported tutorial problem solving","Assisted the course instructor","Checked assignments","Provided student academic support"],"placeUrl":"https://www.bracu.ac.bd/","durationStart":"2022-02","durationEnd":"2022-04","durationLabel":"Duration"}],"skills":[{"title":"Programming and Computational Tools","icon":"⌘","items":["Python","Java","C","MATLAB","MIPS Assembly","JavaScript"]},{"title":"Security and Distributed Systems","icon":"◈","items":["Secure distributed systems","Blockchain-based payment security","Contactless transaction security","Cryptography fundamentals","Network security fundamentals","Secure cashless payment workflows"]},{"title":"Web, Database, and Application Development","icon":"▣","items":["HTML / CSS / JavaScript","PHP / Laravel","MySQL","Android Studio"]},{"title":"Academic Automation and Workflow Systems","icon":"◆","items":["Google Apps Script","Google Sheets automation","Class routine management","Protected academic views","PDF generation workflow","Assessment and marking support","Academic communication automation"]},{"title":"Hardware and Embedded Practice","icon":"▧","items":["Arduino prototyping","Contactless / RFID module practice","Embedded systems","Hardware interfacing","Digital electronics"]},{"title":"Research, Teaching, and Mentoring","icon":"✦","items":["Literature review","Prototype development","Technical documentation","Research implementation","Theory lecture support","Lab work support","Student mentoring"]}],"repositorySkills":[{"title":"Secure Payment Prototype Evidence","icon":"◈","tags":["Blockchain payment logic","NFC module integration","Secure transaction flow","Hardware interfacing","Prototype documentation"]},{"title":"Distributed Payment Demonstration","icon":"▣","tags":["Distributed ledger concept","Payment demonstration","Web transaction flow","Decentralized system practice"]},{"title":"Academic Workflow Automation","icon":"◆","tags":["Google Apps Script","Google Sheets automation","Scheduling logic","Protected views","PDF workflow"]},{"title":"Academic Communication Automation","icon":"✦","tags":["Python automation","Role management","Student verification","Reminder workflow","Access control"]}],"honors":{"Honors and Scholarships":["Highest Distinction — BRAC University","Vice Chancellor's List — BRAC University (5 consecutive semesters)","Dean's List — BRAC University (2 consecutive semesters)","Merit-based Scholarship — BRAC University","Merit-based Scholarship — Junior School Certificate, Jashore Board"],"Leadership and Service":["Judge, Project Showcasing — CSE Fest 2025","Executive Member — BRAC University Computer Club (2018–2020)","Executive Member — Robotics Club of BRAC University (2018–2020)","Executive Member — BRACU Mongol Tori, Next Generation Mars Rover Team 4.0 (2019–2020)"]}};

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
let DATA = FALLBACK_DATA;
let rotateIndex = 0;

async function loadData() {
  try {
    const res = await fetch("data/site-data.json", { cache: "no-store" });
    if (!res.ok) throw new Error("JSON fetch failed");
    DATA = await res.json();
  } catch (err) {
    DATA = FALLBACK_DATA;
  }
}

function extAttrs(url) {
  return url && !url.startsWith("mailto:") ? ' target="_blank" rel="noopener"' : "";
}

function renderHero() {
  const s = DATA.site;
  $("#first-name").textContent = s.firstName || "Shovon";
  $("#last-name").textContent = s.lastName || "Mandal";
  $("#side-name").textContent = s.name;
  $("#hero-role").textContent = s.role;
  $("#hero-affil").textContent = s.affiliation;
  $("#goal-label").textContent = s.goalLabel;
  $("#goal-text").textContent = s.goal;
  $("#hero-headline").textContent = s.headline;
  $("#cv-btn").href = s.cv;
  $(".sb-cv").href = s.cv;
  $$("#hero-photo,.mob-brand img").forEach(img => img.src = s.photo);

  $("#profile-links").innerHTML = DATA.links.map(l => `<a href="${l.url}"${extAttrs(l.url)}>${l.label}${l.url.startsWith("mailto:") ? "" : " ↗"}</a>`).join("");
  $("#snapshot-list").innerHTML = DATA.snapshot.map(i => `<li class="${i.highlight ? "snapshot-highlight" : ""}"><span class="snap-k">${i.label}</span><span class="snap-v">${i.value}</span></li>`).join("");
  $("#fast-review").innerHTML = DATA.fastReview.map(i => `<a href="${i.target}">${i.label}</a>`).join("");
  $("#metrics").innerHTML = DATA.metrics.map(m => `<a class="m-card ${m.highlight ? "metric-highlight" : ""}" href="${m.target}"><strong>${m.value}</strong><span>${m.label}</span></a>`).join("");

  const words = s.rotatingWords || [];
  $("#goal-rotate").innerHTML = words.map((w, i) => `<span class="${i === 0 ? "active" : ""}">${w}</span>`).join("");
  if (words.length) {
    setInterval(() => {
      const spans = $$("#goal-rotate span");
      spans.forEach(x => x.classList.remove("active"));
      rotateIndex = (rotateIndex + 1) % spans.length;
      spans[rotateIndex].classList.add("active");
    }, 2600);
  }
}

function renderResearchFit() {
  $("#research-fit-list").innerHTML = DATA.researchFit.map((i, idx) => `
    <article class="fit-row"><span class="fit-n">${String(idx + 1).padStart(2, "0")}</span><div><h3>${i.title}</h3><p>${i.text}</p></div></article>
  `).join("");
}

function renderProfile() {
  $("#profile-paragraphs").innerHTML = DATA.profile.paragraphs.map(p => `<p>${p}</p>`).join("");
  $("#profile-cards").innerHTML = DATA.profile.cards.map((c, idx) => `
    <a class="ev-card" href="${c.target}"><span class="ev-n">${String(idx + 1).padStart(2, "0")}</span><h3>${c.title}</h3><p>${c.text}</p></a>
  `).join("");
  $("#profile-tags").innerHTML = DATA.profile.tags.map(t => `<span class="tag">${t}</span>`).join("");
  $("#strength-list").innerHTML = DATA.profile.strengths.map(s => `<li>${s}</li>`).join("");
}

function renderEducation() {
  $("#education-list").innerHTML = DATA.education.map((e, idx) => `
    <article class="edu-card">
      <div class="edu-top">
        <span class="edu-index">${String(idx + 1).padStart(2, "0")}</span>
        <span class="edu-period">${e.period}</span>
      </div>
      <div class="edu-body">
        <h3>${e.degree}</h3>
        <p><a class="inst" href="${e.url}" target="_blank" rel="noopener">${e.institution} ↗</a></p>
        <span class="badge-hi">${e.badge}</span>
        <ul>${e.items.map(x => `<li>${x}</li>`).join("")}</ul>
      </div>
    </article>
  `).join("");
}

function renderPublications(filter = "all") {
  const rows = DATA.publications.filter(p => filter === "all" || p.filter.toLowerCase().includes(filter.toLowerCase()));
  $("#pub-list").innerHTML = rows.map((p, index) => {
    const doiOrConference = p.doi
      ? `<p class="doi-line"><b>DOI:</b> <a href="${p.doiUrl}" target="_blank" rel="noopener">${p.doi} ↗</a></p>`
      : (p.conferenceUrl
          ? `<p class="doi-line"><b>Status:</b> <a href="${p.conferenceUrl}" target="_blank" rel="noopener">${p.conferenceUrl} ↗</a></p><p class="doi-line"><b>Status:</b> In press / DOI not assigned yet</p>`
          : `<p class="doi-line"><b>DOI:</b> In press / not assigned yet</p>`);

    return `
      <article class="pub-card full-publication-card">
        <div class="pub-topline">
          <span class="pub-number">${String(index + 1).padStart(2, "0")}</span>
          <span class="pub-badge ${p.status.includes("Published") ? "published" : "inpress"}">${p.status}</span>
        </div>
        <h3>${p.title}</h3>
        <p class="pub-authors">${p.authors}</p>
        <div class="pub-detail-grid">
          <span><b>Year</b>${p.year}</span>
          <span><b>Venue</b>${p.venue}</span>
          <span><b>Type</b>${p.type || "Conference Paper"}</span>
          <span><b>Role</b>${p.role || "Research contributor"}</span>
          <span><b>Research Area</b>${p.area || "Computer Science and Engineering"}</span>
          <span><b>Publisher / Status</b>${p.publisher || p.status}</span>
        </div>
        ${doiOrConference}
        ${p.detail ? `<p class="pub-impact">${p.detail}</p>` : ""}
      </article>
    `;
  }).join("");
}

function renderProjects(filter = "all") {
  const rows = DATA.projects.filter(p => filter === "all" || `${p.title} ${p.type} ${p.category} ${p.filter} ${p.tools.join(" ")}`.toLowerCase().includes(filter.toLowerCase()));
  $("#project-list").innerHTML = rows.map(p => `
    <article class="proj-card">
      <p class="proj-type">${p.type} · ${p.category}</p>
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <ul>${p.highlights.map(h => `<li>${h}</li>`).join("")}</ul>
      <div class="tool-row">${p.tools.map(t => `<span class="tool">${t}</span>`).join("")}</div>
      <div class="proj-foot"><a class="repo-btn" href="${p.url}" target="_blank" rel="noopener">GitHub Repository</a></div>
    </article>
  `).join("");
}

function renderSystems() {
  $("#systems-list").innerHTML = DATA.systems.map((s, idx) => `
    <article class="sys-row"><span class="sys-n">${String(idx + 1).padStart(2, "0")}</span><div><h3>${s.title}</h3><p>${s.text}</p></div></article>
  `).join("");
}

function renderExperienceSegment(title, items, type) {
  if (!items || !items.length) return "";
  return `
    <div class="experience-segment ${type}">
      <h4>${title}</h4>
      <div class="experience-tags">
        ${items.map(item => `<span>${item}</span>`).join("")}
      </div>
    </div>
  `;
}

function parseYearMonth(value) {
  if (!value || value === "present") {
    const now = new Date();
    return { year: now.getFullYear(), month: now.getMonth() + 1 };
  }
  const parts = value.split("-").map(Number);
  return { year: parts[0], month: parts[1] };
}

function formatMonthDuration(startValue, endValue) {
  if (!startValue) return "";
  const start = parseYearMonth(startValue);
  const end = parseYearMonth(endValue || "present");
  let months = (end.year - start.year) * 12 + (end.month - start.month) + 1;
  if (months < 1) months = 1;

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  const yText = years ? `${years} ${years === 1 ? "year" : "years"}` : "";
  const mText = remainingMonths ? `${remainingMonths} ${remainingMonths === 1 ? "month" : "months"}` : "";

  if (yText && mText) return `${yText} ${mText}`;
  return yText || mText;
}

function renderExperience() {
  $("#experience-list").innerHTML = DATA.experience.map(e => {
    const place = e.placeUrl
      ? `<a class="experience-place-link" href="${e.placeUrl}" target="_blank" rel="noopener">${e.place} ↗</a>`
      : `<span>${e.place}</span>`;

    const liveDuration = e.durationStart
      ? `<span class="experience-duration" title="Calculated automatically from ${e.durationStart} to ${e.durationEnd === "present" ? "the current month" : e.durationEnd}">
          <b>${e.durationLabel || "Duration"}:</b> ${formatMonthDuration(e.durationStart, e.durationEnd)}
        </span>`
      : "";

    return `
      <article class="experience-card ${e.roleClass || ""}">
        <div class="experience-head">
          <div class="experience-main-info">
            <span class="experience-role">${e.roleLabel || "Academic Role"}</span>
            <h3>${e.title}</h3>
            <p class="experience-place">${place}</p>
          </div>
          <div class="experience-time-block">
            <span class="experience-period">${e.period}</span>
            ${liveDuration}
          </div>
        </div>
        <div class="experience-body">
          <p>${e.text}</p>
          <div class="experience-segments">
            ${renderExperienceSegment(e.courseHeading || "Courses", e.courses, "courses")}
            ${renderExperienceSegment(e.responsibilityHeading || "Responsibilities", e.responsibilities, "responsibilities")}
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function renderSkills() {
  $("#skills-list").innerHTML = DATA.skills.map(group => `
    <div class="sk-card skill-card academic-skill-card">
      <div class="skill-title-row">
        <span class="skill-icon">${group.icon || "•"}</span>
        <h3>${group.title}</h3>
      </div>
      <ul>${group.items.map(i => `<li>${i}</li>`).join("")}</ul>
    </div>
  `).join("");

  $("#repository-skills").innerHTML = DATA.repositorySkills.map(r => `
    <div class="rsk-row repo-card evidence-card-static">
      <div class="evidence-title-row">
        <span class="evidence-icon">${r.icon || "•"}</span>
        <h4>${r.title}</h4>
      </div>
      <div class="rsk-tags repo-tags">${r.tags.map(t => `<span class="rsk-t repo-tag">${t}</span>`).join("")}</div>
    </div>
  `).join("");
}

function renderHonors() {
  $("#honors-list").innerHTML = Object.entries(DATA.honors).map(([title, items]) => `
    <div class="hn-box"><h3>${title}</h3><ul>${items.map(i => `<li>${i}</li>`).join("")}</ul></div>
  `).join("");
}

function setupFilters() {
  $$(".filt").forEach(btn => btn.addEventListener("click", () => {
    const scope = btn.dataset.scope;
    const filter = btn.dataset.filter;
    $$(`.filt[data-scope="${scope}"]`).forEach(b => b.classList.remove("on"));
    btn.classList.add("on");
    if (scope === "pub") renderPublications(filter);
    if (scope === "project") renderProjects(filter);
  }));
}

function setupNavigation() {
  const scrollBar = $("#scroll-bar");
  const btt = $("#btt");
  const sidebar = $("#sidebar");
  const menu = $("#menu-btn");
  const rail = $("#nav-rail");
  const navLinks = $$(".sb-nav a");
  const sections = $$("section[id]");

  function updateProgress() {
    const doc = document.documentElement;
    const pct = doc.scrollHeight > doc.clientHeight ? (doc.scrollTop / (doc.scrollHeight - doc.clientHeight)) * 100 : 0;
    scrollBar.style.width = `${pct}%`;
    btt.classList.toggle("show", window.scrollY > 700);
  }

  function moveRail(target) {
    if (!target || !rail) return;
    rail.style.opacity = ".9";
    rail.style.transform = `translateY(${target.offsetTop}px)`;
    rail.style.height = `${target.offsetHeight}px`;
  }

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(a => a.classList.remove("active"));
      const active = $(`.sb-nav a[href="#${entry.target.id}"]`);
      if (active) {
        active.classList.add("active");
        moveRail(active);
      }
    });
  }, { threshold: 0.32 });

  sections.forEach(s => obs.observe(s));
  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  btt.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  menu.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menu.setAttribute("aria-expanded", sidebar.classList.contains("open"));
  });
  navLinks.forEach(a => a.addEventListener("click", () => sidebar.classList.remove("open")));
  moveRail(navLinks[0]);
}

function setupReveal() {
  const reveal = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  }, { threshold: .10 });
  $$(".reveal").forEach(x => reveal.observe(x));
}

function setupContact() {
  $("#cform").addEventListener("submit", e => {
    e.preventDefault();
    const name = $("#c-name").value.trim();
    const email = $("#c-email").value.trim();
    const msg = $("#c-msg").value.trim();
    const sub = encodeURIComponent("Academic portfolio website message");
    const body = encodeURIComponent("Dear Shovon Mandal,\n\n" + msg + "\n\nBest regards,\n" + name + "\n" + email);
    window.location.href = "mailto:shovonmandal@gmail.com?subject=" + sub + "&body=" + body;
  });
}

async function init() {
  await loadData();
  renderHero();
  renderResearchFit();
  renderProfile();
  renderEducation();
  renderPublications();
  renderProjects();
  renderSystems();
  renderExperience();
  renderSkills();
  renderHonors();
  setupFilters();
  setupNavigation();
  setupReveal();
  setupContact();
  $("#yr").textContent = new Date().getFullYear();
}

init();








/* V63: Responsive fixed identity header; mobile converts to main header */
(function(){
  const header = document.getElementById("scroll-identity-header");
  const bridge = document.getElementById("scroll-header-bridge");
  const menuBtn = document.getElementById("scroll-menu-btn");
  const menuPanel = document.getElementById("scroll-menu-panel");
  const mobileQuery = window.matchMedia("(max-width: 1280px)");
  if (!header) return;

  let ticking = false;

  function closeMenu(){
    if (!menuPanel || !menuBtn) return;
    menuPanel.classList.remove("is-open");
    menuBtn.setAttribute("aria-expanded", "false");
    header.classList.remove("menu-open");
  }

  function setHeaderState(){
    const isMobile = mobileQuery.matches;
    const show = isMobile || window.scrollY > 360;

    header.classList.toggle("is-visible", show);
    header.classList.toggle("is-main-mobile-header", isMobile);
    document.body.classList.toggle("has-scroll-identity", show);
    document.body.classList.toggle("has-main-mobile-header", isMobile);

    if (bridge) {
      bridge.classList.toggle("is-active", show);
      bridge.classList.toggle("is-mobile-main", isMobile);
      bridge.setAttribute("aria-hidden", show ? "false" : "true");
    }

    if (!show) closeMenu();
    ticking = false;
  }

  function requestUpdate(){
    if (!ticking) {
      window.requestAnimationFrame(setHeaderState);
      ticking = true;
    }
  }

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  if (mobileQuery.addEventListener) {
    mobileQuery.addEventListener("change", requestUpdate);
  } else if (mobileQuery.addListener) {
    mobileQuery.addListener(requestUpdate);
  }

  if (menuBtn && menuPanel) {
    menuBtn.addEventListener("click", function(event){
      event.stopPropagation();
      const isOpen = menuPanel.classList.toggle("is-open");
      menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
      header.classList.toggle("menu-open", isOpen);
    });

    menuPanel.querySelectorAll("a").forEach(function(link){
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", function(event){
      if (!header.contains(event.target)) closeMenu();
    });

    document.addEventListener("keydown", function(event){
      if (event.key === "Escape") closeMenu();
    });
  }

  setHeaderState();
})();


/* V65: Keep Back-to-top button always visible and functional */
(function(){
  const backToTop = document.getElementById("btt");
  if (!backToTop) return;

  function keepBackToTopVisible(){
    backToTop.classList.add("show", "is-visible");
    backToTop.style.opacity = "1";
    backToTop.style.visibility = "visible";
    backToTop.style.pointerEvents = "auto";
    backToTop.style.display = "grid";
  }

  backToTop.addEventListener("click", function(){
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", keepBackToTopVisible, { passive: true });
  window.addEventListener("resize", keepBackToTopVisible);
  keepBackToTopVisible();
})();


/* V66: Hide menu behavior when desktop sidebar is visible */
(function(){
  const header = document.getElementById("scroll-identity-header");
  const menuBtn = document.getElementById("scroll-menu-btn");
  const menuPanel = document.getElementById("scroll-menu-panel");
  const sidebarHiddenQuery = window.matchMedia("(max-width: 1280px)");
  if (!header || !menuBtn || !menuPanel) return;

  function enforceConditionalMenu(){
    if (!sidebarHiddenQuery.matches) {
      menuPanel.classList.remove("is-open");
      menuBtn.setAttribute("aria-expanded", "false");
      header.classList.remove("menu-open");
    }
  }

  window.addEventListener("resize", enforceConditionalMenu);
  if (sidebarHiddenQuery.addEventListener) {
    sidebarHiddenQuery.addEventListener("change", enforceConditionalMenu);
  } else if (sidebarHiddenQuery.addListener) {
    sidebarHiddenQuery.addListener(enforceConditionalMenu);
  }
  enforceConditionalMenu();
})();


/* V68: Back-to-top appears while scrolling, then disappears after 2 seconds */
(function(){
  const backToTop = document.getElementById("btt");
  if (!backToTop) return;

  let hideTimer = null;

  function showBackToTop(){
    backToTop.classList.add("show", "is-visible", "scroll-visible");
    backToTop.style.opacity = "1";
    backToTop.style.visibility = "visible";
    backToTop.style.pointerEvents = "auto";
    backToTop.style.display = "grid";

    if (hideTimer) clearTimeout(hideTimer);
    hideTimer = setTimeout(function(){
      backToTop.classList.remove("show", "is-visible", "scroll-visible");
      backToTop.style.opacity = "";
      backToTop.style.visibility = "";
      backToTop.style.pointerEvents = "";
    }, 2000);
  }

  backToTop.addEventListener("click", function(){
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (hideTimer) clearTimeout(hideTimer);
    hideTimer = setTimeout(function(){
      backToTop.classList.remove("show", "is-visible", "scroll-visible");
      backToTop.style.opacity = "";
      backToTop.style.visibility = "";
      backToTop.style.pointerEvents = "";
    }, 1200);
  });

  window.addEventListener("scroll", showBackToTop, { passive: true });
})();











/* V78: Tick/completed state only after the user stays in a segment for at least 1 second */
(function(){
  const trackedIds = [
    "home",
    "research-profile",
    "professional-strengths",
    "education",
    "publications",
    "projects",
    "skills",
    "systems",
    "experience",
    "honors",
    "contact"
  ];

  const trackedTargets = trackedIds
    .map(id => document.getElementById(id))
    .filter(Boolean);

  const labelMap = {
    home: "Overview",
    "research-profile": "Research Fit & Profile",
    "professional-strengths": "Professional Strengths",
    education: "Academic Background",
    publications: "Publications",
    projects: "Projects",
    skills: "Skills",
    systems: "Academic Systems",
    experience: "Experience",
    honors: "Honors",
    contact: "Contact"
  };

  const completedSections = new Set();
  let activeSectionId = "";
  let dwellTimer = null;

  const currentLabel = document.getElementById("scroll-current-label");
  const menuPanel = document.getElementById("scroll-menu-panel");
  const sideNav = document.getElementById("sb-nav");
  const rightProgress = document.getElementById("right-progress-sidebar");
  const rightFill = document.getElementById("right-progress-fill");
  const rightDots = document.getElementById("right-progress-dots");
  const rightPercent = document.getElementById("right-progress-percent");
  const rightCount = document.getElementById("right-progress-count");
  const header = document.getElementById("scroll-identity-header");
  const menuBtn = document.getElementById("scroll-menu-btn");
  const roleText = document.getElementById("header-role-text");

  function sectionLabel(id){
    return labelMap[id] || id.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  }

  function updateRoleText(){
    if (!roleText) return;
    const full = "Computer Science and Engineering";
    const short = "CSE";
    const compact = window.innerWidth <= 560;
    roleText.textContent = compact ? short : full;

    if (!compact) {
      const headerWidth = header ? header.getBoundingClientRect().width : window.innerWidth;
      roleText.textContent = headerWidth < 620 ? short : full;
    }
  }

  if (rightDots) {
    rightDots.innerHTML = "";
    trackedTargets.forEach(function(section, index){
      const dot = document.createElement("a");
      dot.href = "#" + section.id;
      dot.className = "right-progress-dot";
      dot.dataset.section = section.id;
      dot.setAttribute("aria-label", sectionLabel(section.id));
      dot.innerHTML = `<span>${index + 1}</span>`;
      rightDots.appendChild(dot);
    });
  }

  function getActiveSection(){
    const triggerLine = window.innerHeight * 0.42;
    let active = trackedTargets[0];

    trackedTargets.forEach(function(section){
      const rect = section.getBoundingClientRect();
      if (rect.top <= triggerLine) active = section;
    });

    return active;
  }

  function normalizeTargetId(target){
    if (target === "research-fit" || target === "profile") return "research-profile";
    return target;
  }

  function updateDwellTimer(newActiveId){
    if (newActiveId === activeSectionId) return;

    activeSectionId = newActiveId;
    if (dwellTimer) clearTimeout(dwellTimer);

    dwellTimer = setTimeout(function(){
      completedSections.add(newActiveId);
      renderProgressUI();
    }, 1000);
  }

  function setMenuOpenState(){
    const isOpen = header && header.classList.contains("menu-open");
    document.body.classList.toggle("menu-is-open", !!isOpen);
    if (rightProgress) rightProgress.classList.toggle("hide-for-menu", !!isOpen);
  }

  function renderProgressUI(){
    if (!trackedTargets.length) return;

    updateRoleText();
    setMenuOpenState();

    const doc = document.documentElement;
    const scrollable = Math.max(1, doc.scrollHeight - window.innerHeight);
    const progress = Math.min(1, Math.max(0, window.scrollY / scrollable));
    const active = getActiveSection();
    const activeId = active.id;
    const activeIndex = trackedTargets.findIndex(section => section.id === activeId);
    const doneCount = completedSections.size;
    const total = trackedTargets.length;

    updateDwellTimer(activeId);

    if (rightFill) rightFill.style.height = `${progress * 100}%`;
    if (rightPercent) rightPercent.textContent = `${Math.round(progress * 100)}%`;
    if (rightCount) rightCount.textContent = `${String(doneCount).padStart(2, "0")}/${String(total).padStart(2, "0")}`;

    if (currentLabel) {
      currentLabel.textContent = sectionLabel(activeId);
      currentLabel.dataset.section = activeId;
    }

    document.querySelectorAll(".right-progress-dot").forEach(function(dot){
      const id = dot.dataset.section;
      const isActive = id === activeId;
      const isCompleted = completedSections.has(id);
      dot.classList.toggle("is-active", isActive);
      dot.classList.toggle("is-visited", false);
      dot.classList.toggle("is-completed", isCompleted);
      dot.setAttribute("aria-current", isActive ? "true" : "false");
    });

    const allNavLinks = [];
    if (menuPanel) allNavLinks.push(...menuPanel.querySelectorAll("a[href^='#']"));
    if (sideNav) allNavLinks.push(...sideNav.querySelectorAll("a[href^='#']"));

    allNavLinks.forEach(function(link){
      const rawTarget = link.getAttribute("href").slice(1);
      const target = normalizeTargetId(rawTarget);
      const isActive = target === activeId;
      const isCompleted = completedSections.has(target);
      link.classList.toggle("is-active", isActive);
      link.classList.toggle("is-visited", false);
      link.classList.toggle("is-completed", isCompleted);
      link.setAttribute("aria-current", isActive ? "page" : "false");
    });
  }

  let ticking = false;
  function requestUpdate(){
    if (!ticking) {
      window.requestAnimationFrame(function(){
        renderProgressUI();
        ticking = false;
      });
      ticking = true;
    }
  }

  if (menuBtn) {
    menuBtn.addEventListener("click", function(){
      setTimeout(function(){
        setMenuOpenState();
        requestUpdate();
      }, 0);
    });
  }

  if (menuPanel) {
    menuPanel.querySelectorAll("a").forEach(function(link){
      link.addEventListener("click", function(){
        setTimeout(function(){
          document.body.classList.remove("menu-is-open");
          if (rightProgress) rightProgress.classList.remove("hide-for-menu");
        }, 180);
      });
    });
  }

  document.addEventListener("click", function(){
    setTimeout(setMenuOpenState, 0);
  });

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  window.addEventListener("load", requestUpdate);
  document.addEventListener("DOMContentLoaded", requestUpdate);
  renderProgressUI();
})();


/* V79: completed ticks intentionally reset on every page reload.
   No localStorage/sessionStorage is used for completed section ticks. */





/* V83: Language row is a normal top row, not a floating overlay. */
(function(){
  const translator = document.getElementById("site-translator");
  if (!translator) return;
  translator.classList.remove("is-hidden");
  document.body.classList.remove("is-scrolling");
})();


/* V84: English button resets translator to English and reloads in default English */
(function(){
  function resetGoogleTranslateCookies(){
    var past = "Thu, 01 Jan 1970 00:00:00 GMT";
    var hosts = [location.hostname, "." + location.hostname];
    document.cookie = "googtrans=;expires=" + past + ";path=/";
    document.cookie = "googtrans=/en/en;path=/";
    hosts.forEach(function(host){
      if (!host || host === ".") return;
      document.cookie = "googtrans=;expires=" + past + ";path=/;domain=" + host;
      document.cookie = "googtrans=/en/en;path=/;domain=" + host;
    });
  }

  function bindEnglishButton(){
    var btn = document.getElementById("language-default-en");
    if (!btn) return;
    btn.addEventListener("click", function(){
      resetGoogleTranslateCookies();
      var combo = document.querySelector(".goog-te-combo");
      if (combo) {
        combo.value = "en";
        combo.dispatchEvent(new Event("change"));
      }
      setTimeout(function(){ window.location.reload(); }, 120);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindEnglishButton);
  } else {
    bindEnglishButton();
  }
})();





/* V86: Use native Google Translate dropdown and English reset button */
(function(){
  function resetGoogleTranslateCookies(){
    var past = "Thu, 01 Jan 1970 00:00:00 GMT";
    var hosts = [location.hostname, "." + location.hostname];
    document.cookie = "googtrans=;expires=" + past + ";path=/";
    document.cookie = "googtrans=/en/en;path=/";
    hosts.forEach(function(host){
      if (!host || host === ".") return;
      document.cookie = "googtrans=;expires=" + past + ";path=/;domain=" + host;
      document.cookie = "googtrans=/en/en;path=/;domain=" + host;
    });
  }

  function prepareNativeGoogleDropdown(){
    var tries = 0;
    var timer = setInterval(function(){
      tries += 1;
      var combo = document.querySelector(".goog-te-combo");
      if (!combo && tries < 40) return;
      if (!combo) {
        clearInterval(timer);
        return;
      }

      combo.setAttribute("aria-label", "Select website language");
      combo.classList.add("native-google-language-select");

      var english = Array.from(combo.options).find(function(option){
        return option.value === "en" || /english/i.test(option.textContent || "");
      });

      if (english) {
        combo.insertBefore(english, combo.options[0] || null);
        english.textContent = "English";
      }

      combo.value = "en";
      clearInterval(timer);
    }, 250);
  }

  function bindEnglishButton(){
    var btn = document.getElementById("language-default-en");
    if (!btn) return;

    btn.addEventListener("click", function(){
      resetGoogleTranslateCookies();
      var combo = document.querySelector(".goog-te-combo");
      if (combo) {
        combo.value = "en";
        combo.dispatchEvent(new Event("change"));
      }
      setTimeout(function(){ window.location.reload(); }, 140);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function(){
      prepareNativeGoogleDropdown();
      bindEnglishButton();
    });
  } else {
    prepareNativeGoogleDropdown();
    bindEnglishButton();
  }
})();


/* V87: Header stays below the top language row until that row scrolls away */
(function(){
  function updateLanguageRowState(){
    const row = document.getElementById("language-top-row");
    if (!row) return;
    const height = row.offsetHeight || 44;
    const visible = window.scrollY < Math.max(8, height - 4);
    document.body.classList.toggle("language-row-visible", visible);
    document.body.classList.toggle("language-row-scrolled", !visible);
  }

  window.addEventListener("scroll", updateLanguageRowState, { passive: true });
  window.addEventListener("resize", updateLanguageRowState);
  document.addEventListener("DOMContentLoaded", updateLanguageRowState);
  window.addEventListener("load", updateLanguageRowState);
  updateLanguageRowState();
})();











/* V100: V97-safe header gap navigation only; layout untouched */
(function(){
  function getHeaderGap(){
    var header = document.getElementById("scroll-identity-header");
    var h = header ? Math.ceil(header.getBoundingClientRect().height) : 72;
    return h + 30; /* one blank-line gap below fixed header */
  }

  function closeOpenMenu(){
    var header = document.getElementById("scroll-identity-header");
    var menuBtn = document.getElementById("scroll-menu-btn");
    if (header) header.classList.remove("menu-open");
    if (menuBtn) menuBtn.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-is-open");
  }

  function goToSection(target){
    if (!target) return;
    var y = target.getBoundingClientRect().top + window.pageYOffset - getHeaderGap();
    window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
  }

  function bindLinks(){
    document.querySelectorAll('a[href^="#"]').forEach(function(link){
      if (link.dataset.v100GapBound === "1") return;
      link.dataset.v100GapBound = "1";

      link.addEventListener("click", function(event){
        var href = link.getAttribute("href");
        if (!href || href === "#") return;

        var target;
        try {
          target = document.querySelector(href);
        } catch (e) {
          return;
        }
        if (!target) return;

        event.preventDefault();
        closeOpenMenu();
        goToSection(target);

        if (history.pushState) {
          history.pushState(null, "", href);
        } else {
          window.location.hash = href;
        }
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindLinks);
  } else {
    bindLinks();
  }
})();


/* V103: no-language-bar header behavior */
(function(){
  function normalizeNoLanguageHeader(){
    document.body.classList.remove("language-row-visible", "language-row-scrolled");
    document.body.classList.add("no-language-bar");
  }

  function bindHeaderSafeAnchors(){
    document.querySelectorAll('a[href^="#"]').forEach(function(link){
      if (link.dataset.v103Bound === "1") return;
      link.dataset.v103Bound = "1";
      link.addEventListener("click", function(event){
        var href = link.getAttribute("href");
        if (!href || href === "#") return;

        var target;
        try { target = document.querySelector(href); } catch(e) { return; }
        if (!target) return;

        event.preventDefault();

        var header = document.getElementById("scroll-identity-header");
        var menuBtn = document.getElementById("scroll-menu-btn");
        if (header) header.classList.remove("menu-open");
        if (menuBtn) menuBtn.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-is-open");

        var headerHeight = header ? Math.ceil(header.getBoundingClientRect().height) : 74;
        var y = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 30;
        window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });

        if (history.pushState) history.pushState(null, "", href);
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function(){
      normalizeNoLanguageHeader();
      bindHeaderSafeAnchors();
    });
  } else {
    normalizeNoLanguageHeader();
    bindHeaderSafeAnchors();
  }
})();


/* V107: mirror current section into mobile fixed header */
(function(){
  function updateMobileCurrent(){
    var source = document.getElementById("scroll-current-label");
    var target = document.getElementById("mob-current-label");
    if (!target) return;
    var text = source && source.textContent ? source.textContent.trim() : "";
    target.textContent = text || "Overview";
  }

  function closeMobileSidebarOnLink(){
    document.querySelectorAll(".sidebar a[href^='#']").forEach(function(link){
      if (link.dataset.v107CloseBound === "1") return;
      link.dataset.v107CloseBound = "1";
      link.addEventListener("click", function(){
        var sidebar = document.getElementById("sidebar");
        var menuBtn = document.getElementById("menu-btn");
        if (sidebar) sidebar.classList.remove("open");
        if (menuBtn) menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  function init(){
    updateMobileCurrent();
    closeMobileSidebarOnLink();

    var source = document.getElementById("scroll-current-label");
    if (source && window.MutationObserver) {
      new MutationObserver(updateMobileCurrent).observe(source, {
        childList:true,
        characterData:true,
        subtree:true
      });
    }

    window.addEventListener("scroll", updateMobileCurrent, {passive:true});
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();


/* V109: robust mobile menu click handler */
(function(){
  function getSidebar(){
    return document.getElementById("sidebar") || document.querySelector(".sidebar");
  }

  function getMenuButton(){
    return document.getElementById("menu-btn");
  }

  function setMenu(open){
    var sidebar = getSidebar();
    var btn = getMenuButton();
    if (!sidebar || !btn) return;

    sidebar.classList.toggle("open", open);
    document.body.classList.toggle("menu-is-open", open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.textContent = open ? "Close" : "Menu";
  }

  function toggleMenu(event){
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    var sidebar = getSidebar();
    if (!sidebar) return;

    setMenu(!sidebar.classList.contains("open"));
  }

  function bindMenu(){
    var btn = getMenuButton();
    var sidebar = getSidebar();

    if (!btn || !sidebar) return;

    /* Replace possible broken cloned handlers by binding a direct robust listener */
    btn.onclick = toggleMenu;

    btn.addEventListener("click", toggleMenu, true);
    btn.addEventListener("touchend", function(event){
      event.preventDefault();
      toggleMenu(event);
    }, {passive:false, capture:true});

    /* Close menu when a sidebar link is selected */
    sidebar.querySelectorAll('a[href^="#"]').forEach(function(link){
      if (link.dataset.v109CloseBound === "1") return;
      link.dataset.v109CloseBound = "1";
      link.addEventListener("click", function(){
        setMenu(false);
      });
    });

    /* Close if user taps outside sidebar/menu on mobile */
    document.addEventListener("click", function(event){
      var sidebarNow = getSidebar();
      var btnNow = getMenuButton();
      if (!sidebarNow || !btnNow) return;
      if (!sidebarNow.classList.contains("open")) return;
      if (sidebarNow.contains(event.target) || btnNow.contains(event.target)) return;
      setMenu(false);
    }, true);

    /* Close when resizing back to desktop */
    window.addEventListener("resize", function(){
      if (window.innerWidth > 1100) setMenu(false);
    }, {passive:true});
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindMenu);
  } else {
    bindMenu();
  }
})();


/* V112: keep mobile header labels stable after content polish */
(function(){
  function syncMobileRoleAndCV(){
    var cv = document.querySelector(".mob-cv-btn");
    if (cv) {
      cv.setAttribute("href", "assets/docs/Shovon_Mandal_CV.pdf");
      cv.setAttribute("download", "");
      cv.setAttribute("aria-label", "Download CV PDF");
      cv.textContent = "CV";
    }

    var menu = document.getElementById("menu-btn");
    if (menu && !menu.hasAttribute("type")) menu.setAttribute("type", "button");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", syncMobileRoleAndCV);
  } else {
    syncMobileRoleAndCV();
  }
})();


/* V117: final mobile-safe anchor scrolling; prevents selected sections being hidden under fixed mobile header */
(function(){
  function activeHeaderOffset(){
    var mobileHeader = document.getElementById("mobile-fixed-header");
    var desktopHeader = document.getElementById("scroll-identity-header");
    var isMobile = window.matchMedia("(max-width: 1100px)").matches;

    if (isMobile && mobileHeader) {
      return Math.ceil(mobileHeader.getBoundingClientRect().height) + 26;
    }

    if (desktopHeader && getComputedStyle(desktopHeader).display !== "none") {
      return Math.ceil(desktopHeader.getBoundingClientRect().height) + 30;
    }

    return 104;
  }

  function closeMenu(){
    var sidebar = document.getElementById("sidebar") || document.querySelector(".sidebar");
    var btn = document.getElementById("menu-btn");
    if (sidebar) sidebar.classList.remove("open");
    if (btn) {
      btn.setAttribute("aria-expanded", "false");
      btn.textContent = "Menu";
    }
    document.body.classList.remove("menu-is-open");
  }

  function safeScrollTo(target){
    if (!target) return;
    var top = target.getBoundingClientRect().top + window.pageYOffset - activeHeaderOffset();
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  }

  function bindSafeAnchors(){
    document.querySelectorAll('a[href^="#"]').forEach(function(link){
      if (link.dataset.v117SafeScrollBound === "1") return;
      link.dataset.v117SafeScrollBound = "1";

      link.addEventListener("click", function(event){
        var href = link.getAttribute("href");
        if (!href || href === "#") return;

        var target;
        try {
          target = document.querySelector(href);
        } catch(e) {
          return;
        }

        if (!target) return;

        event.preventDefault();
        event.stopPropagation();
        closeMenu();
        safeScrollTo(target);

        if (history.pushState) {
          history.pushState(null, "", href);
        } else {
          window.location.hash = href;
        }
      }, true);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindSafeAnchors);
  } else {
    bindSafeAnchors();
  }

  window.addEventListener("resize", bindSafeAnchors, {passive:true});
})();
