/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  // basePath: "/portfolio",
  // assetPrefix: "/portfolio",
};

module.exports = nextConfig;
