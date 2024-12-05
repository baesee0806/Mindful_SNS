import { useQuery } from '@tanstack/react-query';
import { USER_INFO_KEY } from '../key';
import { getUserInfo } from '../api';

export const useFetchUserInfo = (user_id: string) => {
	return useQuery({
		queryKey: [USER_INFO_KEY],
		queryFn: () => getUserInfo(user_id),
	});
};
