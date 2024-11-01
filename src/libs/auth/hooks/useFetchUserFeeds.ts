import { getUserFeedsApi } from '@/libs/apis/userApi';
import { useQuery } from '@tanstack/react-query';

export const useFetchUserFeeds = (uid: string) => {
	const queryKey = ['Feeds', uid] as const;
	return useQuery({
		queryKey,
		queryFn: async () => {
			try {
				const data = await getUserFeedsApi(uid as string);
				return data;
			} catch (e) {
				throw e;
			}
		},
	});
};
