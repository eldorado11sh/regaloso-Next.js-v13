/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  }, 
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["placehold.co"],
  },
  env: {
    // Ref. https://blog.logrocket.com/customizing-environment-variables-next-js-13/
    
    // declare here all your variables
    // NEXT_PUBLIC_API_URL: "http://localhost:5000",
  }
}

module.exports = nextConfig