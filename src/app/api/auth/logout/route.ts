import { NextResponse } from 'next/server';
import { signOut } from 'firebase/auth';
import { auth } from '@/libs/firebase/firebaseClient';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
	try {
		await signOut(auth);
		cookies().delete('uid');
		return NextResponse.rewrite(new URL('/auth/login', request.url));
	} catch (error) {
		if (error instanceof Error) {
			console.error(error.message);
		}
		return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
	}
}
