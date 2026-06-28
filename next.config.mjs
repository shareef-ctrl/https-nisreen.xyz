/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gulf.edu.sa"
      }
    ]
  }
};

export default nextConfig;
