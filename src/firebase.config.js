import {
    initializeApp
} from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAFTXsbwZWtvQVmBioHVwuNkxj6eJRsIaI",
    authDomain: "burj-al-arab-18fcc.firebaseapp.com",
    projectId: "burj-al-arab-18fcc",
    storageBucket: "burj-al-arab-18fcc.appspot.com",
    messagingSenderId: "775196008858",
    appId: "1:775196008858:web:92818d6db4f86fb6491a23",
    measurementId: "G-K6XCFQEKYD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            return user;
            // ...
        }).catch((error) => {
            // Handle Errors here.
           return error.message;
            // ...
        });
}