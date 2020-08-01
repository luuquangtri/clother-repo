import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyDB-pobjCaizGb6__ij5-WCU-6Lat15SOs",
    authDomain: "new-crwn-clother.firebaseapp.com",
    databaseURL: "https://new-crwn-clother.firebaseio.com",
    projectId: "new-crwn-clother",
    storageBucket: "new-crwn-clother.appspot.com",
    messagingSenderId: "466972330442",
    appId: "1:466972330442:web:0e7c6dd41c1676654de733",
    measurementId: "G-RJFQCVDJEC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const fireStore = firebase.firestore();


//setup login gg account
var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
}


export default firebase