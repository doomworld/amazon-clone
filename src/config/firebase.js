import firebase from 'firebase/app';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyBQa_dAcqlYG9Z4eVQ542C3hflwLison34',
	authDomain: 'clone-react-f5ff2.firebaseapp.com',
	projectId: 'clone-react-f5ff2',
	storageBucket: 'clone-react-f5ff2.appspot.com',
	messagingSenderId: '743660537461',
	appId: '1:743660537461:web:0021b646f9a823def21a3c',
	measurementId: 'G-N8N9FX8919',
});

// const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { auth };
