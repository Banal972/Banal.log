import Link from "next/link"

import { IoCalendarClearOutline } from "react-icons/io5"

import { getAllPosts } from "@/libs/posts"
import dayjs from "dayjs"
import isBetween from "dayjs/plugin/isBetween"

dayjs.extend(isBetween)

export const getStaticProps = async () => {
  const posts = getAllPosts().reduce<{ [year: number]: Post[] }>((ac, cur) => {
    if (cur.tags && cur.tags.includes("블로그")) {
      const year = dayjs(cur.date).year()
      if (!ac[year]) {
        ac[year] = []
      }
      ac[year].push(cur)
    }
    return ac
  }, {})

  // 각 연도 내에서 날짜 기준으로 역순 정렬
  Object.keys(posts).forEach((year) => {
    posts[Number(year)].sort((a, b) => dayjs(b.date).valueOf() - dayjs(a.date).valueOf())
  })

  // 연도별로 역순 정렬
  const desc = Object.entries(posts).sort((a, b) => Number(b[0]) - Number(a[0]))

  return {
    props: {
      posts: desc,
    },
  }
}

const BlogPage = ({ posts }: { posts: [string, Post[]][] }) => {
  return (
    <main>
      <h1 className="text-lg font-semibold">Blog</h1>
      <p className="mt-5">지나온 일들을 회고한 기록들 입니다.</p>
      <div className="mt-1 flex gap-3 text-sm">
        <Link href={"/"}>되돌아가기</Link>
        <Link href={"/discover"}>지식창고</Link>
        <Link href={"/question"}>코딩 테스트</Link>
      </div>

      {posts.map((post) => (
        <div key={post[0]} className="mt-10 flex gap-5 border-t py-5">
          <p>{post[0]}</p>
          <ul className="flex-1">
            {post[1].map((list) => (
              <li key={list.date} className="mt-3 flex items-center justify-between first:mt-0">
                <Link href={list.slug}>{list.title}</Link>
                <p className="flex items-center gap-1 text-sm text-gray-500">
                  <IoCalendarClearOutline />
                  {list.date}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </main>
  )
}

export default BlogPage
