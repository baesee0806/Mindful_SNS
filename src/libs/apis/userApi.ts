import {
	setDoc,
	doc,
	getDoc,
	updateDoc,
	getDocs,
	query,
	collection,
	where,
} from 'firebase/firestore';
import { db, storage } from '../firebase/firebaseClient';
import {
	getDownloadURL,
	ref,
	uploadBytes,
	UploadMetadata,
} from 'firebase/storage';

interface UserInfo {
	user_id: string;
	email: string;
	profile_img: string;
	display_name: string;
}
interface UploadUserImg {
	user_id: string;
	profile_img: File | Blob | string;
}
interface UpdateUserInfo {
	user_id: string;
	display_name: string;
	profile_img: string;
	introduction: string;
}

export const addUserInfoApi = async (data: UserInfo) => {
	try {
		const ref = doc(db, 'users', data.user_id);
		await setDoc(ref, {
			...data,
			create_at: new Date().toISOString(),
			follow_count: 0,
			following_count: 0,
			feed_count: 0,
			introduction: '',
		});
		return data;
	} catch (error) {
		console.error('Error adding document: ', error);
		return null;
	}
};

export const uploadUserImg = async (data: UploadUserImg) => {
	const profileImage = data.profile_img;
	if (!(profileImage instanceof File || profileImage instanceof Blob)) {
		throw new Error('Invalid image file provided');
	}

	const storageRef = ref(storage, `images/${data.user_id}`);
	const metadata: UploadMetadata = {
		contentType: profileImage.type || 'image/jpeg',
	};

	await uploadBytes(storageRef, profileImage, metadata);
	const profileImageUrl = await getDownloadURL(storageRef);
	return profileImageUrl;
};

export const updateUserInfoApi = async (data: UpdateUserInfo) => {
	const { user_id, display_name, profile_img, introduction } = data;
	const userRef = doc(db, 'users', user_id);
	await updateDoc(userRef, {
		profile_img,
		display_name,
		introduction,
	});
};

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
