import { Metadata } from "next"

import Footer from "@/layouts/Footer"
import Header from "@/layouts/Header"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"

import "./globals.css"

export const metadata: Metadata = {
  title: "BANAL.LOG",
  description: "안녕하세요 BANAL 블로그 입니다. 반갑습니다.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="-tracking-wide">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
