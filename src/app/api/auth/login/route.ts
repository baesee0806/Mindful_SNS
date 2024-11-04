import { NextResponse } from 'next/server';
import { login } from '@/libs/auth/authApi';

export async function POST(request: Request) {
	const { email, password } = await request.json();

	try {
		await login(email, password);
		return NextResponse.json({ message: 'Login successful' });
	} catch (error) {
		if (error instanceof Error) {
			console.error(error.message);
		}
		return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
	}
}
