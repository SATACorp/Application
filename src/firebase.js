// UserModel, LoginModel, LeaderboardModel, and QuizModel initialized
// through Firebase  that will be initialized here.
import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: "sendnews-acf7f",
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_measurementId,
  newsApiKey: process.env.REACT_APP_NEWS_API_KEY
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.db = app.firestore();
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }

  async register(name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: name
    });
  }

  isInitialized() {
    return new Promise(resolve => {
      this.auth.onAuthStateChanged(resolve);
    });
  }

  getCurrentUsername() {
    return this.auth.currentUser && this.auth.currentUser.displayName;
  }

  getCurrentUser() {
    if (this.auth.currentUser) {
      return this.auth.currentUser;
    }
  }

  getCurrrentUID() {
    this.auth.onAuthStateChanged(user => {
      if (user) {
        if (this.auth.currentUser && this.auth.currentUser.uid) {
          return this.auth.currentUser.uid;
        }
      }
    });
  }

  isLoggedIn(user) {
    this.auth.onAuthStateChanged(user => {
      if (user != null) {
        return true;
      }
    });
    return false;
  }
}

export default new Firebase();
