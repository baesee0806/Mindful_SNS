'use client';
import React, { useState } from 'react';
import styled from 'styled-components';

const DetailModal = ({ isOpen }: { isOpen: boolean }) => {
	const [comments, setComments] = useState<
		{ id: number; user: string; text: string }[]
	>([]);
	return (
		<Container>
			<ModalContent>
				<CloseButton
					onClick={() => {
						console.log('close');
					}}>
					X
				</CloseButton>

				{/* 좌측 이미지 섹션 */}
				<ImageSection>
					<Image src="/your-image-path" alt="Detail Image" />
				</ImageSection>

				{/* 우측 내용 섹션 */}
				<ContentSection>
					<Title>어억? 오옹? 이게 뭐여?</Title>
					<Description>본사도 말렸던 점주들의 백종원 '안대' 패러디</Description>

					{/* 댓글 섹션 */}
					<CommentSection>
						{comments.map((comment) => (
							<Comment key={comment.id}>
								<CommentUser>{comment.user}</CommentUser>
								<CommentText>{comment.text}</CommentText>
							</Comment>
						))}

						{/* 댓글 입력 */}
						<CommentForm>
							<CommentInput name="comment" placeholder="댓글 달기..." />
							<SubmitButton type="submit">게시</SubmitButton>
						</CommentForm>
					</CommentSection>
				</ContentSection>
			</ModalContent>
		</Container>
	);
};

export default DetailModal;

const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.7);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
`;

const ModalContent = styled.div`
	width: 800px;
	height: 600px;
	background-color: white;
	display: flex;
	border-radius: 8px;
	overflow: hidden;
`;

const CloseButton = styled.button`
	position: absolute;
	top: 10px;
	right: 10px;
	background: none;
	border: none;
	font-size: 20px;
	cursor: pointer;
`;

const ImageSection = styled.div`
	width: 50%;
	background-color: #f0f0f0;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Image = styled.img`
	max-width: 100%;
	max-height: 100%;
`;

const ContentSection = styled.div`
	width: 50%;
	height: 95%;
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const Title = styled.h2`
	height: 10%;
	margin: 0;
	font-size: 24px;
`;

const Description = styled.p`
	font-size: 16px;
	margin: 10px 0;
`;

const CommentSection = styled.div`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	margin-top: 20px;
	overflow-y: auto;
`;

const Comment = styled.div`
	margin-bottom: 10px;
`;

const CommentUser = styled.span`
	font-weight: bold;
	margin-right: 10px;
`;

const CommentText = styled.span`
	font-size: 14px;
`;

const CommentForm = styled.form`
	display: flex;
	align-items: center;
	margin-top: 20px;
`;

const CommentInput = styled.input`
	flex-grow: 1;
	padding: 10px;
	font-size: 14px;
	border: 1px solid #ccc;
	border-radius: 4px;
`;

const SubmitButton = styled.button`
	background-color: #0095f6;
	color: white;
	padding: 10px 20px;
	margin-left: 10px;
	border: none;
	border-radius: 4px;
	cursor: pointer;
`;
