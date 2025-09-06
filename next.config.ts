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
    ],
  },
};

module.exports = nextConfig;
