import { Head, Html, Main, NextScript } from "next/document"

const Document = () => {
  return (
    <Html lang="ko" className="h-full">
      <Head>
        <meta name="naver-site-verification" content="62539551f3bf798f4509e12bf417f4a479576b32" />
        <meta property="og:url" content="banal972.github.io" />
        <meta property="og:title" content="Banal.log" />
        <meta
          property="og:description"
          content="심플하게 만들어 노트처럼 작성한 프론트엔드 개발자의 회고록 Banal.log"
        />
        <meta property="og:image" content="" />
      </Head>
      <body className="mx-auto max-w-2xl bg-[#fafaea] px-3 py-20 md:px-5">
        <Main />
        <footer className="mt-40 text-center text-sm text-gray-600">
          @ 2024. <span className="font-bold text-black">Banal</span> All Rights Reserved.
        </footer>
        <NextScript />
      </body>
    </Html>
  )
}
export default Document
