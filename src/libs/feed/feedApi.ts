import {
	collection,
	getDocs,
	query,
	// orderBy,
	startAfter,
	limit,
} from 'firebase/firestore';
import { db } from '../firebase/firebaseClient';
interface GetFeedsApiParams {
	page: number;
}

export const getFeedsApi = async ({ page }: GetFeedsApiParams) => {
	const docRef = collection(db, 'feeds');
	const limitValue = 3; // 페이지당 데이터 수

	// 초기 쿼리 설정
	let feedQuery = query(docRef, limit(limitValue));

	if (page > 1) {
		const previousDocs = await getDocs(
			query(docRef, limit(limitValue * (page - 1))),
		);
		const lastVisible = previousDocs.docs[previousDocs.docs.length - 1];
		feedQuery = query(docRef, startAfter(lastVisible), limit(limitValue));
	}

	try {
		const docSnap = await getDocs(feedQuery);
		const feeds = docSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

		// 다음 페이지가 존재하는지 확인
		const nextPage = feeds.length === limitValue ? page + 1 : null;

		return {
			feeds,
			nextPage,
		};
	} catch (error) {
		console.error('Error fetching feeds:', error);
		throw new Error('Failed to fetch feeds');
	}
};
