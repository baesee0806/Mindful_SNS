import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

import { fetchInfinityFeeds, INFINITE_FEED_KEY } from '@/libs/feed';
import { createQueryClient } from '@/providers/createQueryClient';
import FeedScreen from '@/components/main/screen/FeedScreen';

const Home = async () => {
	const queryClient = createQueryClient();

	await queryClient.prefetchInfiniteQuery({
		queryKey: [INFINITE_FEED_KEY],
		queryFn: async () => await fetchInfinityFeeds(1),
		initialPageParam: 1,
	});

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<FeedScreen />
		</HydrationBoundary>
	);
};

export default Home;
