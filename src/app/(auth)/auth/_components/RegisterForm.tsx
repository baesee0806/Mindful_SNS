'use client';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useUserStore } from '@/store/auth/useAuthStore';
import { registerSchema } from '@/libs/auth/authValidation';

const RegisterForm = () => {
	const { register, handleSubmit } = useForm<{
		email: string;
		password: string;
		checkPassword: string;
		userName: string;
	}>({
		defaultValues: {
			email: '',
			password: '',
			checkPassword: '',
			userName: '',
		},
		resolver: zodResolver(registerSchema),
	});

	const setUser = useUserStore((state) => state.setUser);

	const signupUser = async (data: { email: string; password: string }) => {
		try {
			const res = await fetch('/api/auth/signup', {
				method: 'POST',
				body: JSON.stringify(data),
				headers: { 'Content-Type': 'application/json' },
			});

			if (res.ok) {
				const userData = await res.json();
				setUser({
					uid: userData.uid,
					displayName: userData.displayName,
					email: userData.email,
				});
			} else {
				// react hot toast message
				console.log('회원가입 실패');
			}
		} catch (error) {
			console.log(error);
			// react hot toast message
		}
	};

	return (
		<Container>
			<FormContainer onSubmit={handleSubmit(signupUser)}>
				{/* title */}
				<FromTitle>Mindful</FromTitle>
				{/* 아이디 */}
				<FormInputWrap>
					<FormInput type="text" placeholder="아이디" {...register('email')} />
				</FormInputWrap>
				{/* 비밀번호 */}
				<FormInputWrap>
					<FormInput
						type="password"
						placeholder="비밀번호"
						{...register('password')}
					/>
				</FormInputWrap>
				{/* 비밀번호 확인*/}
				<FormInputWrap>
					<FormInput
						type="password"
						id="checkPassword"
						placeholder="비밀번호 확인"
						{...register('checkPassword')}
					/>
				</FormInputWrap>
				{/* 사용자 이름 */}
				<FormInputWrap>
					<FormInput
						type="text"
						id="userName"
						placeholder="사용자 이름"
						{...register('userName')}
					/>
				</FormInputWrap>
				{/* 회원가입 버튼 */}
				<FormButton type="submit">회원가입</FormButton>
			</FormContainer>
			<LoginContainer>
				<p>계정이 있으신가요?</p>
				<LoginButton>로그인하기</LoginButton>
			</LoginContainer>
		</Container>
	);
};

export default RegisterForm;

const Container = styled.div`
	width: 320px;
`;

const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 89%;
	border: 2px solid #363636;
	border-radius: 8px;
	padding: 16px;
`;

const FromTitle = styled.h2`
	text-align: center;
	font-size: 32px;
	margin-bottom: 24px;
`;

const FormInputWrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 258px;
	height: 36px;
	border: 1px solid #363636;
	border-radius: 8px;
	margin-bottom: 8px;

	&:focus-within {
		border: 1px solid #5182ee;
	}
`;

const FormInput = styled.input`
	width: 242px;
	&::placeholder {
		color: #363636;
	}
	&:focus {
		outline: none;
	}
`;

const FormButton = styled.button`
	width: 258px;
	height: 36px;
	background-color: #5182ee;
	color: #ffffff;
	border: none;
	border-radius: 8px;
	margin-top: 8px;
	cursor: pointer;
`;

const LoginContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 99%;
	height: 68px;
	border: 2px solid #363636;
	border-radius: 8px;
	margin-top: 16px;
`;

const LoginButton = styled.button`
	background: none;
	border: none;
	color: #5182ee;
	cursor: pointer;
	margin-left: 8px;
`;
