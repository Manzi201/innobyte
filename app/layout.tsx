import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'INNOBYTE — IT Services & Digital Solutions',
  description: 'Professional IT services: web design, graphic design, computer services, IT support, social media, data services and digital documents.',
  keywords: 'web design, graphic design, IT support, computer services, social media, Rwanda, INNOBYTE',
  openGraph: {
    title: 'INNOBYTE — IT Services',
    description: 'Professional IT & digital services for businesses and individuals.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  )
}
