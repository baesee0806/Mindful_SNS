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

const MainScreen = () => {
	return (
		<Container>
			{/* screen */}
			<ContentScreen>
				<ContentSearchContainer>
					<Search />
					<input type="text" placeholder="검색" />
				</ContentSearchContainer>
				<ContentItemContainer>
					<UserInfoHeaderContainer>
						<UserInfoWrapper>
							<CircleUserRound />
							<p>user_nameuser_name</p>
							<p>1분전</p>
						</UserInfoWrapper>
						<Ellipsis />
					</UserInfoHeaderContainer>
					<ContentImage
						src={'https://picsum.photos/582/680'}
						alt=""
						width={582}
						height={580}
					/>
					<ContentOptionContainer>
						<Heart />
						<MessageSquareHeart />
					</ContentOptionContainer>
					<ContentLikeContainer>
						<ThumbsUp />
						<p>좋아요 ##개</p>
					</ContentLikeContainer>
				</ContentItemContainer>
				<ContentCreateUserCommentContainer>
					<CommentUserName>user_name</CommentUserName>
					<CommentContent>commentcommentcommentcommentcomment</CommentContent>
				</ContentCreateUserCommentContainer>
				<CommentAllView>댓글 ##개 모두보기</CommentAllView>
				<CommentInputContainer>
					<input type="text" placeholder="댓글 달기..." />
				</CommentInputContainer>
				<Line />
			</ContentScreen>
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
const ContentScreen = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	scroll-behavior: smooth;
	overflow: auto;
`;
const ContentSearchContainer = styled.div`
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
const ContentItemContainer = styled.div`
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
const ContentImage = styled(Image)`
	width: 100%;
	border-radius: 8px;
	@media only screen and (max-width: 758px) {
		height: 585px;
	}
`;
const ContentOptionContainer = styled.div`
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
const ContentLikeContainer = styled.div`
	height: 24px;
	display: flex;
	align-items: center;
	margin-bottom: 8px;
	& > p {
		margin-left: 10px;
	}
`;
const ContentCreateUserCommentContainer = styled.div`
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
