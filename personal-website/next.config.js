/** @type {import('next').NextConfig} */
const nextConfig = {
  // The key issue is mixing static exports with server components.
  // Let's configure this properly for Vercel deployment
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  trailingSlash: true,
};

module.exports = nextConfig; 