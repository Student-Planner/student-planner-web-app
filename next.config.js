/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/login',
        permanent: true,
      },
    ]
  },
}


module.exports = nextConfig
