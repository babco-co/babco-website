/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn-images-1.medium.com", "substackcdn.com"],
     remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "placehold.co" },
    ],
  },
};

export default nextConfig;
