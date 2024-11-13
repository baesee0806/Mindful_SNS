import { db } from '@/libs/firebase/firebaseClient';
import { doc, getDoc } from 'firebase/firestore';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
	const { searchParams } = new URL(req.url);
	const user_id = searchParams.get('user_id');

	try {
		const docRef = doc(db, 'users', user_id as string);
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
			{ error: 'Failed to get user info' },
			{ status: 500 },
		);
	}
}
