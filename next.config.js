/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  turbopack: {},
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  }
}
