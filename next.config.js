/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  }, 
  async redirects() {
    return [
      {
        source: '/',
        destination: '/signup',
        permanent: true,
      },
      {
        source: '/signup',
        destination: '/signup/occupation',
        permanent: true,
      }
    ]
  }
};

module.exports = nextConfig;
