import React, { Suspense } from "react"
import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { WhatsAppButton } from '@/components/whatsapp-button';
import { FacebookPixel } from '@/components/facebook-pixel';
import { GoogleTag } from '@/components/google-tag';
import { AuthProvider } from '@/components/auth/auth-provider';
import { PageTransition } from '@/components/animations/page-transition';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0e1b4d',
}

export const metadata: Metadata = {
  title: 'Nursing Sarathi - Professional Home Care Services',
  description: 'Compassionate hospital-grade care at home with certified nurses, physiotherapists, and 24/7 availability',
  generator: 'v0.app',
  verification: {
    google: '1E6nZwpBdMqa0mwHfwPCg5mNl9xHfckEUJIESLfnvbs',
  },
  icons: {
    icon: '/fevican_nursing.jpeg',
    shortcut: '/fevican_nursing.jpeg',
    apple: '/fevican_nursing.jpeg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <Suspense fallback={null}>
          <GoogleTag />
          <FacebookPixel />
        </Suspense>
        <AuthProvider>
          <PageTransition>{children}</PageTransition>
          <WhatsAppButton />
          <Analytics />
        </AuthProvider>
      </body>
    </html>
  )
}
