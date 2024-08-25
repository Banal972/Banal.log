import Link from "next/link"

import { IoLogoGithub, IoMail } from "react-icons/io5"

const IndexPage = () => {
  return (
    <main>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Banal.log</h1>
        <div className="flex gap-2">
          <Link href="https://github.com/Banal972" target="_blank">
            <IoLogoGithub />
          </Link>
          <Link href="mailto:spbabo97@naver.com" target="_blank">
            <IoMail />
          </Link>
        </div>
      </div>
      <p className="mt-5">
        사용자가 불편함이 없이 상호작용 하고, 복잡한것을 단순화 하는것을 좋아하며
        <br />
        다양한 직군과 소통, 피드백을 받는 것에 재미를 느끼고 틈틈이 기록합니다.
      </p>

      <div className="mt-10 flex gap-5">
        <Link href="/about" className="font-bold">
          About
        </Link>
      </div>
      <div className="mt-5 flex gap-5 border-t pt-5">
        <p className="font-bold">Category</p>
        <ul>
          <li className="flex">
            <Link href="/blog" className="flex items-center gap-3">
              <span className="font-medium">블로그</span>
              <p className="text-sm">지나온 일들을 회고한곳</p>
            </Link>
          </li>
          <li className="mt-1">
            <Link href="/discover" className="flex items-center gap-3">
              <span className="font-medium">지식창고</span>
              <p className="text-sm">새로운 지식을 얻고 정리한곳</p>
            </Link>
          </li>
          <li className="mt-1">
            <Link href="/question" className="flex items-center gap-3">
              <span className="font-medium">코딩 테스트</span>
              <p className="text-sm">코딩 테스트 풀이과정을 정리한곳</p>
            </Link>
          </li>
        </ul>
      </div>
    </main>
  )
}

export default IndexPage
