import PrevBtn from "@/components/common/PrevBtn"
import Lists from "@/components/page/category/List"
import { getAllPosts } from "@/libs/posts"
import dayjs from "dayjs"
import isBetween from "dayjs/plugin/isBetween"

dayjs.extend(isBetween)

export const getStaticProps = async () => {
  const posts = getAllPosts().reduce<{ [year: number]: Post[] }>((ac, cur) => {
    if (cur.tags && cur.tags.includes("코딩 테스트")) {
      const year = dayjs(cur.date).year()
      if (!ac[year]) {
        ac[year] = []
      }
      ac[year].push(cur)
    }
    return ac
  }, {})

  const desc = Object.entries(posts).sort((a, b) => Number(b[0]) - Number(a[0]))

  return {
    props: {
      posts: desc,
    },
  }
}

const QuestionPage = ({ posts }: { posts: [string, Post[]][] }) => {
  return (
    <main>
      <h1 className="text-lg font-semibold">코딩 테스트</h1>
      <p className="mt-5 text-sm">코딩 테스트 문제를 풀이하는 시간을 갖는 공간 입니다.</p>
      <div className="mt-1 flex flex-wrap gap-3 text-sm">
        <PrevBtn link={"/"}>되돌아가기</PrevBtn>
        <PrevBtn link={"/blog"}>블로그</PrevBtn>
        <PrevBtn link={"/discover"}>지식 창고</PrevBtn>
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

export default QuestionPage
