// next.config.js
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: '/profile',
  basePath: '/profile',
  images: {
    unoptimized: true,
  },
}