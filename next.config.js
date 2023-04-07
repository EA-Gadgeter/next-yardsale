/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placeimg.com', 'api.lorem.space', 'upload.wikimedia.org', 'product.hstatic.net'],
  },
};

module.exports = withPWA(nextConfig);