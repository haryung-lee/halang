/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
});

const nextConfig = withPWA({
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  // basePath: "/portfolio",
  // assetPrefix: "/portfolio",
});

module.exports = nextConfig;
