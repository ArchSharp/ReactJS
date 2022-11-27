import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIgkXAeLuCXlWZkzzJJZextFaO1Kx1Dng",
  authDomain: "archintel-web-api.firebaseapp.com",
  projectId: "archintel-web-api",
  storageBucket: "archintel-web-api.appspot.com",
  messagingSenderId: "405128449166",
  appId: "1:405128449166:web:5bf102b0701096c15dcddf",
  measurementId: "G-VJYSWEK2DP",
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getFirestore(app);
