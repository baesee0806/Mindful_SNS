import { useRouter } from 'next/navigation';

export const useNavigation = () => {
	const router = useRouter();
	const goBack = () => router.back();
	const goTo = (path: string) => router.push(path);
	return { goBack, goTo };
};
