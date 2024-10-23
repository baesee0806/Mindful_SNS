'use client';
import styled from 'styled-components';
import GoogleLogo from '@/assets/svg/google_logo.svg';
import { useUserStore } from '@/store/auth/useAuthStore';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '@/libs/auth/authValidation';
import { auth } from '@/libs/firebase/firebaseClient';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const LoginFrom = () => {
	const { register, handleSubmit } = useForm<{
		email: string;
		password: string;
	}>({
		defaultValues: {
			email: '',
			password: '',
		},
		resolver: zodResolver(loginSchema),
	});

	const setUser = useUserStore((state) => state.setUser);

	const loginUser = async (data: { email: string; password: string }) => {
		try {
			const res = await fetch('/api/auth/login', {
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
				console.log('로그인 실패');
			}
		} catch (error) {
			console.log(error);

			// react hot toast message
		}
	};

	const handleGoogleLogin = async () => {
		const provider = new GoogleAuthProvider();

		try {
			const result = await signInWithPopup(auth, provider);
			const user = result.user;

			// Firebase ID Token 가져오기
			const token = await user.getIdToken();

			// 서버로 토큰 전송하여 쿠키에 uid 저장
			await fetch('/api/auth/setCookie', {
				method: 'POST',
				body: JSON.stringify({ uid: user.uid, token }),
				headers: { 'Content-Type': 'application/json' },
			});
		} catch (error) {
			console.error('로그인 실패:', error);
		}
	};

	return (
		<Container>
			<FormContainer onSubmit={handleSubmit(loginUser)}>
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
				{/* 로그인 버튼 */}
				<FormButton type="submit">로그인</FormButton>
				{/* Divider */}
				<Divider>
					<SocialLoginText>소셜 로그인</SocialLoginText>
				</Divider>
				{/* 구글 로그인 */}
				<SocialLoginContainer>
					<GoogleLogo />
					<SocialLoginButton onClick={handleGoogleLogin}>
						Google로 로그인
					</SocialLoginButton>
				</SocialLoginContainer>
				<ForgotPassword>비밀번호를 잊으셨나요?</ForgotPassword>
			</FormContainer>
			<SignupContainer>
				<p>아직 회원이 아니신가요?</p>
				<SignupButton>회원가입</SignupButton>
			</SignupContainer>
		</Container>
	);
};

export default LoginFrom;

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

const Divider = styled.div`
	display: flex;
	align-items: center;
	width: 258px;
	margin: 24px 0;

	&::before,
	&::after {
		content: '';
		flex: 1;
		border-bottom: 1px solid #363636;
	}

	&::before {
		margin-right: 10px;
	}

	&::after {
		margin-left: 10px;
	}
`;
const SocialLoginContainer = styled.button`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 133px;
	height: 17px;
	margin-bottom: 16px;
	cursor: pointer;
`;
const SocialLoginButton = styled.div`
	font-size: 14px;
	margin-left: 8px;
`;
const SocialLoginText = styled.span`
	font-size: 12px;
	font-weight: bold;
	color: white;
`;
const ForgotPassword = styled.button`
	font-size: 12px;
	cursor: pointer;
`;
const SignupContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 99%;
	height: 68px;
	border: 2px solid #363636;
	border-radius: 8px;
	margin-top: 16px;
`;

const SignupButton = styled.button`
	background: none;
	border: none;
	color: #5182ee;
	cursor: pointer;
	margin-left: 8px;
`;
