import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

import MainLayout from '@/components/main/layout/MainLayout';
import { fetchInfinityFeeds } from '@/libs/feed';
import { createQueryClient } from '@/providers/createQueryClient';

const Home = async () => {
	const queryClient = createQueryClient();

	await queryClient.prefetchInfiniteQuery({
		queryKey: ['FEEDLIST'],
		queryFn: async ({ pageParam = 1 }) => await fetchInfinityFeeds(pageParam),
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
