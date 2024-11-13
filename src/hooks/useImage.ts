import { useState } from 'react';

type UseImageReturnType = {
	image: string | null;
	imageFile: File | null;
	handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function useImage(): UseImageReturnType {
	const [image, setImage] = useState<string | null>(null);
	const [imageFile, setImageFile] = useState<File | null>(null);

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];

		if (file) {
			const reader = new FileReader();
			setImageFile(file);

			reader.onloadend = () => {
				setImage(reader.result as string);
			};

			reader.readAsDataURL(file);
		}
	};

	return {
		image,
		imageFile,
		handleImageChange,
	};
}
