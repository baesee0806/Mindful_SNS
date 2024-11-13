import { db } from '@/libs/firebase/firebaseClient';
import { doc, getDoc } from 'firebase/firestore';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
	const user_id = cookies().get('uid')?.value;

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
