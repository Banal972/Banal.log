import Link from "next/link"

import Skill from "@/components/page/about/Skill"

export const Dallem = () => {
  return (
    <>
      <div className="flex items-center gap-3">
        <Link href={"/"}>링크1</Link>
        <Link href={"/"}>링크2</Link>
      </div>

      <div className="mt-5">
        <h4 className="text-xl font-bold">프로젝트 설명</h4>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <Skill>Javascript</Skill>
        <Skill>Javascript</Skill>
        <Skill>Javascript</Skill>
        <Skill>Javascript</Skill>
        <Skill>Javascript</Skill>
        <Skill>Javascript</Skill>
      </div>

      <div className="mt-5">
        <h4 className="text-xl font-bold">작업한 것</h4>
      </div>
    </>
  )
}
