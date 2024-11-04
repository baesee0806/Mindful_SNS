import { NextRequest, NextResponse } from 'next/server';
import { getFeedsApi } from '@/libs/apis/feed/feedApi';

export async function GET(req: NextRequest) {
	const { searchParams } = new URL(req.url);
	const page = Number(searchParams.get('pageParam')) || 1;

	try {
		const feeds = await getFeedsApi({ page });

		return NextResponse.json(feeds);
	} catch (error) {
		console.error('Error fetching feeds:', error);
		return NextResponse.json(
			{ error: 'Failed to fetch feeds' },
			{ status: 500 },
		);
	}
}
