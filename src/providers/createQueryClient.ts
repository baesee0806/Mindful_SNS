import { QueryClient } from '@tanstack/react-query';

export function createQueryClient() {
	return new QueryClient({
		defaultOptions: {
			queries: {
				// ssr 일경우 보통 staleTime 을 지정해야한다.
				// 클라이언트에서 즉시 refetch 되는것을 방지하기위해 0 위로 설정
				staleTime: 60 * 1000,
				refetchOnWindowFocus: false,
			},
		},
	});
}
