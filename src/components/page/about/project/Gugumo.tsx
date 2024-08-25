import Link from "next/link"

import { IoOpenOutline } from "react-icons/io5"

import Skill from "@/components/page/about/Skill"

const Gugumo = () => {
  return (
    <>
      <div className="mt-2 flex items-center gap-3">
        <Link href="https://gugumo.vercel.app/" target="_blank">
          <div className="flex items-center gap-2 rounded-md border px-3 py-1 font-bold transition-colors hover:bg-black hover:text-white">
            <IoOpenOutline /> Homepage
          </div>
        </Link>
        <Link href="https://github.com/gugumo-service/gugumo_frontend_new" target="_blank">
          <div className="flex items-center gap-2 rounded-md border px-3 py-1 font-bold transition-colors hover:bg-black hover:text-white">
            <IoOpenOutline /> Github
          </div>
        </Link>
      </div>

      <div className="mt-8">
        <h4 className="text-lg font-bold">프로젝트 설명</h4>
        <p className="mt-3">동네 구기종목 매칭 서비스 구구모 입니다.</p>
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

export default Gugumo
