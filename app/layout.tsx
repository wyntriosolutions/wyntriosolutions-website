import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { ScrollToTopProvider } from '@/components/scroll-to-top-provider'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Wyntrio Solutions LLP - Professional Consulting & Technology Services',
  description: 'Wyntrio Solutions LLP delivers innovative consulting, technology solutions, and digital transformation services. Expert team with 10+ years of experience. Contact us today.',
  keywords: ['consulting services', 'technology solutions', 'digital transformation', 'business consulting', 'IT solutions', 'Wyntrio Solutions'],
  authors: [{ name: 'Wyntrio Solutions LLP' }],
  creator: 'Wyntrio Solutions LLP',
  publisher: 'Wyntrio Solutions LLP',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://wyntrio.com',
    siteName: 'Wyntrio Solutions',
    title: 'Wyntrio Solutions LLP - Professional Consulting & Technology Services',
    description: 'Innovative consulting and technology solutions to transform your business. 10+ years of expertise serving 100+ clients.',
    images: [
      {
        url: 'https://wyntrio.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Wyntrio Solutions - Professional Services',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wyntrio Solutions LLP - Professional Consulting & Technology Services',
    description: 'Innovative consulting and technology solutions to transform your business.',
    images: ['https://wyntrio.com/og-image.png'],
  },
  icons: {
    icon: [
      // {
      //   url: '/icon-light-32x32.png',
      //   media: '(prefers-color-scheme: light)',
      // },
      // {
      //   url: '/icon-dark-32x32.png',
      //   media: '(prefers-color-scheme: dark)',
      // },
      {
        url: '/icon.png',
        type: 'image/png',
      },
    ],
    apple: '/apple-icon.png',
  },
  alternates: {
    canonical: 'https://wyntrio.com',
  },
 
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Wyntrio Solutions LLP',
              url: 'https://wyntrio.com',
              logo: 'https://wyntrio.com/logo.png',
              description: 'Professional consulting and technology solutions company',
              foundingDate: '2010',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-555-123-4567',
                contactType: 'Business',
                email: 'contact@wyntrio.com',
              },
              sameAs: [
                'https://www.linkedin.com/company/wyntrio-solutions',
                'https://www.instagram.com/wyntrio',
                'https://wa.me/555123456789',
              ],
              address: {
                '@type': 'PostalAddress',
                streetAddress: '123 Business Street, Suite 100',
                addressLocality: 'Business City',
                addressRegion: 'BC',
                postalCode: '12345',
                addressCountry: 'US',
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ScrollToTopProvider>
            {children}
          </ScrollToTopProvider>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
