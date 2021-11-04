// eslint ignore
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: process.env.FAST_API_URL ?? 'http://localhost:8000/:path*',
      },
    ]
  },
}
