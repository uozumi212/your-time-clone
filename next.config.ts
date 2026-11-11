import type { NextConfig } from "next";
import withPWA from "@ducanh2912/next-pwa";

const nextConfig: NextConfig = {
 	output: "export",
	trailingSlash: true,
	images: {
		unoptimized: true,
	},
};

const pwaConfig = withPWA({
  dest: 'public',
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  disable: process.env.NODE_ENV === "development", // 開発中は無効化
})

const finalConfig = pwaConfig(nextConfig);

export default finalConfig;
