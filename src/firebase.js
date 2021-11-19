import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
const firebaseConfig = {
	apiKey: 'AIzaSyDzBFspDSU8wSezDMeOwnjysZ7V2mmAn5U',
	authDomain: 'kancomputer-3d5d5.firebaseapp.com',
	projectId: 'kancomputer-3d5d5',
	storageBucket: 'kancomputer-3d5d5.appspot.com',
	messagingSenderId: '269909701514',
	appId: '1:269909701514:web:42d768100d96ae19e4ce73',
	measurementId: 'G-L5L7TPYE27',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
