import { NextResponse } from 'next/server';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/libs/firebase/firebaseClient';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
	const { email, password } = await request.json();

	try {
		const userCredential = await signInWithEmailAndPassword(
			auth,
			email,
			password,
		);
		cookies().set('uid', userCredential.user.uid, {
			httpOnly: true,
			secure: true,
			maxAge: 60 * 60 * 24 * 7,
		});
		return NextResponse.json(userCredential.user);
	} catch (error) {
		if (error instanceof Error) {
			console.error(error.message);
		}
		return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
	}
}
