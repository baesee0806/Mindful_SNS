'use client';
import styled from 'styled-components';
import GoogleLogo from '@/assets/svg/google_logo.svg';

const LoginFrom = () => {
	return (
		<Container>
			<FormContainer>
				{/* title */}
				<FromTitle>Mindful</FromTitle>
				{/* 아이디 */}
				<FormInputWrap>
					<FormInput type="text" id="username" placeholder="아이디" />
				</FormInputWrap>
				{/* 비밀번호 */}
				<FormInputWrap>
					<FormInput type="password" id="password" placeholder="비밀번호" />
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
					<SocialLoginButton>Google로 로그인</SocialLoginButton>
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
