export type PostMatter = {
  title: string
  desc: string
  thumbnail: string
  tags: string[]
  categorys: string[]
  date: string
}

export type Post = PostMatter & {
  slug: string
  content: string
  readingMinutes: number
  wordCount: number
}
