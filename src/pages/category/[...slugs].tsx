import { GetStaticProps } from "next"
import { useRouter } from "next/router"

import React, { useEffect, useState } from "react"

import PrevBtn from "@/components/common/PrevBtn"
import { Title } from "@/components/common/Title"
import Lists from "@/components/page/category/List"
import { CATEGORYS } from "@/constant/category"
import { getAllPosts } from "@/libs/posts"
import { Post } from "@/types/post.type"
import CategoryLayout from "@/ui/CategoryLayout"
import dayjs from "dayjs"

const CategoryPage = ({ posts }: CategoryPageState) => {
  const {
    query: { slugs },
  } = useRouter()

  const [title, setTitle] = useState("")

  useEffect(() => {
    if (!slugs) return
    setTitle(slugs[0])
  }, [slugs])

  return (
    <CategoryLayout>
      <main>
        <Title>
          {title === "blog" && "Blog"}
          {title === "discover" && "TIL"}
          {title === "question" && "코딩 테스트"}
        </Title>
        <p className="mt-2 break-keep text-sm">
          {title === "blog" && "지나온 일들을 회고한 기록들 입니다."}
          {title === "discover" &&
            "프로젝트를 진행하면서 새로운 지식을 얻은것을 정리하는 곳 입니다."}
          {title === "question" && "코딩 테스트 문제를 풀이하는 시간을 갖는 공간 입니다."}
        </p>
        <div className="mt-5 flex flex-wrap gap-3 text-xs">
          <PrevBtn link="/">되돌아가기</PrevBtn>
          <PrevBtn link="/category/blog">블로그</PrevBtn>
          <PrevBtn link="/category/discover">TIL</PrevBtn>
          <PrevBtn link="/category/question">코딩 테스트</PrevBtn>
        </div>

        {posts.length < 1 && <div className="mt-5 flex gap-5 border-t py-5"></div>}

        {posts.map((post) => (
          <div key={post[0]} className="mt-5 flex gap-5 border-t py-5">
            <p>{post[0]}</p>
            <Lists data={post[1]} />
          </div>
        ))}
      </main>
    </CategoryLayout>
  )
}

export default CategoryPage

export const getStaticPaths = () => {
  const paths = Object.keys(CATEGORYS).reduce((prev: string[], key) => {
    const categoryPath = `/category/${key}`
    const subcategoryPath = CATEGORYS[key].subItems.map(
      (subitem) => `${categoryPath}/${subitem.link}`,
    )
    return [...prev, categoryPath, ...subcategoryPath]
  }, [])

  return {
    paths: paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slugs } = params as { slugs: string[] }

  const [mainCategory, subCategory] = slugs

  /* 
  // 명령형
  const posts = getAllPosts().reduce<{ [year: number]: Post[] }>((ac, cur) => {
    if (cur.tags && cur.tags.includes(CATEGORYS[slug].title)) {
      // 이 if문을 filter로 바꿀수 있음
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
    posts[Number(year)].sort((a, b) => dayjs(b.date).valueOf() - dayjs(a.date).valueOf()) // map으로 바꿀수 있음
  })

  // 연도별로 역순 정렬
  const desc = Object.entries(posts).sort((a, b) => Number(b[0]) - Number(a[0])) // map으로 변환한것에 sort로 하나 압축 가능

  */

  // 함수형
  const posts = getAllPosts()
    .filter((post) => post.category === mainCategory)
    .filter((post) => !subCategory || post.tags.includes(subCategory))
    .reduce<{ [year: number]: Post[] }>((ac, cur) => {
      const year = dayjs(cur.date).year()
      return {
        ...ac,
        [year]: [...(ac[year] || []), cur],
      }
    }, {})

  const sortedPosts = Object.entries(posts)
    .map(([year, posts]) => [
      year,
      posts.sort((a, b) => dayjs(b.date).valueOf() - dayjs(a.date).valueOf()),
    ])
    .sort(([a], [b]) => Number(b) - Number(a))

  return {
    props: {
      posts: sortedPosts,
      fallback: false,
    },
  }
}
