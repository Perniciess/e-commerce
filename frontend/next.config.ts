import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    reactStrictMode: true,
    rewrites: async () => {
        return [
            {
                source: '/api/:path*',
                destination: `${process.env.NEST_WEB_URL}api/:path/*`,
            },
        ]
    },

    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '3000',
                pathname: '/**',
            },
        ],
    },
    env: {
        NEST_WEB_URL: process.env.NEST_WEB_URL,
    },
}

export default nextConfig
