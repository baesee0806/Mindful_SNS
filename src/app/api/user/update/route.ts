import { updateUserInfoApi, uploadUserImg } from '@/libs/apis/userApi';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
	const formData = await req.formData();
	const user_id = formData.get('user_id') as string;
	const display_name = formData.get('display_name') as string;
	const introduction = formData.get('introduction') as string;
	const profile_img = formData.get('profile_img') as File;

	try {
		// 이미지 storage에 업로드후 url 받아오기
		const imgUrl = await uploadUserImg({ user_id, profile_img });

		// firestore에 유저 정보 업데이트
		await updateUserInfoApi({
			user_id,
			display_name,
			profile_img: imgUrl as string,
			introduction,
		});
		return NextResponse.json({ message: 'Update successful' });
	} catch (error) {
		if (error instanceof Error) {
			console.error(error.message);
		}
		return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
	}
}
