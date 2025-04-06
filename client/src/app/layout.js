import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Community Access Hub',
  description: 'Easily find local food resources including food pantries, community gardens, and EBT-friendly stores near you. Filter by dietary needs, accessibility, and services like delivery or pickup.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
