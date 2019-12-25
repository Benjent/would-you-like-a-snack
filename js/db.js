const projectId = "would-you-like-a-snack";
firebase.initializeApp({
	apiKey: "AIzaSyDd0xMdP9aK1aBHL7c5eW6SCWx5-U0mnFM",
	authDomain: "would-you-like-a-snack.firebaseapp.com",
	projectId: projectId,
	storageBucket: "would-you-like-a-snack.appspot.com",
});

const database = firebase.firestore();
const storage = firebase.storage();
// const storage = firebase.storage("gs://would-you-like-a-snack.appspot.com/covers");