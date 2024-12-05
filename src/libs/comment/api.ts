// 댓글 가져오기
export const fetchComments = async (id: string) => {
	const res = await fetch(`http://localhost:3000/api/comment?${id}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	});
	const data = res.json();
	return data;
};

// 댓글 추가
export const addComment = async ({}) => {
	const addCommentDTO = new FormData();

	try {
		const res = await fetch(`/api/comment/new`, {
			method: 'POST',
			body: addCommentDTO,
		}).catch((e) => {
			console.log('False Add Comment POST', e);
		});

		return res;
	} catch (e) {
		console.log('False Add Comment POST', e);
	}
};
