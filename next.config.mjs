/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/PersonalWebsite',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['04cb467e0637eb.lhr.life', '*.lhr.life'],
}

export default nextConfig
