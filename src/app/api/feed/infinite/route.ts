import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/libs/firebase/firebaseClient';
import {
	collection,
	getDocs,
	limit,
	orderBy,
	query,
	startAfter,
} from 'firebase/firestore';

export async function GET(req: NextRequest) {
	const { searchParams } = new URL(req.url);
	const page = Number(searchParams.get('pageParam')) || 1;

	try {
		const docRef = collection(db, 'feeds');
		const limitValue = 3; // 페이지당 데이터 수

		// 초기 쿼리 설정
		let feedQuery = query(
			docRef,
			orderBy('created_at', 'desc'),
			limit(limitValue),
		);

		if (page > 1) {
			const previousDocs = await getDocs(
				query(
					docRef,
					orderBy('created_at', 'desc'),
					limit(limitValue * (page - 1)),
				),
			);
			const lastVisible = previousDocs.docs[previousDocs.docs.length - 1];
			feedQuery = query(
				docRef,
				orderBy('created_at', 'desc'),
				startAfter(lastVisible),
				limit(limitValue),
			);
		}

		const docSnap = await getDocs(feedQuery);
		const feedList = docSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

		// 다음 페이지가 존재하는지 확인
		const nextPage = feedList.length === limitValue ? page + 1 : null;

		const feeds = {
			feeds: feedList,
			nextPage,
		};

		return NextResponse.json(feeds);
	} catch (error) {
		console.error('Error fetching feeds:', error);
		return NextResponse.json(
			{ error: 'Failed to fetch feeds' },
			{ status: 500 },
		);
	}
}
