/** @type {import('next').NextConfig} */
const nextConfig = {
	compiler: {
		styledComponents: true,
	},
	images: {
		domains: ['picsum.photos'],
	},
};

export default nextConfig;
