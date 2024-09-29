/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash:true,
  // output: 'export',
  images: {
    loader: 'custom',
    loaderFile: 'pages/my-loader.js',
  },
};

export default nextConfig;
