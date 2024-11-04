import styled from 'styled-components';

const AdSideContainer = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	@media only screen and (max-width: 1200px) {
		display: none;
	}
`;

export { AdSideContainer };
