/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    baseUrl: "https://neelayurvedics.in",
    URL: "https://api.neelayurvedics.in/api",
    storageURL: "https://api.neelayurvedics.in/storage",
  },
  images: {
    domains: ['api.neelayurvedics.in', 'neelayurvedics.in', 'localhost', '127.0.0.1'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.neelayurvedics.in',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'neelayurvedics.in',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.app.github.dev',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
