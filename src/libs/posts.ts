import { Post, PostMatter } from "@/types/post.type"
import dayjs from "dayjs"
import fs from "fs"
import { sync } from "glob"
// glob patterns을 이용해서 파일을 쉽게 찾음 /**/*.mdx 이런식
import matter from "gray-matter"
import path from "path"
import readingTime from "reading-time"

const BASE_PATH = `/posts`
const POSTS_PATH = path.posix.join(process.cwd().replace(/\\/g, "/"), BASE_PATH)
// posix을 사용한 이유는 플랫폼에 관계없이 항상 forward slash('/')를 사용하게 만들어줌
// replace(/\\/g, "/")는 \\이 형식의 경로를 / 로 수정

// 게시글 파싱
export const parsePost = (postPath: string) => {
  try {
    const file = fs.readFileSync(postPath, { encoding: "utf-8" }) // fs모듈을 이용해서 파일을 읽음

    const { content, data } = matter(file)
    //   gray-matter을 이용해서 ---- 기준으로 content와 data를 자름

    const grayMatter = data as PostMatter
    // 가져온 데이터에 타입 추가

    return {
      ...grayMatter,
      date: dayjs(grayMatter.date).format("YYYY-MM-DD"),
      content,
      slug: postPath
        .replace(BASE_PATH, "/post")
        .slice(postPath.indexOf(BASE_PATH))
        .replace(".mdx", ""),
      readingMinutes: Math.ceil(readingTime(content).minutes),
      wordCount: content.split(/\s+/gu).length, // 총 글자수
    }
  } catch (e) {
    console.error(e)
  }
}

// 모든 게시글 가져오기
export const getAllPosts = () => {
  const postPaths = sync(`${POSTS_PATH}/**/*.mdx`).map((path) => path.replace(/\\/g, "/"))

  return postPaths.reduce<Post[]>((ac, postPath) => {
    const post = parsePost(postPath)
    if (!post) return ac
    return [...ac, post]
  }, [])
}
