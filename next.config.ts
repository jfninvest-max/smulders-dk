import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.smulders.pl" },
    ],
  },
};

export default nextConfig;
