import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBshTzWsNfPs6Wkrm4BL6qAIaqXzUqBCGY",
  authDomain: "writenode-4b860.firebaseapp.com",
  projectId: "writenode-4b860",
  storageBucket: "writenode-4b860.appspot.com",
  messagingSenderId: "430975369990",
  appId: "1:430975369990:web:17834caf0f169334215487"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();