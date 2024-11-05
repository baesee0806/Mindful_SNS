import { cookies } from 'next/headers';
import { auth } from '@/libs/firebase/firebaseClient';
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut,
	updateProfile,
} from 'firebase/auth';

// 쿠키 설정
export function setCookie(name: string, value: string, maxAge: number) {
	cookies().set(name, value, { httpOnly: true, secure: true, maxAge });
}

// 로그인 함수
export async function login(email: string, password: string) {
	try {
		const userCredential = await signInWithEmailAndPassword(
			auth,
			email,
			password,
		);
		console.log('Login success:', userCredential.user);
		setCookie('uid', userCredential.user.uid, 60 * 60 * 24 * 7);
		return userCredential.user;
	} catch (error) {
		console.error('Login error:', error);
		throw error;
	}
}

// 로그아웃 함수
export async function logout() {
	try {
		await signOut(auth);
		cookies().delete('uid');
	} catch (error) {
		console.error('Logout error:', error);
		throw error;
	}
}

// 회원가입 함수
export async function signup(
	email: string,
	password: string,
	display_name: string,
) {
	const userCredential = await createUserWithEmailAndPassword(
		auth,
		email,
		password,
	);
	if (userCredential.user) {
		await updateProfile(userCredential.user, {
			displayName: display_name,
		}).catch((error) => {
			console.log('auth error: ', error);
		});
		setCookie('uid', userCredential.user.uid, 60 * 60 * 24 * 7);
	}

	return userCredential.user;
}
