export const handleFeedFetch = async (pageParam: number) => {
	const res = await fetch(`/api/feed?pageParam=${pageParam}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	});
	const data = await res.json();
	return data;
};
