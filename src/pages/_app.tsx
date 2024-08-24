import type { AppProps } from "next/app"
import localFont from "next/font/local"
import Head from "next/head"

import ProjectModalProvider from "@/provider/ProjectModalProvider"
import dayjs from "dayjs"
import "dayjs/locale/ko"

import "./globals.css"

dayjs.locale("ko")

const Cafe24Oneprettynight = localFont({
  src: "../font/Cafe24Oneprettynight/Cafe24Oneprettynight-v2.0.woff2",
  variable: "--font-Cafe24Oneprettynight",
})

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Banal.log</title>
      </Head>
      <div className={`${Cafe24Oneprettynight.className}`}>
        <ProjectModalProvider>
          <Component {...pageProps} />
        </ProjectModalProvider>
      </div>
    </>
  )
}
export default App
