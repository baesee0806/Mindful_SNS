import type { Metadata } from 'next';
import StyledComponentsRegistry from '@/providers/StyledComponentProvider';
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
				<StyledComponentsRegistry>
					<GlobalStyle />
					{children}
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
