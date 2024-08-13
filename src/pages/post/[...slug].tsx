import { GetStaticPaths } from "next"
import { MDXRemote } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"

import { IoCalendarClearOutline, IoTimeOutline } from "react-icons/io5"

import { getPostDetail, getPostPaths } from "@/libs/post"
import { IPost } from "@/types/post.type"

export const getStaticPaths: GetStaticPaths = () => {
  // 모든 카테고리의 포스트 경로를 가져옵니다
  const paths = getPostPaths()

  return {
    paths: paths.map((path) => ({
      params: {
        slug: path.split("/").slice(1), // '/post/category/slug' 형식에서 category와 slug를 추출
      },
    })),
    fallback: "blocking",
  }
}

export const getStaticProps = async ({ params }: any) => {
  const { slug } = params as { slug: string[] }

  if (slug.length < 2) {
    return { notFound: true }
  }

  const category = slug[0]
  const postSlug = slug[1]

  const post = await getPostDetail(category, postSlug)

  if (!post) {
    return { notFound: true }
  }

  post.date = post.date.toISOString() as any

  const mdxSource = await serialize(post.content)
  return { props: { post, source: mdxSource } }
}

const PostPage = ({ post, source }: { post: IPost; source: any }) => {
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
            <IoCalendarClearOutline /> {post.dateString}
          </p>
          <p className="flex items-center gap-1">
            <IoTimeOutline /> {post.readingMinutes}분
          </p>
        </div>
      </div>

      <div className="prose w-full p-5">
        <MDXRemote {...source} />
      </div>
    </main>
  )
}

export default PostPage
