'use client';
import { ReactNode } from 'react';
import * as S from './modalLayout.styled';

const ModalLayout = ({ children }: { children: ReactNode }) => {
	return <S.Container>{children}</S.Container>;
};

export default ModalLayout;
