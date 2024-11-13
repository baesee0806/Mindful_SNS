'use client';
import styled from 'styled-components';
import {
	CircleUserRound,
	MessageCirclePlus,
	Ellipsis,
	Send,
} from 'lucide-react';
import Image from 'next/image';
const message = [
	{
		user_id: 'A',
		message: '1',
		img: 'https://picsum.photos/582/680',
		user_img: 'https://picsum.photos/582/680',
	},
	{
		user_id: 'B',
		message:
			'4sdfsdafsdfsdfsdfsfsa4sdfsdafsdfsdfsdfsfsafsdfsggs4sdfsdafsdfsdfsdfsfsafsdfsggs4sdfsdafsdfsdfsdfsfsafsdfsggs4sdfsdafsdfsdfsdfsfsafsdfsggs4sdfsdafsdfsdfsdfsfsafsdfsggsfsdfsggs4sdfsdafsdfsdfsdfsfsafsdfsggs4sdfsdafsdfsdfsdfsfsafsdfsggs',
		img: '',
		user_img: 'https://picsum.photos/582/680',
	},
	{
		user_id: 'A',
		message: '2',
		img: '',
		user_img: 'https://picsum.photos/582/680',
	},
	{
		user_id: 'B',
		message: '5',
		img: '',
		user_img: 'https://picsum.photos/582/680',
	},
	{
		user_id: 'A',
		message: '3',
		img: '',
		user_img: 'https://picsum.photos/582/680',
	},
	{
		user_id: 'B',
		message: '6',
		img: '',
		user_img: 'https://picsum.photos/582/680',
	},
	{
		user_id: 'B',
		message: '6',
		img: '',
		user_img: 'https://picsum.photos/582/680',
	},
];
const MessageScreen = () => {
	const MyId = 'A';
	return (
		<Container>
			<ChatUserWrapper>
				<CreateChatWrapper>
					<p>userName</p>
					<MessageCirclePlus />
				</CreateChatWrapper>
				{/* chat user list */}
				<MessageAreaTitle>메시지</MessageAreaTitle>
				<MessageWrapper>
					<ChatUser>
						<CircleUserRound />
						<p>유저1</p>
					</ChatUser>
				</MessageWrapper>
			</ChatUserWrapper>
			<ChattingScreenWrapper>
				<ChattingHeader>
					<OtherChatUser>
						<CircleUserRound />
						<p>유저1</p>
					</OtherChatUser>
					<ChattingMoreInfo />
				</ChattingHeader>
				<ChattingScreen>
					{message.map((data, index) => {
						if (data.user_id === MyId) {
							return (
								<MyChatUserMessage key={index}>
									<Message>{data.message}</Message>
									{data.img && (
										<MessageImg
											src={data.img}
											alt="img"
											width={198}
											height={352}
										/>
									)}
								</MyChatUserMessage>
							);
						} else {
							return (
								<OtherChatUserMessage key={index}>
									<OtherUserImg
										src={data.user_img}
										alt=""
										width={35}
										height={35}
									/>
									<OtherUserMessage>{data.message}</OtherUserMessage>
									{data.img && (
										<MessageImg
											src={data.img}
											alt="img"
											width={198}
											height={352}
										/>
									)}
								</OtherChatUserMessage>
							);
						}
					})}
				</ChattingScreen>
				<SendChatWrapper>
					<Send />
					<input type="text" placeholder="메시지 입력..." />
				</SendChatWrapper>
			</ChattingScreenWrapper>
		</Container>
	);
};

export default MessageScreen;

const Container = styled.div`
	width: 100%;
	height: 100dvh;
	display: grid;
	grid-template-columns: 0.25fr auto;
`;

const ChatUserWrapper = styled.div`
	width: 99%;
	height: 100%;
	min-width: 80px;
	display: flex;
	flex-direction: column;
	overflow: auto;
	border-right: 1px solid #262626;
`;

const CreateChatWrapper = styled.div`
	width: 100%;
	min-height: 80px;
	display: flex;
	align-items: start;
	justify-content: space-between;
	margin-top: 10px;
	margin-bottom: 10px;
	& > p {
		font-size: 20px;
		font-weight: 500;
		margin-top: 16px;
		margin-left: 10px;
	}
	& > svg {
		width: 28px;
		height: 28px;
		margin-top: 16px;
		margin-right: 10px;
		cursor: pointer;
	}
	@media only screen and (max-width: 1076px) {
		justify-content: center;
		& > p {
			display: none;
		}
		& > svg {
			width: 36px;
			height: 36px;
			padding: 10px;
			border-radius: 8px;
			margin-right: 0;
			&:hover {
				background-color: #262626;
			}
		}
	}
`;
const MessageWrapper = styled.div`
	width: 100%;
	height: 100%;
	min-height: 80px;
	scroll-behavior: smooth;
`;
const MessageAreaTitle = styled.div`
	margin-left: 10px;
	font-size: 16px;
	@media only screen and (max-width: 1076px) {
		display: none;
	}
`;
const ChatUser = styled.div`
	width: 90%;
	height: 50px;
	display: flex;
	align-items: center;
	border-radius: 8px;
	margin-top: 10px;
	margin-left: 10px;
	cursor: pointer;
	& > svg {
		width: 30px;
		height: 30px;
		margin-left: 10px;
	}
	& > p {
		margin-left: 10px;
		font-size: 20px;
		font-weight: 500;
	}
	&:hover {
		background-color: #262626;
		& > svg,
		p {
			background-color: #262626;
		}
	}
	@media only screen and (max-width: 1076px) {
		width: auto;
		margin-left: 0;
		justify-content: center;
		align-items: center;
		& > p {
			display: none;
			margin-left: 0;
		}
		& > svg {
			margin-left: 0;
			padding: 10px;
			border-radius: 8px;
			width: 36px;
			height: 36px;
		}
		&:hover {
			background-color: inherit;
		}
	}
`;

const ChattingScreenWrapper = styled.div`
	width: 100%;
	height: 100dvh;
	display: flex;
	flex-direction: column;
`;

const ChattingHeader = styled.div`
	width: 100%;
	height: 60px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #262626;
`;
const OtherChatUser = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	& > svg {
		width: 30px;
		height: 30px;
		margin-left: 10px;
	}
	& > p {
		margin-left: 10px;
		font-size: 20px;
		font-weight: 500;
	}
`;

const ChattingMoreInfo = styled(Ellipsis)`
	width: 30px;
	height: 30px;
	margin-right: 10px;
	cursor: pointer;
`;
const ChattingScreen = styled.div`
	width: 100%;
	height: 100%;
	overflow-y: auto;
`;
const OtherChatUserMessage = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: flex-end;
`;
const OtherUserImg = styled(Image)`
	border-radius: 50%;
	margin-left: 10px;
	margin-bottom: 10px;
`;
const MyChatUserMessage = styled.div`
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: flex-end;
`;
const Message = styled.p`
	width: auto;
	max-width: 198px;
	max-height: 352px;
	border-radius: 8px;
	border: 1px solid #262626;
	margin-top: 10px;
	margin-bottom: 10px;
	margin-right: 20px;
	padding: 8px 10px;
	word-break: break-all;
`;
const OtherUserMessage = styled.p`
	width: auto;
	max-width: 198px;
	max-height: 352px;

	border-radius: 8px;
	border: 1px solid #262626;
	margin-top: 10px;
	margin-bottom: 10px;
	margin-left: 10px;
	padding: 8px 10px;
	word-break: break-all;
`;
const MessageImg = styled(Image)`
	width: 198px;
	height: 352px;
	margin-right: 20px;
	border-radius: 8px;
`;

const SendChatWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
	min-height: 80px;
	bottom: 0;
	& > svg {
		width: 24px;
		height: 24px;
		position: relative;
		top: 0;
		left: 40px;
	}
	& > input {
		width: 100%;
		height: 50px;
		border-radius: 8px;
		border: 1px solid #262626;
		padding-left: 50px;
		margin-right: 20px;
		font-size: 20px;
		&:focus {
			outline: none;
		}
	}
`;
