/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async rewrites() {
    return [
      {
        source: '/assets/:path*',
        destination: '/_next/static/assets/:path*'
      }
    ]
  }
}

module.exports = nextConfig
