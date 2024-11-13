import Menubar from '@/components/common/menu/Menubar';
import MobileMenubar from '@/components/common/menu/MobileMenubar';
import Layout from '@/components/main/root/Layout';

const ServiceLayout = async ({
	children,
	modal,
}: {
	children: React.ReactNode;
	modal: React.ReactNode;
}) => {
	return (
		<Layout>
			<Menubar />
			{modal}
			{children}
			<MobileMenubar />
		</Layout>
	);
};

export default ServiceLayout;
