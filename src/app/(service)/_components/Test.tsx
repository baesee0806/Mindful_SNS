'use client';
import styled from 'styled-components';
import {
	TentTree,
	House,
	Send,
	CircleUserRound,
	SquarePlus,
	Search,
	Ellipsis,
	MessageSquareHeart,
	Heart,
	ThumbsUp,
} from 'lucide-react';
import Image from 'next/image';

const test = () => {
	return (
		<Container>
			{/* side menu */}
			<SidebarContainer>
				<SidebarHeader>
					<TentTree />
					<h1>Mindful</h1>
				</SidebarHeader>
				<SearchBarContainer>
					<Search />
					<input type="text" placeholder="검색" />
				</SearchBarContainer>
				<SidebarMenuItem>
					<House />
					<p>Home</p>
				</SidebarMenuItem>
				<SidebarMenuItem>
					<CircleUserRound />
					<p>Profile</p>
				</SidebarMenuItem>
				<SidebarMenuItem>
					<Send />
					<p>Message</p>
				</SidebarMenuItem>
				<SidebarMenuItem>
					<SquarePlus />
					<p>Add Write</p>
				</SidebarMenuItem>
			</SidebarContainer>
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
					src={'https://picsum.photos/300/600'}
					alt=""
					width={300}
					height={600}
				/>
			</RightSidebar>
		</Container>
	);
};

export default test;

const Container = styled.div`
	min-height: 100vh;
	display: grid;
	grid-template-columns: 0.3fr 1fr 0.45fr;
	@media only screen and (max-width: 1200px) {
		grid-template-columns: 90px 1fr;
	}
	@media only screen and (max-width: 758px) {
		grid-template-columns: 1fr;
		grid-template-rows: 90px 1fr;
	}
`;
// side menu
const SidebarContainer = styled.div`
	height: 100%;
	border-right: 1px solid #262626;
	display: flex;
	flex-direction: column;
	@media only screen and (max-width: 758px) {
		height: 89px;
		border-right: none;
		border-bottom: 1px solid #262626;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
`;
const SidebarHeader = styled.div`
	display: flex;
	align-items: center;
	margin: 37px 0 13px 37px;
	cursor: pointer;
	& > h1 {
		margin-left: 10px;
	}
	@media only screen and (max-width: 1200px) {
		& > h1 {
			display: none;
		}
	}
	@media only screen and (max-width: 758px) {
		height: 100%;
		margin: 0 0 0 37px;
		display: flex;
		align-items: center;
		& > h1 {
			display: block;
		}
	}
`;
const SearchBarContainer = styled.div`
	display: none;
	@media only screen and (max-width: 758px) {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		width: 100%;
		& > svg {
			position: relative;
			top: 0;
			left: 40px;
		}
		& > input {
			width: 90%;
			height: 50%;
			border-radius: 8px;
			border: 1px solid #262626;
			padding-left: 50px;
			font-size: 16px;
			&:focus {
				outline: none;
			}
		}
	}
`;

const SidebarMenuItem = styled.div`
	width: 70%;
	display: flex;
	align-items: center;
	border-radius: 8px;
	padding: 10px 8px;
	margin-top: 16px;
	margin-left: 29px;
	margin-bottom: 10px;
	cursor: pointer;

	&:hover {
		background-color: #262626;
		& > svg,
		p {
			background-color: #262626;
		}
	}
	& > p {
		margin-left: 10px;
	}
	@media only screen and (max-width: 1200px) {
		width: 24px;
		& > p {
			display: none;
		}
	}
	@media only screen and (max-width: 758px) {
		display: none;
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
	border-radius: 8px;
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
`;
const Line = styled.hr`
	width: 582px;
	height: 1px;
	background-color: #262626;
	margin-bottom: 16px;
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
