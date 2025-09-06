/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config: any) => {
    return config; // ✅ Force Webpack
  },
};

module.exports = nextConfig;
