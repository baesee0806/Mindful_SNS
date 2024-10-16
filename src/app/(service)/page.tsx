import { redirect } from 'next/navigation';

export default function Home() {
	if (true) {
		return redirect('/auth/login');
	}

	return <div>메인</div>;
}
