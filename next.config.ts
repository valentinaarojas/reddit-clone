import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['logos-world.net', 'cdn-icons-png.flaticon.com'], // bypasses errors by trusting source
  },
};

export default nextConfig;
