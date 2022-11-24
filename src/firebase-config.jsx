import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCUg4C30tIzR190voaZsekwQIzJdNHK95k",
  authDomain: "archintel-api.firebaseapp.com",
  databaseURL: "https://archintel-api-default-rtdb.firebaseio.com",
  projectId: "archintel-api",
  storageBucket: "archintel-api.appspot.com",
  messagingSenderId: "1055347086660",
  appId: "1:1055347086660:web:ce483f20c18109e2d47311",
  measurementId: "G-R63ZX7WXTN",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
