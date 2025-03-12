/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove static export for proper Vercel deployment
  // output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig; 