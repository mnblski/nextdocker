/** @type {import('next').NextConfig} */
require('dotenv').config({ path: `./.env.${process.env.MODE}` });

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone'
}

module.exports = nextConfig
