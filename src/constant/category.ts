export const MAINCATEGORYS = [
  {
    href: "/category/blog",
    category: "블로그",
    label: "지나온 일들을 회고한곳",
  },
  {
    href: "/category/discover",
    category: "TIL",
    label: "새로운 지식을 얻고 정리한곳",
  },
  {
    href: "/category/question",
    category: "코딩 테스트",
    label: "코딩 테스트 풀이과정을 정리한곳",
  },
]

export const CATEGORYS: { [key: string]: any } = {
  blog: {
    title: "블로그",
    subItems: [],
  },
  discover: {
    title: "TIL",
    subItems: [
      { title: "함수형 프로그래밍", link: "functional-programming" },
      { title: "React", link: "react" },
      { title: "NextJS", link: "nextjs" },
      { title: "React Native", link: "native" },
      { title: "구구모", link: "gogomu" },
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
