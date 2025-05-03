import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';

const poppins = Poppins({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: "Jovana's Portfolio",
  description: 'Frontend is my playground.',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: dark)',
        url: '/favicon_white.png',
        href: '/favicon_white.png',
      },
      {
        media: '(prefers-color-scheme: light)',
        url: '/favicon_black.png',
        href: '/favicon_black.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
