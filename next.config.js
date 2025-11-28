/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'], // Add any other image domains you plan to use
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  env: {
    // Add any environment variables here, e.g.,
    // API_URL: process.env.API_URL || 'http://localhost:3000',
  },
}

module.exports = nextConfig