import {
	doc,
	getDoc,
	getDocs,
	query,
	collection,
	where,
} from 'firebase/firestore';
import { db } from '../../firebase/firebaseClient';

export const getUserInfoApi = async (uid: string) => {
	try {
		const docRef = doc(db, 'users', uid);
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			return docSnap.data();
		} else {
			throw new Error('No such document!');
		}
	} catch (error) {
		console.log('Error fetching document: ', error);
		throw error;
	}
};

export const getUserFeedsApi = async (uid: string) => {
	try {
		const docRef = query(collection(db, 'feeds'), where('user_id', '==', uid));
		const docSnap = await getDocs(docRef);

		if (docSnap.empty) {
			throw new Error('No such document!');
		}
		return docSnap.docs.map((doc) => doc.data());
	} catch (error) {
		console.log('Error fetching document: ', error);
		throw error;
	}
};
