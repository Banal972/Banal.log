import Link from "next/link"

import { IoOpenOutline } from "react-icons/io5"

import Skill from "@/components/page/about/Skill"

const BanalLog = () => {
  return (
    <>
      <div className="mt-2 flex items-center gap-3">
        <Link href="https://banal972.github.io/" target="_blank">
          <div className="flex items-center gap-2 rounded-md border px-3 py-1 font-bold transition-colors hover:bg-black hover:text-white">
            <IoOpenOutline /> Homepage
          </div>
        </Link>
        <Link href="https://github.com/Banal972/Banal.log" target="_blank">
          <div className="flex items-center gap-2 rounded-md border px-3 py-1 font-bold transition-colors hover:bg-black hover:text-white">
            <IoOpenOutline /> Github
          </div>
        </Link>
      </div>

      <div className="mt-8">
        <h4 className="text-lg font-bold">프로젝트 설명</h4>
        <p className="mt-3">심플하게 만들어 노트처럼 작성한 프론트엔드 개발자의 회고록 Banal.log</p>
      </div>

      <div className="mt-8">
        <h4 className="text-lg font-bold">스킬</h4>
        <div className="mt-3 flex flex-wrap gap-3">
          <Skill>Next.js(Pages)</Skill>
          <Skill>TypeScript</Skill>
          <Skill>React</Skill>
        </div>
      </div>

      <div className="mt-8">
        <h4 className="text-lg font-bold">작업한 것</h4>
        <p className="mt-3">작성중</p>
      </div>
    </>
  )
}

export default BanalLog
