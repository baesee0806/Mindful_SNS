import { z } from 'zod';

const forbiddenPatterns = [
	'1234',
	'abcd',
	'qwerty',
	'password',
	'admin',
	'test',
	'123456',
	'654321',
	'asdf',
	'zxcv',
	'비밀번호',
	'비번123',
];

const LoginPasswordSchema = z
	.string()
	.min(8, '비밀번호는 최소 8자리 이상이어야 합니다.')
	.regex(
		/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W_]).{8,}/,
		'대소문자, 숫자, 특수문자가 포함된 비밀번호를 입력해주세요.',
	)
	.refine(
		(password) => {
			// 나란히 있는 키보드 패턴이나 쉬운 패턴이 포함되는지 검사
			for (const pattern of forbiddenPatterns) {
				if (password.toLowerCase().includes(pattern)) {
					return false;
				}
			}
			return true;
		},
		{
			message:
				'비밀번호에 너무 쉬운 문자열(예: 1234, qwerty)이 포함되지 않도록 해주세요.',
		},
	);

export const loginSchema = z.object({
	email: z.string().email('유효한 이메일 주소를 입력해주세요.'),
	password: LoginPasswordSchema,
});

const RegisterPasswordSchema = z
	.string()
	.min(8, '비밀번호는 최소 8자리 이상이어야 합니다.')
	// .regex(
	// 	/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W_]).{8,}/,
	// 	'대소문자, 숫자, 특수문자가 포함된 비밀번호를 입력해주세요.',
	// )
	// .refine((password) => !/\d{3,}/.test(password), {
	// 	message: '일련번호나 전화번호와 같은 숫자가 포함되지 않도록 해주세요.',
	// })
	.refine(
		(password) => {
			// 나란히 있는 키보드 패턴이나 쉬운 패턴이 포함되는지 검사
			for (const pattern of forbiddenPatterns) {
				if (password.toLowerCase().includes(pattern)) {
					return false;
				}
			}
			return true;
		},
		{
			message:
				'비밀번호에 너무 쉬운 문자열(예: 1234, qwerty)이 포함되지 않도록 해주세요.',
		},
	);

export const registerSchema = z
	.object({
		email: z.string().email('유효한 이메일 주소를 입력해주세요.'),
		password: RegisterPasswordSchema,
		checkPassword: z.string(),
		display_name: z
			.string()
			.min(2, '사용자 이름은 최소 2글자 이상이어야 합니다.'),
	})
	.refine((data) => data.password === data.checkPassword, {
		message: '비밀번호가 일치하지 않습니다.',
		path: ['checkPassword'],
	});
