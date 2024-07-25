import { MDXRemote } from "next-mdx-remote/rsc"

import { getPostDetail } from "@/lib/parsing"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import remarkBreaks from "remark-breaks"
import remarkGfm from "remark-gfm"

const page = async ({ params: { slug } }: { params: { slug: string } }) => {
  const post = await getPostDetail("blog", slug)
  return (
    <>
      {post && (
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
            },
          }}
        />
      )}
    </>
  )
}

export default page
