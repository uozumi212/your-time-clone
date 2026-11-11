import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: 'Your Time | 人生の残り時間を可視化するアプリ',
  description: '人生の残り時間を可視化し、毎日を大切に使うための無料Webアプリです。',
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
        <meta name="application-name" content="Your Time" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Your Time" />
        <meta name="description" content="人生の残り時間を可視化し、毎日を大切に使うための無料Webアプリ" />
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
