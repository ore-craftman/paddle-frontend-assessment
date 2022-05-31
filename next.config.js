/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      "www.metricks.io",
      "picsum.photos",
      "avatars.githubusercontent.com",
    ],
  },
};

module.exports = nextConfig;
