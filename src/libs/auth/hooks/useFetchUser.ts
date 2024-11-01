import { getUserInfoApi } from '@/libs/apis/userApi';
import { useQuery } from '@tanstack/react-query';

export const useFetchUser = (uid: string) => {
	const queryKey = ['USER', uid] as const;
	return useQuery({
		queryKey,
		queryFn: async () => {
			try {
				const data = await getUserInfoApi(uid as string);
				return data;
			} catch (e) {
				throw e;
			}
		},
	});
};
