
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
const FALLBACK_DATA = {"meta":{"updatedAt":"2026-09-24T18:00:00+06:00","schema":2,"contentVersion":3},"site":{"name":"Shovon Mandal","firstName":"Shovon","lastName":"Mandal","title":"Academic Portfolio","role":"Lecturer, Department of Computer Science and Engineering","affiliation":"Northern University of Business and Technology Khulna, Bangladesh","email":"shovonmandal@gmail.com","cv":"assets/docs/Shovon_Mandal_CV.pdf","photo":"assets/img/profile.jpg","goalLabel":"Research Focus","goal":"My main research area is secure digital payment. In my B.Sc. and M.Sc. theses, I built blockchain-based payment systems and tested them with NFC and Arduino hardware. I also use machine learning as a tool for security problems, such as detecting network attacks. I plan to continue this research at the Ph.D. level, with a focus on transaction security for payment and IoT devices.","headline":"I work on securing digital payments and connected devices, using blockchain for transaction verification and machine learning for attack detection.","rotatingWords":[],"authorName":"S. Mandal"},"links":[{"label":"Faculty Profile","url":"https://nubtkhulna.ac.bd/sd/275/Shovon%20Mandal"},{"label":"Google Scholar","url":"https://scholar.google.com/citations?user=h6Imiq4AAAAJ&hl=en"},{"label":"ResearchGate","url":"https://www.researchgate.net/profile/Shovon-Mandal-2"},{"label":"ORCID","url":"https://orcid.org/0009-0003-6302-9484"},{"label":"GitHub","url":"https://github.com/shovon-mandal"},{"label":"LinkedIn","url":"https://www.linkedin.com/in/shovonmandal/"},{"label":"Email","url":"mailto:shovonmandal@gmail.com"}],"fastReview":[{"label":"Research Plan","target":"#future-research-plan"},{"label":"Publications","target":"#publications"},{"label":"Projects","target":"#projects"},{"label":"Experience","target":"#experience"}],"snapshot":[{"label":"B.Sc. CGPA","value":"3.80 out of 4.00"},{"label":"Academic Standing","value":"Highest Distinction"},{"label":"Teaching Experience","value":"4+ Years Undergraduate Teaching"},{"label":"Higher Study Goal","value":"Ph.D. or Thesis-Based M.S."},{"label":"Research Alignment","value":"Payment and IoT Security · Machine Learning for Security"}],"metrics":[{"value":"{{published}}","label":"Published Conference Papers","target":"#publications"},{"value":"{{inPress}}","label":"Accepted / In Press Papers","target":"#publications"},{"value":"4+","label":"Teaching Years","target":"#experience"},{"value":"4+","label":"Implementation Projects","target":"#projects"}],"researchFit":[],"profile":{"paragraphs":["I am a Lecturer in the Department of Computer Science and Engineering at Northern University of Business and Technology Khulna. I am also completing my M.Sc. Eng. at Khulna University of Engineering and Technology (KUET), where only my thesis defense is remaining.","My main research area is secure digital payment. In my B.Sc. thesis at BRAC University, I worked on a blockchain-based micropayment system for small cashless payments. In my M.Sc. thesis, I extended this idea with NFC and built a working prototype using Arduino and Python. This work was published at ICKECS 2024. I also worked on node confirmation in the IOTA Tangle, which was published at ICCIT 2024.","Besides security, I work with my colleagues on applied machine learning projects in natural language processing, medical imaging and computer vision. From these projects, I learned how to design experiments, compare models fairly and report the weak points of a result honestly. Now I am using this experience for security problems, such as detecting network attacks that a model has never seen during training."],"cards":[{"title":"Main Research Area","text":"Secure digital payment and transaction verification using blockchain, NFC and the IOTA Tangle.","target":"#publications"},{"title":"Publications","text":"{{AcceptedWord}} published or accepted conference papers{{reviewClause}}, including two first-author papers.","target":"#publications"},{"title":"Working Prototypes","text":"A blockchain and NFC payment prototype with Arduino hardware, and an IOTA-based web payment demo. The code is on GitHub.","target":"#projects"},{"title":"Teaching","text":"More than four years of university teaching in computer architecture, digital logic, object-oriented programming, databases and microcontrollers.","target":"#experience"}],"tags":["Secure Distributed Systems","Blockchain-Based Digital Payments","IoT and NFC Transaction Security","Applied Cryptography","Embedded Systems Security","Applied Machine Learning","Natural Language Processing","Explainable AI"],"strengths":[]},"education":[{"period":"Jul 2022 - Present","degree":"M.Sc. Eng. in Computer Science and Engineering","institution":"Khulna University of Engineering and Technology, Bangladesh","url":"https://www.kuet.ac.bd/","badge":"Only thesis defense remaining","items":["<strong>Academic Status:</strong> Only thesis defense remaining","<strong>Thesis:</strong> Blockchain Technology Based Smart E-Payment Strategy for Secure Cashless Payment","<strong>Supervisor:</strong> <a class='inline-academic-link' href='https://scholar.google.com/citations?user=w3eyrycAAAAJ&hl=en' target='_blank' rel='noopener'>Dr. Pintu Chandra Shill ↗</a>","<strong>Research Area:</strong> Secure Transaction Verification in Distributed Networks (Blockchain, NFC)","<strong>Relevant Coursework:</strong> Principles of Cryptography; Advanced Network Security; Cloud Computing; Neural Networks"]},{"period":"Spring 2018 - Spring 2022","degree":"B.Sc. in Computer Science and Engineering","institution":"BRAC University, Bangladesh","url":"https://www.bracu.ac.bd/","badge":"Highest Distinction","items":["<strong>CGPA:</strong> 3.80 out of 4.00","<strong>Academic Standing:</strong> Highest Distinction","<strong>Vice Chancellor's List:</strong> 5 consecutive semesters","<strong>Dean's List:</strong> 2 consecutive semesters","<strong>Thesis:</strong> Blockchain-based Micropayment System for Secured Cashless Small Payments","<strong>Supervisor:</strong> <a class='inline-academic-link' href='https://scholar.google.com/citations?user=t4GrJR4AAAAJ&hl=en' target='_blank' rel='noopener'>Md. Golam Rabiul Alam, PhD ↗</a>","<strong>Research Area:</strong> Applied Cryptography for Secure Distributed Systems"]}],"publications":[{"id":"p01","status":"Published","title":"Ensuring Security and Efficiency in Digital Payments using Blockchain with NFC","authors":"S. Mandal and P. C. Shill","year":"2024","venue":"ICKECS 2024 - IEEE","conference":"2024 International Conference on Knowledge Engineering and Communication Systems (ICKECS)","cvPrefix":"","location":"Chikkaballapur, India","pages":"1-7","doi":"10.1109/ICKECS61492.2024.10616703","type":"IEEE Conference Paper","role":"First author","area":"Blockchain, NFC, secure digital payment systems","detail":"Presents a blockchain- and NFC-based approach to improving security and efficiency in contactless digital payments.","publisher":"IEEE / DOI available","core":true,"keywords":"","showOnWebsite":true,"showOnCV":true},{"id":"p02","status":"Published","title":"Q-learning based Automated Message Multicast in Gossip Protocol for Node Confirmation in IOTA Tangle","authors":"M. Keya, S. Mandal, S. Dhar, H. M. Tahsin, M. Siam, A. Tahsin, M. G. R. Alam, M. Z. Uddin, et al.","cvAuthors":"M. Keya, S. Mandal, S. Dhar, H. M. Tahsin, et al.","year":"2024","venue":"ICCIT 2024 - IEEE","conference":"2024 27th International Conference on Computer and Information Technology (ICCIT)","cvPrefix":"in","location":"","pages":"387-392","doi":"10.1109/ICCIT64611.2024.11021995","type":"IEEE Conference Paper","role":"Co-author","area":"IOTA Tangle, distributed ledger, gossip protocol, Q-learning","detail":"Investigates Q-learning-guided message multicast for node confirmation in the IOTA Tangle.","publisher":"IEEE / DOI available","core":true,"keywords":"","showOnWebsite":true,"showOnCV":true},{"id":"p03","status":"Published","title":"Comparative Evaluation of Multiple CNN Architectures for Dermoscopic Skin Lesion Classification using ISIC Dataset","authors":"A. Ghosh, S. Mandal, M. J. Islam, K. M. Islam, S. Dhar, and R. Baidya","year":"2026","venue":"QPAIN 2026 - IEEE","conference":"2026 IEEE 2nd International Conference on Quantum Photonics, Artificial Intelligence & Networking (QPAIN)","cvPrefix":"","location":"Chittagong, Bangladesh","pages":"1-6","doi":"10.1109/QPAIN69676.2026.11545903","type":"IEEE Conference Paper","role":"Co-author","area":"Deep learning, medical image classification, CNN architectures","detail":"Compares multiple CNN architectures for dermoscopic skin-lesion classification using the ISIC dataset.","publisher":"IEEE / DOI available","core":false,"keywords":"","showOnWebsite":true,"showOnCV":true},{"id":"p04","status":"Published","title":"A Machine Learning and DEM-Based Approach for Predicting Sea Level Rise and Assessing Coastal Risk in Bangladesh Using AI Insights","authors":"A. Ghosh, F. T. Pinki, R. Baidya, F. Alam, and S. Mandal","year":"2026","venue":"CSNT 2026 - IEEE","conference":"2026 IEEE 15th International Conference on Communication Systems and Network Technologies (CSNT)","cvPrefix":"","location":"Al-Khobar, Saudi Arabia","pages":"199-204","doi":"10.1109/CSNT69054.2026.11502358","type":"IEEE Conference Paper","role":"Co-author","area":"Machine learning, DEM-based coastal risk prediction, AI insights","detail":"Applies machine learning and digital elevation data to sea-level-rise prediction and coastal-risk assessment in Bangladesh.","publisher":"IEEE / DOI available","core":false,"keywords":"","showOnWebsite":true,"showOnCV":true},{"id":"p05","status":"In press","title":"Revolutionizing Academic Learning and Research with the Integration of Leap Motion and ARCore in Android","authors":"S. Mandal et al.","year":"2025","venue":"16th International Conference on Computing, Communication and Networking Technologies (ICCCNT 2025), IIT Indore, Madhya Pradesh, India","conference":"16th International Conference on Computing, Communication and Networking Technologies (ICCCNT)","cvPrefix":"in","location":"Indore, India","pages":"","doi":"","type":"Conference Paper","role":"First author","area":"ARCore, Leap Motion, Android, academic learning technology","detail":"Examines the integration of Leap Motion and ARCore in an Android-based academic learning and research environment.","publisher":"ICCCNT 2025 / In press","core":false,"keywords":"icccnt implementation arcore android learning technology","showOnWebsite":true,"showOnCV":true},{"id":"p06","status":"In press","title":"Advancing Sentiment Analysis Through Natural Language Processing and Deep Learning","authors":"A. Ghosh, S. Mandal, et al.","year":"2025","venue":"16th International Conference on Computing, Communication and Networking Technologies (ICCCNT 2025), IIT Indore, Madhya Pradesh, India","conference":"16th International Conference on Computing, Communication and Networking Technologies (ICCCNT)","cvPrefix":"in","location":"Indore, India","pages":"","doi":"","type":"Conference Paper","role":"Co-author","area":"Natural language processing, sentiment analysis, deep learning","detail":"Evaluates natural-language-processing and deep-learning methods for sentiment analysis.","publisher":"ICCCNT 2025 / In press","core":false,"keywords":"icccnt nlp sentiment analysis deep learning","showOnWebsite":true,"showOnCV":true},{"id":"p07","status":"Accepted","statusText":"Accepted for presentation; DOI not assigned yet","title":"Beyond Single Transformers: A BanglaBERT-XLM-RoBERTa Stacking Framework for Code-Mixed Emotion Recognition","authors":"A. Ghosh, A. Datta, S. Mandal, P. M. Swadesh, K. A. Ahmed, and M. H. Molla","year":"2026","venue":"3rd IEEE International Conference on Computing, Applications and Systems (COMPAS 2026), Dhaka, Bangladesh","conference":"3rd IEEE International Conference on Computing, Applications and Systems (COMPAS)","cvPrefix":"accepted for presentation at the","location":"Dhaka, Bangladesh","pages":"","doi":"","type":"Conference Paper","role":"Co-author","area":"Code-mixed NLP, emotion recognition, transformer stacking, class imbalance","detail":"Combines BanglaBERT and XLM-RoBERTa through a logistic-regression meta-classifier for six-class emotion recognition in Banglish text.","publisher":"COMPAS 2026 / Accepted","core":false,"keywords":"nlp code mixed emotion recognition banglabert xlm roberta stacking","showOnWebsite":true,"showOnCV":true},{"id":"p08","status":"Accepted","statusText":"Accepted for presentation; DOI not assigned yet","title":"Automated Visual Inspection of Tilapia Fish Quality Using CNN and Transfer Learning","authors":"M. H. Islam, N. A. S. Jiku, S. Mandal, P. M. Swadesh, and A. Ghosh","year":"2026","venue":"OMLET 2026 - IEEE","conference":"2026 IEEE International Conference on Optics, Machine Learning and Emerging Technology (OMLET)","cvPrefix":"accepted for presentation at the","location":"","pages":"","doi":"","type":"Conference Paper","role":"Co-author","area":"Computer vision, CNN, transfer learning, automated quality inspection","detail":"Applies CNN models and transfer learning to automated visual inspection of tilapia fish quality.","publisher":"OMLET 2026 / Accepted","core":false,"keywords":"computer vision cnn transfer learning","showOnWebsite":true,"showOnCV":true},{"id":"p09","status":"Under Review","statusText":"Manuscript submitted; under review","title":"Chameleon Words in Cross-Domain Sentiment Analysis: An Explainable Framework with LLM-Based Style Transfer","authors":"A. Ghosh, M. H. Molla, P. M. Swadesh, S. Mandal, K. A. Ahmed, and A. Datta","year":"2026","venue":"3rd IEEE International Conference on Computing, Applications and Systems (COMPAS 2026), Dhaka, Bangladesh","conference":"3rd IEEE International Conference on Computing, Applications and Systems (COMPAS)","cvPrefix":"submitted to the","location":"Dhaka, Bangladesh","pages":"","doi":"","type":"Conference Manuscript","role":"Co-author","area":"Cross-domain sentiment analysis, explainable AI, SHAP, LLM style transfer","detail":"Studies sentiment-polarity reversals across domains and evaluates explainability and LLM-based style transfer under zero-target-supervision conditions.","publisher":"Submitted to COMPAS 2026","core":false,"keywords":"nlp sentiment analysis explainable ai llm style transfer domain adaptation","showOnWebsite":false,"showOnCV":false}],"projects":[{"title":"Blockchain and NFC-Based Secure Cashless Payment Prototype","type":"Thesis-Supporting Research Implementation","category":"Secure Payments · Contactless Interaction · Hardware Integration","filter":"research hardware blockchain connected device secure payment","description":"A working prototype where an NFC card starts a payment and the transaction is verified on a blockchain. I built it with Arduino and Python as part of my M.Sc. thesis.","tools":["Blockchain","NFC module","Arduino","Python"],"highlights":["Arduino and Python modules for transaction processing and device-level verification.","Hardware tests of the full payment flow, from NFC tap to blockchain record.","Related paper: ICKECS 2024."],"url":"https://github.com/shovon-mandal/NFC","cvSection":"selected","cvType":"Thesis-Supporting Research Implementation","cvBullets":["Developed a blockchain- and NFC-based secure payment prototype with Arduino hardware experimentation.","Implemented Arduino and Python modules for transaction processing, device-level verification, and embedded system testing."],"relatedOutput":"ICKECS 2024 paper on Blockchain with NFC.","showOnWebsite":true,"id":"r01"},{"title":"IOTA-Based Decentralized Trust and Transaction Verification System","type":"Web-Based Research Prototype","category":"Distributed Ledger · Web Transaction","filter":"research distributed ledger web transaction","description":"A web prototype that shows how a payment can move through the IOTA Tangle without a central server. It has frontend and backend parts for testing.","tools":["IOTA Tangle","JavaScript","Web backend"],"highlights":["Payment interaction and decentralized transaction flow in the browser.","Frontend and backend components for demonstration and testing.","Related paper: ICCIT 2024."],"url":"https://github.com/shovon-mandal/IOTA-Website","cvSection":"selected","cvType":"Web-Based Research Prototype","cvBullets":["Developed a web-based prototype to demonstrate IOTA-supported payment interaction and decentralized transaction flow.","Implemented front-end and backend components for payment demonstration, user interaction, and experimental validation."],"relatedOutput":"ICCIT 2024 paper on IOTA Tangle.","showOnWebsite":true,"id":"r02"},{"title":"Academic Routine Management System with Google Sheets and Apps Script","type":"Academic Automation","category":"Google Apps Script · Google Sheets · Academic Workflow","filter":"automation apps script google sheets academic","description":"A Google Sheets and Apps Script system for managing course offerings and class routines. Each faculty member or section can see their own routine through a protected view and download it as PDF.","tools":["Google Apps Script","Google Sheets","PDF generation"],"highlights":["Faculty-wise and section-wise routine search.","Protected views so each user sees only their own part.","PDF copy of any routine in one click."],"url":"https://github.com/shovon-mandal/academic-routine-management-appscript","cvSection":"none","showOnWebsite":true,"cvType":"Academic Automation","cvBullets":[],"relatedOutput":"","id":"r03"},{"title":"Python-Based Discord Server Management Bot for Academic Communication","type":"Academic Communication Automation","category":"Python · Discord Bot · Role Management","filter":"automation python discord bot communication","description":"A Python bot for managing a class Discord server. It verifies students, gives roles, and sends announcements and reminders.","tools":["Python","Discord Bot API"],"highlights":["Student verification before joining class channels.","Automatic role assignment.","Scheduled announcements and reminders."],"url":"https://github.com/shovon-mandal/academic-discord-management-bot","cvSection":"none","showOnWebsite":true,"cvType":"Academic Communication Automation","cvBullets":[],"relatedOutput":"","id":"r04"},{"title":"Student Management Android Application","type":"Course Project","category":"Android · Mobile Application","filter":"android mobile application","description":"Android-based student management application developed using Android Studio.","tools":["Android Studio","Java"],"highlights":["Developed an Android-based student management application using Android Studio."],"url":"","showOnWebsite":false,"cvSection":"additional","cvType":"Course Project","cvBullets":["Developed an Android-based student management application using Android Studio."],"relatedOutput":"","id":"r05"},{"title":"Embedded Hardware Prototypes","type":"Course and Hardware Projects","category":"Microcontroller · Hardware Interfacing","filter":"hardware embedded microcontroller","description":"Traffic-light and SIM-enabled fire-alarm prototypes using microcontroller-based interfacing.","tools":["Microcontroller","Hardware interfacing"],"highlights":["Built traffic-light and SIM-enabled fire-alarm prototypes using microcontroller-based interfacing."],"url":"","showOnWebsite":false,"cvSection":"additional","cvType":"Course and Hardware Projects","cvBullets":["Built traffic-light and SIM-enabled fire-alarm prototypes using microcontroller-based interfacing."],"relatedOutput":"","id":"r06"}],"systems":[],"experience":[{"period":"Mar 2024 - Present","title":"Lecturer, Department of Computer Science and Engineering","place":"Northern University of Business and Technology Khulna, Bangladesh","roleLabel":"Lecturer","roleClass":"current-university-teaching","text":"Current university teaching role covering undergraduate CSE theory and laboratory teaching, course material preparation, student assessment, mentoring, and student research/project supervision.","courseHeading":"Courses Taught","courses":["Computer Architecture","Digital Logic Design","Object-Oriented Programming with Java","Technical Writing","Linear Programming and Combinatorial Optimization","Digital Logic Design Lab","Linear Programming and Combinatorial Optimization Lab"],"responsibilityHeading":"Teaching, Assessment, and Supervision","responsibilities":["Theory lecture delivery","Lab work and practical class support","Question and assessment preparation","Answer-script and assignment evaluation","Student mentoring","Student research and project supervision"],"placeUrl":"https://nubtkhulna.ac.bd/","durationStart":"2024-03","durationEnd":"present","durationLabel":"Duration"},{"period":"Jul 2022 - Jun 2024","title":"Lecturer (Adjunct), Department of Computer Science and Engineering","place":"Imperial College of Engineering, Khulna, Bangladesh - Affiliated with Rajshahi University, Bangladesh","roleLabel":"Adjunct Lecturer","roleClass":"role-adjunct","text":"Two years of undergraduate teaching experience at Imperial College of Engineering, Khulna, Bangladesh, affiliated with Rajshahi University, Bangladesh. Responsibilities included CSE theory lecture support, lab work, course assistance, assessment support, and student mentoring.","courseHeading":"Courses Taught","courses":["Database Management Systems","Computer Peripherals and Interfacing","Computer Architecture and Organization","Computer Graphics","Web Engineering","Microprocessor and Microcontrollers"],"responsibilityHeading":"Instructional Responsibilities","responsibilities":["Theory class instruction","Lab work and practical session support","Assessment preparation","Student performance evaluation","Project guidance","Academic support"],"placeUrl":"https://www.imperial.edu.bd/","durationStart":"2022-07","durationEnd":"2024-06","durationLabel":"Duration"},{"period":"Jul 2023 - Dec 2023","title":"Teaching Assistant, Department of Computer Science and Engineering","place":"Khulna University of Engineering & Technology, Bangladesh","roleLabel":"Teaching Assistant","roleClass":"role-ta","text":"Assisted course teachers with laboratory sessions, assignment checking, evaluation support, academic record preparation, student guidance, and course-related instructional activities.","courseHeading":"Courses Assisted","courses":["Embedded Systems","Electronic Devices and Circuits"],"responsibilityHeading":"Teaching Assistant Support","responsibilities":["Assisted course teachers","Supported laboratory sessions","Checked assignments","Helped with evaluation","Prepared academic records","Guided students during course activities"],"placeUrl":"https://www.kuet.ac.bd/","durationStart":"2023-07","durationEnd":"2023-12","durationLabel":"Duration"},{"period":"Feb 2022 - Apr 2022","title":"Student Tutor, Department of Computer Science and Engineering","place":"BRAC University, Bangladesh","roleLabel":"Student Tutor","roleClass":"role-tutor","text":"Helped students understand course materials, supported problem-solving practice, assisted the course instructor with assignment checking, and provided academic support during tutorials.","courseHeading":"Tutorial Course","courses":["Electronic Devices and Circuits"],"responsibilityHeading":"Student Tutor Support","responsibilities":["Helped students understand course topics","Supported tutorial problem solving","Assisted the course instructor","Checked assignments","Provided student academic support"],"placeUrl":"https://www.bracu.ac.bd/","durationStart":"2022-02","durationEnd":"2022-04","durationLabel":"Duration"}],"skills":[{"title":"Programming","icon":"⌘","items":["Python","Java","C","MATLAB","MIPS Assembly","JavaScript"]},{"title":"Security and Distributed Systems","icon":"◈","items":["Applied cryptography","Blockchain-based payment systems","NFC transaction security","IOTA Tangle","Network security fundamentals"]},{"title":"Web, Database, and Applications","icon":"▣","items":["HTML / CSS / JavaScript","PHP / Laravel","MySQL","Android Studio"]},{"title":"Research and Data Tools","icon":"✎","items":["LaTeX","SPSS","Microsoft Excel","Google Sheets","Git","API integration"]},{"title":"Embedded and Hardware","icon":"▧","items":["Arduino prototyping","NFC / RFID modules","Microcontroller interfacing","Embedded systems","Digital electronics"]},{"title":"Academic Automation","icon":"◆","items":["Google Apps Script","Google Sheets automation","Python Discord bot"]}],"repositorySkills":[],"honors":{"Honors and Scholarships":["Highest Distinction - BRAC University","Vice Chancellor's List - BRAC University (5 consecutive semesters)","Dean's List - BRAC University (2 consecutive semesters)","Merit-based Scholarship - BRAC University","Merit-based Scholarship - Junior School Certificate, Jashore Board"],"Leadership and Service":["Judge, Project Showcasing - CSE Fest 2025","Executive Member - BRAC University Computer Club (2018-2020)","Executive Member - Robotics Club of BRAC University (2018-2020)","Executive Member - BRACU Mongol Tori, Next Generation Mars Rover Team 4.0 (2019-2020)"]},"futureResearchPlan":{"lead":"In the future, I want to work on transaction security for payment and IoT devices. I also want to use machine learning in a careful way to detect attacks on these systems.","cards":[{"title":"Lightweight Security for Payment Devices","text":"NFC readers and small IoT devices have limited memory, power and processing speed. I want to study authentication and transaction verification methods that can run on such devices without making the payment slow."},{"title":"Attack Detection That Handles New Attacks","text":"Many intrusion detection models report very high accuracy, but they fail when a new type of attack appears. I want to build detection methods that can report unknown attacks and explain why they made a decision."},{"title":"Build, Measure and Compare","text":"I prefer to test an idea with a real prototype and a fair comparison. That means a clear threat model, measured latency and cost, and comparison with strong baseline methods."}]},"references":[{"name":"Dr. Pintu Chandra Shill","role":"M.Sc. Eng. Thesis Supervisor and Research Co-author","affiliation":"Professor, Department of Computer Science and Engineering, KUET, Bangladesh","relation":"Supervised the M.Sc. Eng. thesis direction on blockchain-based secure payment systems and co-authored the ICKECS 2024 paper on blockchain with NFC.","links":[{"label":"Google Scholar","url":"https://scholar.google.com/citations?user=w3eyrycAAAAJ&hl=en"}]},{"name":"Md. Golam Rabiul Alam, PhD","role":"B.Sc. Thesis Supervisor and Research Co-author","affiliation":"Professor, Department of Computer Science and Engineering, BRAC University, Bangladesh","relation":"Supervised the B.Sc. thesis on blockchain-based micropayment systems and co-authored the ICCIT 2024 paper on IOTA Tangle and gossip-protocol-based node confirmation.","links":[{"label":"Google Scholar","url":"https://scholar.google.com/citations?user=t4GrJR4AAAAJ&hl=en"}]}],"referencesNote":"Academic references are available upon request.","coauthors":{"P. C. Shill":"https://scholar.google.com/citations?user=w3eyrycAAAAJ&hl=en","M. Keya":"https://scholar.google.com/citations?user=pPg7H2YAAAAJ&hl=en","A. Tahsin":"https://scholar.google.com/citations?user=Ke_Yly4AAAAJ&hl=en","M. G. R. Alam":"https://scholar.google.com/citations?user=t4GrJR4AAAAJ&hl=en","M. Z. Uddin":"https://scholar.google.com/citations?user=YFu7iB8AAAAJ&hl=en","A. Ghosh":"https://scholar.google.com/citations?user=ARzTQjIAAAAJ&hl=en"},"cv":{"fileName":"Shovon_Mandal_CV.pdf","headerLine":"Lecturer, Department of Computer Science and Engineering | Northern University of Business and Technology Khulna, Bangladesh","email":"shovonmandal@gmail.com","links":[{"label":"Academic Website","url":"https://shovon-mandal.github.io/"},{"label":"ResearchGate","url":"https://www.researchgate.net/profile/Shovon-Mandal-2"},{"label":"Google Scholar","url":"https://scholar.google.com/citations?user=h6Imiq4AAAAJ&hl=en"},{"label":"GitHub","url":"https://github.com/shovon-mandal"},{"label":"LinkedIn","url":"https://www.linkedin.com/in/shovonmandal/"},{"label":"ORCID","url":"https://orcid.org/0009-0003-6302-9484"}],"researchProfile":"Computer Science and Engineering lecturer and graduate researcher working on secure distributed systems and applied intelligent computing. My research includes blockchain-based digital payments, NFC and IoT transaction security, IOTA-based decentralized communication, embedded systems security, applied machine learning, natural language processing, and explainable AI. I have authored peer-reviewed conference publications in distributed systems, cybersecurity, machine learning, NLP, and AI-enabled applications, with additional manuscripts currently under review. I am interested in pursuing Ph.D. or thesis-based M.S. opportunities aligned with these research areas, with research assistantship or teaching assistantship support.","researchInterests":"Secure Distributed Systems; Blockchain-Based Digital Payments; IoT and NFC Transaction Security; Applied Cryptography; Embedded Systems Security; Applied Machine Learning; Natural Language Processing; Explainable AI.","education":[{"title":"M.Sc. Eng. in Computer Science and Engineering","url":"https://www.kuet.ac.bd/","period":"Jul 2022 - Present","institution":"Khulna University of Engineering and Technology, Bangladesh","lines":["**Status:** Only thesis defense remaining | **Thesis:** Blockchain Technology Based Smart E-Payment Strategy for Secure Cashless Payment","**Supervisor:** [Dr. Pintu Chandra Shill](https://scholar.google.com/citations?user=w3eyrycAAAAJ&hl=en) | **Research Area:** Secure Transaction Verification in Distributed Networks (Blockchain, NFC)","**Relevant Coursework:** Principles of Cryptography; Advanced Network Security; Cloud Computing; Neural Networks."]},{"title":"B.Sc. in Computer Science and Engineering","url":"https://www.bracu.ac.bd/","period":"Spring 2018 - Spring 2022","institution":"BRAC University, Bangladesh","lines":["**CGPA:** 3.80/4.00 | **Academic Standing:** Highest Distinction","**Thesis:** Blockchain-based Micropayment System for Secured Cashless Small Payments","**Supervisor:** [Md. Golam Rabiul Alam, PhD](https://scholar.google.com/citations?user=t4GrJR4AAAAJ&hl=en) | **Research Area:** Applied Cryptography for Secure Distributed Systems"]}],"showUnderReview":false,"experience":[{"title":"Lecturer, Department of CSE","url":"https://nubtkhulna.ac.bd/","place":"Northern University of Business and Technology Khulna, Bangladesh","period":"Mar 2024 - Present","bullets":["Teach undergraduate CSE courses and laboratories in computer architecture, digital logic, OOP, technical writing, and optimization.","Prepare course materials, assessments, lab tasks, and support student mentoring and research engagement."],"lines":["**Courses Taught:** Computer Architecture; Digital Logic Design; Object-Oriented Programming with Java; Technical Writing; Linear Programming and Combinatorial Optimization; Digital Logic Design Lab; Linear Programming and Combinatorial Optimization Lab"]},{"title":"Lecturer (Adjunct), Department of CSE","url":"https://www.imperial.edu.bd/","place":"Imperial College of Engineering, Khulna, Bangladesh","period":"Jul 2022 - Jun 2024","bullets":["Delivered undergraduate lectures, laboratory sessions, assessments, and academic support for core CSE courses."],"lines":["**Courses Taught:** Database Management Systems; Computer Peripherals and Interfacing; Computer Architecture and Organization; Computer Graphics; Web Engineering; Microprocessor and Microcontrollers"]},{"title":"Teaching Assistant, Department of CSE","url":"https://www.kuet.ac.bd/","place":"Khulna University of Engineering and Technology, Bangladesh","period":"Jul 2023 - Dec 2023","bullets":["Assisted faculty members in laboratory instruction, assignment evaluation, academic record preparation, and student support."],"lines":["**Courses Assisted:** Embedded Systems; Electronic Devices and Circuits"]},{"title":"Student Tutor, Department of CSE","url":"https://www.bracu.ac.bd/","place":"BRAC University, Bangladesh","period":"Feb 2022 - Apr 2022","bullets":["Provided individual and group academic support to undergraduate students through tutoring sessions and guided academic assistance."],"lines":["**Courses Assisted:** Electronic Devices and Circuits"]}],"skills":["**Programming:** Python, Java, C, MATLAB, MIPS Assembly, JavaScript","**Web and Database:** MySQL, PHP, Laravel, HTML, CSS, JavaScript","**Research or Data Tools:** LaTeX, SPSS, Microsoft Excel, Google Sheets, Git, API integration, workflow automation","**Systems and Hardware:** Arduino prototyping, NFC payment modules, embedded systems, hardware interfacing, digital electronics","**Blockchain and Security:** Blockchain security, applied cryptography, secure distributed systems, IOTA-based trust mechanisms","**Languages:** English, Bengali (Native)"],"honors":["Highest Distinction, BRAC University.","Vice Chancellor's List, BRAC University - 5 consecutive semesters.","Dean's List, BRAC University - 2 consecutive semesters.","Merit-based Scholarship, BRAC University.","Judge, Project Showcasing - CSE Fest 2025","Executive Member, BRAC University Computer Club.","Executive Member, Robotics Club of BRAC University.","Executive Member, BRACU Mongol Tori, Next Generation Mars Rover Team 4.0."],"footerNote":"References and supporting documents are available upon request."},"news":[{"date":"Aug 2026","text":"Submitted a paper on explainable network intrusion detection with unknown-attack rejection to IEEE WIECON-ECE 2026."},{"date":"2026","text":"Paper on automated tilapia fish quality inspection accepted at IEEE OMLET 2026."},{"date":"2026","text":"Paper on BanglaBERT and XLM-RoBERTa stacking for code-mixed emotion recognition accepted at IEEE COMPAS 2026."},{"date":"2026","text":"Papers published in IEEE QPAIN 2026 and IEEE CSNT 2026."}]};

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
let DATA = FALLBACK_DATA;
let rotateIndex = 0;

let UPDATED_AT = null;
let DATA_SOURCE = "fallback";

/* Order: live Firestore content -> data/site-data.json -> built-in fallback */
async function loadData() {
  let raw = null;
  const remote = window.PortfolioCore ? await PortfolioCore.loadRemote(4000) : null;
  if (remote && remote.data) {
    raw = remote.data; UPDATED_AT = remote.updatedAt; DATA_SOURCE = "firebase";
  } else {
    try {
      const res = await fetch("data/site-data.json", { cache: "no-store" });
      if (!res.ok) throw new Error("JSON fetch failed");
      raw = await res.json(); DATA_SOURCE = "json";
    } catch (err) {
      raw = FALLBACK_DATA;
    }
    UPDATED_AT = raw.meta && raw.meta.updatedAt;
  }
  window.PORTFOLIO_RAW = raw;
  DATA = window.PortfolioCore ? PortfolioCore.prepare(raw) : raw;
  window.PORTFOLIO_DATA = DATA;
  window.PORTFOLIO_UPDATED_AT = UPDATED_AT;
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
  $("#goal-rotate").hidden = !words.length;
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
  if (!$("#research-fit-list") || !(DATA.researchFit || []).length) return;
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
  if ($("#strength-list")) $("#strength-list").innerHTML = (DATA.profile.strengths || []).map(s => `<li>${s}</li>`).join("");
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

function pubHaystack(p) {
  const kind = PortfolioCore.statusKind(p.status);
  const statusWords = { published: "published", accepted: "accepted", inpress: "accepted in press", review: "under review" }[kind] || "";
  return `${statusWords} ${p.core ? "core" : ""} ${p.filter || ""} ${p.keywords || ""}`.toLowerCase();
}

function renderPublications(filter = "all") {
  const C = PortfolioCore;
  const me = (DATA.site && DATA.site.authorName) || "S. Mandal";
  const rows = C.websitePubs(DATA).filter(p => filter === "all" || pubHaystack(p).includes(filter.toLowerCase()));
  $("#pub-list").innerHTML = rows.map((p, index) => {
    const kind = C.statusKind(p.status);
    const statusText = p.statusText || (kind === "review"
      ? "Manuscript submitted; under review"
      : kind === "inpress" || kind === "accepted"
        ? "Accepted / in press; DOI not assigned yet"
        : p.status || "Status not specified");
    const statusClass = kind === "published" ? "published" : kind === "review" ? "underreview" : "inpress";
    const doiLink = p.doiUrl || C.doiUrl(p.doi);
    const doiOrStatus = p.doi
      ? `<p class="doi-line"><b>DOI:</b> <a href="${doiLink}" target="_blank" rel="noopener">${p.doi} ↗</a></p>`
      : `<p class="doi-line"><b>Status:</b> ${statusText}</p>`;

    return `
      <article class="pub-card full-publication-card">
        <div class="pub-topline">
          <span class="pub-number">${String(index + 1).padStart(2, "0")}</span>
          <span class="pub-badge ${statusClass}">${p.status}</span>
        </div>
        <h3>${p.title}</h3>
        <p class="pub-authors">${C.authorsHtml(p.authors, DATA.coauthors, me)}</p>
        <div class="pub-detail-grid">
          <span><b>Year</b>${p.year || ""}</span>
          <span><b>Venue</b>${p.venue || p.conference || ""}</span>
          <span><b>Type</b>${p.type || "Conference Paper"}</span>
          <span><b>Role</b>${p.role || "Research contributor"}</span>
          <span><b>Research Area</b>${p.area || "Computer Science and Engineering"}</span>
          <span><b>Publisher / Status</b>${p.publisher || p.status}</span>
        </div>
        ${doiOrStatus}
        ${p.detail ? `<p class="pub-impact">${p.detail}</p>` : ""}
      </article>
    `;
  }).join("") || `<p class="lead">No publications in this category yet.</p>`;
}

function renderProjects(filter = "all") {
  const list = PortfolioCore.websiteProjects(DATA);
  const rows = list.filter(p => filter === "all" || `${p.title} ${p.type} ${p.category} ${p.filter || ""} ${(p.tools || []).join(" ")}`.toLowerCase().includes(filter.toLowerCase()));
  $("#project-list").innerHTML = rows.map(p => `
    <article class="proj-card">
      <p class="proj-type">${p.type || ""}${p.category ? " · " + p.category : ""}</p>
      <h3>${p.title}</h3>
      <p>${p.description || ""}</p>
      ${(p.highlights || []).length ? `<ul>${p.highlights.map(h => `<li>${h}</li>`).join("")}</ul>` : ""}
      <div class="tool-row">${(p.tools || []).map(t => `<span class="tool">${t}</span>`).join("")}</div>
      ${p.url ? `<div class="proj-foot"><a class="repo-btn" href="${p.url}" target="_blank" rel="noopener">GitHub Repository</a></div>` : ""}
    </article>
  `).join("") || `<p class="lead">No projects in this category yet.</p>`;
}

function renderNews() {
  const el = $("#news-list");
  if (!el) return;
  const items = DATA.news || [];
  const sec = $("#news");
  if (sec) sec.hidden = !items.length;
  el.innerHTML = items.map(n => `
    <article class="sys-row"><span class="sys-n">✦</span><div><h3>${n.date || ""}</h3><p>${n.text || ""}</p></div></article>
  `).join("");
}

function renderSystems() {
  if (!$("#systems-list") || !(DATA.systems || []).length) return;
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

  if ($("#repository-skills")) $("#repository-skills").innerHTML = (DATA.repositorySkills || []).map(r => `
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

function hideEmptyPubFilters() {
  const pubs = PortfolioCore.websitePubs(DATA);
  $$('.filt[data-scope="pub"]').forEach(btn => {
    const f = btn.dataset.filter;
    if (f === "all") return;
    btn.hidden = !pubs.some(p => pubHaystack(p).includes(f.toLowerCase()));
  });
}

function setupFilters() {
  hideEmptyPubFilters();
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
  renderNews();
  renderExperience();
  renderReferences();
  renderSkills();
  renderHonors();
  setupFilters();
  setupNavigation();
  setupReveal();
  setupContact();
  setupCvDownload();
  $("#yr").textContent = new Date().getFullYear();
  const upd = $("#last-updated");
  if (upd && UPDATED_AT && window.PortfolioCore) upd.textContent = "Last updated: " + PortfolioCore.formatDate(UPDATED_AT);
}

/* ---------- Download CV: builds a fresh PDF from the latest content ---------- */
let jsPdfLoading = null;
function loadJsPdf() {
  if (window.jspdf && window.jspdf.jsPDF) return Promise.resolve();
  if (jsPdfLoading) return jsPdfLoading;
  jsPdfLoading = new Promise((resolve, reject) => {
    const sc = document.createElement("script");
    sc.src = "assets/vendor/jspdf.umd.min.js";
    sc.onload = resolve;
    sc.onerror = () => { jsPdfLoading = null; reject(new Error("jsPDF failed to load")); };
    document.head.appendChild(sc);
  });
  return jsPdfLoading;
}

function isCvLink(a) {
  return a && a.tagName === "A" && (a.hasAttribute("data-cv-download") || /Shovon_Mandal_CV\.pdf/i.test(a.getAttribute("href") || ""));
}

function setupCvDownload() {
  let busy = false;
  document.addEventListener("click", async (e) => {
    const a = e.target.closest && e.target.closest("a");
    if (!isCvLink(a) || !window.CVPDF) return;
    e.preventDefault();
    e.stopPropagation();
    if (busy) return;
    busy = true;
    const oldText = a.textContent;
    a.setAttribute("aria-busy", "true");
    if (oldText.length > 3) a.textContent = "Preparing CV...";
    try {
      await loadJsPdf();
      const doc = CVPDF.build(DATA, { updatedAt: UPDATED_AT, downloadedAt: new Date(), siteUrl: "https://shovon-mandal.github.io/" });
      doc.save((DATA.cv && DATA.cv.fileName) || "Shovon_Mandal_CV.pdf");
    } catch (err) {
      console.error("CV generation failed, opening the stored PDF instead.", err);
      window.open("assets/docs/Shovon_Mandal_CV.pdf", "_blank", "noopener");
    } finally {
      a.textContent = oldText;
      a.removeAttribute("aria-busy");
      busy = false;
    }
  }, true);
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
    "news",
    "future-research-plan",
    "education",
    "publications",
    "projects",
    "skills",
    "experience",
    "honors",
    "contact"
  ];

  const trackedTargets = trackedIds
    .map(id => document.getElementById(id))
    .filter(Boolean);

  const labelMap = {
    home: "Overview",
    "research-profile": "About",
    news: "Updates",
    "future-research-plan": "Research Plan",
    education: "Education",
    publications: "Publications",
    projects: "Projects",
    skills: "Skills",
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
