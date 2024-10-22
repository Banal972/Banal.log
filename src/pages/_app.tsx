import type { AppProps } from "next/app"
import localFont from "next/font/local"
import Head from "next/head"

import ProjectModalProvider from "@/provider/ProjectModalProvider"
import { GoogleAnalytics } from "@next/third-parties/google"
import dayjs from "dayjs"
import "dayjs/locale/ko"
import "swiper/css"
import "swiper/css/pagination"

import "./globals.css"

dayjs.locale("ko")

const Ownglyph_okticon = localFont({
  src: [
    {
      path: "../font/Ownglyph_okticon/Ownglyph_okticon-Lt.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../font/Ownglyph_okticon/Ownglyph_okticon-Rg.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../font/Ownglyph_okticon/Ownglyph_okticon-Bd.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-Ownglyph_okticon",
})

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Banal.log</title>
        <meta
          name="description"
          content="심플하게 만들어 노트처럼 작성한 프론트엔드 개발자의 회고록 Banal.log"
        />
      </Head>
      <div className={`${Ownglyph_okticon.className}`}>
        <ProjectModalProvider>
          <Component {...pageProps} />
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
        </ProjectModalProvider>
      </div>
    </>
  )
}
export default App
