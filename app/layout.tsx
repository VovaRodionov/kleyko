import type { Metadata } from 'next'
import { Courier_Prime } from 'next/font/google'
import './globals.css'

const courier = Courier_Prime({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '700'],
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
    <html lang="ru" className={`${courier.variable}`}>
      <body className="font-sans antialiased bg-white text-[#282828]">
        {children}
      </body>
    </html>
  )
}
