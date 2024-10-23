import { cookies } from 'next/headers';
import { auth } from '../firebase/firebaseClient';
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut,
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
export async function signup(email: string, password: string) {
	const userCredential = await createUserWithEmailAndPassword(
		auth,
		email,
		password,
	);
	setCookie('uid', userCredential.user.uid, 60 * 60 * 24 * 7);
	return userCredential.user;
}
