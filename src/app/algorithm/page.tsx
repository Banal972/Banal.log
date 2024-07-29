import Image from "next/image"
import Link from "next/link"

import Slide from "@/app/blog/Slide"
import { getPostList } from "@/lib/parsing"

const BlogPage = async () => {
  const categorys = await getPostList("algorithm")

  return (
    <main className="mx-auto max-w-[1200px] px-6 py-16">
      <Slide />
      <div className="mt-40">
        <h4 className="text-4xl font-bold">코테는 수능이야</h4>
        <div className="mt-9">
          {categorys.length > 0 ? (
            <div className="grid grid-cols-3 gap-8">
              {categorys.map((category) => (
                <Link href={category.url} key={category.slug}>
                  <div className="relative bg-black after:block after:pb-[50%]">
                    {category.thumbnail ? (
                      <Image
                        className="object-cover"
                        src={category.thumbnail}
                        alt={`${category.title} 이미지`}
                        fill
                      />
                    ) : (
                      <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center border bg-white font-bold uppercase">
                        {category.category}
                      </div>
                    )}
                  </div>
                  <p className="mt-4 text-sm text-gray-500">{category.dateString}</p>
                  <h4 className="mt-4 text-2xl font-medium">{category.title}</h4>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center text-sm">게시글이 존재하지 않습니다 😢</p>
          )}
        </div>
      </div>
    </main>
  )
}

export default BlogPage
