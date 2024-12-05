import { NewFeedDTO } from '@/libs/feed';
import { QueryFunctionContext } from '@tanstack/react-query';

// 무한 스크롤 피드 가져오기
export const fetchInfinityFeeds = async ({
	pageParam = 1,
}: QueryFunctionContext) => {
	const res = await fetch(
		`http://localhost:3000/api/feed/infinite?pageParam=${pageParam}`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		},
	);
	const data = await res.json();
	return data;
};

// 피드 추가
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
	if (img_adress !== null) {
		addFeedDTO.append('img_adress', img_adress);
	}

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

// 피드 가져오기
export const fetchFeed = async (feed_id: string) => {
	const res = await fetch(`/api/feed?feed_id=${feed_id}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	});
	const data = await res.json();
	return data;
};
