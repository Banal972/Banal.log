import { useEffect, useState } from "react"

import Card from "@/components/Card"
import Filter from "@/components/Filter"
import filters from "@/constant/filter"
import { getAllPosts } from "@/libs/posts"

export const getStaticProps = async () => {
  return {
    props: {
      posts: getAllPosts(),
    },
  }
}

export default function Test({ posts }: { posts: Post[] }) {
  const [filterActive, setFilterActive] = useState("")
  const [filteredPosts, setFilteredPosts] = useState(posts)

  useEffect(() => {
    if (filterActive === "") {
      return setFilteredPosts(posts)
    }
    setFilteredPosts(posts.filter((post) => post.tags.includes(filterActive)))
  }, [filterActive, posts])

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
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
            {filteredPosts.map((post) => (
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
