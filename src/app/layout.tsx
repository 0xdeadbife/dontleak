import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import localFont from 'next/font/local';
import "./globals.css";

const terminus = localFont({
  src: './fonts/Terminus.ttf',
  variable: '--font-terminus',
});

const courierPrime = localFont({
  src: [
    {
      path: './fonts/CourierPrime-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/CourierPrime-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-courier-prime',
});

export const metadata: Metadata = {
  title: "Don't Leak",
  description: "Protect your sensitive information before sharing with AI language models",
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'android-chrome',
        url: '/android-chrome-192x192.png',
        sizes: '192x192'
      },
      {
        rel: 'android-chrome',
        url: '/android-chrome-512x512.png',
        sizes: '512x512'
      }
    ]
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable} ${terminus.variable} font-sans antialiased ${courierPrime.variable}`}>
      <head />
      <body className={terminus.className}>{children}</body>
    </html>
  );
}
