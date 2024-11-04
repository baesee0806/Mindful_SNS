import styled from 'styled-components';

const Container = styled.div`
	min-height: 100vh;
	display: grid;
	grid-template-columns: 230px auto;
	@media only screen and (max-width: 1200px) {
		grid-template-columns: 0.1fr auto;
	}
	@media only screen and (max-width: 758px) {
		grid-template-columns: auto;
		grid-template-rows: 1fr auto;
	}
`;

export { Container };
