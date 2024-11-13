'use client';
import { CircleUserRound, House, Send, SquarePlus } from 'lucide-react';
import * as S from './mobileMenubar.styled';
import { color } from '@/utils/colors';
import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const MobileMenubar = () => {
	const router = usePathname();
	const nowRoute = router.split('/')[1];
	const [route, setRoute] = useState(nowRoute);

	const handleRoute = (href: string) => {
		setRoute(href);
	};

	return (
		<S.Container>
			<S.IconLink href={'/'} onClick={() => handleRoute('')}>
				<House color={route === '' ? '#fff' : color.WHITEGRAY} />
			</S.IconLink>
			<S.IconLink href={'/profile'} onClick={() => handleRoute('profile')}>
				<CircleUserRound
					color={route === 'profile' ? '#fff' : color.WHITEGRAY}
				/>
			</S.IconLink>
			<S.IconLink href={'/message'} onClick={() => handleRoute('message')}>
				<Send color={route === 'message' ? '#fff' : color.WHITEGRAY} />
			</S.IconLink>
			<S.IconLink href={'/new'}>
				<SquarePlus color={color.WHITEGRAY} />
			</S.IconLink>
		</S.Container>
	);
};

export default MobileMenubar;
