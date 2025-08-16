import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Next.js Vercel Template',
  description: 'Minimal template with Vercel CI/CD',
  icons: { icon: '/favicon.svg' },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-gray-900">{children}</body>
    </html>
  );
}
