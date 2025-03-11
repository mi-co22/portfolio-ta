import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layouts/Header'
import { Footer } from '@/components/layouts/Footer'

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: 'ポートフォリオ',
  description: '2025年作成の最新のポートフォリオサイトです。',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <Header />
          </div>
        </div>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
