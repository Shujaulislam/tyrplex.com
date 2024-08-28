// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ['assets.aceternity.com'],                {/*  The "images.domains" configuration is deprecated. Please use "images.remotePatterns" configuration instead.*/}
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tyrplex.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
      // Add more patterns if needed
    ],
  },
}

export default nextConfig