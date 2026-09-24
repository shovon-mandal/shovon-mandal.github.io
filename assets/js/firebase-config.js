/* Firebase settings for the admin panel (admin.html) and for reading live content.

   It is SAFE to keep these values in a public repository. A Firebase web config only
   identifies the project; it does not give write access. Write access is controlled
   by the Firestore security rules in firestore.rules, which allow writes only from
   the admin Google account below.

   Step: paste the config from Firebase Console > Project settings > Your apps > Web app,
   then set enabled: true. Until then the site keeps using data/site-data.json. */
window.PORTFOLIO_FIREBASE = {
  enabled: false,
  config: {
    apiKey: "PASTE_API_KEY",
    authDomain: "PASTE_PROJECT_ID.firebaseapp.com",
    projectId: "PASTE_PROJECT_ID",
    storageBucket: "PASTE_PROJECT_ID.appspot.com",
    messagingSenderId: "PASTE_SENDER_ID",
    appId: "PASTE_APP_ID"
  },
  adminEmail: "shovonmandal@gmail.com",
  docPath: ["portfolio", "site"],
  historyCollection: "portfolio_history"
};
