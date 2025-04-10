import "@/style/global.css";
import { GoogleTagManager } from "@next/third-parties/google";
import { RootProvider } from "fumadocs-ui/provider";
import { Metadata } from "next";
import { Catamaran } from "next/font/google";
import type { ReactNode } from "react";
import { site } from "./global";

// nextjs magic:
export const revalidate = 600; // 600 seconds = 10 mins
export const dynamicParams = true;

/** SEO */
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  keywords: site.keywords,
  openGraph: {
    images: site.previewImage,
    url: site.url,
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
  },
};

const inter = Catamaran({
  subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <GoogleTagManager gtmId={site.gtag} />
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
