import QueryProvider from '@/providers/QueryProbider';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Mindful SNS',
	description: '바른 SNS 서비스',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<QueryProvider>{children}</QueryProvider>
			</body>
		</html>
	);
}
