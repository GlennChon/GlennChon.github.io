const isProd = process.env.NODE_ENV === 'production';
console.log(isProd)
/**
   * @type {import('next').NextConfig}
   */
const nextConfig = {
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: isProd ? './' : '',
};

export default nextConfig;