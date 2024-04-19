/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ["http://localhost:3000", "https://images.unsplash.com"],
  },
};

export default nextConfig;
