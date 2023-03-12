import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Paste Your firebaseConfig Here...
const firebaseConfig = {
  apiKey: "AIzaSyChC6kkIraijMx_60vSG0IySlgkxKnOB_M",
  authDomain: "menfe55.firebaseapp.com",
  databaseURL: "https://menfe55-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "menfe55",
  storageBucket: "menfe55.appspot.com",
  messagingSenderId: "545158062416",
  appId: "1:545158062416:web:b3c9e910f0c3f4ea974c55",
  measurementId: "G-QJZZGLZS6V"
};

// Important Messages, See The Readme File

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
