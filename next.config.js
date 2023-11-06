/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

module.exports = {
  reactStrictMode: false,
  swcMinify: false,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      }
    ],
  },
  env: {
    reCAPTCHA_site_key: process.env.reCAPTCHA_site_key,
    reCAPTCHA_secret_key: process.env.reCAPTCHA_secret_key
  },
  i18n
};
