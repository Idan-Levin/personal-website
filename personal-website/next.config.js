/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove static export to let Vercel handle SSR properly
  // output: 'export',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
};

module.exports = nextConfig; 