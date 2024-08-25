import Link from "next/link"

import Skill from "@/components/page/about/Skill"

const Gugumo = () => {
  return (
    <>
      <div className="flex items-center gap-3">
        <Link href={"/"}>링크1</Link>
        <Link href={"/"}>링크2</Link>
      </div>

      <div className="mt-8">
        <h4 className="text-xl font-bold">프로젝트 설명</h4>
        <p className="mt-3">동네 구기종목 매칭 서비스 구구모 입니다.</p>
      </div>

      <div className="mt-8">
        <h4 className="text-xl font-bold">프로젝트 설명</h4>
        <div className="mt-3 flex flex-wrap gap-3">
          <Skill>Next.js(App)</Skill>
          <Skill>TypeScript</Skill>
          <Skill>React</Skill>
          <Skill>React-query</Skill>
        </div>
      </div>

      <div className="mt-8">
        <h4 className="text-xl font-bold">작업한 것</h4>
        <p className="mt-3">작성중</p>
      </div>
    </>
  )
}

export default Gugumo
