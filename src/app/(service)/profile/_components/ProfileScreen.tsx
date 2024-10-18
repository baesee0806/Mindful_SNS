'use client';
import styled from 'styled-components';
import { CircleUserRound } from 'lucide-react';
const ProfileScreen = () => {
	return (
		<Container>
			<UserProfileWrapper>
				<UserImage />
				<UserInformationWrapper>
					<UserInfoHeader>
						<UserName>user_name</UserName>
						<EditProfileButton>프로필 편집</EditProfileButton>
					</UserInfoHeader>
					<UserMetrics>
						<p>게시물 ##개</p>
						<p>팔로워 ##명</p>
						<p>팔로잉 ##명</p>
					</UserMetrics>
					<UserDescription>
						<h3>소개</h3>
						<p>Text 1200</p>
					</UserDescription>
				</UserInformationWrapper>
			</UserProfileWrapper>
			<Line />
			<PostHeader>게시글</PostHeader>
			<PostContainer>
				<Post></Post>
				<Post></Post>
				<Post></Post>
				<Post></Post>
				<Post></Post>
				<Post></Post>
				<Post></Post>
				<Post></Post>
			</PostContainer>
		</Container>
	);
};

export default ProfileScreen;

const Container = styled.div`
	height: 100vh;

	display: flex;
	flex-direction: column;
	align-items: center;
`;

const UserProfileWrapper = styled.div`
	width: 70%;
	min-width: 468px;

	margin-top: 20px;

	margin-bottom: 80px;
	display: flex;
	gap: 30px;
`;

// 유저 이미지
const UserImage = styled(CircleUserRound)`
	width: 150px;
	height: 150px;
	border-radius: 50%;
	padding: 0;
`;
const UserInformationWrapper = styled.div`
	width: 80%;
	display: flex;
	flex-direction: column;
	margin-top: 8px;
`;

// 유저 이름, 프로필 편집 버튼
const UserInfoHeader = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
`;
const UserName = styled.p`
	font-size: 24px;
	font-weight: bold;
	margin-right: 32px;
`;
const EditProfileButton = styled.button`
	background-color: #0095f6;
	color: white;
	border: none;
	border-radius: 4px;
	padding: 4px 8px;
	font-size: 14px;
	cursor: pointer;
`;

// 게시물, 팔로워, 팔로잉
const UserMetrics = styled.div`
	display: flex;
	align-items: center;
	& > p {
		margin-right: 20px;
		font-size: 16px;
		font-weight: bold;
	}
	margin-bottom: 20px;
`;

const UserDescription = styled.div`
	& > h3 {
		font-size: 16px;
		font-weight: bold;
		margin-bottom: 8px;
	}
	& > p {
		font-size: 16px;
		height: 80%;
	}
`;

const Line = styled.hr`
	width: 80%;
	height: 1px;
	background-color: #262626;
	margin-bottom: 16px;
`;

const PostHeader = styled.div`
	font-size: 24px;
	font-weight: bold;
	margin-bottom: 16px;
`;

const PostContainer = styled.div`
	width: 80%;
	min-width: 468px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;
	justify-content: center;
	align-items: center;
	margin-bottom: 80px;
	@media only screen and (max-width: 830px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media only screen and (max-width: 758px) {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;
const Post = styled.div`
	width: 300px;
	height: 310px;
	background-color: #657ae4;
`;
