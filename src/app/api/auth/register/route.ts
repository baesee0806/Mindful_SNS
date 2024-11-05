import { NextResponse } from 'next/server';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db } from '@/libs/firebase/firebaseClient';
import { cookies } from 'next/headers';
import { doc, setDoc } from 'firebase/firestore';

export async function POST(request: Request) {
	const { email, password, displayName } = await request.json();

	try {
		// 이메일 회원 가입
		const userCredential = await createUserWithEmailAndPassword(
			auth,
			email,
			password,
		);
		// 쿠키 설정
		cookies().set('uid', userCredential.user.uid, {
			httpOnly: true,
			secure: true,
			maxAge: 60 * 60 * 24 * 7,
		});
		// 회원 가입 성공시 프로필 업데이트, firestore에 사용자 정보 추가
		if (userCredential.user) {
			// 프로필 업데이트
			await updateProfile(userCredential.user, {
				displayName: displayName,
			}).catch((error) => {
				console.log('updateProfile error: ', error);
			});
			// firestore에 사용자 정보 추가
			const ref = doc(db, 'users', userCredential.user.uid);
			await setDoc(ref, {
				user_id: userCredential.user.uid,
				email: email,
				profile_img: '',
				display_name: displayName,
				introduction: '',
				create_at: new Date().toISOString(),
				follow_count: 0,
				following_count: 0,
				feed_count: 0,
			}).catch((error) => {
				console.error('Error adding firestore user: ', error);
			});
		}

		return NextResponse.json({ error: 'Signup success' }, { status: 200 });
	} catch (error) {
		if (error instanceof Error) {
			console.error(error.message);
		}
		return NextResponse.json({ error: 'Signup failed' }, { status: 400 });
	}
}
