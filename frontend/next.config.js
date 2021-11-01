module.exports = {
  reactStrictMode: true,
  async rewrites() {
    console.log("test");
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8000/:path*',
      },
    ]
  },
}
