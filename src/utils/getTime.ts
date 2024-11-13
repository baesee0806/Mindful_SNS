export const getTime = (timestamp: number): string => {
	const date = new Date(timestamp * 1000); // 초를 밀리세컨드로 변환
	const now = new Date();
	const timeDiff = now.getTime() - date.getTime();

	const seconds = Math.floor(timeDiff / 1000);
	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);
	const days = Math.floor(hours / 24);
	const weeks = Math.floor(days / 7);
	const months = Math.floor(days / 30);
	const years = Math.floor(days / 365);

	if (years > 0) return `${years}년 전`;
	if (months > 0) return `${months}개월 전`;
	if (weeks > 0) return `${weeks}주 전`;
	if (days > 0) return `${days}일 전`;
	if (hours > 0) return `${hours}시간 전`;
	if (minutes > 0) return `${minutes}분 전`;
	return '방금 전';
};
