import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/categories', destination: '/houses', permanent: true },
      { source: '/catalog', destination: '/houses', permanent: true },
    ]
  },
};

export default nextConfig;
