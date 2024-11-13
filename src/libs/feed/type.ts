import { Timestamp } from 'firebase/firestore';

export interface IFeed {
	feed_id: string;
	content: string;
	created_at: Timestamp;
	update_at: Timestamp;
	like_count: number;
	comment_count: number;
	user_id: string;
	img_adress: string;
}
// DTO: Data Transfer Object
export interface NewFeedDTO {
	feed_id: string;
	content: string;
	user_id: string;
	img_adress: File | Blob | string;
}
