import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  // Your Firebase configuration object
  apiKey: "AIzaSyDtLT6ABYe35Ofle66gB7snDrvPcP8wKFw",
  authDomain: "cortexflex-383be.firebaseapp.com",
  projectId: "cortexflex-383be",
  storageBucket: "cortexflex-383be.appspot.com",
  messagingSenderId: "1069418027046",
  appId: "1:1069418027046:web:b94dc259a16f5f8ba6aee7",
  measurementId: "G-HXLKWG3PW7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
