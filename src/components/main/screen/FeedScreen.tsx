// styled
import * as S from './feedScreen.styled';
// 이미지 검색 아이콘
import { Search } from 'lucide-react';
//
import { useInfiniteQuery } from '@tanstack/react-query';
import { handleFeedFetch } from '@/libs/fetches/feed/handleFetch';
// hooks
import { useEffect } from 'react';
import FeedItem from '../item/FeedItem';

const FeedScreen = () => {
	// infinite query (분리 예정 코드)
	const { data, isFetchingNextPage, hasNextPage, fetchNextPage } =
		useInfiniteQuery({
			queryKey: ['FEEDLIST'],
			queryFn: ({ pageParam = 1 }) => handleFeedFetch(pageParam),
			initialPageParam: 1,
			getNextPageParam: (lastPage) => lastPage.nextPage,
			staleTime: 30 * 1000,
		});

	// 스크롤 맨 밑 도착시에 다음 페이지 호출
	useEffect(() => {
		const handleScroll = () => {
			if (
				window.innerHeight + window.scrollY >=
					document.documentElement.scrollHeight - 50 &&
				hasNextPage &&
				!isFetchingNextPage
			) {
				console.log('실행 하고 있어');

				fetchNextPage();
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [hasNextPage, isFetchingNextPage, fetchNextPage]);

	return (
		<S.Container>
			{/* 모바일 검색 창 */}
			<S.DesktopSearchContainer>
				<Search />
				<input type="text" placeholder="검색" />
			</S.DesktopSearchContainer>
			{/* Feed item */}
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
