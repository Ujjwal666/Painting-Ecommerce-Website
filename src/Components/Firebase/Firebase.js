import firebase from "firebase"; //connects firebase 1 t0 17

const firebaseApp= firebase.initializeApp({
	apiKey: "AIzaSyAJxQ5ivu8775y4wgbtN-PovSYU1RcSwLU",
	authDomain: "paint-site-a0a7a.firebaseapp.com",
	projectId: "paint-site-a0a7a",
	storageBucket: "paint-site-a0a7a.appspot.com",
	messagingSenderId: "833723002642",
	appId: "1:833723002642:web:8e3c5b3e564b6329accdcb",
});

const db = firebaseApp.firestore();
const auth=firebase.auth();

export {db, auth};