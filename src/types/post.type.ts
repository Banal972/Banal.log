export interface IPostMatter {
  title: string
  date: Date
  desc: string
  tags: string[]
  thumbnail: string
  dateString: string
  content: string
  readingMinutes: number
}

export interface IPost extends IPostMatter {
  url: string
  category: string
  slug: string
}
