
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXqsLTVmDfM3PayQVm0RqsWnvyCOK9S8I",
  authDomain: "fir-email-password-5b9e4.firebaseapp.com",
  projectId: "fir-email-password-5b9e4",
  storageBucket: "fir-email-password-5b9e4.appspot.com",
  messagingSenderId: "367596594992",
  appId: "1:367596594992:web:93471852b8d8bdf03e0af5"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
