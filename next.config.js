/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: false,
//   swcMinify: true,
  
// };

module.exports = module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://fyp.hadiraza.com//:path*'
      }
    ]
  }
};
