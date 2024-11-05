'use client';
// styled
import * as S from './feedScreen.styled';
// 이미지 검색 아이콘
import { Search } from 'lucide-react';
// hooks
import { useEffect } from 'react';
import FeedItem from '../item/FeedItem';
import { useFetchInfinityFeeds } from '@/libs/feed/hooks/useFetchInfinityFeeds';

const FeedScreen = () => {
	const { data, isFetchingNextPage, hasNextPage, fetchNextPage, isLoading } =
		useFetchInfinityFeeds();

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
			{/* 데스크탑 검색 창 */}
			<S.DesktopSearchContainer>
				<Search />
				<input type="text" placeholder="검색" />
			</S.DesktopSearchContainer>
			{/* Feed item */}
			{isLoading && <p>Loading...</p>}
			{data?.pages
				.flatMap((page) => page.feeds)
				.map((feed) => (
					<FeedItem key={feed.uid} />
				))}
			{isFetchingNextPage && <p>Loading more...</p>}
		</S.Container>
	);
};

export default FeedScreen;
