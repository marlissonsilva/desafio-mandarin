/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dev-api-teste.mandarin.com.br',
        port: '',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
