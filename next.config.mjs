/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "arulneri.vercel.app",
      },
      {
        protocol: "https",
        hostname: "ommosquitonets.vercel.app",
      },
      {
        protocol: "https",
        hostname: "www.rfinteriorspot.com",
      },
      {
        protocol: "https",
        hostname: "www.google.com",
        pathname: "/s2/favicons/**",
      },
    ],
  },
};

export default nextConfig;
