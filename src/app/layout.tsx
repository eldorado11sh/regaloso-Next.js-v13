'use client'
import './globals.css'
import Head from './head'
import Header from './common/header'
import Footer from './common/footer'
import { Inter } from 'next/font/google'
import { usePathname } from 'next/navigation'
import Provider from './components/provider'
import classNames from 'classnames'

const inter = Inter({
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathname = usePathname()

  return (
    <html lang="en">
      <Head />
      <body className={classNames("bg-[#FFFFFF] dark:bg-[#221F1F]", inter.className)}>
        <Provider>
          {
            <section>
              <Header />
                {children}
              <Footer />
            </section>
          }
        </Provider>
      </body>
    </html>
  )
}
