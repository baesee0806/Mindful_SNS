import { NewFeedDTO } from '@/libs/feed';
export const fetchInfinityFeeds = async (pageParam: number) => {
	const res = await fetch(`/api/feed/infinite?pageParam=${pageParam}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	});
	const data = await res.json();
	return data;
};

export const addFeed = async ({
	feed_id,
	content,
	user_id,
	img_adress,
}: NewFeedDTO) => {
	const addFeedDTO = new FormData();
	addFeedDTO.append('feed_id', feed_id);
	addFeedDTO.append('content', content);
	addFeedDTO.append('user_id', user_id);
	addFeedDTO.append('img_adress', img_adress);

	try {
		const res = await fetch(`/api/feed/new`, {
			method: 'POST',
			body: addFeedDTO,
		}).catch((e) => {
			console.log('False Add Feed POST', e);
		});

		return res;
	} catch (e) {
		console.log('False Add Feed POST', e);
	}
};
