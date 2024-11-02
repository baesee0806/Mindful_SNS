import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebaseClient';

export const getFeedsApi = async () => {
	try {
		const docRef = collection(db, 'feeds');
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
