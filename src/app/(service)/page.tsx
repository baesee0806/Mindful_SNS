import {
	HydrationBoundary,
	QueryClient,
	dehydrate,
} from '@tanstack/react-query';

import MainScreen from './_components/main/MainScreen';
import { getFeedsApi } from '@/libs/feed/feedApi';

const Home = async () => {
	const queryClient = new QueryClient();
	await queryClient.prefetchQuery({
		queryKey: ['FEEDS'],
		queryFn: getFeedsApi,
	});

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<MainScreen />
		</HydrationBoundary>
	);
};

export default Home;
