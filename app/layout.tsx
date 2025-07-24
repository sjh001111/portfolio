import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Joonghyuk Seong | Software Developer',
  description: 'Software Developer currently seeking opportunities in Australia.',
  keywords: ['Joonghyuk Seong', 'Software Developer', 'Python', 'Web Development', 'Australia'],
  authors: [{ name: 'Joonghyuk Seong' }],
  openGraph: {
    title: 'Joonghyuk Seong | Software Developer',
    description: 'Software Developer currently seeking opportunities in Australia',
    url: 'https://joonghyukseong.com',
    siteName: 'Joonghyuk Seong Portfolio',
    locale: 'en_AU',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
