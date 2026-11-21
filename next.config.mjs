/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "beanstalk-uk.vercel.app",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "www.beanstalkdaynursery.co.uk",
        pathname: "/images/Meet_The_Staff/**"
      }
    ]
  }
};

export default nextConfig;
