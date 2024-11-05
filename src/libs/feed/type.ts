export interface IFeed {
	feed_id: string;
	title: string;
	content: string;
	created_at: Date;
	update_at: Date;
	like_count: number;
	comment_count: number;
	user_id: string;
}
// DTO: Data Transfer Object
export interface NewFeedDTO {
	feed_id: string;
	title: string;
	content: string;
	user_id: string;
	img_adress: File | Blob | string;
}
