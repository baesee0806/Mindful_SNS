import { NextResponse } from 'next/server';
import { logout } from '@/libs/auth/auth';

export async function POST(request: Request) {
	try {
		await logout();
		return NextResponse.rewrite(new URL('/auth/login', request.url));
	} catch (error) {
		if (error instanceof Error) {
			console.error(error.message);
		}
		return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
	}
}
