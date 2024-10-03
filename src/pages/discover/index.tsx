import PrevBtn from "@/components/common/PrevBtn"
import { Title } from "@/components/common/Title"
import Lists from "@/components/page/category/List"
import { getAllPosts } from "@/libs/posts"
import { Post } from "@/types/post.type"
import dayjs from "dayjs"
import isBetween from "dayjs/plugin/isBetween"

dayjs.extend(isBetween)

const DiscoverPage = ({ posts }: CategoryPageState) => {
  return (
    <main>
      <Title>TIL</Title>
      <p className="mt-5 text-sm">
        프로젝트를 진행하면서 새로운 지식을 얻은것을 정리하는 곳 입니다.
      </p>
      <div className="mt-2 flex flex-wrap gap-3 text-xs">
        <PrevBtn link={"/"}>되돌아가기</PrevBtn>
        <PrevBtn link={"/blog"}>블로그</PrevBtn>
        <PrevBtn link={"/question"}>코딩 테스트</PrevBtn>
      </div>

      {posts.map((post) => (
        <div key={post[0]} className="mt-10 flex gap-5 border-t py-5">
          <p>{post[0]}</p>
          <Lists data={post[1]} />
        </div>
      ))}
    </main>
  )
}

export default DiscoverPage

export const getStaticProps = async () => {
  const posts = getAllPosts().reduce<{ [year: number]: Post[] }>((ac, cur) => {
    if (cur.tags && cur.tags.includes("TIL")) {
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
