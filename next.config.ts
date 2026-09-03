import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The user home directory above this project contains an unrelated
  // package-lock.json; without this, Turbopack infers the wrong workspace root.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
