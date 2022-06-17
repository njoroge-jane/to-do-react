import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCxXcgO-pGeONslPiOPLc_Oh9MljgGgURI",
    authDomain: "todo-app-1b22c.firebaseapp.com",
    projectId: "todo-app-1b22c",
    storageBucket: "todo-app-1b22c.appspot.com",
    messagingSenderId: "206122663830",
    appId: "1:206122663830:web:e5238e178c7d2a43f6e7b7",
    measurementId: "G-PHVKER1N5Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };