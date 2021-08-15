import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjLwHgSsOZX1lz1jBir3OSKN5pY0akeUs",
  authDomain: "smartcool-5cc31.firebaseapp.com",
  projectId: "smartcool-5cc31",
  storageBucket: "smartcool-5cc31.appspot.com",
  messagingSenderId: "464765976937",
  appId: "1:464765976937:web:bd293f2e760dddf3fcfdf8",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
