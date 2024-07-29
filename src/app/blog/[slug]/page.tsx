import { MDXRemote } from "next-mdx-remote/rsc"

import { getPostDetail } from "@/lib/parsing"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import remarkBreaks from "remark-breaks"
import remarkGfm from "remark-gfm"

const page = async ({ params: { slug } }: { params: { slug: string } }) => {
  const post = await getPostDetail("blog", slug)

  return (
    <main className="mx-auto max-w-[1200px] px-4">
      {post && (
        <div>
          <div className="border-b pb-10 pt-12 text-center">
            <h1 className="text-2xl font-bold">{post.title}</h1>
            <p className="mt-8 inline-block rounded bg-blue-400 px-4 py-1 text-sm font-medium uppercase text-white">
              {post.category}
            </p>
            <div className="mt-5 flex justify-center">
              <div>{post.dateString}</div>
              <div className="mx-2 h-full w-[1px] bg-black"></div>
              <div>{post.readingMinutes}</div>
            </div>
          </div>
          <div className="prose max-w-none py-14">
            <MDXRemote
              source={post.content}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm, remarkBreaks],
                  rehypePlugins: [
                    [
                      rehypePrettyCode,
                      { theme: { dark: "github-dark-dimmed", light: "github-light" } },
                    ],
                    rehypeSlug,
                  ],
                  format: "mdx",
                },
              }}
            />
          </div>
        </div>
      )}
    </main>
  )
}

export default page
