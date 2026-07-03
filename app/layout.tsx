import type { Metadata } from 'next'
import { Courier_Prime, Inter } from 'next/font/google'
import './globals.css'

const courier = Courier_Prime({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '700'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Lera Kleyko — Head of imagineering',
  description: 'Valeria Kleyko - creator from Moscow, Russia. Tomorrow the world will change again. I do know how to make these changes work for your business.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${courier.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-white text-[#282828]">
        {children}
      </body>
    </html>
  )
}
