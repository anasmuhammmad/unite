/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    experimental: {
      serverActions: true,
      serverComponents: true, // Instead of 'serverComponentsExternalPackages'
    },
    images: {
      domains: [
        "img.clerk.com",
        "images.clerk.dev",
        "uploadthing.com",
        "placehold.co",
      ],
    },
    typescript: {
      ignoreBuildErrors: true,
    },
  };
  
  module.exports = nextConfig;
  