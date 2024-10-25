export const MAINCATEGORYS = [
  {
    href: "/category/blog",
    category: "블로그",
    label: "지나온 일들을 회고",
  },
  {
    href: "/category/discover",
    category: "TIL",
    label: "새로운 지식을 정리",
  },
  {
    href: "/category/question",
    category: "코딩 테스트",
    label: "코딩 테스트 풀이과정",
  },
]

interface ICATEGORYS {
  title: string
  subItems: ISUBITEMS[]
}

export interface ISUBITEMS {
  title: string
  link: string
}

export const CATEGORYS: {
  [key: string]: ICATEGORYS
} = {
  blog: {
    title: "블로그",
    subItems: [],
  },
  discover: {
    title: "TIL",
    subItems: [
      { title: "React", link: "react" },
      { title: "NextJS", link: "nextjs" },
      { title: "React Native", link: "native" },
      { title: "다자인 패턴", link: "design-pattren" },
      { title: "함수형 프로그래밍", link: "functional-programming" },
      { title: "ETC", link: "etc" },
    ],
  },
  question: {
    title: "코딩 테스트",
    subItems: [
      { title: "백준", link: "backjoon" },
      { title: "프로그래머스", link: "programmers" },
    ],
  },
}
