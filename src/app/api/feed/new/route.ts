import { db, storage } from '@/libs/firebase/firebaseClient';
import { addDoc, collection, doc, setDoc, Timestamp } from 'firebase/firestore';
import {
	getDownloadURL,
	ref,
	uploadBytes,
	UploadMetadata,
} from 'firebase/storage';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
	const formData = await req.formData();
	const feed_id = formData.get('feed_id') as string;
	const content = formData.get('content') as string;
	const user_id = formData.get('user_id') as string;
	const img_adress = formData.get('img_adress') as File | Blob | string;
	try {
		if (!feed_id || !content || !user_id || !img_adress) {
			return NextResponse.json(
				{ error: 'Invalid request parameters' },
				{ status: 400 },
			);
		}

		// 이미지 storage 업로드
		const feedImage = img_adress;
		if (!(feedImage instanceof File || feedImage instanceof Blob)) {
			throw new Error('Invalid image file provided');
		}
		const storageRef = ref(storage, `images/${feed_id}`);
		const metadata: UploadMetadata = {
			contentType: feedImage.type || 'image/jpeg',
		};
		await uploadBytes(storageRef, feedImage, metadata);
		const imgUrl = await getDownloadURL(storageRef);

		// feeds collection에 추가
		const feedRef = doc(db, 'feeds', feed_id);
		await setDoc(feedRef, {
			feed_id,
			content,
			user_id,
			img_adress: imgUrl,
			created_at: Timestamp.now(),
			updated_at: Timestamp.now(),
			like_count: 0,
			comment_count: 0,
		}).catch((error) => {
			console.error('Error adding feed:', error);
			return NextResponse.json(
				{ error: 'Failed to add feed' },
				{ status: 500 },
			);
		});

		// feed_img collection에 추가
		const feedImgRef = collection(db, 'feed_img');
		await addDoc(feedImgRef, {
			feed_id,
			img_adress: imgUrl,
			create_at: Timestamp.now(),
			update_at: Timestamp.now(),
		}).catch((error) => {
			console.error('Error adding feed_img:', error);
			return NextResponse.json(
				{ error: 'Failed to add feed_img' },
				{ status: 500 },
			);
		});
		return NextResponse.json({ feed_id });
	} catch (error) {
		console.error('Error adding feed:', error);
		return NextResponse.json({ error: 'Failed to add feed' }, { status: 500 });
	}
}
