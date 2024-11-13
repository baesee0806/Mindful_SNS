import { color } from '@/utils/colors';
import { Ellipsis, Heart, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.div`
	width: 582px;
	@media only screen and (max-width: 758px) {
		width: 100%;
	}
`;
const FeedItemWrapper = styled.div`
	width: 95%;
	min-height: 100px;
	display: grid;
	grid-template-columns: 40px 1fr;
	gap: 10px;
	margin: 0 auto;
`;
// 피드 생성 유저 이미지
const UserImg = styled(Image)`
	border-radius: 50%;
	cursor: pointer;
`;
// 피드 정보
const UserInfoWrapper = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
`;

// 유저 정보와 피드 생성 시간

const HeaderWrapper = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 8px;
`;

const InfoHeader = styled.div`
	display: flex;
	align-items: center;
`;

const UserName = styled.p`
	font-weight: bold;
	font-size: 16px;
`;
const CreatedAt = styled.p`
	margin-left: 10px;
	font-size: 16px;
	color: ${color.WHITEGRAY};
`;
const OptionBtn = styled(Ellipsis)`
	width: 16px;
	height: 16px;
	cursor: pointer;
`;
// 피드 내용
const BodyWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 16px;
	& > p {
		font-size: 16px;
		word-break: break-all;
	}
`;
const ContentImg = styled(Image)`
	max-width: 100%;
	max-height: 100%;
	margin-top: 8px;
	border-radius: 15px;
`;

// 피드 옵션
const FooterWrapper = styled.footer`
	display: flex;
	margin-left: -10px;
	margin-bottom: 8px;
`;
const FeedLikeWrapper = styled.div`
	padding: 5px 10px;
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	& > p {
		background-color: inherit;
		color: ${color.WHITEGRAY};
	}
	&:hover {
		background-color: #6b6866;
	}
`;
const LikeIcon = styled(Heart)`
	width: 18px;
	height: 18px;
	margin-right: 4px;
	background-color: inherit;
`;
const FeedCommentWrapper = styled(Link)`
	padding: 5px 10px;
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 8px;
	cursor: pointer;
	& > p {
		background-color: inherit;
		color: ${color.WHITEGRAY};
	}
	&:hover {
		background-color: #6b6866;
	}
`;
const CommentIcon = styled(MessageCircle)`
	width: 18px;
	height: 18px;
	margin-right: 4px;
	background-color: inherit;
`;

const Line = styled.hr`
	width: 582px;
	height: 1px;
	background-color: ${color.LINECOLOR};
	margin-bottom: 16px;
	@media only screen and (max-width: 758px) {
		width: 100%;
	}
`;

export {
	Container,
	FeedItemWrapper,
	UserImg,
	UserInfoWrapper,
	HeaderWrapper,
	InfoHeader,
	UserName,
	CreatedAt,
	OptionBtn,
	BodyWrapper,
	ContentImg,
	FooterWrapper,
	FeedLikeWrapper,
	LikeIcon,
	FeedCommentWrapper,
	CommentIcon,
	Line,
};
