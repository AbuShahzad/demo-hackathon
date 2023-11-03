/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            hostname: 'cdn.sanity.io',
          },
        ],
      },

      experimental: {
        typedRoutes: true,
      }

}


module.exports = nextConfig
