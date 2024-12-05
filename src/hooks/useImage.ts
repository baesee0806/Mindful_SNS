import { useState } from 'react';
import Resizer from 'react-image-file-resizer';

type UseImageReturnType = {
	image: string | null;
	imageFile: Blob | null;
	handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	reset: () => void;
};

export function useImage(): UseImageReturnType {
	const [image, setImage] = useState<string | null>(null);
	const [imageFile, setImageFile] = useState<Blob | null>(null);

	// 이미지 리사이징 함수
	const resizeFile = (file: File): Promise<Blob> =>
		new Promise((resolve, reject) => {
			Resizer.imageFileResizer(
				file,
				800,
				800,
				'WEBP',
				100,
				0,
				(uri) => {
					if (uri instanceof Blob) {
						resolve(uri); // Blob 반환
					} else {
						reject(new Error('Blob 변환 실패'));
					}
				},
				'blob',
			);
		});

	const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];

		if (!file) return;

		if (!file.type.startsWith('image/')) {
			alert('이미지 파일만 업로드 가능합니다.');
			return;
		}

		try {
			const resizedBlob = await resizeFile(file);
			setImageFile(resizedBlob);

			const previewUrl = URL.createObjectURL(resizedBlob);
			setImage(previewUrl);
		} catch (error) {
			console.error('이미지 변환 오류:', error);
		}
	};

	// 상태 초기화
	const reset = () => {
		setImage(null);
		setImageFile(null);

		// 미리보기 URL 해제
		if (image) {
			URL.revokeObjectURL(image);
		}
	};

	return {
		image,
		imageFile,
		handleImageChange,
		reset,
	};
}
