import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d2m16yakvsqhof.cloudfront.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pub-6824d00f4db04fc4a2c7d964d8a1f9c9.r2.dev",
        port: "",
        pathname: "/**",
      },
    ],
  },

  experimental: {
    serverActions: {
      bodySizeLimit: "40mb",
    },
  },
};

export default nextConfig;
