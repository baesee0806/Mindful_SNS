import { color } from '@/utils/colors';
import styled from 'styled-components';

const Container = styled.div`
	width: 99%;
	min-height: 100vh;
	margin-top: 30px;
	margin-left: 4px;
	display: flex;
	flex-direction: column;
	align-items: center;
	scroll-behavior: smooth;
	overflow: auto;
	@media only screen and (max-width: 758px) {
		margin-top: 70px;
		margin-bottom: 45px;
		width: 100%;
	}
`;
const FeedWrapper = styled.div`
	width: 582px;
	height: 100%;
	border: 1px solid ${color.LINECOLOR};
	border-bottom: none;
	border-radius: 8px;
	padding: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media only screen and (max-width: 758px) {
		width: 100%;
		border: none;
	}
`;
export { Container, FeedWrapper };
