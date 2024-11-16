import { NextPage } from "next"
import type { AppProps } from "next/app"
import { Poppins } from "next/font/google"
import Head from "next/head"

import { ReactElement, ReactNode } from "react"

import Footer from "@/components/ui/footer"
import Header from "@/components/ui/header"
import ProjectModalProvider from "@/provider/ProjectModalProvider"
import { GoogleAnalytics } from "@next/third-parties/google"
import dayjs from "dayjs"
import "dayjs/locale/ko"
import "swiper/css"
import "swiper/css/pagination"

import "./globals.css"

dayjs.locale("ko")

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const CommonLayout = (page: ReactElement) => {
  return (
    <>
      <Header />
      {page}
      <Footer />
    </>
  )
}

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "500",
})

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || CommonLayout

  return (
    <>
      <Head>
        <title>Banal.log</title>
        <meta
          name="description"
          content="심플하게 만들어 노트처럼 작성한 프론트엔드 개발자의 회고록 Banal.log"
        />
      </Head>
      <main className={`${poppins.variable}`}>
        <ProjectModalProvider>
          {getLayout(<Component {...pageProps} />)}
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
        </ProjectModalProvider>
      </main>
    </>
  )
}
export default App
