import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-sans',
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
    <html lang="ru" className={`${inter.variable}`}>
      <body className="font-sans antialiased bg-white text-[#282828]">
        {children}
      </body>
    </html>
  )
}
