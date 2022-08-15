/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    concurrentFeatures: true,
  },
  sassOptions: {

  },
  
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/:path*",
  //       destination: `${process.env.BACKEND_URL}/:path*`,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
