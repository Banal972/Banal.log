import { serialize } from "next-mdx-remote/serialize"

import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeSlug from "rehype-slug"
import remarkBreaks from "remark-breaks"
import remarkGfm from "remark-gfm"
import remarkToc from "remark-toc"

export const serializeMdx = async (source: string) =>
  serialize(source, {
    mdxOptions: {
      remarkPlugins: [
        remarkGfm,
        remarkBreaks,
        [
          remarkToc,
          {
            heading: "목차",
          },
        ],
      ],
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ["anchor"],
            },
          },
        ],
      ],
      format: "mdx",
    },
  })
