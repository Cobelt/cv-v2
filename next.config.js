/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bo.polemil.dev',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.wildnatureimages.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

};

module.exports = nextConfig;
