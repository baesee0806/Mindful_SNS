'use client';
import {
	CircleUserRound,
	House,
	Search,
	Send,
	SquarePlus,
	TentTree,
} from 'lucide-react';
import * as S from './menubar.styled';
import { useEffect, useState } from 'react';

const Menubar = () => {
	const [isMessagePage, setIsMessagePage] = useState(false);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			// 클라이언트 사이드에서만 실행
			setIsMessagePage(window.location.pathname.includes('/message'));
		}
	}, []);
	return (
		<S.Container $ismessagepage={isMessagePage.toString()}>
			{/* Logo */}
			<S.LogoWarapper href={'/'}>
				<TentTree />
				<h1>Mindful</h1>
			</S.LogoWarapper>
			{/* Mobile Search bar */}
			<S.MobileSearchContainer>
				<Search />
				<input type="text" placeholder="검색" />
			</S.MobileSearchContainer>
			{/* Home */}
			<S.MenuItem href={'/'}>
				<House />
				<p>Home</p>
			</S.MenuItem>
			{/* Profile */}
			<S.MenuItem href={'/profile'}>
				<CircleUserRound />
				<p>Profile</p>
			</S.MenuItem>
			{/* Message */}
			<S.MenuItem href={'/message'}>
				<Send />
				<p>Message</p>
			</S.MenuItem>
			{/* Add Write */}
			<S.MenuItem href={''}>
				<SquarePlus />
				<p>Add Write</p>
			</S.MenuItem>
		</S.Container>
	);
};

export default Menubar;
