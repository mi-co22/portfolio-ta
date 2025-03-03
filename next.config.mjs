// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(process.cwd(), "src"), // ← "src" を基準にする
    };
    return config;
  },
  images: {
    domains: ['images.unsplash.com'],
  },
};

// module.exports = nextConfig; // これは削除
export default nextConfig; // こちらを使用