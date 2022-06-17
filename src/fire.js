import fire from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBMBhYymrhIqfVz_6L_ccWsQV0iGEIMB3Y",
  authDomain: "react-hackaton.firebaseapp.com",
  projectId: "react-hackaton",
  storageBucket: "react-hackaton.appspot.com",
  messagingSenderId: "412491220677",
  appId: "1:412491220677:web:c8de5b9f4ae908f1f412ac",
  measurementId: "G-6B9SLLKPLC",
};

export default fire.initializeApp(firebaseConfig);
