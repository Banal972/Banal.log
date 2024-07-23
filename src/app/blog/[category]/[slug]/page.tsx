import { MDXRemote } from "next-mdx-remote/rsc"

import { getPostDetail } from "@/lib/parsing"

const page = async ({
  params: { category, slug },
}: {
  params: { category: string; slug: string }
}) => {
  const post = await getPostDetail(category, slug)
  return <>{post && <MDXRemote source={post.content} />}</>
}

export default page
