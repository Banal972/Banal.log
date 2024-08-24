import { Head, Html, Main, NextScript } from "next/document"

const Document = () => {
  return (
    <Html lang="ko" className="h-full">
      <body className="mx-auto max-w-2xl bg-[#fafaea] px-5 py-14">
        <Main />
        <footer className="mt-40 text-center text-gray-600">
          @ 2024. <span className="font-bold text-black">Banal</span> All Rights Reserved.
        </footer>
        <NextScript />
      </body>
    </Html>
  )
}
export default Document
