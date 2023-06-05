/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        turboMode: true,
    },
    images: {
        domains: ['cdn-images-1.medium.com'],
    }
}


module.exports = nextConfig
