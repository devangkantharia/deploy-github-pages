/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure Next.js to produce a static site.
  output: 'export',

  // Set the base path to the repository name for GitHub Pages.
  basePath: process.env.PAGES_BASE_PATH || '',

  // Disable image optimization for static exports.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;