import Link from "next/link"

import Skill from "@/components/page/about/Skill"

const SlideTodo = () => {
  return (
    <>
      <div className="flex items-center gap-3">
        <Link href={"/"}>링크1</Link>
        <Link href={"/"}>링크2</Link>
      </div>

      <div className="mt-8">
        <h4 className="text-xl font-bold">프로젝트 설명</h4>
        <p className="mt-3">
          사용자가 스마트 기기로 목표, 할일과, 노트를 작성하고 할일에 대한 %를 알려주는 어플리케이션
          입니다.
        </p>
      </div>

      <div className="mt-8">
        <h4 className="text-xl font-bold">프로젝트 설명</h4>
        <div className="mt-3 flex flex-wrap gap-3">
          <Skill>TypeScript</Skill>
          <Skill>React-Native</Skill>
          <Skill>Zustand</Skill>
        </div>
      </div>

      <div className="mt-8">
        <h4 className="text-xl font-bold">작업한 것</h4>
        <p className="mt-3">작성중</p>
      </div>
    </>
  )
}

export default SlideTodo
