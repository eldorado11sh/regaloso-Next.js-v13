import './globals.css'
import Head from './head'
import Header from './common/header'
import Footer from './common/footer'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head />
      <body className={inter.className} style={{backgroundColor: '#FFFFFF'}}>
        <section>
          <Header />
            {children}
          <Footer />
        </section>
      </body>
    </html>
  )
}
