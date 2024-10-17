import type { Metadata } from 'next';
import StyledComponentsRegistry from '@/providers/StyledComponentProvider';
import QueryProvider from '@/providers/QueryProvider';
import GlobalStyle from './globals';
export const metadata: Metadata = {
	title: 'Mindful SNS',
	description: '바른 SNS 서비스',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<QueryProvider>
					<StyledComponentsRegistry>
						<GlobalStyle />
						{children}
					</StyledComponentsRegistry>
				</QueryProvider>
			</body>
		</html>
	);
}
