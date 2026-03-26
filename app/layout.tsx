import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'SD NEGERI 050577 - Sekolah Dasar Binjai Langkat',
  description: 'Sekolah Dasar Negeri 050577 di Binjai, Langkat, Sumatera Utara. Mewujudkan Generasi Cerdas, Berkarakter, dan Berprestasi.',
  keywords: 'SD NEGERI 050577, sekolah dasar, Binjai, Langkat, Sumatera Utara, pendidikan',
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://sdnegeri050577.com',
    title: 'SD NEGERI 050577',
    description: 'Sekolah Dasar Negeri 050577 - Mewujudkan Generasi Cerdas, Berkarakter, dan Berprestasi',
    siteName: 'SD NEGERI 050577',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#2d5a3d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
