import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(req: Request) {
	try {
		const { uid } = await req.json();

		// 쿠키에 uid 저장
		cookies().set({
			name: 'uid',
			value: uid,
			httpOnly: true, // 클라이언트 측에서 접근할 수 없도록 보안 강화
			secure: true, // HTTPS에서만 쿠키 전송
			path: '/', // 모든 경로에 쿠키 적용
			maxAge: 60 * 60 * 24 * 7, // 7일 동안 유지
		});

		return NextResponse.json({ message: '쿠키 저장 성공' });
	} catch (error) {
		console.log(error);

		return NextResponse.json({ error: '쿠키 저장 실패' }, { status: 500 });
	}
}
