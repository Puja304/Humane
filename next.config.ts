import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/Humane",
  assetPrefix: "/Humane",
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
