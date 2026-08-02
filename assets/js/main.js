
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
const FALLBACK_DATA = {"site":{"name":"Shovon Mandal","firstName":"Shovon","lastName":"Mandal","title":"Academic Portfolio","role":"Lecturer, Department of Computer Science and Engineering","affiliation":"Northern University of Business and Technology Khulna, Bangladesh","email":"shovonmandal@gmail.com","cv":"assets/docs/Shovon_Mandal_CV.pdf","photo":"assets/img/profile.jpg","goalLabel":"Academic Research Goal","goal":"I am interested in pursuing Ph.D. or thesis-based M.S. research opportunities in secure distributed systems, blockchain and IoT security, applied machine learning, natural language processing, and explainable AI. My background combines peer-reviewed research, prototype development, university teaching, and technical implementation.","headline":"Secure Distributed Systems · Blockchain and IoT Security · Applied Machine Learning · Natural Language Processing · Explainable AI","rotatingWords":["Ph.D. Research in Secure and Intelligent Systems","Blockchain, IoT, and Distributed-System Security","Applied Machine Learning and Explainable AI","Natural Language Processing and Code-Mixed Text Analysis"]},"links":[{"label":"Faculty Profile","url":"https://nubtkhulna.ac.bd/sd/275/Shovon%20Mandal"},{"label":"Google Scholar","url":"https://scholar.google.com/citations?user=h6Imiq4AAAAJ&hl=en"},{"label":"ResearchGate","url":"https://www.researchgate.net/profile/Shovon-Mandal-2"},{"label":"ORCID","url":"https://orcid.org/0009-0003-6302-9484"},{"label":"GitHub","url":"https://github.com/shovon-mandal"},{"label":"LinkedIn","url":"https://www.linkedin.com/in/shovonmandal/"},{"label":"Email","url":"mailto:shovonmandal@gmail.com"}],"fastReview":[{"label":"Research Plan","target":"#future-research-plan"},{"label":"Publications","target":"#publications"},{"label":"Projects","target":"#projects"},{"label":"Experience","target":"#experience"}],"snapshot":[{"label":"B.Sc. CGPA","value":"3.80 out of 4.00"},{"label":"Academic Standing","value":"Highest Distinction"},{"label":"Teaching Experience","value":"4+ Years Undergraduate Teaching"},{"label":"Higher Study Goal","value":"Funded Ph.D. or Thesis-Based M.S."},{"label":"Research Alignment","value":"Secure Distributed Systems · Applied AI · NLP"}],"metrics":[{"value":"6","label":"Published / Accepted Papers","target":"#publications"},{"value":"4","label":"Manuscripts Under Review","target":"#publications"},{"value":"4+","label":"Teaching Years","target":"#experience"},{"value":"4+","label":"Implementation Projects","target":"#projects"}],"researchFit":[{"title":"Core Research Alignment","text":"Secure distributed systems, blockchain and IoT transaction security, applied cryptography, embedded systems security, applied machine learning, natural language processing, and explainable AI define the current research direction."},{"title":"Publication Evidence","text":"Six published or accepted conference papers and four manuscripts under review demonstrate an expanding research trajectory across security, distributed systems, machine learning, natural language processing, explainable AI, and computer vision."},{"title":"Implementation Evidence","text":"Blockchain and NFC payment prototypes, IOTA-based transaction demonstrations, embedded-system experiments, and public GitHub repositories show the ability to move from a research question to implementation, evaluation, and documentation."},{"title":"Teaching and Academic Support","text":"University lecturer experience, KUET Teaching Assistant experience, and BRAC University Student Tutor experience support readiness for teaching, laboratory supervision, mentoring, and collaborative research roles."}],"profile":{"paragraphs":["I am a Computer Science and Engineering lecturer and M.Sc. Eng. researcher at Khulna University of Engineering & Technology, with only my thesis defense remaining. My research lies at the intersection of secure distributed systems and applied intelligent computing, including blockchain-based payments, NFC and IoT transaction security, IOTA-based decentralized communication, machine learning, natural language processing, explainable AI, and computer vision applications.","My work combines publication-oriented research with prototype development, experimental evaluation, technical implementation, and university teaching. I am particularly interested in developing secure, reliable, and interpretable intelligent systems for distributed, IoT, and data-driven environments."],"cards":[{"title":"Research Direction","text":"Secure distributed systems and applied intelligent computing, with emphasis on blockchain and IoT security, applied machine learning, NLP, and explainable AI.","target":"#research-fit"},{"title":"Publication Evidence","text":"Six published or accepted conference papers and four manuscripts under review across security, distributed systems, machine learning, NLP, explainable AI, and computer vision.","target":"#publications"},{"title":"Implementation Ability","text":"Working blockchain, NFC, Arduino, IOTA, web, and academic automation systems supported by technical documentation and public repositories.","target":"#projects"},{"title":"Teaching Experience","text":"University lecturer, KUET Teaching Assistant, and BRAC University Student Tutor experience across undergraduate courses and laboratories.","target":"#experience"}],"tags":["Secure Distributed Systems","Blockchain-Based Digital Payments","NFC and IoT Transaction Security","Applied Cryptography","Embedded Systems Security","Applied Machine Learning","Natural Language Processing","Explainable AI","Computer Vision","IOTA and Distributed Ledger Technologies"],"strengths":["Research experience connects secure distributed systems with applied machine learning and interpretable intelligent computing.","Six published or accepted conference papers and four manuscripts under review provide evidence of sustained collaborative research activity.","GitHub-backed prototypes demonstrate implementation, experimentation, technical documentation, and working-system development.","University teaching and laboratory experience support mentoring, instructional, and research-assistant responsibilities.","Cross-domain projects show the ability to apply rigorous computational methods to security, language, vision, and educational data."]},"education":[{"period":"Jul 2022 – Present","degree":"M.Sc. Eng. in Computer Science and Engineering","institution":"Khulna University of Engineering & Technology, Bangladesh","url":"https://www.kuet.ac.bd/","badge":"Only thesis defense remaining","items":["<strong>Academic Status:</strong> Only thesis defense remaining","<strong>Thesis:</strong> Blockchain Technology Based Smart E-Payment Strategy for Secure Cashless Payment","<strong>Supervisor:</strong> <a class='inline-academic-link' href='https://scholar.google.com/citations?user=w3eyrycAAAAJ&hl=en' target='_blank' rel='noopener'>Dr. Pintu Chandra Shill ↗</a>","<strong>Research Area:</strong> Blockchain-Based Secure Digital Payment and NFC-Enabled Transaction Security","<strong>Relevant Coursework:</strong> Principles of Cryptography; Advanced Network Security; Cloud Computing; Neural Networks"]},{"period":"Spring 2018 – Spring 2022","degree":"B.Sc. in Computer Science and Engineering","institution":"BRAC University, Bangladesh","url":"https://www.bracu.ac.bd/","badge":"Highest Distinction","items":["<strong>CGPA:</strong> 3.80 out of 4.00","<strong>Academic Standing:</strong> Highest Distinction","<strong>Vice Chancellor's List:</strong> 5 consecutive semesters","<strong>Dean's List:</strong> 2 consecutive semesters","<strong>Thesis:</strong> Blockchain-based Micropayment System for Secured Cashless Small Payments","<strong>Supervisor:</strong> <a class='inline-academic-link' href='https://scholar.google.com/citations?user=t4GrJR4AAAAJ&hl=en' target='_blank' rel='noopener'>Md. Golam Rabiul Alam, PhD ↗</a>"]}],"publications":[{"status":"Published","filter":"published core","title":"Ensuring Security and Efficiency in Digital Payments using Blockchain with NFC","authors":"<strong class='author-me'>Mandal, S.</strong>, & <a class='author-link' href='https://scholar.google.com/citations?user=w3eyrycAAAAJ&hl=en' target='_blank' rel='noopener'>Shill, P. C. ↗</a>","venue":"ICKECS 2024 — IEEE","year":"2024","doi":"10.1109/ICKECS61492.2024.10616703","doiUrl":"https://doi.org/10.1109/ICKECS61492.2024.10616703","type":"IEEE Conference Paper","area":"Blockchain, NFC, secure digital payment systems","role":"First author","detail":"Presents a blockchain- and NFC-based approach to improving security and efficiency in contactless digital payments.","publisher":"IEEE / DOI available","authorLinks":[]},{"status":"Published","filter":"published core","title":"Q-learning based Automated Message Multicast in Gossip Protocol for Node Confirmation in IOTA Tangle","authors":"<a class='author-link' href='https://scholar.google.com/citations?user=pPg7H2YAAAAJ&hl=en' target='_blank' rel='noopener'>Keya, M. ↗</a>, <strong class='author-me'>Mandal, S.</strong>, Dhar, S., Tahsin, H. M., Siam, M., <a class='author-link' href='https://scholar.google.com/citations?user=Ke_Yly4AAAAJ&hl=en' target='_blank' rel='noopener'>Tahsin, A. ↗</a>, <a class='author-link' href='https://scholar.google.com/citations?user=t4GrJR4AAAAJ&hl=en' target='_blank' rel='noopener'>Alam, M. G. R. ↗</a>, <a class='author-link' href='https://scholar.google.com/citations?user=YFu7iB8AAAAJ&hl=en' target='_blank' rel='noopener'>Uddin, M. Z. ↗</a>, et al.","venue":"ICCIT 2024 — IEEE","year":"2024","doi":"10.1109/ICCIT64611.2024.11021995","doiUrl":"https://doi.org/10.1109/ICCIT64611.2024.11021995","type":"IEEE Conference Paper","area":"IOTA Tangle, distributed ledger, gossip protocol, Q-learning","role":"Co-author","detail":"Investigates Q-learning-guided message multicast for node confirmation in the IOTA Tangle.","publisher":"IEEE / DOI available","authorLinks":[]},{"status":"Published","filter":"published","title":"Comparative Evaluation of Multiple CNN Architectures for Dermoscopic Skin Lesion Classification using ISIC Dataset","authors":"<a class='author-link' href='https://scholar.google.com/citations?user=ARzTQjIAAAAJ&hl=en' target='_blank' rel='noopener'>Ghosh, A. ↗</a>, <strong class='author-me'>Mandal, S.</strong>, Islam, M. J., Islam, K. M., Dhar, S., & Baidya, R.","venue":"QPAIN 2026 — IEEE","year":"2026","doi":"10.1109/QPAIN69676.2026.11545903","doiUrl":"https://doi.org/10.1109/QPAIN69676.2026.11545903","type":"IEEE Conference Paper","area":"Deep learning, medical image classification, CNN architectures","role":"Co-author","detail":"Compares multiple CNN architectures for dermoscopic skin-lesion classification using the ISIC dataset.","publisher":"IEEE / DOI available","authorLinks":[]},{"status":"Published","filter":"published","title":"A Machine Learning and DEM-Based Approach for Predicting Sea Level Rise and Assessing Coastal Risk in Bangladesh Using AI Insights","authors":"<a class='author-link' href='https://scholar.google.com/citations?user=ARzTQjIAAAAJ&hl=en' target='_blank' rel='noopener'>Ghosh, A. ↗</a>, Pinki, F. T., Baidya, R., Alam, F., & <strong class='author-me'>Mandal, S.</strong>","venue":"CSNT 2026 — IEEE","year":"2026","doi":"10.1109/CSNT69054.2026.11502358","doiUrl":"https://doi.org/10.1109/CSNT69054.2026.11502358","type":"IEEE Conference Paper","area":"Machine learning, DEM-based coastal risk prediction, AI insights","role":"Co-author","detail":"Applies machine learning and digital elevation data to sea-level-rise prediction and coastal-risk assessment in Bangladesh.","publisher":"IEEE / DOI available","authorLinks":[]},{"status":"In press","filter":"accepted in press icccnt implementation arcore android learning technology","title":"Revolutionizing Academic Learning and Research with the Integration of Leap Motion and ARCore in Android","authors":"<strong class='author-me'>Mandal, S.</strong>, et al.","venue":"16th International Conference on Computing, Communication and Networking Technologies (ICCCNT 2025), IIT Indore, Madhya Pradesh, India","year":"2025","type":"Conference Paper","area":"ARCore, Leap Motion, Android, academic learning technology","role":"First author","detail":"Examines the integration of Leap Motion and ARCore in an Android-based academic learning and research environment.","publisher":"ICCCNT 2025 / In press","doi":"","doiUrl":"","authorLinks":[]},{"status":"In press","filter":"accepted in press icccnt nlp sentiment analysis deep learning","title":"Advancing Sentiment Analysis Through Natural Language Processing and Deep Learning","authors":"<a class='author-link' href='https://scholar.google.com/citations?user=ARzTQjIAAAAJ&hl=en' target='_blank' rel='noopener'>Ghosh, A. ↗</a>, <strong class='author-me'>Mandal, S.</strong>, et al.","venue":"16th International Conference on Computing, Communication and Networking Technologies (ICCCNT 2025), IIT Indore, Madhya Pradesh, India","year":"2025","type":"Conference Paper","area":"Natural language processing, sentiment analysis, deep learning","role":"Co-author","detail":"Evaluates natural-language-processing and deep-learning methods for sentiment analysis.","publisher":"ICCCNT 2025 / In press","doi":"","doiUrl":"","authorLinks":[]},{"status":"Under Review","statusText":"Manuscript submitted; under review","filter":"under review machine learning educational data mining catboost svm","title":"Data-Driven Multiclass Prediction of Student Academic Outcomes Using Machine Learning: A Comparative Evaluation of SVM and CatBoost","authors":"<strong class='author-me'>Mandal, S.</strong>, Ahmed, K. A., <a class='author-link' href='https://scholar.google.com/citations?user=ARzTQjIAAAAJ&hl=en' target='_blank' rel='noopener'>Ghosh, A. ↗</a>, Swadesh, P. M., & Baidya, R.","venue":"5th IEEE International Conference on Robotics, Automation, Artificial-Intelligence and Internet-of-Things (RAAICON 2026), Jashore, Bangladesh","year":"2026","type":"Conference Manuscript","area":"Educational data mining, multiclass classification, SVM, CatBoost","role":"First author","detail":"Compares SVM and CatBoost for three-level student-outcome prediction and examines the influence of prior academic and behavioral features.","publisher":"Submitted to RAAICON 2026","doi":"","doiUrl":"","authorLinks":[]},{"status":"Under Review","statusText":"Manuscript submitted; under review","filter":"under review computer vision cnn transfer learning fish quality","title":"Automated Visual Inspection of Tilapia Fish Quality Using CNN and Transfer Learning","authors":"Islam, M. H., Jiku, N. A. S., <strong class='author-me'>Mandal, S.</strong>, Swadesh, P. M., & <a class='author-link' href='https://scholar.google.com/citations?user=ARzTQjIAAAAJ&hl=en' target='_blank' rel='noopener'>Ghosh, A. ↗</a>","venue":"5th IEEE International Conference on Robotics, Automation, Artificial-Intelligence and Internet-of-Things (RAAICON 2026), Jashore, Bangladesh","year":"2026","type":"Conference Manuscript","area":"Computer vision, CNN, transfer learning, food-quality inspection","role":"Co-author","detail":"Develops a three-class visual inspection pipeline for classifying tilapia as fresh, semi-fresh, or rotten from skin images.","publisher":"Submitted to RAAICON 2026","doi":"","doiUrl":"","authorLinks":[]},{"status":"Under Review","statusText":"Manuscript submitted; under review","filter":"under review nlp code mixed emotion recognition banglabert xlm roberta stacking","title":"Beyond Single Transformers: A BanglaBERT-XLM-RoBERTa Stacking Framework for Code-Mixed Emotion Recognition","authors":"<a class='author-link' href='https://scholar.google.com/citations?user=ARzTQjIAAAAJ&hl=en' target='_blank' rel='noopener'>Ghosh, A. ↗</a>, Datta, A., <strong class='author-me'>Mandal, S.</strong>, Swadesh, P. M., Ahmed, K. A., & Molla, M. H.","venue":"3rd IEEE International Conference on Computing, Applications and Systems (COMPAS 2026), Dhaka, Bangladesh","year":"2026","type":"Conference Manuscript","area":"Code-mixed NLP, emotion recognition, transformer stacking, class imbalance","role":"Co-author","detail":"Combines BanglaBERT and XLM-RoBERTa through a logistic-regression meta-classifier for six-class emotion recognition in Banglish text.","publisher":"Submitted to COMPAS 2026","doi":"","doiUrl":"","authorLinks":[]},{"status":"Under Review","statusText":"Manuscript submitted; under review","filter":"under review nlp sentiment analysis explainable ai llm style transfer domain adaptation","title":"Chameleon Words in Cross-Domain Sentiment Analysis: An Explainable Framework with LLM-Based Style Transfer","authors":"<a class='author-link' href='https://scholar.google.com/citations?user=ARzTQjIAAAAJ&hl=en' target='_blank' rel='noopener'>Ghosh, A. ↗</a>, Molla, M. H., Swadesh, P. M., <strong class='author-me'>Mandal, S.</strong>, Ahmed, K. A., & Datta, A.","venue":"3rd IEEE International Conference on Computing, Applications and Systems (COMPAS 2026), Dhaka, Bangladesh","year":"2026","type":"Conference Manuscript","area":"Cross-domain sentiment analysis, explainable AI, SHAP, LLM style transfer","role":"Co-author","detail":"Studies sentiment-polarity reversals across domains and evaluates explainability and LLM-based style transfer under zero-target-supervision conditions.","publisher":"Submitted to COMPAS 2026","doi":"","doiUrl":"","authorLinks":[]}],"projects":[{"title":"Blockchain and NFC-Based Secure Cashless Payment Prototype","type":"Thesis-Supporting Research Implementation","category":"Secure Payments · Contactless Interaction · Hardware Integration","filter":"research hardware blockchain connected device secure payment","description":"Research prototype connecting blockchain-based verification with contactless transaction interaction and hardware-supported payment demonstration.","tools":["Blockchain","NFC Module","Arduino","Python","Secure payment flow","Prototype documentation"],"highlights":["Connects secure payment research with implementation-oriented prototyping.","Demonstrates contactless cashless transaction interaction at the hardware level.","Supports thesis direction in secure digital payment systems — related to ICKECS 2024 paper."],"url":"https://github.com/shovon-mandal/NFC"},{"title":"IOTA-Based Payment Website and Decentralized Transaction Demonstration","type":"Research Prototype","category":"Distributed Ledger · Web Transaction","filter":"research distributed ledger web transaction","description":"Web prototype for distributed-ledger-supported payment and decentralized transaction flow demonstration, with frontend and backend components built for experimental validation.","tools":["IOTA / Distributed Ledger","JavaScript","Web transaction flow","Payment demonstration"],"highlights":["Demonstrates distributed ledger-based payment flow and decentralized transaction concepts.","Shows web-facing implementation of IOTA Tangle integration.","Related to ICCIT 2024 IEEE paper on Q-learning and Gossip Protocol."],"url":"https://github.com/shovon-mandal/IOTA-Website"},{"title":"Academic Routine Management System — Google Sheets and Apps Script","type":"Academic Automation","category":"Google Apps Script · Google Sheets · Academic Workflow","filter":"automation apps script google sheets academic","description":"Google Sheets and Apps Script system for course offering, faculty/section routine retrieval, protected views, and PDF generation.","tools":["Google Apps Script","Google Sheets","Protected views","PDF generation","Routine retrieval"],"highlights":["Improves routine retrieval and academic workflow clarity.","Supports institutional record organization.","Demonstrates automation ability beyond classroom programming."],"url":"https://github.com/shovon-mandal/academic-routine-management-appscript"},{"title":"Python-Based Discord Server Management Bot for Academic Communication","type":"Academic Communication Automation","category":"Python · Discord Bot · Role Management","filter":"automation python discord bot communication","description":"Python bot for student verification, role management, announcements, reminders, and controlled academic communication.","tools":["Python","Discord Bot API","Role automation","Student verification","Reminder workflow"],"highlights":["Applies automation to student verification and academic communication.","Supports structured digital classroom community management.","Demonstrates practical Python automation beyond coursework."],"url":"https://github.com/shovon-mandal/academic-discord-management-bot"}],"systems":[{"title":"Class Routine Automation","text":"Structured course and section routine management with protected views and clean retrieval."},{"title":"Assessment Workflow Support","text":"Marking, record organization, and academic evaluation support using structured digital tools."},{"title":"Academic Communication Bot","text":"Student verification, role management, announcements, and controlled academic communication."},{"title":"Adaptive Technical Practice","text":"Ability to learn new tools and apply them to research, teaching, and institutional workflow problems."}],"experience":[{"period":"Mar 2024 – Present","title":"Lecturer, Department of Computer Science and Engineering","place":"Northern University of Business and Technology Khulna, Bangladesh","roleLabel":"Lecturer","roleClass":"current-university-teaching","text":"Current university teaching role covering undergraduate CSE theory and laboratory teaching, course material preparation, student assessment, mentoring, and student research/project supervision.","courseHeading":"Courses Taught","courses":["Computer Architecture","Digital Logic Design","Object-Oriented Programming with Java","Technical Writing","Linear Programming and Combinatorial Optimization"],"responsibilityHeading":"Teaching, Assessment, and Supervision","responsibilities":["Theory lecture delivery","Lab work and practical class support","Question and assessment preparation","Answer-script and assignment evaluation","Student mentoring","Student research and project supervision"],"placeUrl":"https://nubtkhulna.ac.bd/","durationStart":"2024-03","durationEnd":"present","durationLabel":"Duration"},{"period":"Jul 2022 – Jun 2024","title":"Lecturer (Adjunct), Department of Computer Science and Engineering","place":"Imperial College of Engineering, Khulna, Bangladesh — Affiliated with Rajshahi University, Bangladesh","roleLabel":"Adjunct Lecturer","roleClass":"role-adjunct","text":"Two years of undergraduate teaching experience at Imperial College of Engineering, Khulna, Bangladesh, affiliated with Rajshahi University, Bangladesh. Responsibilities included CSE theory lecture support, lab work, course assistance, assessment support, and student mentoring.","courseHeading":"Courses Taught","courses":["Database Management Systems","Computer Peripherals and Interfacing","Computer Architecture and Organization","Computer Graphics","Web Engineering","Microprocessor and Microcontrollers"],"responsibilityHeading":"Instructional Responsibilities","responsibilities":["Theory class instruction","Lab work and practical session support","Assessment preparation","Student performance evaluation","Project guidance","Academic support"],"placeUrl":"https://www.imperial.edu.bd/","durationStart":"2022-07","durationEnd":"2024-06","durationLabel":"Duration"},{"period":"Jul 2023 – Dec 2023","title":"Teaching Assistant, Department of Computer Science and Engineering","place":"Khulna University of Engineering & Technology, Bangladesh","roleLabel":"Teaching Assistant","roleClass":"role-ta","text":"Assisted course teachers with laboratory sessions, assignment checking, evaluation support, academic record preparation, student guidance, and course-related instructional activities.","courseHeading":"Courses Assisted","courses":["Embedded Systems","Electronic Devices and Circuits"],"responsibilityHeading":"Teaching Assistant Support","responsibilities":["Assisted course teachers","Supported laboratory sessions","Checked assignments","Helped with evaluation","Prepared academic records","Guided students during course activities"],"placeUrl":"https://www.kuet.ac.bd/","durationStart":"2023-07","durationEnd":"2023-12","durationLabel":"Duration"},{"period":"Feb 2022 – Apr 2022","title":"Student Tutor, Department of Computer Science and Engineering","place":"BRAC University, Bangladesh","roleLabel":"Student Tutor","roleClass":"role-tutor","text":"Helped students understand course materials, supported problem-solving practice, assisted the course instructor with assignment checking, and provided academic support during tutorials.","courseHeading":"Tutorial Course","courses":["Electronic Devices and Circuits"],"responsibilityHeading":"Student Tutor Support","responsibilities":["Helped students understand course topics","Supported tutorial problem solving","Assisted the course instructor","Checked assignments","Provided student academic support"],"placeUrl":"https://www.bracu.ac.bd/","durationStart":"2022-02","durationEnd":"2022-04","durationLabel":"Duration"}],"skills":[{"title":"Programming and Computational Tools","icon":"⌘","items":["Python","Java","C","MATLAB","MIPS Assembly","JavaScript"]},{"title":"Security and Distributed Systems","icon":"◈","items":["Cybersecurity","Applied cryptography","Secure distributed systems","Blockchain-based payment security","NFC/IoT transaction security","Network security fundamentals","Secure cashless payment workflows"]},{"title":"Web, Database, and Application Development","icon":"▣","items":["HTML / CSS / JavaScript","PHP / Laravel","MySQL","Android Studio"]},{"title":"Academic Automation and Workflow Systems","icon":"◆","items":["Google Apps Script","Google Sheets automation","Class routine management","Protected academic views","PDF generation workflow","Assessment and marking support","Academic communication automation"]},{"title":"Embedded, Hardware, and Sensor-Enabled Systems","icon":"▧","items":["Embedded systems security","Arduino prototyping","Contactless / NFC / RFID module practice","Sensor-enabled systems","Trustworthy hardware systems","Hardware interfacing","Digital electronics"]},{"title":"Research, Teaching, and Mentoring","icon":"✦","items":["Literature review","Prototype development","Technical documentation","Research implementation","Theory lecture delivery","Lab work support","Teaching Assistant readiness","Student mentoring"]}],"repositorySkills":[{"title":"Secure Payment Prototype Evidence","icon":"◈","tags":["Blockchain payment logic","NFC/Arduino module integration","Secure transaction flow","Device-level verification","Hardware interfacing","Prototype documentation"]},{"title":"Distributed Payment Demonstration","icon":"▣","tags":["Distributed ledger concept","Payment demonstration","Web transaction flow","Decentralized system practice"]},{"title":"Academic Workflow Automation","icon":"◆","tags":["Google Apps Script","Google Sheets automation","Scheduling logic","Protected views","PDF workflow"]},{"title":"Academic Communication Automation","icon":"✦","tags":["Python automation","Role management","Student verification","Reminder workflow","Access control"]}],"honors":{"Honors and Scholarships":["Highest Distinction — BRAC University","Vice Chancellor's List — BRAC University (5 consecutive semesters)","Dean's List — BRAC University (2 consecutive semesters)","Merit-based Scholarship — BRAC University","Merit-based Scholarship — Junior School Certificate, Jashore Board"],"Leadership and Service":["Judge, Project Showcasing — CSE Fest 2025","Executive Member — BRAC University Computer Club (2018–2020)","Executive Member — Robotics Club of BRAC University (2018–2020)","Executive Member — BRACU Mongol Tori, Next Generation Mars Rover Team 4.0 (2019–2020)"]},"futureResearchPlan":{"lead":"My future research direction focuses on secure and trustworthy intelligent systems, connecting blockchain-based verification, NFC and IoT security, distributed architectures, embedded systems, and interpretable machine learning.","cards":[{"title":"Secure Transaction Systems","text":"I am interested in secure and auditable transaction architectures for blockchain, NFC, IoT, and other device-mediated environments. Relevant problems include lightweight authentication, transaction traceability, fraud resistance, device-to-system trust, and practical deployment constraints."},{"title":"Trustworthy and Explainable AI","text":"I aim to investigate reliable machine-learning systems through explainability, robustness, domain adaptation, class-imbalance handling, and careful evaluation. This direction includes language, vision, and structured-data applications where model decisions must remain interpretable and dependable."},{"title":"Implementation and Evaluation","text":"My preferred research approach combines system design with reproducible implementation and empirical validation. Possible components include threat modelling, prototype development, ablation studies, statistical testing, latency and reliability analysis, and comparison with strong baselines."},{"title":"Research-Lab Fit","text":"This direction aligns with research groups working on cybersecurity, distributed systems, blockchain, applied cryptography, IoT and embedded systems, trustworthy AI, natural language processing, computer vision, and applied machine learning."}]},"references":[{"name":"Dr. Pintu Chandra Shill","role":"M.Sc. Eng. Thesis Supervisor and Research Co-author","affiliation":"Professor, Department of Computer Science and Engineering, KUET, Bangladesh","relation":"Supervised the M.Sc. Eng. thesis direction on blockchain-based secure payment systems and co-authored the ICKECS 2024 paper on blockchain with NFC.","links":[{"label":"Google Scholar","url":"https://scholar.google.com/citations?user=w3eyrycAAAAJ&hl=en"}]},{"name":"Md. Golam Rabiul Alam, PhD","role":"B.Sc. Thesis Supervisor and Research Co-author","affiliation":"Professor, Department of Computer Science and Engineering, BRAC University, Bangladesh","relation":"Supervised the B.Sc. thesis on blockchain-based micropayment systems and co-authored the ICCIT 2024 paper on IOTA Tangle and gossip-protocol-based node confirmation.","links":[{"label":"Google Scholar","url":"https://scholar.google.com/citations?user=t4GrJR4AAAAJ&hl=en"}]}],"referencesNote":"Academic references and recommendation support are available upon request."};

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
  if ($("#fast-review")) $("#fast-review").innerHTML = (DATA.fastReview || []).map(i => `<a href="${i.target}">${i.label}</a>`).join("");
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


function renderFutureResearchPlan() {
  const sec = $("#future-plan-list");
  if (!sec || !DATA.futureResearchPlan) return;
  const lead = $("#future-plan-lead");
  if (lead) lead.textContent = DATA.futureResearchPlan.lead || "";
  sec.innerHTML = (DATA.futureResearchPlan.cards || []).map((i, idx) => `
    <article class="future-card">
      <span class="future-n">${String(idx + 1).padStart(2, "0")}</span>
      <h3>${i.title}</h3>
      <p>${i.text}</p>
    </article>
  `).join("");
}

function renderReferences() {
  const sec = $("#references-list");
  if (!sec || !DATA.references) return;
  const note = $("#references-note");
  if (note) note.textContent = DATA.referencesNote || "";
  sec.innerHTML = DATA.references.map((r, idx) => `
    <article class="reference-card">
      <span class="ref-n">${String(idx + 1).padStart(2, "0")}</span>
      <h3>${r.name}</h3>
      <p class="ref-role">${r.role}</p>
      <p class="ref-affiliation">${r.affiliation}</p>
      ${r.email ? `<p class="ref-email"><b>Email:</b> <a href="mailto:${r.email}">${r.email}</a></p>` : ""}
      <p>${r.relation}</p>
      <div class="ref-links">
        ${(r.links || []).map(l => `<a href="${l.url}" target="_blank" rel="noopener">${l.label} ↗</a>`).join("")}
      </div>
    </article>
  `).join("");
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
  const rows = DATA.publications.filter(p => filter === "all" || (p.filter || "").toLowerCase().includes(filter.toLowerCase()));
  $("#pub-list").innerHTML = rows.map((p, index) => {
    const statusText = p.statusText || (p.status && p.status.toLowerCase().includes("under review")
      ? "Manuscript submitted; under review"
      : p.status && p.status.toLowerCase().includes("press")
        ? "Accepted / in press; DOI not assigned yet"
        : p.status || "Status not specified");
    const statusClass = p.status && p.status.toLowerCase().includes("published")
      ? "published"
      : p.status && p.status.toLowerCase().includes("under review")
        ? "underreview"
        : "inpress";
    const doiOrStatus = p.doi
      ? `<p class="doi-line"><b>DOI:</b> <a href="${p.doiUrl}" target="_blank" rel="noopener">${p.doi} ↗</a></p>`
      : `<p class="doi-line"><b>Status:</b> ${statusText}</p>`;

    return `
      <article class="pub-card full-publication-card">
        <div class="pub-topline">
          <span class="pub-number">${String(index + 1).padStart(2, "0")}</span>
          <span class="pub-badge ${statusClass}">${p.status}</span>
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
        ${doiOrStatus}
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
  renderFutureResearchPlan();
  renderEducation();
  renderPublications();
  renderProjects();
  renderSystems();
  renderExperience();
  renderReferences();
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


/* V125: final smooth anchor stability without layout change */
(function(){
  function activeHeaderOffset(){
    var isMobile = window.matchMedia("(max-width: 1100px)").matches;
    var mobileHeader = document.getElementById("mobile-fixed-header");
    var desktopHeader = document.getElementById("scroll-identity-header");

    if (isMobile && mobileHeader) {
      return Math.ceil(mobileHeader.getBoundingClientRect().height) + 30;
    }

    if (desktopHeader && getComputedStyle(desktopHeader).display !== "none") {
      return Math.ceil(desktopHeader.getBoundingClientRect().height) + 32;
    }

    return 112;
  }

  function closeMenu(){
    var sidebar = document.getElementById("sidebar") || document.querySelector(".sidebar");
    var btn = document.getElementById("menu-btn");

    if (sidebar) sidebar.classList.remove("open");
    document.body.classList.remove("menu-is-open");

    if (btn) {
      btn.setAttribute("aria-expanded", "false");
      btn.textContent = "Menu";
    }
  }

  function smoothScrollTo(target){
    if (!target) return;
    var top = target.getBoundingClientRect().top + window.pageYOffset - activeHeaderOffset();
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  }

  function bindAnchors(){
    document.querySelectorAll('a[href^="#"]').forEach(function(link){
      if (link.dataset.v125Bound === "1") return;
      link.dataset.v125Bound = "1";

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
        smoothScrollTo(target);

        if (history.pushState) history.pushState(null, "", href);
        else window.location.hash = href;
      }, true);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindAnchors);
  } else {
    bindAnchors();
  }

  window.addEventListener("resize", bindAnchors, { passive:true });
})();
