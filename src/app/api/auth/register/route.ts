import { NextResponse } from 'next/server';
import { signup } from '@/libs/auth/auth';

export async function POST(request: Request) {
	const { email, password } = await request.json();

	try {
		await signup(email, password);
		return NextResponse.rewrite(new URL('/', request.url));
	} catch (error) {
		if (error instanceof Error) {
			console.error(error.message);
		}
		return NextResponse.json({ error: 'Signup failed' }, { status: 400 });
	}
}
