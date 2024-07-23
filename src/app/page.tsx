import Link from "next/link"

import { getPostList } from "@/lib/parsing"

const page = async () => {
  const postList = await getPostList()
  const categorys = await getPostList("category2")

  return (
    <main className="px-6 py-20">
      <div className="pb-14">
        <h4 className="text-2xl font-bold">BANAL</h4>
        <div className="mt-3 text-sm leading-6">
          <p>
            안녕하세요 반가습니다. <br />
            여기는 제 블로그 입니다.
          </p>
          <a href="">어떤 사람인가요?</a>
        </div>
      </div>

      <div className="relative flex items-start gap-[50px]">
        <div className="flex-1">
          <h4 className="text-sm tracking-tight text-gray-500">방금 올라온 시리즈</h4>

          <ul className="mt-5">
            {postList.map((post, index) => (
              <li key={`${post.slug}${index}`} className="mt-20 first:mt-0">
                <Link href={post.url}>
                  <div className="h-80 rounded-2xl border"></div>
                  <p className="mt-4 text-sm text-gray-500">{post.dateString}</p>
                  <h4 className="mt-2 text-2xl font-bold">{post.title}</h4>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="sticky top-5 w-1/5 max-w-[290px]">
          <h4 className="text-sm tracking-tight text-gray-500">방금 올라온 시리즈</h4>
          <div className="mt-5">
            {categorys.map((category, index) => (
              <div className="mt-10 w-full first:mt-0" key={`${category.category}${index}`}>
                <Link href={category.url}>
                  <div className="flex h-96 flex-col overflow-hidden rounded-2xl border">
                    <div className="flex-1"></div>
                    <div className="bg-black px-4 py-6 text-white">
                      <p>{category.dateString}</p>
                      <h4>{category.title}</h4>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default page
