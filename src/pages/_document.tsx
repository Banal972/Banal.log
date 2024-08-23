import { Head, Html, Main, NextScript } from "next/document"

const Document = () => {
  return (
    <Html lang="ko" className="h-full">
      <Head>
        <meta property="og:url" content="banal972.github.io" />
        <meta property="og:title" content="Banal.log" />
        <meta
          property="og:description"
          content="심플하게 만들어 노트처럼 작성한 프론트엔드 개발자의 회고록 Banal.log"
        />
        <meta property="og:image" content="" />
      </Head>
      <body className="mx-auto max-w-2xl bg-[#fafaea] px-5 pt-14">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
export default Document
