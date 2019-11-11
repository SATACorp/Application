// UserModel, LoginModel, LeaderboardModel, and QuizModel initialized
// through Firebase  that will be initialized here.
import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCsbJbB-RtogNTySTpAaqfrFi4KfwI54Jc",
  authDomain: "sendnews-acf7f.firebaseapp.com",
  databaseURL: "https://sendnews-acf7f.firebaseio.com",
  projectId: "sendnews-acf7f",
  storageBucket: "sendnews-acf7f.appspot.com",
  messagingSenderId: "806663170342",
  appId: "1:806663170342:web:3699ebd4d6218cf62c79e7",
  measurementId: "G-P0S5KEVR8J"
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

  isLoggedIn() {
    return this.auth.currentUser ? true : false;
  }
}

export default new Firebase();
