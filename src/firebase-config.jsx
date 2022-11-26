import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5RHZgChERnd-sK22aVm8TtpnIGDTzwWA",
  authDomain: "archintelapi-endpoints.firebaseapp.com",
  projectId: "archintelapi-endpoints",
  storageBucket: "archintelapi-endpoints.appspot.com",
  messagingSenderId: "815360075005",
  appId: "1:815360075005:web:4b65036c8fc07818200a94",
  measurementId: "G-QR71VWJX13",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getFirestore(app);
