import { color } from '@/utils/colors';
import Image from 'next/image';
import styled from 'styled-components';

const CreateFeedWrapper = styled.div`
	width: 600px;
	max-height: 600px;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	scroll-behavior: smooth;
	overflow: auto;

	@media only screen and (max-width: 758px) {
		width: 100%;
		height: 100%;
	}
`;
// header
const CreateFeedHeader = styled.div`
	width: 100%;
	min-height: 60px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${color.MODALBGC};
`;
const CancleButton = styled.button`
	background-color: transparent;
	border: none;
	font-size: 16px;
	cursor: pointer;
	padding: 5px 10px;
	margin-left: 10px;
	border-radius: 5px;
	&:hover {
		background-color: ${color.WHITEGRAY};
	}
`;
const Title = styled.div`
	font-size: 16px;
	font-weight: bold;
	cursor: default;
`;
const HideArea = styled.div`
	visibility: hidden;
	margin-right: 10px;
`;
// body
const CreateFeedBody = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	background-color: ${color.MODALBGC};
`;
const UserImage = styled(Image)`
	border-radius: 50%;
	margin-top: 15px;
	margin-left: 20px;
	margin-right: 10px;
	cursor: default;
`;
const TextAreaWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	background-color: ${color.MODALBGC};
`;
const UserName = styled.div`
	margin-top: 15px;
	font-size: 16px;
	font-weight: bold;
	background-color: ${color.MODALBGC};
`;
const Content = styled.textarea`
	width: 100%;
	margin-top: 10px;
	padding-right: 5px;
	border: none;
	min-height: 16px;
	max-height: 400px;
	overflow-y: auto;
	box-sizing: border-box;
	font-size: 16px;
	resize: none;
	margin-bottom: 10px;
	background-color: ${color.MODALBGC};
	color: ${color.WHITEGRAY};
	&:focus {
		outline: none;
	}
`;
const PrivewImage = styled(Image)`
	width: 90%;
	min-height: 300px;
	border-radius: 15px;
`;
const OptionWrapper = styled.div`
	background-color: ${color.MODALBGC};
`;
const UploadButton = styled.label`
	width: 30px;
	height: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 5px 10px;
	margin-left: -15px;
	background-color: ${color.MODALBGC};

	cursor: pointer;
	& > svg {
		width: 24px;
		height: 24px;
	}
`;
const HiddenInput = styled.input`
	display: none;
	background-color: ${color.MODALBGC};
`;
// footer
const CreateFeedFooter = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	background-color: ${color.MODALBGC};
`;
const CharCount = styled.div<{ $isLimitExceeded: boolean }>`
	font-size: 16px;
	color: ${({ $isLimitExceeded }) => ($isLimitExceeded ? 'red' : 'gray')};
	text-align: right;
	background-color: ${color.MODALBGC};
`;
const SubmitButton = styled.button`
	border: none;
	padding: 10px 20px;
	border-radius: 5px;
	margin-right: 10px;
	margin-left: 10px;
	margin-bottom: 10px;
	background-color: #fff;
	color: black;
	cursor: pointer;
	&:hover {
		background-color: ${color.WHITEGRAY};
	}
`;
export {
	CreateFeedWrapper,
	CreateFeedHeader,
	CancleButton,
	Title,
	HideArea,
	CreateFeedBody,
	UserImage,
	TextAreaWrapper,
	UserName,
	Content,
	PrivewImage,
	CharCount,
	OptionWrapper,
	UploadButton,
	HiddenInput,
	CreateFeedFooter,
	SubmitButton,
};
