import { GetStaticProps } from "next"
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"
import Head from "next/head"
import { notFound, useRouter } from "next/navigation"

import { useEffect, useState } from "react"
import { IoCalendarClearOutline, IoTimeOutline } from "react-icons/io5"

import { getAllPosts } from "@/libs/posts"
import { Post } from "@/types/post.type"
import Giscus from "@giscus/react"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import remarkBreaks from "remark-breaks"
import remarkGfm from "remark-gfm"
import remarkToc from "remark-toc"

const PostPage = ({ post, mdx }: PostPageState) => {
  const router = useRouter()

  const prevHandler = () => {
    if (post.tags.includes("지식창고")) {
      return router.push("/discover")
    }

    if (post.tags.includes("블로그")) {
      return router.push("/blog")
    }

    if (post.tags.includes("코딩 테스트")) {
      return router.push("/question")
    }
  }

  return (
    <>
      <Head>
        <title>{`Banal.log | ${post.title}`}</title>
      </Head>
      <main className="relative">
        <div className="border-b pb-10 text-center">
          <h1 className="break-keep text-xl font-bold md:text-2xl">{post.title}</h1>

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

          <div className="mt-3">
            <button
              className="rounded-lg bg-[#d7d780] px-2 py-[2px] text-sm font-bold text-black"
              onClick={prevHandler}
            >
              이전으로
            </button>
          </div>
        </div>
        <div className="prose prose-sm max-w-none px-3 py-10 md:prose-base prose-a:text-blue-500 prose-a:underline-offset-8 md:px-5">
          <MDXRemote {...mdx} />
        </div>
      </main>

      <div className="mt-10">
        <Giscus
          repo="Banal972/Banal.log"
          repoId="R_kgDOMX_PqQ"
          category="comment"
          categoryId="DIC_kwDOMX_Pqc4CiGrW"
          mapping="pathname"
          strict="0"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="bottom"
          theme="light"
          lang="ko"
        />
      </div>
    </>
  )
}

export default PostPage

interface PostPageState {
  post: Post
  mdx: MDXRemoteSerializeResult
  toc: any
}

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
  const post = getAllPosts().map((post) => `${post.slug}`)

  // 주소만 추출
  return {
    paths: post,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slugs } = params as { slugs: string[] }

  const slug = [...slugs].join("/") // 다이나믹 라우터 조합

  const post = getAllPosts().find((v) => {
    return v.slug === `/post/${slug}`
  })

  if (!post) {
    notFound()
  }

  const mdx = await serialize(post.content, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [remarkGfm, remarkBreaks, remarkToc],
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, rehypePrettyCode],
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
    <div className="fixed right-3 top-[140px] hidden w-[150px] flex-col gap-3 text-sm lg:flex">
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
