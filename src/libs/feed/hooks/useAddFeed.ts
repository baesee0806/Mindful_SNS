import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addFeed, INFINITE_FEED_KEY, NewFeedDTO } from '@/libs/feed';

export const useAddFeed = (data: NewFeedDTO) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async () => {
			addFeed(data);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [INFINITE_FEED_KEY] });
		},
		onError: () => {
			console.log('False Add Feed POST');
		},
	});
};
