import * as S from './feedItem.styled';
import { IFeed } from '@/libs/feed';
import { getTime } from '@/utils/getTime';
import { color } from '@/utils/colors';
import { useQuery } from '@tanstack/react-query';

const FeedItem = ({ feed }: { feed: IFeed }) => {
	const {
		feed_id,
		user_id,
		img_adress,
		content,
		created_at,
		like_count,
		comment_count,
	} = feed;

	// 수정 포인트
	const getUserName = async () => {
		const res = await fetch(`/api/user/info?user_id=${user_id}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		}).then((res) => res.json());
		return res;
	};

	const { data: user } = useQuery({
		queryKey: ['USER'],
		queryFn: () => getUserName(),
	});

	return (
		<S.Container key={feed_id}>
			<S.FeedItemWrapper>
				{/* 유저 이미지 */}
				<S.UserImg src={user?.profile_img} alt="" width={40} height={40} />
				<S.UserInfoWrapper>
					{/* 유저 정보와 피드의 생성 시간 */}
					<S.HeaderWrapper>
						<S.InfoHeader>
							<S.UserName>{user?.display_name}</S.UserName>
							<S.CreatedAt>{getTime(created_at.seconds)}</S.CreatedAt>
						</S.InfoHeader>
						<S.OptionBtn color={color.WHITEGRAY} />
					</S.HeaderWrapper>
					{/* 피드 이미지와 피드 내용*/}
					<S.BodyWrapper>
						<div>{content}</div>
						{img_adress !== '' && (
							<S.ContentImg src={img_adress} alt="" width={550} height={420} />
						)}
					</S.BodyWrapper>
					{/* 피드 옵션 */}
					<S.FooterWrapper>
						<S.FeedLikeWrapper>
							<S.LikeIcon color={color.WHITEGRAY} />
							<p>{like_count}</p>
						</S.FeedLikeWrapper>
						<S.FeedCommentWrapper href={`/comment/${feed_id}`}>
							<S.CommentIcon color={color.WHITEGRAY} />
							<p>{comment_count}</p>
						</S.FeedCommentWrapper>
					</S.FooterWrapper>
				</S.UserInfoWrapper>
			</S.FeedItemWrapper>
			{/* Line */}
			<S.Line />
		</S.Container>
	);
};

export default FeedItem;
