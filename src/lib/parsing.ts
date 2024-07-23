import dayjs from "dayjs"
import fs from "fs"
import { sync } from "glob"
import matter from "gray-matter"
import path from "path"
import readingTime from "reading-time"

interface IPostMatter {
  title: string
  date: Date
  desc: string
  thumbnail: string
  dateString: string
  content: string
  readingMinutes: number
}

interface IPost extends IPostMatter {
  url: string
  category: string
  slug?: string
}

const BASE_PATH = "src/posts"
const POSTS_PATH = path.join(process.cwd(), BASE_PATH)

// MDX 파일 파싱 : abstract / detail 구분
const parsePost = async (postPath: string): Promise<IPost> => {
  const postAbstract = parsePostAbstract(postPath)
  const postDetail = await parsePostDetail(postPath)

  return { ...postAbstract, ...postDetail }
}

// MDX Abstract
// url, cg path, cg name, slug
export const parsePostAbstract = (postPath: string) => {
  // category1/title1/content
  const filePath = postPath
    .slice(postPath.indexOf(BASE_PATH))
    .replace(`${BASE_PATH}/`, "")
    .replace(".mdx", "")

  // category1, title1
  const [category, slug] = filePath.split("/")

  // /blog/category1/title1
  const url = `/blog/${category}/${slug}`

  return { url, category, slug }
}

// MDX Detail
const parsePostDetail = async (postPath: string) => {
  const file = fs.readFileSync(postPath, "utf8")
  const { data, content } = matter(file)
  const grayMatter = data as IPostMatter
  const readingMinutes = Math.ceil(readingTime(content).minutes)
  const dateString = dayjs(grayMatter.date).locale("ko").format("YYYY년 MM월 DD일")
  return { ...grayMatter, dateString, content, readingMinutes }
}

// 모든 MDX 파일 조회
export const getPostPaths = (category?: string) => {
  const folder = category || "**"
  const paths: string[] = sync(`${POSTS_PATH}/${folder}/**/*.mdx`)

  // 경로를 슬래시로 변환
  const normalizedPaths = paths.map((path) => path.replace(/\\/g, "/"))
  return normalizedPaths
}

// 모든 포스트 목록 조회
export const getPostList = async (category?: string): Promise<IPost[]> => {
  const paths: string[] = getPostPaths(category)
  const posts = await Promise.all(paths.map((postPath) => parsePost(postPath)))
  return posts
}

// 포스트 상세 조회
export const getPostDetail = async (category: string, slug: string): Promise<IPost | null> => {
  // 특정 포스트 경로 찾기
  const paths: string[] = getPostPaths(category)

  // 해당 카테고리와 슬러그에 맞는 포스트 경로 찾기
  const postPath = paths.find((path) => path.includes(`/${category}/${slug}`))

  if (!postPath) return null

  // 포스트 파싱
  const post = await parsePost(postPath)
  return post
}
