import Link from 'next/link';
import styled from 'styled-components';

// side menu
const Container = styled.div<{ $ismessagepage: string }>`
	width: 100%;
	min-width: 60px;
	height: 100%;
	border-right: 1px solid #262626;
	display: flex;
	flex-direction: column;
	@media only screen and (max-width: 1200px) {
		min-width: 50px;
		align-items: center;
	}
	@media only screen and (max-width: 758px) {
		position: fixed;
		${(props) => (props.$ismessagepage == 'true' ? 'display: none;' : '')}
		height: 70px;
		border-right: none;
		border-bottom: 1px solid #262626;
		justify-content: center;
	}
`;
const LogoWarapper = styled(Link)`
	display: flex;
	align-items: center;
	margin: 37px 0 13px 37px;
	cursor: pointer;
	& > h1 {
		margin-left: 10px;
	}
	@media only screen and (max-width: 1200px) {
		margin: 37px 0 13px 0;
		& > h1 {
			display: none;
		}
	}
	@media only screen and (max-width: 758px) {
		height: 100%;
		margin: 0 0 0 37px;
		display: flex;
		align-items: center;
		& > h1 {
			display: block;
		}
	}
`;

const MenuItem = styled(Link)`
	width: 70%;
	display: flex;
	align-items: center;
	border-radius: 8px;
	padding: 10px 8px;
	margin-top: 16px;
	margin-left: 29px;
	margin-bottom: 10px;
	cursor: pointer;

	&:hover {
		background-color: #262626;
		& > svg,
		p {
			background-color: #262626;
		}
	}
	& > p {
		margin-left: 10px;
	}
	@media only screen and (max-width: 1200px) {
		width: auto;
		padding: 10px;
		margin-left: 0;
		& > p {
			display: none;
			margin-left: 0;
		}
	}
	@media only screen and (max-width: 758px) {
		display: none;
	}
`;

export { Container, LogoWarapper, MenuItem };
