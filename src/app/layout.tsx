import { TempoInit } from "@/components/tempo-init";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PixioX - Smart Photo Manager | iOS Photo Organizer",
  description:
    "PixioX is a powerful iOS photo management app that helps you organize, browse, and manage your photos and videos efficiently. Supports Live Photos, gesture-based deletion, and monthly organization.",
  keywords: [
    "photo manager",
    "photo organizer",
    "live photo",
    "photo gallery",
    "gesture delete",
    "smart album",
    "iOS app",
    "PixioX",
  ],
  authors: [{ name: "PixioX Team" }],
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "PixioX - Smart Photo Manager | iOS Photo Organizer",
    description:
      "Manage, organize, and browse your iOS photos with PixioX. Full Live Photo support, gesture deletion, and monthly organization included.",
    // url: "https://www.pixiox.com",
    siteName: "PixioX",
    // images: [
    //   {
    //     url: "https://www.pixiox.com/og-image.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "PixioX - Smart Photo Manager",
    //   },
    // ],
    locale: "en_US",
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "PixioX - Smart Photo Manager",
  //   description:
  //     "Manage your iOS photos efficiently with PixioX. Live Photos, gestures, and smart organization.",
  //   images: ["https://www.pixiox.com/twitter-card.png"],
  //   site: "@PixioXApp",
  //   creator: "@PixioXApp",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script src="https://api.tempo.build/proxy-asset?url=https://storage.googleapis.com/tempo-public-assets/error-handling.js" />
      <body className={inter.className}>
        {children}
        <TempoInit />
      </body>
    </html>
  );
}
