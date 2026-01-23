import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    unoptimized: true, 
  },
};

export default withFlowbiteReact(nextConfig);
