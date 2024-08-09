import { MDXRemote } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"

import React from "react"

export const getStaticProps = async () => {
  const source = "Some **mdx** text, with a component"
  const mdxSource = await serialize(source)
  return { props: { source: mdxSource } }
}

const PostPage = ({ source }: { source: any }) => {
  return (
    <main className="mx-auto max-w-[1200px] pt-10">
      <div className="border-b pb-10 text-center">
        <h1 className="text-3xl font-bold">제목1</h1>
        <p className="mt-5 inline-block rounded px-4 py-1 text-sm font-medium uppercase text-blue-500">
          필터1
        </p>
        <div className="mt-5 flex justify-center gap-2 text-sm text-gray-500">
          <div>2024-00-00</div>
          <div>1분</div>
        </div>
      </div>

      <div className="py-5">
        <MDXRemote {...source} />
      </div>
    </main>
  )
}

export default PostPage
