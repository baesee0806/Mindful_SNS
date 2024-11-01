'use client';

import { useFetchUserFeeds } from '@/libs/auth/hooks/useFetchUserFeeds';
import { useUserStore } from '@/store/auth/useAuthStore';
import styled from 'styled-components';

const UserFeed = () => {
	const { user_id } = useUserStore();
	const { data, isLoading, error } = useFetchUserFeeds(user_id);

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error...</p>;
	return (
		<>
			<PostHeader>게시글</PostHeader>
			<PostContainer>
				{data?.map((post) => (
					<Post key={post.id}></Post>
				))}
			</PostContainer>
		</>
	);
};

export default UserFeed;
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
