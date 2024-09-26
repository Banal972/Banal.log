import { writeFileSync } from "fs"
import RSS from "rss"

import { getAllPosts } from "../src/libs/posts"

const generateRssFeed = async () => {
  const feed = new RSS({
    title: "Banal.log",
    site_url: "https://banal972.github.io/",
    feed_url: "https://banal972.github.io/rss.xml",
    language: "ko-KR",
  })

  const allPosts = await getAllPosts()

  allPosts.forEach((post) => {
    feed.item({
      title: post.title,
      url: `https://banal972.github.io/${post.slug}`,
      date: post.date,
      description: post.content.substring(0, 200),
    })
  })

  // RSS 피드를 XML 파일로 저장
  const xml = feed.xml()
  writeFileSync("out/rss.xml", xml) // 현재 디렉토리에 rss.xml 파일로 저장
  console.log("RSS feed has been generated and saved to rss.xml")
}

// 실행
generateRssFeed().catch((error) => {
  console.error("Error generating RSS feed:", error)
})
