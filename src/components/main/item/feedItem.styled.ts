import Image from 'next/image';
import styled from 'styled-components';

const Container = styled.div`
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
const FeedContentContainer = styled.div`
	width: 582px;
	display: flex;
	align-items: center;
	margin-bottom: 8px;
	@media only screen and (max-width: 758px) {
		width: 468px;
	}
`;
const ContentUserName = styled.p`
	font-weight: bold;
	font-size: 16px;
`;
const Content = styled.p`
	margin-left: 10px;
	font-size: 14px;
`;
const CommentCount = styled.div`
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

export {
	Container,
	UserInfoHeaderContainer,
	UserInfoWrapper,
	FeedImage,
	FeedOptionContainer,
	FeedLikeContainer,
	FeedContentContainer,
	ContentUserName,
	Content,
	CommentCount,
	CommentInputContainer,
	Line,
};
