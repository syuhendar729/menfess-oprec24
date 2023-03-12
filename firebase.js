import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Paste Your firebaseConfig Here...
const firebaseConfig = {
  apiKey: "AIzaSyAEUTFykMPhpGvqPgac7w0AAIdNgopE9Qc",
  authDomain: "menfess-event-sikrab-outbound.firebaseapp.com",
  databaseURL: "https://menfess-event-sikrab-outbound-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "menfess-event-sikrab-outbound",
  storageBucket: "menfess-event-sikrab-outbound.appspot.com",
  messagingSenderId: "1078087116997",
  appId: "1:1078087116997:web:6f30bc0b37c61527c568ac",
  measurementId: "G-L32L8LVRS8"
};

// Important Messages, See The Readme File

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
