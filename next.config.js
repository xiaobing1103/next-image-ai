/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img.icons8.com']
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `https://ai1foo.com/api/:path*`
      }
    ]
  },
  reactStrictMode: false
}

export default nextConfig
