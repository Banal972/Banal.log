import { Head, Html, Main, NextScript } from "next/document"

import Footer from "@/components/layouts/Footer"
import Header from "@/components/layouts/Header"

const Document = () => {
  return (
    <Html lang="ko" className="h-full">
      <Head>
        <meta property="og:url" content="" />
        <meta property="og:title" content="내 블로그" />
        <meta property="og:description" content="내 블로그임" />
        <meta property="og:image" content="" />
      </Head>
      <body className="relative min-h-full -tracking-wide">
        <Header />
        <div className="flex pt-[50px]">
          <div className="w-[200px] flex-none border-r bg-white">
            <div className="sticky top-[50px] p-5">
              <ul>
                <li>카테고리1</li>
                <li>카테고리1</li>
                <li>카테고리1</li>
                <li>카테고리1</li>
              </ul>
            </div>
          </div>
          <div className="flex-1">
            <Main />
            <Footer />
          </div>
        </div>
        <NextScript />
      </body>
    </Html>
  )
}
export default Document
