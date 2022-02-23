import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCrrc0AGIEe2Gj_zDyBiC1WsANXhJR8oXM",
  authDomain: "ebutuoy-clone.firebaseapp.com",
  projectId: "ebutuoy-clone",
  storageBucket: "ebutuoy-clone.appspot.com",
  messagingSenderId: "599280757940",
  appId: "1:599280757940:web:2ca3d441861ac7973cfbe1",
  measurementId: "G-20KEBR1E4E",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const analytics = getAnalytics(app);
const db = getFirestore();
const auth = getAuth();
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const timestamp = serverTimestamp();
const storage = getStorage();

export { app, db, auth, google, facebook, timestamp, storage, analytics };
