const CATEGORYS = [
  {
    title: "블로그",
    link: "/category/blog",
    subItems: [
      { title: "단기심화 스프린트", link: "sprint" },
      { title: "멘토링", link: "mento" },
    ],
  },
  {
    title: "코딩 테스트",
    link: "/category/cote",
    subItems: [
      { title: "백준", link: "backjoon" },
      { title: "프로그래머스", link: "programmers" },
    ],
  },
  {
    title: "코드 모음",
    link: "/category/code",
    subItems: [
      { title: "React", link: "react" },
      { title: "NextJS", link: "nextjs" },
      { title: "React Native", link: "native" },
    ],
  },
  {
    title: "프로젝트",
    link: "/category/project",
    subItems: [
      { title: "같이달램", link: "dallem" },
      { title: "구구모", link: "gogomu" },
      { title: "슬라이드투두", link: "todo" },
    ],
  },
]

const MAINCATEGORYS = [
  {
    href: "/blog",
    category: "블로그",
    label: "지나온 일들을 회고한곳",
  },
  {
    href: "/discover",
    category: "TIL",
    label: "새로운 지식을 얻고 정리한곳",
  },
  {
    href: "/question",
    category: "코딩 테스트",
    label: "코딩 테스트 풀이과정을 정리한곳",
  },
]

export { MAINCATEGORYS, CATEGORYS }
