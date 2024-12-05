'use client';

import { useImage } from '@/hooks/useImage';
import * as S from './createFeedModal.styled';
import { useAddFeed } from '@/libs/feed/hooks/useAddFeed';
import { useUserStore } from '@/store/auth/useAuthStore';
import { ImageIcon } from 'lucide-react';
import { color } from '@/utils/colors';
import ModalLayout from './common/ModalLayout';
import { useNavigation } from '@/hooks/useNavigation';
import { useTextarea } from '@/hooks/useTextarea';

const CreateFeedModal = () => {
	const { goBack } = useNavigation();

	const {
		textareaRef,
		maxLength,
		value: content,
		handleResize,
		handleChange,
	} = useTextarea();

	const { image, imageFile, handleImageChange: imgCange } = useImage();

	// img 변경시 로직
	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		imgCange(e);
	};

	const { profile_img, display_name, user_id } = useUserStore();

	const { mutate } = useAddFeed();

	const handleAddFeed = () => {
		const feed_id = crypto.randomUUID();

		mutate({
			feed_id,
			user_id,
			content,
			img_adress: imageFile as File | null,
		});
	};

	return (
		<ModalLayout>
			<S.CreateFeedWrapper>
				<S.CreateFeedHeader>
					<S.CancleButton onClick={goBack}>취소</S.CancleButton>
					<S.Title>새 피드 만들기</S.Title>
					<S.HideArea>영역</S.HideArea>
				</S.CreateFeedHeader>
				<S.CreateFeedBody>
					<S.UserImage src={profile_img} alt="" width={40} height={40} />
					<S.TextAreaWrapper>
						<S.UserName>{display_name}</S.UserName>
						<S.Content
							ref={textareaRef}
							name="content"
							id="content"
							onInput={handleResize}
							onChange={handleChange}
							rows={1}
							placeholder="소식을 입력해주세요."
							maxLength={maxLength}></S.Content>
						{image && (
							<S.PrivewImage src={image} alt="img" width={100} height={100} />
						)}
						<S.OptionWrapper>
							<S.UploadButton htmlFor="upload-btn">
								<ImageIcon color={color.WHITEGRAY} />
							</S.UploadButton>
							<S.HiddenInput
								id="upload-btn"
								type="file"
								accept="image/*"
								onChange={handleImageChange}
							/>
						</S.OptionWrapper>
					</S.TextAreaWrapper>
				</S.CreateFeedBody>
				<S.CreateFeedFooter>
					<S.CharCount $isLimitExceeded={content.length >= maxLength}>
						{content.length} / {maxLength}
					</S.CharCount>
					<S.SubmitButton onClick={handleAddFeed}>게시</S.SubmitButton>
				</S.CreateFeedFooter>
			</S.CreateFeedWrapper>
		</ModalLayout>
	);
};

export default CreateFeedModal;
