/* Firebase settings for the admin panel (admin.html) and for reading live content.

   It is SAFE to keep these values in a public repository. A Firebase web config only
   identifies the project; it does not give write access. Write access is controlled
   by the Firestore security rules in firestore.rules, which allow writes only from
   the admin Google account below.

   Step: paste the config from Firebase Console > Project settings > Your apps > Web app,
   then set enabled: true. Until then the site keeps using data/site-data.json. */

   
/* Firebase settings for the admin panel (admin.html) and for reading live content.
   It is safe to keep these values in a public repository. Write access is
   controlled by firestore.rules (only the admin Google account can write). */
window.PORTFOLIO_FIREBASE = {
  enabled: true,
  config: {
    apiKey: "AIzaSyBVrFbN3nHQnmM3lqZNiilFCDbsywCI8fQ",
    authDomain: "shovon-portfolio.firebaseapp.com",
    projectId: "shovon-portfolio",
    storageBucket: "shovon-portfolio.firebasestorage.app",
    messagingSenderId: "740253012838",
    appId: "1:740253012838:web:66d3d36fedb4862cee6ea7"
  },
  adminEmail: "shovonmandal@gmail.com",
  docPath: ["portfolio", "site"],
  historyCollection: "portfolio_history"
};