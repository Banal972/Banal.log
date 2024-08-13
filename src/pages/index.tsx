import { GetStaticProps } from "next"

import { useState } from "react"

import Card from "@/components/Card"
import Filter from "@/components/Filter"
import { getPostList } from "@/libs/post"
import filters from "@/types/filter"
import { IPost } from "@/types/post.type"

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPostList()

  const serializedPosts = posts.map((post) => ({
    ...post,
    date: post.date.toISOString(),
  }))

  return {
    props: {
      posts: serializedPosts,
    },
  }
}

const Page = ({ posts }: { posts: IPost[] }) => {
  const [filterActive, setFilterActive] = useState("")
  const filterPosts = posts.filter((post) => {
    if (filterActive !== "") {
      return post.tags.includes(filterActive)
    }
    return true
  })

  return (
    <main className="mx-auto max-w-[1400px] px-5 pt-10">
      <div className="text-base font-medium lg:text-xl">
        <p>안녕하세요!🖐️</p>
        <p className="mt-1">
          제 블로그인 <span className="font-bold">Banal.log</span>에 오신걸 환영합니다.
        </p>
        <p className="mt-1">블로그는 곧 다시 리뉴얼 할 예정입니다</p>
      </div>

      <div className="mt-12 flex gap-2">
        <Filter onClick={() => setFilterActive("")} name={"전체"} active={filterActive === ""} />
        {filters.map((filter) => (
          <Filter
            key={filter}
            onClick={() => setFilterActive(filter)}
            name={filter}
            active={filterActive === filter}
          />
        ))}
      </div>

      <div className="mt-10">
        {filterPosts.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
            {filterPosts.map((post) => (
              <Card key={post.slug} {...post} />
            ))}
          </div>
        ) : (
          <p className="text-center">게시글이 존재하지 않습니다.</p>
        )}
      </div>
    </main>
  )
}

export default Page
