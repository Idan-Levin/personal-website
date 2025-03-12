/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true
  },
  // Add trailing slash to help with routing
  trailingSlash: true,
};

module.exports = nextConfig; 