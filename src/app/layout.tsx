import { Metadata } from "next"

import Footer from "@/layouts/Footer"
import Header from "@/layouts/Header"

import "./globals.css"

export const metadata: Metadata = {
  title: "...",
  description: "...",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
