import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

// 유저 상태 타입 정의
interface UserState {
	user_id: string;
	display_name: string;
	profile_img: string;
	email: string;
	setUser: (user: {
		user_id: string;
		display_name: string;
		email: string;
	}) => void;
	clearUser: () => void;
}

// zustand로 유저 상태 관리 + persist 사용
export const useUserStore = create(
	persist<UserState>(
		(set) => ({
			user_id: '',
			display_name: '',
			profile_img: '',
			email: '',
			setUser: (user) =>
				set({
					user_id: user.user_id,
					display_name: user.display_name,
					email: user.email,
				}),
			clearUser: () =>
				set({
					user_id: '',
					display_name: '',
					email: '',
				}),
		}),
		{
			name: 'user-storage', // 로컬 스토리지에 저장될 key 이름
			storage: createJSONStorage(() => sessionStorage), // 로컬 스토리지에 저장
		},
	),
);
