/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
}

module.exports = {
	images: {
		domains: ["unsplash.it", "images.unsplash.com"],
	},
}
