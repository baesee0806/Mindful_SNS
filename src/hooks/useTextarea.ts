import { ChangeEvent, useRef, useState } from 'react';

export const useTextarea = () => {
	const textareaRef = useRef<HTMLTextAreaElement | null>(null);
	const [value, setValue] = useState<string>('');
	const maxLength = 500;

	// 텍스트 영역 높이 자동 조절
	const handleResize = () => {
		if (textareaRef.current) {
			textareaRef.current.style.height = 'auto';
			textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
		}
	};
	// 텍스트 영역 값 변경
	const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		const newText = event.target.value;
		if (newText.length <= maxLength) {
			setValue(newText);
			handleResize();
		}
	};

	return { textareaRef, maxLength, value, handleResize, handleChange };
};
