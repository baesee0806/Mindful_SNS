import { NextResponse } from 'next/server';
import { setCookie } from '@/libs/auth/auth';

export async function POST(req: Request) {
	try {
		const { uid } = await req.json();

		setCookie('uid', uid, 60 * 60 * 24 * 7);

		return NextResponse.json({ message: '쿠키 저장 성공' });
	} catch (error) {
		console.log(error);

		return NextResponse.json({ error: '쿠키 저장 실패' }, { status: 500 });
	}
}
