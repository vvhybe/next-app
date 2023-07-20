import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '%s | Janini Yoga Studio',
  openGraph: {
      title: '%s | Next.js App',
      images: [
          {
            url: `/OGP/default.jpg`,
            width: 1280,
            height: 640,
            alt: '%s | Janini Yoga Studio',
          },
      ]
  },
};

type RootLayoutProps = {
  children: React.ReactNode
}


export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <h1>{"Next App"}</h1>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/classes">Classes</Link></li>
          </ul>
        </header>
        {children}
        <footer>
          <p>{"Next App © 23"}</p>            
        </footer>
      </body>
    </html>
  )
}
