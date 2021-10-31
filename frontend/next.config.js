module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api',
        destination: 'http://localhost:8000/best-powerstation',
      },
    ]
  },
}
