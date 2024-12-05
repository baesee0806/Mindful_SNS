import {
	HydrationBoundary,
	QueryClient,
	dehydrate,
} from '@tanstack/react-query';

import { fetchInfinityFeeds, INFINITE_FEED_KEY } from '@/libs/feed';
import FeedScreen from '@/components/main/screen/FeedScreen';

interface LastPage {
	nextPage: number | undefined;
}

const Home = async () => {
	const queryClient = new QueryClient();
	await queryClient.fetchInfiniteQuery({
		queryKey: [INFINITE_FEED_KEY],
		queryFn: fetchInfinityFeeds,
		initialPageParam: 1,
		getNextPageParam: (lastPage: LastPage) => lastPage.nextPage,
	});

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<FeedScreen />
		</HydrationBoundary>
	);
};

export default Home;
