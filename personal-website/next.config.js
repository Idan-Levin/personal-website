/** @type {import('next').NextConfig} */
const nextConfig = {
  // Barebones config to eliminate any routing issues
  swcMinify: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig; 