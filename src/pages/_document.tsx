import { Head, Html, Main, NextScript } from "next/document"

import Footer from "@/components/layouts/Footer"
import Header from "@/components/layouts/Header"

const Document = () => {
  return (
    <Html lang="ko">
      <Head>
        <meta property="og:url" content="" />
        <meta property="og:title" content="내 블로그" />
        <meta property="og:description" content="내 블로그임" />
        <meta property="og:image" content="" />
      </Head>
      <body className="-tracking-wide">
        <Header />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  )
}
export default Document
