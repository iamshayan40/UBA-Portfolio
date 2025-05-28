/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp', 'image/avif'],  // Added AVIF support
    minimumCacheTTL: 60 * 60 * 24 * 7, // 7 days cache for better performance
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'usamabinamirglobal.com',
      },
    ],
  },
  async redirects() {
    return [];
  },
  poweredByHeader: false,
  reactStrictMode: true,
}

module.exports = nextConfig;
