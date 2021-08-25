import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCyPQnh5jk1YYNOmabkicEcGuvKEo2w8WY",
  authDomain: "react-home-automation.firebaseapp.com",
  projectId: "react-home-automation",
  storageBucket: "react-home-automation.appspot.com",
  messagingSenderId: "885762732759",
  appId: "1:885762732759:web:f5a4b737fd00d1d48a7692"
}

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();

const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    await db.collection("users").add({
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordResetEmail = async (email) => {
  try {
    await auth.sendPasswordResetEmail(email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  auth.signOut();
};

export {
  auth,
  db,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordResetEmail,
  logout,
};