import Link from "next/link"

import { IoOpenOutline } from "react-icons/io5"

import Skill from "@/components/page/about/Skill"

export const Dallem = () => {
  return (
    <>
      <div className="mt-2 flex items-center gap-3">
        <Link href="https://dallaem-publish.vercel.app/" target="_blank">
          <div className="flex items-center gap-2 rounded-md border px-3 py-1 font-bold transition-colors hover:bg-black hover:text-white">
            <IoOpenOutline /> Homepage
          </div>
        </Link>
        <Link href="https://github.com/sprint-team5/dallaem" target="_blank">
          <div className="flex items-center gap-2 rounded-md border px-3 py-1 font-bold transition-colors hover:bg-black hover:text-white">
            <IoOpenOutline /> Github
          </div>
        </Link>
      </div>

      <div className="mt-8">
        <h4 className="text-lg font-bold">프로젝트 설명</h4>
        <p className="mt-3">
          유저가 바쁜 일상 속 휴식을 위한 다양한 모임을 탐색하고 참여하며, 직접 모임을 개설하고
          리뷰를 생성할 수 있는 서비스입니다.
        </p>
      </div>

      <div className="mt-8">
        <h4 className="text-lg font-bold">스킬</h4>
        <div className="mt-3 flex flex-wrap gap-3">
          <Skill>Next.js(App)</Skill>
          <Skill>TypeScript</Skill>
          <Skill>React</Skill>
          <Skill>React-query</Skill>
        </div>
      </div>

      <div className="mt-8">
        <h4 className="text-lg font-bold">작업한 것</h4>
        <p className="mt-3">작성중</p>
      </div>
    </>
  )
}
