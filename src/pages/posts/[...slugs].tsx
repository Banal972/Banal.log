import { GetStaticProps } from "next"
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"
import { notFound } from "next/navigation"

import { useEffect, useState } from "react"
import { IoCalendarClearOutline, IoTimeOutline } from "react-icons/io5"

import { serializeMdx } from "@/libs/mdx"
import { getAllPosts } from "@/libs/posts"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeSlug from "rehype-slug"
import remarkBreaks from "remark-breaks"
import remarkGfm from "remark-gfm"
import remarkToc from "remark-toc"

function extractTableOfContents(content: any) {
  const headings = content.match(/^#{1,6}\s+.+$/gm) || []
  return headings.map((heading: any) => {
    const level = heading.match(/^#+/)[0].length
    const title = heading.replace(/^#+\s+/, "")
    return { level, title }
  })
}

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

  const toc = extractTableOfContents(post.content)

  return {
    props: { post, mdx, toc },
  }
}

const TOC = ({ toc }: { toc: any }) => {
  const [activeId, setActiveId] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(entry.target.id)
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "-1px 0px -90% 0px" },
    )

    toc.forEach((item: any) => {
      const element = document.getElementById(item.title)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [toc])

  return (
    <div className="fixed right-[25px] top-[140px] flex w-[150px] flex-col gap-3 text-sm">
      <ul>
        {toc.map((item: any, index: number) => (
          <li key={index} className="mt-3 first:mt-0">
            <a
              href={`#${item.title}`}
              className={`${activeId === item.title ? "text-black" : "text-gray-500"} underline underline-offset-4`}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

const PostPage = ({ post, mdx, toc }: { post: Post; mdx: MDXRemoteSerializeResult; toc: any }) => {
  return (
    <main className="relative px-5">
      <TOC toc={toc} />
      <div className="mr-auto w-[calc(100%-200px)]">
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
      </div>
    </main>
  )
}

export default PostPage
