const { withContentlayer } = require('next-contentlayer');

/**
 * @type {import('next').NextConfig}
 */
module.exports = withContentlayer({
  swcMinify: true,
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'i.scdn.co', // Spotify Album Art
      'pbs.twimg.com' // Twitter Profile Picture
    ],
    unoptimized: true
  },
});
