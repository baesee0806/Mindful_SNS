import styled from 'styled-components';

const Container = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	scroll-behavior: smooth;
	overflow: auto;
`;
const DesktopSearchContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	min-height: 80px;
	& > svg {
		width: 24px;
		height: 24px;
		position: relative;
		top: 0;
		left: 40px;
	}
	& > input {
		width: 100%;
		height: 50%;
		border-radius: 8px;
		border: 1px solid #262626;
		padding-left: 50px;
		margin-right: 20px;
		font-size: 20px;
		&:focus {
			outline: none;
		}
	}
	@media only screen and (max-width: 758px) {
		display: none;
	}
`;

export { Container, DesktopSearchContainer };
