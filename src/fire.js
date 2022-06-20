import fire from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmZBP79nYlqf3SPLdAagWm5_Z6GK_S7Kk",
  authDomain: "react-hackaton-4c2bf.firebaseapp.com",
  projectId: "react-hackaton-4c2bf",
  storageBucket: "react-hackaton-4c2bf.appspot.com",
  messagingSenderId: "746787608259",
  appId: "1:746787608259:web:165270f1ee3b8ecb567476",
  measurementId: "G-9JT9DC6J38",
  // apiKey: "AIzaSyBMBhYymrhIqfVz_6L_ccWsQV0iGEIMB3Y",
  // authDomain: "react-hackaton.firebaseapp.com",
  // projectId: "react-hackaton",
  // storageBucket: "react-hackaton.appspot.com",
  // messagingSenderId: "412491220677",
  // appId: "1:412491220677:web:c8de5b9f4ae908f1f412ac",
  // measurementId: "G-6B9SLLKPLC",
};

export default fire.initializeApp(firebaseConfig);
