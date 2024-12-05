'use client';

import ModalLayout from '@/components/common/modal/common/ModalLayout';
import { useImage } from '@/hooks/useImage';
import { useNavigation } from '@/hooks/useNavigation';
import { useTextarea } from '@/hooks/useTextarea';
import { useFetchFeed } from '@/libs/feed/hooks/useFetchFeed';
import { useFetchUser } from '@/libs/fetches/user/useFetchUser';
import { useUserStore } from '@/store/auth/useAuthStore';
import { color } from '@/utils/colors';
import { getTime } from '@/utils/getTime';
import { ImageIcon, X } from 'lucide-react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import styled from 'styled-components';

const CommentPage = () => {
	const { goBack } = useNavigation();
	const {
		textareaRef,
		maxLength,
		value: comment,
		handleResize,
		handleChange,
	} = useTextarea();
	const { image, imageFile, handleImageChange: imgCange, reset } = useImage();

	// img 변경시 로직
	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		imgCange(e);
	};

	const feed_id = useParams().id;

	const { data: feed } = useFetchFeed(feed_id as string);
	const { data: user } = useFetchUser(feed?.user_id as string);

	const { display_name, profile_img } = useUserStore();

	return (
		<ModalLayout>
			<CommentWrapper>
				<HeaderWrapper>
					<CancleButton onClick={goBack}>취소</CancleButton>
					<Title>답글</Title>
					<HideArea>게시</HideArea>
				</HeaderWrapper>
				<BodyWrapper>
					<UserWrapper>
						<UserImage src={user?.profile_img} alt="" width={40} height={40} />
						<UserContentWrapper>
							<UserInfoWrapper>
								<UserName>{user?.display_name}</UserName>
								<ContentCreateAt>
									{getTime(feed?.created_at.seconds)}
								</ContentCreateAt>
							</UserInfoWrapper>
							<UserContent>{feed?.content}</UserContent>
							{feed?.img_adress && (
								<PrivewImage
									src={feed.img_adress}
									alt="img"
									width={400}
									height={400}
								/>
							)}
						</UserContentWrapper>
					</UserWrapper>
					<MyWrapper>
						<UserImage src={profile_img} alt="" width={34} height={40} />
						<UserContentWrapper>
							<UserName>{display_name}</UserName>
							<Content
								ref={textareaRef}
								name="content"
								id="content"
								onInput={handleResize}
								onChange={handleChange}
								rows={1}
								placeholder="소식을 입력해주세요."
								maxLength={maxLength}
							/>
							{image && (
								<PrivewWrapper>
									<PrivewImage src={image} alt="img" width={400} height={400} />
									<CloseButton onClick={reset} color="black" />
								</PrivewWrapper>
							)}
							<OptionWrapper>
								<UploadButton htmlFor="upload-btn">
									<ImageIcon color={color.WHITEGRAY} />
								</UploadButton>
								<HiddenInput
									id="upload-btn"
									type="file"
									accept="image/*"
									onChange={handleImageChange}
								/>
							</OptionWrapper>
						</UserContentWrapper>
					</MyWrapper>
				</BodyWrapper>
				<CreateFeedFooter>
					<CharCount $isLimitExceeded={comment.length >= maxLength}>
						{comment.length} / {maxLength}
					</CharCount>
					<SubmitButton>게시</SubmitButton>
				</CreateFeedFooter>
			</CommentWrapper>
		</ModalLayout>
	);
};

export default CommentPage;

const CommentWrapper = styled.div`
	width: 600px;
	max-height: 600px;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	scroll-behavior: smooth;
	overflow: auto;

	@media only screen and (max-width: 758px) {
		width: 100%;
		height: 100%;
	}
`;
const HeaderWrapper = styled.header`
	width: 100%;
	min-height: 60px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${color.MODALBGC};
`;
const CancleButton = styled.button`
	background-color: transparent;
	border: none;
	font-size: 16px;
	cursor: pointer;
	padding: 5px 10px;
	margin-left: 10px;
	border-radius: 5px;
	&:hover {
		background-color: ${color.WHITEGRAY};
	}
`;
const Title = styled.div`
	font-size: 16px;
	font-weight: bold;
	cursor: default;
`;
const HideArea = styled.div`
	visibility: hidden;
	margin-right: 10px;
	background-color: transparent;
	border: none;
	font-size: 16px;
	cursor: pointer;
	padding: 5px 10px;
	border-radius: 5px;
`;

const BodyWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	background-color: ${color.MODALBGC};
`;
const UserWrapper = styled.div`
	display: flex;
	width: 100%;
	background-color: ${color.MODALBGC};
`;
const UserImage = styled(Image)`
	border-radius: 50%;
	margin-top: 10px;
	margin-left: 20px;
	margin-right: 10px;
	cursor: default;
`;
const UserContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-top: 10px;
	background-color: ${color.MODALBGC};
`;
const UserInfoWrapper = styled.div`
	display: flex;
	width: 100%;
	background-color: ${color.MODALBGC};
`;
const UserName = styled.div`
	font-size: 16px;
	font-weight: bold;
	margin-right: 4px;
	background-color: ${color.MODALBGC};
`;
const ContentCreateAt = styled.div`
	font-size: 16px;
	background-color: ${color.MODALBGC};
	color: ${color.WHITEGRAY};
`;
const UserContent = styled.div`
	margin-top: 10px;
	margin-bottom: 10px;
	font-size: 14px;
	background-color: ${color.MODALBGC};
`;

const MyWrapper = styled.div`
	display: flex;
	width: 100%;
	margin-top: 10px;
	background-color: ${color.MODALBGC};
`;
const Content = styled.textarea`
	width: 100%;
	margin-top: 10px;
	padding-right: 5px;
	border: none;
	min-height: 16px;
	max-height: 400px;
	overflow-y: auto;
	box-sizing: border-box;
	font-size: 16px;
	resize: none;
	margin-bottom: 10px;
	background-color: ${color.MODALBGC};
	color: ${color.WHITEGRAY};
	&:focus {
		outline: none;
	}
`;
const OptionWrapper = styled.div`
	background-color: ${color.MODALBGC};
`;
const UploadButton = styled.label`
	width: 24px;
	height: 24px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2.5px 5px;
	margin-left: -6px;
	background-color: ${color.MODALBGC};

	cursor: pointer;
	& > svg {
		width: 24px;
		height: 24px;
	}
`;
const HiddenInput = styled.input`
	display: none;
	background-color: ${color.MODALBGC};
`;
const PrivewWrapper = styled.div`
	background-color: ${color.MODALBGC};
	position: relative;
	display: inline-block;
`;
const PrivewImage = styled(Image)`
	display: block;
	width: 90%;
	height: auto;
	min-height: 40px;
	max-height: 400px;
	border-radius: 15px;
`;
const CloseButton = styled(X)`
	width: 20px;
	height: 20px;
	position: absolute;
	top: 10px; /* 이미지 안쪽으로 위치 */
	right: 60px; /* 이미지 안쪽으로 위치 */
	z-index: 10;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${color.WHITEGRAY};
	border-radius: 50%;
	cursor: pointer;
`;
const CreateFeedFooter = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	background-color: ${color.MODALBGC};
`;
const CharCount = styled.div<{ $isLimitExceeded: boolean }>`
	font-size: 16px;
	color: ${({ $isLimitExceeded }) => ($isLimitExceeded ? 'red' : 'gray')};
	text-align: right;
	background-color: ${color.MODALBGC};
`;
const SubmitButton = styled.button`
	border: none;
	padding: 10px 20px;
	border-radius: 5px;
	margin-right: 10px;
	margin-left: 10px;
	margin-bottom: 10px;
	background-color: #fff;
	color: black;
	cursor: pointer;
	&:hover {
		background-color: ${color.WHITEGRAY};
	}
`;
