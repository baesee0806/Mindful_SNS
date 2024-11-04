'use client';
import AdSide from '../screen/AdSide';
import FeedScreen from '../screen/FeedScreen';
import * as S from './mainLayout.styled';

const MainLayout = () => {
	// 프로필 client에 저장
	return (
		<S.Container>
			{/* Feed Screen */}
			<FeedScreen />
			{/* Ad Screen */}
			<AdSide />
		</S.Container>
	);
};

export default MainLayout;
