/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: "https",
                hostname: "tm-integration-aws.s3.ap-south-1.amazonaws.com"
            }
        ]
    },

};

export default nextConfig;
