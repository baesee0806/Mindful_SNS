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

export const addFeed = async (data: NewFeedDTO) => {
	const addFeedDTO = new FormData();
	addFeedDTO.append('feed_id', crypto.randomUUID());
	addFeedDTO.append('title', data.title);
	addFeedDTO.append('content', data.content);
	addFeedDTO.append('user_id', data.user_id);
	addFeedDTO.append('img_adress', data.img_adress);

	try {
		await fetch(`/api/feed/new`, {
			method: 'POST',
			body: addFeedDTO,
		}).catch((e) => {
			console.log('False Add Feed POST', e);
		});
	} catch (e) {
		console.log('False Add Feed POST', e);
	}
};
