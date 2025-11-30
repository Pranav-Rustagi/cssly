import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/:path',
        destination: '/:path/index.html',
      },
      {
        source: '/:path/',
        destination: '/:path/index.html',
      }
    ];
  },
};

export default nextConfig;
