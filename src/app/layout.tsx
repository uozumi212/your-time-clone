import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import SiteFooter from "@/components/SiteFooter";
import ErrorBoundary from "@/components/ErrorBoundary";

export const metadata: Metadata = {
  metadataBase: new URL('https://your-time-clone.web.app'),
  title: {
    default: 'Your Time - 人生の残り時間を可視化する無料アプリ',
    template: '%s | Your Time',
  },
  description: '生年月日と平均寿命から人生の残り時間をリアルタイムで可視化。名言管理、バケットリスト、時間管理をサポートする無料Webアプリ。',
  keywords: ['時間管理', '人生', '残り時間', '可視化', 'バケットリスト', '名言', '目標管理', 'ライフプラン'],
  authors: [{ name: 'Your Time運営チーム' }],
  creator: 'Your Time運営チーム',
  publisher: 'Your Time運営チーム',
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: '/clock-check.svg',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://your-time-clone.web.app',
    siteName: 'Your Time',
    title: 'Your Time - 人生の残り時間を可視化する無料アプリ',
    description: '生年月日と平均寿命から人生の残り時間をリアルタイムで可視化。名言管理、バケットリスト、時間管理をサポートする無料Webアプリ。',
    images: [
      {
        url: '/ogp-image.png',
        width: 1200,
        height: 630,
        alt: 'Your Time - 人生の残り時間を可視化',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Time - 人生の残り時間を可視化する無料アプリ',
    description: '生年月日と平均寿命から人生の残り時間をリアルタイムで可視化。',
    images: ['/ogp-image.png'],
  },
  alternates: {
    canonical: 'https://your-time-clone.web.app',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
        <meta name="application-name" content="Your Time" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Your Time" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#8b5cf6" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#8b5cf6" />
        <link rel="apple-touch-icon" href="/icons/apple-icon-180x180.png" />
      </head>
      <body >
        <ErrorBoundary>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
            <SiteFooter />
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
