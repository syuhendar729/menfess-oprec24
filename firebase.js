import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Paste Your firebaseConfig Here...
const firebaseConfig = {
  apiKey: "AIzaSyAsaSc8tTitklZZkoeYN0nwGgFYsSGAQy0",
  authDomain: "menfess-oprec24.firebaseapp.com",
  databaseURL: "https://menfess-oprec24-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "menfess-oprec24",
  storageBucket: "menfess-oprec24.appspot.com",
  messagingSenderId: "896228471684",
  appId: "1:896228471684:web:b5dc390505c0bedaeee3d1",
  measurementId: "G-QPHWCWYW0N"
};

// Important Messages, See The Readme File

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
