import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

// 유저 상태 타입 정의
interface UserState {
	uid: string;
	displayName: string;
	email: string;
	isAuthenticated: boolean;
	setUser: (user: { uid: string; displayName: string; email: string }) => void;
	clearUser: () => void;
}

// zustand로 유저 상태 관리 + persist 사용
export const useUserStore = create(
	persist<UserState>(
		(set) => ({
			uid: '',
			displayName: '',
			email: '',
			isAuthenticated: false,
			setUser: (user) =>
				set({
					uid: user.uid,
					displayName: user.displayName,
					email: user.email,
					isAuthenticated: true,
				}),
			clearUser: () =>
				set({
					uid: '',
					displayName: '',
					email: '',
					isAuthenticated: false,
				}),
		}),
		{
			name: 'user-storage', // 로컬 스토리지에 저장될 key 이름
			storage: createJSONStorage(() => sessionStorage), // 로컬 스토리지에 저장
		},
	),
);
