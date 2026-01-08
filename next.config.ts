/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config: any) => {
    return config; // ✅ Force Webpack
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co', // ✅ Allow placeholder images
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

module.exports = nextConfig;
