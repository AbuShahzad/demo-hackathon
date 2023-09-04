import Navbar from '@/components/sections/header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/sections/footer'
import Providers from '@/components/utils/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dine Market',
  description: 'Ecommerce shopping app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
    </Providers>
  )
}
