import Menubar from '@/components/common/menu/Menubar';
import Layout from '@/components/main/root/Layout';

const ServiceLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<Layout>
			<Menubar />
			{children}
		</Layout>
	);
};

export default ServiceLayout;
