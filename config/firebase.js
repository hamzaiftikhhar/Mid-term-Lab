import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
	FIREBASE_API_KEY,
	FIREBASE_AUTH_DOMAIN,
	FIREBASE_PROJECT_ID,
	FIREBASE_STORAGE_BUCKET,
	FIREBASE_MESSAGING_SENDER_ID,
	FIREBASE_APP_ID,
} from "@env";

const firebaseConfig = {
	apiKey: "AIzaSyAZNaqVBQAf6p6GXhnzcHuRLm9UvmjJw90",
	authDomain: "omnivous-6.firebaseapp.com",
	projectId: "omnivous-6",
	storageBucket: "omnivous-6.appspot.com",
	messagingSenderId: "866071764758",
	appId: "1:866071764758:web:5541fda6889a23ed5eba37",
	measurementId: "G-GT8QCXQJXH"
	
// 	FIREBASE_API_KEY: "",
// FIREBASE_AUTH_DOMAIN : "",
// FIREBASE_PROJECT_ID: "",
// FIREBASE_STORAGE_BUCKET: "",
// FIREBASE_MESSAGING_SENDER_ID: "",
// FIREBASE_APP_ID: "",
  };


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
