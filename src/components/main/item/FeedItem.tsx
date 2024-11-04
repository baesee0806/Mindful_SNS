import {
	CircleUserRound,
	Ellipsis,
	Heart,
	MessageSquareHeart,
	ThumbsUp,
} from 'lucide-react';
import * as S from './feedItem.styled';

const FeedItem = () => {
	return (
		<S.Container>
			{/* user info */}
			<S.UserInfoHeaderContainer>
				<S.UserInfoWrapper>
					{/* !유저 프로필 변경! */}
					<CircleUserRound />
					<p>user_nameuser_name</p>
					<p>1분전</p>
				</S.UserInfoWrapper>
				<Ellipsis />
			</S.UserInfoHeaderContainer>
			{/* Feed IMG */}
			<S.FeedImage
				src={'https://picsum.photos/582/580'}
				alt=""
				width={582}
				height={580}
			/>
			{/* Feed Option */}
			<S.FeedOptionContainer>
				<Heart />
				<MessageSquareHeart />
			</S.FeedOptionContainer>
			{/* Feed Like */}
			<S.FeedLikeContainer>
				<ThumbsUp />
				<p>좋아요 ##개</p>
			</S.FeedLikeContainer>
			{/* Feed create user content */}
			<S.FeedContentContainer>
				<S.ContentUserName>user_name</S.ContentUserName>
				<S.Content>commentcommentcommentcommentcomment</S.Content>
			</S.FeedContentContainer>
			{/* Feed comment count */}
			<S.CommentCount>댓글 ##개 모두보기</S.CommentCount>
			{/* Create Commnet */}
			<S.CommentInputContainer>
				<input type="text" placeholder="댓글 달기..." />
			</S.CommentInputContainer>
			{/* Line */}
			<S.Line />
		</S.Container>
	);
};

export default FeedItem;
