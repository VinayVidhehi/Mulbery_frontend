/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["res.cloudinary.com", "images.pexels.com"],
  },
};

module.exports = nextConfig;
