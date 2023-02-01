/** @type {import('next').NextConfig} */


module.exports = {
  env: {
    "BASE_URL": "http://localhost:3000",
    "MONGODB_URL": "mongodb+srv://Billy:1234@cluster0.b7ck15j.mongodb.net/?retryWrites=true&w=majority",

  },
  reactStrictMode: true,
  images: {
    domains: ['www.encrypted-tbn0.gstatic.com'],
  },
}
