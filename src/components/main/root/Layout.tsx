'use client';

import * as S from './layout.styled';

const Layout = ({ children }: { children: React.ReactNode }) => {
	return <S.Container>{children}</S.Container>;
};

export default Layout;
