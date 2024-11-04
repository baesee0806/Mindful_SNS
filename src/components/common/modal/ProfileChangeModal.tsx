'use client';

import { getUserInfoApi } from '@/libs/apis/userApi';
import { useUserStore } from '@/store/auth/useAuthStore';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const ProfileChangeModal = () => {
	const router = useRouter();

	const { user_id, display_name } = useUserStore();
	const [profileImage, setProfileImage] = useState<string | null>(null);
	const [profileImageFile, setProfileImageFile] = useState<File | null>(null);
	const [userName, setUserName] = useState<string>(display_name);
	const [userBio, setUserBio] = useState<string>('');

	const onAuthState = async (user_id: string) => {
		const res = await getUserInfoApi(user_id);
		return res;
	};

	useEffect(() => {
		onAuthState(user_id).then((res) => {
			setUserName(res.display_name as string);
			setUserBio(res.introduction as string);
			setProfileImage(res.profile_img as string);
		});
	}, [user_id]);

	// 이미지 변경 핸들러
	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];

		if (file) {
			const reader = new FileReader();
			setProfileImageFile(file);
			reader.onloadend = () => {
				setProfileImage(reader.result as string);
			};
			reader.readAsDataURL(file);
		}
	};

	const handleUpdateProfile = async () => {
		const formData = new FormData();
		formData.append('user_id', user_id);
		formData.append('display_name', userName);
		formData.append('profile_img', profileImageFile as File);
		formData.append('introduction', userBio);
		try {
			await fetch('/api/user/update', {
				method: 'POST',
				body: formData,
			}).then(() => {
				router.back();
			});
		} catch (error) {
			console.log(error);
		}
	};
	const queryClient = useQueryClient();
	const { mutate } = useMutation({
		mutationFn: handleUpdateProfile,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['USER', user_id] });
		},
	});

	const handleRemoveImage = () => {
		setProfileImage(null); // 이미지 제거
	};

	return (
		<Container>
			<Layer
				onClick={() => {
					router.back();
				}}></Layer>
			<ModalWrapper>
				<LeftSection>
					{profileImage ? (
						<ImagePreview src={profileImage} alt="Profile Preview" />
					) : (
						<UploadPlaceholder>
							<IconWrapper>📷</IconWrapper>
							<Text>프로필 사진을 선택하세요</Text>
						</UploadPlaceholder>
					)}
					<HiddenInput
						id="upload-btn"
						type="file"
						accept="image/*"
						onChange={handleImageChange}
					/>
					<ButtonGroup>
						<Button htmlFor="upload-btn">사진 변경</Button>
						{profileImage && (
							<Button onClick={handleRemoveImage}>사진 제거</Button>
						)}
					</ButtonGroup>
				</LeftSection>

				<RightSection>
					<Input
						type="text"
						placeholder="유저 이름을 입력하세요"
						value={userName}
						onChange={(e) => setUserName(e.target.value)}
					/>
					<TextArea
						placeholder="소개글을 입력하세요"
						value={userBio}
						onChange={(e) => setUserBio(e.target.value)}
					/>
					<Footer>
						<CancelButton>취소</CancelButton>
						<SaveButton
							onClick={() => {
								mutate();
							}}>
							저장
						</SaveButton>
					</Footer>
				</RightSection>
			</ModalWrapper>
		</Container>
	);
};

export default ProfileChangeModal;

const Container = styled.div`
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 1000;
	display: flex;
	position: fixed;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.5);
`;
const Layer = styled.div`
	z-index: 1500;
	background: rgba(0, 0, 0, 0.3);
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
`;
const ModalWrapper = styled.div`
	width: 700px;
	height: 560px;
	display: flex;
	background-color: #000000;
	border-radius: 15px;
	overflow: hidden;
	box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
	z-index: 2000;
`;

const LeftSection = styled.div`
	width: 50%;
	background-color: #000000;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 20px;
`;

const RightSection = styled.div`
	width: 50%;
	padding: 40px;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const ImagePreview = styled.img`
	width: 250px;
	height: 250px;
	object-fit: cover;
	border-radius: 50%;
	box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
	margin-bottom: 20px;
`;

const UploadPlaceholder = styled.div`
	width: 250px;
	height: 250px;
	border-radius: 50%;
	background-color: #000000;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 20px;
	border: 1px solid #262626;
`;

const IconWrapper = styled.div`
	font-size: 60px;
	color: #888;
`;

const Text = styled.p`
	font-size: 16px;
	color: #666;
`;

const HiddenInput = styled.input`
	display: none;
`;

const Input = styled.input`
	width: 100%;
	padding: 10px;
	margin-bottom: 20px;
	border: 1px solid #ddd;
	border-radius: 10px;
	font-size: 16px;
	outline: none;
`;

const TextArea = styled.textarea`
	width: 100%;
	min-height: 200px;
	padding: 10px;
	margin: 15px 0;
	border: 1px solid #ddd;
	border-radius: 10px;
	font-size: 16px;
	resize: none;
	height: 100px;
	outline: none;
`;

const ButtonGroup = styled.div`
	display: flex;
	gap: 10px;
`;

const Button = styled.label`
	padding: 10px 20px;
	background-color: #0095f6;
	color: white;
	border-radius: 5px;
	cursor: pointer;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: #007bb5;
	}
`;

const Footer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 20px;
`;

const CancelButton = styled.button`
	background-color: #ccc;
	padding: 10px 20px;
	border-radius: 5px;
	color: white;
	cursor: pointer;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: #999;
	}
`;

const SaveButton = styled.button`
	background-color: #0095f6;
	padding: 10px 20px;
	border-radius: 5px;
	color: white;
	cursor: pointer;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: #007bb5;
	}
`;
