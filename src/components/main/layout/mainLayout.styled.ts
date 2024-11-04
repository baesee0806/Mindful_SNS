import styled from 'styled-components';

const Container = styled.div`
	min-height: 100vh;
	display: grid;
	grid-template-columns: auto 0.4fr;
	@media only screen and (max-width: 1200px) {
		grid-template-columns: auto;
	}
`;

export { Container };
