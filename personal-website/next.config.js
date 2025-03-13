/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove static export for proper Vercel deployment
  // output: 'export',
  images: {
    unoptimized: true,
  },
  // Removing trailingSlash to fix redirect issues
  // trailingSlash: true,
};

module.exports = nextConfig; 