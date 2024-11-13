import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	display: none;
	@media only screen and (max-width: 758px) {
		position: fixed;
		bottom: 0;
		border-top: 1px solid #262626;
		height: 70px;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
`;

const IconLink = styled(Link)`
	width: 22%;
	height: 100%;
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;

	& > svg {
		width: 30px;
		height: 30px;
		background-color: inherit;
	}
	&:hover {
		background-color: #6b6866;
	}
`;

export { Container, IconLink };
