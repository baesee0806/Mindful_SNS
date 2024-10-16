import QueryProvider from '@/providers/QueryProvider';

const ServiceLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<QueryProvider>{children}</QueryProvider>
		</>
	);
};

export default ServiceLayout;
