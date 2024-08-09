import { serialize } from "next-mdx-remote/serialize"

import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import remarkBreaks from "remark-breaks"
import remarkGfm from "remark-gfm"

export const serializeMdx = (source: string) => {
  return serialize(source, {
    mdxOptions: {
      remarkPlugins: [remarkGfm, remarkBreaks],
      rehypePlugins: [
        [rehypePrettyCode, { theme: { dark: "github-dark-dimmed", light: "github-light" } }],
        rehypeSlug,
      ],
      format: "mdx",
    },
  })
}
