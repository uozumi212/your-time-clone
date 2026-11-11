import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: 'Your Time Demo',
  description: 'Your Time Demo',
  icons: {
    icon: '/clock-check.svg',
  }
}

export default function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <Script
          id="google-adsense"
          async
          strategy="beforeInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4245864129092413"
          crossOrigin="anonymous"
        />
        <meta name="application-name" content="Your Time Clone" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Your Time Clone" />
        <meta name="description" content="あなたの時間管理をサポートするアプリ" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="apple-touch-icon" href="/icons/apple-icon-180x180.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
