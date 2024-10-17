'use client';
import styled from 'styled-components';
import Image from 'next/image';

const ServiceImage = () => {
	return (
		<Container>
			<RotateImage
				src={'https://picsum.photos/460/250'}
				alt=""
				width={460}
				height={250}
			/>
			<StandardImage
				src={'https://picsum.photos/460/250'}
				alt=""
				width={460}
				height={250}
			/>
		</Container>
	);
};

export default ServiceImage;

const Container = styled.div`
	position: relative;
	width: 700px;
	height: 400px;
	@media only screen and (max-width: 1150px) {
		display: none;
	}
`;

const RotateImage = styled(Image)`
	transform: rotate(-20deg);
	position: absolute;
	top: 20px;
	left: 0;
	z-index: 50;
	border-radius: 4px;
`;

const StandardImage = styled(Image)`
	position: absolute;
	bottom: 0;
	right: 0;
	z-index: 100;
	border-radius: 4px;
`;
