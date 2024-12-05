// 유저의 정보
export const getUserInfo = async (user_id: string) => {
	const res = await fetch(`/api/user/info?user_id=${user_id}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	}).then((res) => res.json());
	return res;
};
