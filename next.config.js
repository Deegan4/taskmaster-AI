/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'lh3.googleusercontent.com', 'avatars.githubusercontent.com'],
    formats: ['image/webp'],
  },
  // Next.js 12 doesn't use SWC by default
};

module.exports = nextConfig; 