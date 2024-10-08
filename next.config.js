/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["localhost:3000", "files.stripe.com"],
    },
};

module.exports = nextConfig;
