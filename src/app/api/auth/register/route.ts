import { NextResponse } from 'next/server';
import { signup } from '@/libs/auth/authApi';
import { addUserInfoApi } from '@/libs/apis/user/userApi';

export async function POST(request: Request) {
	const { email, password, displayName } = await request.json();

	try {
		const userCredential = await signup(email, password, displayName);

		await addUserInfoApi({
			user_id: userCredential.uid,
			email: email,
			profile_img: '',
			display_name: displayName,
		})
			.then(() => {
				console.log('Document successfully written!');
			})
			.catch((error) => {
				console.log('Error adding document: ', error);
			});

		return NextResponse.json({ error: 'Signup success' }, { status: 200 });
	} catch (error) {
		if (error instanceof Error) {
			console.error(error.message);
		}
		return NextResponse.json({ error: 'Signup failed' }, { status: 400 });
	}
}
