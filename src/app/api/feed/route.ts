import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/libs/firebase/firebaseClient';
import { doc, getDoc } from 'firebase/firestore';

export async function GET(req: NextRequest) {
	const { searchParams } = new URL(req.url);
	const feed_id = searchParams.get('feed_id');

	try {
		const docRef = doc(db, 'feeds', feed_id as string);
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			return NextResponse.json(docSnap.data());
		} else {
			throw new Error('No such document!');
		}
	} catch (error) {
		if (error instanceof Error) {
			console.error(error.message);
		}
		return NextResponse.json(
			{ error: 'Failed to get feed doc' },
			{ status: 500 },
		);
	}
}
