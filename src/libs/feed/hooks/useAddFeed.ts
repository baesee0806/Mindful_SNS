import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addFeed, INFINITE_FEED_KEY } from '@/libs/feed';
import { useRouter } from 'next/navigation';

export const useAddFeed = () => {
	const router = useRouter();
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: addFeed,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [INFINITE_FEED_KEY] });
			router.back();
		},
		onError: () => {
			console.log('False Add Feed POST');
		},
	});
};
