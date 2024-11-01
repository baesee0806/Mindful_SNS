'use client';

import styled from 'styled-components';

const ProfileLayout = ({
	children,
	modal,
	userInfo,
	userFeed,
}: {
	children: React.ReactNode;
	modal: React.ReactNode;
	userInfo: React.ReactNode;
	userFeed: React.ReactNode;
}) => {
	return (
		<Container>
			{modal}
			{children}
			{userInfo}
			<Line />
			{userFeed}
		</Container>
	);
};

export default ProfileLayout;

const Container = styled.div`
	height: 100vh;

	display: flex;
	flex-direction: column;
	align-items: center;
`;
const Line = styled.hr`
	width: 80%;
	height: 1px;
	background-color: #262626;
	margin-bottom: 16px;
`;
