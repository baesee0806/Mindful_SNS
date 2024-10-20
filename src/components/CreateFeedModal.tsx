'use client';

import { useState } from 'react';
import styled from 'styled-components';

const CreateFeedModal = () => {
	const [image, setImage] = useState<string | null>(null);

	return (
		<Container>
			<CreateFeedWrapper>
				<CreateFeedHeader>새 게시물 만들기</CreateFeedHeader>
				<CreateFeedBody>
					{image ? (
						<img
							src={image}
							alt="uploaded"
							style={{ width: '100%', height: '100%', objectFit: 'cover' }}
						/>
					) : (
						<>
							<IconWrapper>📷🎥</IconWrapper>
							<Text>사진과 동영상을 여기에 끌어다 놓으세요</Text>
							<UploadButton htmlFor="upload-btn">컴퓨터에서 선택</UploadButton>
							<HiddenInput id="upload-btn" type="file" accept="image/*" />
						</>
					)}
				</CreateFeedBody>
			</CreateFeedWrapper>
		</Container>
	);
};

export default CreateFeedModal;

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
	background-color: rgba(0, 0, 0, 0.3);
`;

const CreateFeedWrapper = styled.div`
	width: 550px;
	height: 560px;
	background-color: #fff;
	border-radius: 8px;
	overflow: hidden;
	display: flex;
	flex-direction: column;
`;

const CreateFeedHeader = styled.div`
	width: 100%;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 20px;
	border-bottom: 1px solid #262626;
`;

const CreateFeedBody = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #000000;
	text-align: center;
	padding: 20px;
	cursor: pointer;
`;

const IconWrapper = styled.div`
	font-size: 40px;
`;

const Text = styled.div`
	font-size: 16px;
	color: #555;
	margin-top: 20px;
`;

const UploadButton = styled.label`
	margin-top: 20px;
	padding: 10px 20px;
	background-color: #0095f6;
	color: #fff;
	border-radius: 4px;
	cursor: pointer;
`;

const HiddenInput = styled.input`
	display: none;
`;
