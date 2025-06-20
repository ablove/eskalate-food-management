/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    domains: [
      "localhost",
      "via.placeholder.com",
      "images.unsplash.com",
      "unsplash.com",
      "picsum.photos",
      "loremflickr.com",
      "cloudinary.com",
      "res.cloudinary.com",
      "imgur.com",
      "i.imgur.com",
      "example.com",
      "mockapi.io",
      "6852821e0594059b23cdd834.mockapi.io",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
    unoptimized: true,
  },
};

module.exports = nextConfig;
