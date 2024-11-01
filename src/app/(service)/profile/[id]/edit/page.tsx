'use client';

import { useRouter } from 'next/navigation';

const Edit = () => {
	const router = useRouter();
	return (
		<div>
			<div>해당 페이지에서는 수정이 어려워요 이전 페이지로 돌아가시겠어요?</div>

			<button onClick={() => router.back()}>이전 페이지로 돌아가기</button>
		</div>
	);
};

export default Edit;
