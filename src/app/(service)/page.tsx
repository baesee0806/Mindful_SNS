import {
	HydrationBoundary,
	QueryClient,
	dehydrate,
} from '@tanstack/react-query';

import { handleFeedFetch } from '@/libs/fetches/feed/handleFetch';

import MainLayout from '@/components/main/layout/MainLayout';

const Home = async () => {
	const queryClient = new QueryClient();
	await queryClient.prefetchInfiniteQuery({
		queryKey: ['FEEDLIST'],
		queryFn: ({ pageParam = 1 }) => handleFeedFetch(pageParam),
		initialPageParam: 1,
		staleTime: 30 * 1000,
	});

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<MainLayout />
		</HydrationBoundary>
	);
};

export default Home;
