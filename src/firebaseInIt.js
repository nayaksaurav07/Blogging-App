// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc2OwFXsnDm_0AHQqQat3wqO2lt8Dk7bU",
  authDomain: "blogging-app-536e8.firebaseapp.com",
  projectId: "blogging-app-536e8",
  storageBucket: "blogging-app-536e8.appspot.com",
  messagingSenderId: "301900051978",
  appId: "1:301900051978:web:1efc4057930b143c6891f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


