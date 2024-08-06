/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['antd', '@ant-design/icons'],
  async rewrites() {
    return [
      {
        source: "/api/:slug*",
        destination: `${process.env.NEXT_PUBLIC_API_DOMAIN}/api/:slug*`,
        basePath: false
      }
    ]
  }
};

export default nextConfig;
