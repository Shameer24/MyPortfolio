/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/MyPortfolio',
    reactStrictMode: true,
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'open.cruip.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'ucarecdn.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'www.svgrepo.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'photos.app.goo.gl',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'i.ibb.co',
                pathname: '**',
            },
        ],
    },
    webpack(config) {
        config.module.rules.push({ test: /\.svg$/, use: ['@svgr/webpack'] })

        return config
    },
}

module.exports = nextConfig
