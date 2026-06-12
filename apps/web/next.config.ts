import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  output: "standalone",
  devIndicators: false,
  experimental: {
    optimizePackageImports: ["lucide-react", "motion"],
  },
};

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');
export default withNextIntl(nextConfig);
