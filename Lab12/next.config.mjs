const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '/JezykiWysokiegoPoziomu20538.github.io/' : '',
  basePath: isProd ? '/JezykiWysokiegoPoziomu20538.github.io' : '',
  assetPrefix: '/JezykiWysokiegoPoziomu20538.github.io',
  output: 'export'
};

export default nextConfig;