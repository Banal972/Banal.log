import { GetStaticProps } from "next"
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"
import { notFound } from "next/navigation"

import { IoCalendarClearOutline, IoTimeOutline } from "react-icons/io5"

import { serializeMdx } from "@/libs/mdx"
import { getAllPosts } from "@/libs/posts"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeSlug from "rehype-slug"
import remarkBreaks from "remark-breaks"
import remarkGfm from "remark-gfm"
import remarkToc from "remark-toc"

export const getStaticPaths = () => {
  // 정적파일 만들때 필요
  const posts = getAllPosts().map((post) => post.slug)
  // 주소만 추출
  return {
    paths: posts,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slugs } = params as { slugs: string[] }

  const slug = [...slugs].join("/") // 다이나믹 라우터 조합

  const post = getAllPosts().find((v) => {
    return v.slug === `/posts/${slug}`
  })

  if (!post) {
    notFound()
  }

  const mdx = await serialize(post.content, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [remarkGfm, remarkBreaks, remarkToc],
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
      format: "mdx",
    },
  })

  return {
    props: { post, mdx },
  }
}

/* const TOC = ({ content }: { content: string }) => {
  const getHeadings = (source: string) => {
    const regex = /^(#|##|###) (.*$)/gim
    if (source.match(regex)) {
      return source.match(regex)?.map((heading: string) => ({
        text: heading.replace("#", "").replace("#", ">").replace("#", ">"),
        link: heading
          .replace("# ", "")
          .replace("#", "")
          .replace("#", "")
          .replace(/ /g, "-")
          .toLowerCase()
          .replace("?", ""),
        indent: heading.match(/#/g)?.length,
      }))
    }
    return []
  }

  const HeadingArr = getHeadings(content)
  return (
    <div>
      <p>목차</p>
      {HeadingArr?.map((heading, index) => (
        <div key={index}>
          <a href={"#" + heading.link}>{heading.text}</a>
        </div>
      ))}
    </div>
  )
} */

const PostPage = ({ post, mdx }: { post: Post; mdx: MDXRemoteSerializeResult }) => {
  return (
    <main className="mx-auto max-w-[1200px]">
      <div className="border-b px-5 py-10 text-center">
        <h1 className="text-3xl font-bold">{post.title}</h1>

        <div className="mt-5 flex justify-center gap-2 rounded px-4 py-1 text-sm font-medium uppercase text-blue-500">
          {post.tags.map((tag) => (
            <p className="border-l border-blue-500 pl-2 first:border-none first:pl-0" key={tag}>
              {tag}
            </p>
          ))}
        </div>

        <div className="mt-5 flex justify-center gap-2 text-sm text-gray-500">
          <p className="flex items-center gap-1">
            <IoCalendarClearOutline />
            {post.date}
          </p>
          <p className="flex items-center gap-1">
            <IoTimeOutline />
            {post.readingMinutes}분
          </p>
        </div>
      </div>
      <div className="prose max-w-none p-5">
        <MDXRemote {...mdx} />
      </div>
    </main>
  )
}

export default PostPage
