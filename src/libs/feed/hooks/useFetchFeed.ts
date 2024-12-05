import { useQuery } from '@tanstack/react-query';
import { FEED_KEY } from '../key';
import { fetchFeed } from '..';

export const useFetchFeed = (feed_id: string) => {
	return useQuery({
		queryKey: [FEED_KEY],
		queryFn: () => fetchFeed(feed_id),
	});
};
