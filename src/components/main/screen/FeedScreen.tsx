'use client';
// styled
import * as S from './feedScreen.styled';
// hooks
import { useEffect } from 'react';
import FeedItem from '../item/FeedItem';
import { useFetchInfinityFeeds } from '@/libs/feed/hooks/useFetchInfinityFeeds';
import { useUserStore } from '@/store/auth/useAuthStore';

const FeedScreen = () => {
	const { data, isFetchingNextPage, hasNextPage, fetchNextPage, isLoading } =
		useFetchInfinityFeeds();
	// 유저 정보 저장
	const { setUser } = useUserStore();

	const getUserInfo = async () => {
		const res = await fetch('/api/user', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		}).then((res) => res.json());
		setUser({
			user_id: res.user_id,
			display_name: res.display_name,
			email: res.email,
		});
	};

	useEffect(() => {
		getUserInfo();
	}, []);

	// 스크롤 맨 밑 도착시에 다음 페이지 호출
	useEffect(() => {
		const handleScroll = () => {
			if (
				window.innerHeight + window.scrollY >=
					document.documentElement.scrollHeight - 50 &&
				hasNextPage &&
				!isFetchingNextPage
			) {
				fetchNextPage();
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [hasNextPage, isFetchingNextPage, fetchNextPage]);

	return (
		<S.Container>
			{isLoading && <p>Loading...</p>}
			<S.FeedWrapper>
				{/* Feed item */}
				{data?.pages
					.flatMap((page) => page.feeds)
					.map((feed) => (
						<FeedItem key={feed.feed_id} feed={feed} />
					))}
			</S.FeedWrapper>
			{isFetchingNextPage && <p>Loading more...</p>}
		</S.Container>
	);
};

export default FeedScreen;
