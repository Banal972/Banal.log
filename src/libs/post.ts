import dayjs from "dayjs"
import fs from "fs"
import { sync } from "glob"
import matter from "gray-matter"
import path from "path"
import readingTime from "reading-time"

const BASE_PATH = "posts"
const POSTS_PATH = path.join(process.cwd(), `/${BASE_PATH}`)

export const parsePost = (postPath: string) => {
  try {
    const file = fs.readFileSync(postPath, { encoding: "utf-8" })
    const { content, data } = matter(file)
    const grayMatter = data as any

    if (grayMatter.draft) {
      return
    }

    return {
      ...grayMatter,
      tags: grayMatter.tags.filter(Boolean),
      date: dayjs(grayMatter.date).format("YYYY-MM-DD"),
      content,
      slug: postPath.slice(postPath.indexOf(BASE_PATH)).replace(".mdx", ""),
      readingMinutes: Math.ceil(readingTime(content).minutes),
      wordCount: content.split(/\s+/gu).length,
    }
  } catch (e) {
    console.error(e)
  }
}

export const getAllPosts = () => {
  const postPaths: string[] = sync(`${POSTS_PATH}/**/*.mdx`)
  const normalizedPaths = postPaths.map((path) => path.replace(/\\/g, "/"))

  return normalizedPaths.reduce<any[]>((ac, postPath) => {
    const post = parsePost(postPath)
    if (!post) return ac
    return [...ac, post]
  }, [])
}
