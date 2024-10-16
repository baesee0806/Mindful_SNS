'use client';
import styled from 'styled-components';

const LayoutContainer = ({ children }: { children: React.ReactNode }) => {
	return (
		<Container>
			<Wrapper>{children}</Wrapper>
		</Container>
	);
};

export default LayoutContainer;

const Container = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Wrapper = styled.div`
	width: 1121px;
	height: 443px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
