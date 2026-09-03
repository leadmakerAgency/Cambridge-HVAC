import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The user home directory above this project contains an unrelated
  // package-lock.json; without this, Turbopack infers the wrong workspace root.
  turbopack: {
    root: __dirname,
  },
  // Serve the Sveltia CMS SPA at /admin without a trailing slash.
  async rewrites() {
    return [{ source: "/admin", destination: "/admin/index.html" }];
  },
};

export default nextConfig;
