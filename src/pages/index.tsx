import Link from "next/link"

import { FaGithub } from "react-icons/fa"

const IndexPage = () => {
  return (
    <main>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Banal.log</h1>
        <a href="https://github.com/Banal972" target="_blank">
          <FaGithub />
        </a>
      </div>
      <p className="mt-5">
        사용자가 불편함이 없이 상호작용 하고, 복잡한것을 단순화 하는것을 좋아하며
        <br />
        다양한 직군과 소통, 피드백을 받는 것에 재미를 느끼고 틈틈이 기록합니다.
      </p>

      <div className="mt-5">SNS를 한다면 들어가는 공간</div>

      <div className="mt-10 flex gap-5">
        <p>카테고리</p>
        <ul>
          <li className="flex">
            <Link href="" className="flex items-center gap-3">
              블로그
              <p className="text-sm">인사이트를 보관하는 공간</p>
            </Link>
          </li>
          <li className="mt-1">
            <Link href="" className="flex items-center gap-3">
              지식
              <p className="text-sm">유용한 지식을 기록하는 공간</p>
            </Link>
          </li>
          <li className="mt-1">
            <Link href="" className="flex items-center gap-3">
              지식
              <p className="text-sm">무언가 흥미로운 것을 만드는 공간</p>
            </Link>
          </li>
        </ul>
      </div>
    </main>
  )
}

export default IndexPage
