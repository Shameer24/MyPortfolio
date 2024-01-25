/** @type {import('next').NextConfig} */
const nextConfig = {
    output : "export",
    basePath: "/MyPortfolio",
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "open.cruip.com",
      "ucarecdn.com",
      "www.svgrepo.com",
      "images.unsplash.com",
      "res.cloudinary.com",
      "photos.app.goo.gl",
      "i.ibb.co",
    ],
  },
  webpack(config) {
    config.module.rules.push({ test: /\.svg$/, use: ["@svgr/webpack"] });

    return config;
  },
};

module.exports = nextConfig;
