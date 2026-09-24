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
