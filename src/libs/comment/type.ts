export interface NewCommentDTO {
	feed_id: string;
	related_comment_id: string;
	commet: string;
	user_id: string;
	img_adress?: File | Blob | string;
}
