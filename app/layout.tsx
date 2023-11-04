import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Car-Hub',
  description: 'Explore a world of possibilities with Car Hub. Rent your dream car today and hit the road with confidence. Find the perfect vehicle for your journey.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body>
        {children}
        </body>
    </html>
  </ClerkProvider>
  )
}
