# Website Update System - Step by Step Guide

এই guide-এ তিনটা ভাগ আছে:

- **Part 1:** নতুন file GitHub-এ upload করা (এটুকু করলেই website CV অনুযায়ী update হয়ে যাবে)
- **Part 2:** Firebase setup (একবারই করতে হবে, ১৫-২০ মিনিট)
- **Part 3:** এরপর প্রতিদিনের কাজ - paper, project update করা

Firebase setup না করলেও Part 1-এর পরে website ঠিকমতো চলবে।

---

## Part 1: GitHub-এ file upload

1. Zip file-টা computer-এ extract করুন। ভিতরে `shovon-mandal.github.io` folder পাবেন।
2. Browser-এ যান: `https://github.com/shovon-mandal/shovon-mandal.github.io`
3. **Add file → Upload files** এ click করুন।
4. Extract করা folder-এর **ভিতরের সবকিছু** (`index.html`, `admin.html`, `assets`, `data`, `firestore.rules` ইত্যাদি) একসাথে select করে drag করে ছেড়ে দিন। Folder-সহ drag করলে ভিতরের structure ঠিক থাকে। একই নামের পুরনো file নিজে থেকে replace হয়ে যাবে।
5. নিচে commit message লিখুন: `CV update and Firebase editor` → **Commit changes**।
6. ২-৩ মিনিট পরে `https://shovon-mandal.github.io/` খুলে **Ctrl + Shift + R** (hard refresh) দিন।
7. Check করুন: Publications-এ ৮টা paper, আর **Download CV PDF** চাপলে নতুন PDF download হচ্ছে, যার শেষ page-এর নিচে "Last updated on ... | Downloaded on ..." লেখা।

---

## Part 2: Firebase setup (একবারই)

### ধাপ ১: Project তৈরি
1. `https://console.firebase.google.com` - এ `shovonmandal@gmail.com` দিয়ে login করুন।
2. **Create a project** → নাম দিন `shovon-portfolio` → Continue।
3. Google Analytics **off** করে দিন (লাগবে না) → **Create project**।
4. Free **Spark plan**-ই যথেষ্ট। কোনো card লাগবে না।

### ধাপ ২: Google login চালু করা
1. বাম menu থেকে **Build → Authentication → Get started**।
2. **Sign-in method** tab → **Google** → Enable → support email হিসেবে নিজের email দিন → **Save**।
3. একই page-এ **Settings** tab → **Authorized domains** → **Add domain** → লিখুন `shovon-mandal.github.io` → Add।

### ধাপ ৩: Database তৈরি
1. **Build → Firestore Database → Create database**।
2. Location: `asia-south1 (Mumbai)` বা `asia-southeast1 (Singapore)` - বাংলাদেশ থেকে কাছে। (পরে বদলানো যায় না, তবে যেকোনোটাই চলবে।)
3. **Start in production mode** → Create।
4. Database তৈরি হলে উপরে **Rules** tab-এ যান।
5. সেখানে যা লেখা আছে সব মুছে দিন। Zip-এর ভিতরের `firestore.rules` file-টা Notepad দিয়ে খুলে পুরো লেখা copy করে এখানে paste করুন।
6. **Publish** চাপুন।

এই rules-এর মানে: website সবাই পড়তে পারবে, কিন্তু লিখতে পারবে **শুধু** `shovonmandal@gmail.com`। অন্য কেউ login করলেও কিছু বদলাতে পারবে না।

### ধাপ ৪: Web config নেওয়া
1. বাম দিকে উপরে ⚙️ **Project settings**।
2. নিচে **Your apps** → **</>** (Web) icon।
3. App nickname: `portfolio` → "Firebase Hosting" tick **দেবেন না** → **Register app**।
4. একটা code দেখাবে, তার ভিতরে এরকম অংশ থাকবে:
   ```
   const firebaseConfig = {
     apiKey: "AIza....",
     authDomain: "shovon-portfolio.firebaseapp.com",
     projectId: "shovon-portfolio",
     storageBucket: "...",
     messagingSenderId: "...",
     appId: "..."
   };
   ```
   এই ৬টা value কোথাও copy করে রাখুন।

### ধাপ ৫: Config GitHub-এ বসানো
1. GitHub repository-তে যান → `assets/js/firebase-config.js` file খুলুন → ✏️ (Edit) icon।
2. `PASTE_...` লেখা জায়গাগুলোতে আপনার value বসান।
3. `enabled: false` বদলে **`enabled: true`** করুন।
4. **Commit changes**।

apiKey public repository-তে থাকলে ভয়ের কিছু নেই। এটা শুধু project চেনায়। কে লিখতে পারবে সেটা ধাপ ৩-এর rules ঠিক করে।

### ধাপ ৬: প্রথমবার publish
1. ২-৩ মিনিট পরে যান: `https://shovon-mandal.github.io/admin.html`
2. **Sign in with Google** → `shovonmandal@gmail.com` select করুন।
3. উপরে হলুদ message দেখাবে: "Firebase has no content yet..." - স্বাভাবিক।
4. উপরে ডানে **Publish changes** চাপুন।
5. "Published" দেখালে কাজ শেষ। এখন থেকে website Firebase থেকে data পড়বে।

---

## Part 3: প্রতিদিনের কাজ

সব কাজ `https://shovon-mandal.github.io/admin.html` থেকে। **কোনো কিছু বদলানোর পরে অবশ্যই উপরের Publish changes চাপবেন**, না চাপলে live হবে না।

### নতুন paper submit করলেন
1. **Papers** tab → **Add paper**।
2. Status: `Under Review`। Title, Authors (যেমন `A. Ghosh, S. Mandal, and R. Baidya`), Year, Short venue (`COMPAS 2026 - IEEE`), Full conference name দিন।
3. চাইলে "Show on website" tick রাখুন বা তুলে দিন। Under review paper সাধারণত CV-তে যায় না, তাই "Show in CV" tick নেই।
4. **Save to list** → **Publish changes**।

### Paper accept হলো
1. Papers list-এ সেই paper-এর পাশের dropdown থেকে `Accepted` select করুন।
2. System নিজেই CV-এর wording ("accepted for presentation at the"), type আর "Show in CV" ঠিক করে দেবে।
3. **Publish changes**।

### Paper publish হলো, DOI পেলেন
1. Dropdown থেকে `Published`।
2. **Edit** → DOI (যেমন `10.1109/ICCIT64611.2024.11021995`), Pages (`387-392`), Location দিন → Save।
3. **Publish changes**।

### Paper reject হলো / অন্য জায়গায় submit করবেন
- Reject হলে dropdown থেকে `Draft / rejected (hidden)` - website আর CV দুই জায়গা থেকেই লুকিয়ে যাবে, কিন্তু delete হবে না।
- অন্য conference-এ submit করলে **Edit** করে venue বদলে status আবার `Under Review` করুন।

### নতুন project
1. **Projects** tab → **Add project**।
2. Title, Type, Description, Tools, GitHub link দিন।
3. **Website** অংশে filter tag tick দিন (Research, Hardware ইত্যাদি)।
4. **CV** অংশে ঠিক করুন: Not in CV / Selected / Additional। CV bullet points লিখুন (প্রতি line-এ একটা)।
5. Save → **Publish changes**।

### Publish করার আগে CV দেখতে চান
উপরের **Preview CV** চাপুন। নতুন tab-এ PDF খুলবে।

### ভুল হয়ে গেলে
**Backups** tab → আগের version-এর পাশে **Restore into editor** → **Publish changes**। প্রতিবার publish-এর আগে আগের version নিজে থেকে save হয়।

### অন্য অংশ (profile, education, skills, honors)
- CV-এর লেখা: **CV details** tab। `**bold**`, `*italic*`, `[লেখা](link)` লিখে formatting করা যায়।
- Website-এর বাকি সব: **All data** tab (JSON)। সাবধানে edit করে **Apply** → **Publish changes**।

### Website-এর সংখ্যাগুলো
"Eight published or accepted conference papers" বা উপরের "4 Published / 4 Accepted" - এগুলো paper list থেকে নিজে গুনে বসে। Hand দিয়ে বদলাতে হবে না।

### মাঝে মাঝে backup (optional)
**All data → Download JSON** করে GitHub-এ `data/site-data.json` replace করে দিন। Firebase কোনো কারণে বন্ধ থাকলে website এই file থেকে চলবে।

---

## সমস্যা হলে

| সমস্যা | সমাধান |
|---|---|
| Login-এ "unauthorized domain" | Part 2, ধাপ ২.৩ - domain যোগ করা হয়নি |
| Publish চাপলে "Firebase refused the write" | Rules publish হয়নি, বা অন্য Google account দিয়ে login করেছেন |
| Admin page-এ "Firebase not connected" | `firebase-config.js`-এ `enabled: true` হয়নি বা value ভুল |
| Website-এ পুরনো তথ্য দেখাচ্ছে | Ctrl + Shift + R দিয়ে hard refresh |
| Admin page বন্ধ হয়ে গেলেও কাজ করতে চান | "Edit without Firebase" → কাজ শেষে Download JSON → GitHub-এ `data/site-data.json` replace |

---

## Part 4: GitHub থেকে নতুন লেখা (website text) আনা

Firebase-এর data Google-এর cloud-এ থাকে, আপনার computer বা GitHub-এ না। তাই git push করলে Firebase-এর paper বা project মুছে যায় না।

কিন্তু website আগে Firebase থেকে পড়ে। তাই GitHub-এ `data/site-data.json`-এ নতুন লেখা push করলেও সেটা নিজে থেকে live হয় না। নিয়ম হলো:

1. Push করার পরে `admin.html` খুলে login করুন।
2. উপরে message আসবে: "New website text is available from GitHub" → **Apply new text** চাপুন।
3. আপনার papers, co-authors আর CV details যেমন ছিল তেমনই থাকবে। শুধু About, Research Plan, Skills, Updates আর পুরনো project-এর description-এর লেখা বদলাবে।
4. **Publish changes** চাপুন।

**কখনো করবেন না:** All data tab-এ GitHub-এর `site-data.json` upload করে Apply করা। তাহলে admin panel থেকে যোগ করা paper মুছে যাবে। ভুল করে করলে Backups tab থেকে restore করুন।

---

## Part 5: Website-এর যেকোনো লেখা বদলানো

Admin panel-এর **Website text** tab-এ website-এর সব অংশ আলাদা আলাদা box-এ আছে:
Top section (sliding lines সহ), Profile links, Academic Snapshot, Fast Review, Number cards, About Me, Future Research Plan, Technical Skills, Honors, Education, Teaching Experience, References।

- উপরের button চাপলে সরাসরি সেই অংশে চলে যাবে।
- লেখা বদলান, তারপর **Publish changes** চাপুন।
- Education, Teaching Experience আর References-এর box JSON format-এ। ভুল হলে লাল লেখা দেখাবে, আর ঠিক না করা পর্যন্ত save হবে না।
