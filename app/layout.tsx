// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pondok Pesantren Al Kautsar',
  description: 'Website Resmi Pondok Pesantren Al Kautsar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navbar /> 
        
        <main className="flex-grow bg-gray-50">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}