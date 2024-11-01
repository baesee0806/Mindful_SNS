'use client';

import { useFetchUser } from '@/libs/auth/hooks/useFetchUser';
import { useUserStore } from '@/store/auth/useAuthStore';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import styled from 'styled-components';

const UserInfo = () => {
	const { id } = useParams<{ id: string }>();
	const { data, isLoading, error } = useFetchUser(id);
	const { user_id } = useUserStore();
	const isAdmin = user_id === id;

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error...</p>;

	return (
		<UserProfileWrapper>
			<UserImage src={data?.profile_img} alt="" width={150} height={150} />
			<UserInformationWrapper>
				<UserInfoHeader>
					<UserName>{data?.display_name}</UserName>
					{isAdmin && (
						<EditProfileButton href={`/profile/${id}/edit`} scroll={false}>
							프로필 편집
						</EditProfileButton>
					)}
				</UserInfoHeader>
				<UserMetrics>
					<p>게시물 {data?.feed_count}개</p>
					<p>팔로워 {data?.follow_count}명</p>
					<p>팔로잉 {data?.following_count}명</p>
				</UserMetrics>
				<UserDescription>
					<h3>소개</h3>
					<p>{data?.introduction}</p>
				</UserDescription>
			</UserInformationWrapper>
		</UserProfileWrapper>
	);
};

export default UserInfo;
const UserProfileWrapper = styled.div`
	width: 70%;
	min-width: 468px;
	min-height: 300px;
	margin-top: 20px;

	margin-bottom: 80px;
	display: flex;
	gap: 30px;
`;

// 유저 이미지
const UserImage = styled(Image)`
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
const EditProfileButton = styled(Link)`
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
