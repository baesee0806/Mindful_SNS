import { useInfiniteQuery } from '@tanstack/react-query';
import { INFINITE_FEED_KEY } from '@/libs/feed';
import { fetchInfinityFeeds } from '@/libs/feed';

export const useFetchInfinityFeeds = () => {
	return useInfiniteQuery({
		queryKey: [INFINITE_FEED_KEY],
		queryFn: async ({ pageParam = 1 }) => await fetchInfinityFeeds(pageParam),
		initialPageParam: 1,
		getNextPageParam: (lastPage) => lastPage.nextPage,
	});
};
