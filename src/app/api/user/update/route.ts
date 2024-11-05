import { db, storage } from '@/libs/firebase/firebaseClient';
import { doc, updateDoc } from 'firebase/firestore';
import {
	getDownloadURL,
	ref,
	uploadBytes,
	UploadMetadata,
} from 'firebase/storage';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
	const formData = await req.formData();
	const user_id = formData.get('user_id') as string;
	const display_name = formData.get('display_name') as string;
	const introduction = formData.get('introduction') as string;
	const profile_img = formData.get('profile_img') as File | Blob | string;

	try {
		// 이미지 storage에 업로드후 url 받아오기
		const profileImage = profile_img;
		if (!(profileImage instanceof File || profileImage instanceof Blob)) {
			throw new Error('Invalid image file provided');
		}

		const storageRef = ref(storage, `images/${user_id}`);
		const metadata: UploadMetadata = {
			contentType: profileImage.type || 'image/jpeg',
		};

		await uploadBytes(storageRef, profileImage, metadata);
		const imgUrl = await getDownloadURL(storageRef);

		// firestore에 유저 정보 업데이트

		const userRef = doc(db, 'users', user_id);

		await updateDoc(userRef, {
			profile_img: imgUrl as string,
			display_name,
			introduction,
		});

		return NextResponse.json({ message: 'Update successful' });
	} catch (error) {
		if (error instanceof Error) {
			console.error(error.message);
		}
		return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
	}
}
