'use client';
import styled from 'styled-components';
import Image from 'next/image';
import {
	CircleUserRound,
	Search,
	Ellipsis,
	MessageSquareHeart,
	Heart,
	ThumbsUp,
} from 'lucide-react';
import { useEffect } from 'react';
import { auth } from '@/libs/firebase/firebaseClient';
import { onAuthStateChanged } from 'firebase/auth';
import { useUserStore } from '@/store/auth/useAuthStore';
import { useQuery } from '@tanstack/react-query';
import { getFeedsApi } from '@/libs/feed/feedApi';

const MainScreen = () => {
	const { setUser } = useUserStore();

	useEffect(() => {
		const firebase = auth;
		onAuthStateChanged(firebase, (user) => {
			if (user) {
				setUser({
					user_id: user.uid,
					display_name: user.displayName as string,
					email: user.email as string,
				});
				console.log(user);
			} else {
				console.log('no user');
			}
		});
	}, [setUser]);
	const { data: feeds, isLoading } = useQuery({
		queryKey: ['FEEDS'],
		queryFn: getFeedsApi,
	});

	if (isLoading) return <p>Loading...</p>;
	return (
		<Container>
			{/* screen */}
			<FeedScreen>
				<FeedSearchContainer>
					<Search />
					<input type="text" placeholder="검색" />
				</FeedSearchContainer>
				{feeds?.map((el) => {
					return (
						<FeedItemContainer key={el.uid}>
							<UserInfoHeaderContainer>
								<UserInfoWrapper>
									<CircleUserRound />
									<p>user_nameuser_name</p>
									<p>1분전</p>
								</UserInfoWrapper>
								<Ellipsis />
							</UserInfoHeaderContainer>
							<FeedImage src={el.img} alt="" width={582} height={580} />
							<FeedOptionContainer>
								<Heart />
								<MessageSquareHeart />
							</FeedOptionContainer>
							<FeedLikeContainer>
								<ThumbsUp />
								<p>좋아요 ##개</p>
							</FeedLikeContainer>
							<FeedCreateUserCommentContainer>
								<CommentUserName>user_name</CommentUserName>
								<CommentContent>
									commentcommentcommentcommentcomment
								</CommentContent>
							</FeedCreateUserCommentContainer>
							<CommentAllView>댓글 ##개 모두보기</CommentAllView>
							<CommentInputContainer>
								<input type="text" placeholder="댓글 달기..." />
							</CommentInputContainer>
							<Line />
						</FeedItemContainer>
					);
				})}
				{/* <FeedItemContainer>
					<UserInfoHeaderContainer>
						<UserInfoWrapper>
							<CircleUserRound />
							<p>user_nameuser_name</p>
							<p>1분전</p>
						</UserInfoWrapper>
						<Ellipsis />
					</UserInfoHeaderContainer>
					<FeedImage
						src={'https://picsum.photos/582/680'}
						alt=""
						width={582}
						height={580}
					/>
					<FeedOptionContainer>
						<Heart />
						<MessageSquareHeart />
					</FeedOptionContainer>
					<FeedLikeContainer>
						<ThumbsUp />
						<p>좋아요 ##개</p>
					</FeedLikeContainer>
					<FeedCreateUserCommentContainer>
						<CommentUserName>user_name</CommentUserName>
						<CommentContent>commentcommentcommentcommentcomment</CommentContent>
					</FeedCreateUserCommentContainer>
					<CommentAllView>댓글 ##개 모두보기</CommentAllView>
					<CommentInputContainer>
						<input type="text" placeholder="댓글 달기..." />
					</CommentInputContainer>
					<Line />
				</FeedItemContainer> */}
			</FeedScreen>
			<RightSidebar>
				<Image
					src={'https://picsum.photos/160/600'}
					alt=""
					width={160}
					height={600}
				/>
			</RightSidebar>
		</Container>
	);
};

export default MainScreen;
const Container = styled.div`
	min-height: 100vh;
	display: grid;
	grid-template-columns: auto 0.4fr;
	@media only screen and (max-width: 1200px) {
		grid-template-columns: auto;
	}
`;
// screen
const FeedScreen = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	scroll-behavior: smooth;
	overflow: auto;
`;
const FeedSearchContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	min-height: 80px;
	& > svg {
		width: 24px;
		height: 24px;
		position: relative;
		top: 0;
		left: 40px;
	}
	& > input {
		width: 100%;
		height: 50%;
		border-radius: 8px;
		border: 1px solid #262626;
		padding-left: 50px;
		margin-right: 20px;
		font-size: 20px;
		&:focus {
			outline: none;
		}
	}
	@media only screen and (max-width: 758px) {
		display: none;
	}
`;
const FeedItemContainer = styled.div`
	width: 582px;
	@media only screen and (max-width: 758px) {
		width: 468px;
		margin-top: 20px;
	}
`;
const UserInfoHeaderContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 10px;
`;
const UserInfoWrapper = styled.div`
	display: flex;
	& > p {
		margin-left: 8px;
	}
`;
const FeedImage = styled(Image)`
	width: 100%;
	border-radius: 8px;
	@media only screen and (max-width: 758px) {
		height: 585px;
	}
`;
const FeedOptionContainer = styled.div`
	width: 100%;
	display: flex;
	margin-top: 10px;
	margin-bottom: 8px;
	& > svg {
		cursor: pointer;
	}
	& > svg:nth-child(2) {
		margin-left: 10px;
	}
`;
const FeedLikeContainer = styled.div`
	height: 24px;
	display: flex;
	align-items: center;
	margin-bottom: 8px;
	& > p {
		margin-left: 10px;
	}
`;
const FeedCreateUserCommentContainer = styled.div`
	width: 582px;
	display: flex;
	align-items: center;
	margin-bottom: 8px;
	@media only screen and (max-width: 758px) {
		width: 468px;
	}
`;
const CommentUserName = styled.p`
	font-weight: bold;
	font-size: 16px;
`;
const CommentContent = styled.p`
	margin-left: 10px;
	font-size: 14px;
`;
const CommentAllView = styled.div`
	width: 582px;
	font-weight: bold;
	margin-bottom: 8px;
	color: #262626;
	cursor: pointer;
	@media only screen and (max-width: 758px) {
		width: 468px;
	}
`;
const CommentInputContainer = styled.div`
	width: 582px;
	margin-bottom: 16px;
	& > input {
		width: 100%;
		height: 24px;
		font-size: 16px;
		&:focus {
			outline: none;
		}
	}
	@media only screen and (max-width: 758px) {
		width: 468px;
	}
`;
const Line = styled.hr`
	width: 582px;
	height: 1px;
	background-color: #262626;
	margin-bottom: 16px;
	@media only screen and (max-width: 758px) {
		width: 468px;
	}
`;
const RightSidebar = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	@media only screen and (max-width: 1200px) {
		display: none;
	}
`;
