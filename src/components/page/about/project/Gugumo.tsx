import Image from "next/image"
import Link from "next/link"

import { IoOpenOutline } from "react-icons/io5"

const Gugumo = () => {
  return (
    <>
      <div className="grid grid-cols-2">
        <Image
          src={"/asset/about/Gugumo/240905-083943.png"}
          alt="인덱스"
          width={0}
          height={0}
          className="h-auto w-full"
        />
        <Image
          src={"/asset/about/Gugumo/240905-083952.png"}
          alt="로그인"
          width={0}
          height={0}
          className="h-auto w-full"
        />
        <Image
          src={"/asset/about/Gugumo/240905-084024.png"}
          alt="회원가입"
          width={0}
          height={0}
          className="h-auto w-full"
        />
      </div>

      <div className="mt-5 flex items-center gap-3">
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

      <div className="prose prose-sm max-w-none px-3 py-10 md:prose-base md:px-5">
        <h3>Tech Stack</h3>
        <ul>
          <li>Next.js(App), TanStack Query, TypeScript, React, Tailwind CSS, Next-Auth</li>
        </ul>

        <h3>Role</h3>
        <div className="rounded bg-gray-200 p-2 px-4">기획 및 클라이언트 페이지 개발</div>

        <h3>주요 기능</h3>
        <ul>
          <li>원하는 구기종목 모임을 생성해서 자유롭게 참여</li>
          <li>해당 목록에 대한 댓글을 작성해 작성자와 대화 가능</li>
          <li>댓글이 달릴 경우 push 알림</li>
          <li>회원가입시 관심 종목 선택시 반복적으로 해당 종목 관련 모임 추천</li>
          <li>비밀번호 찾기 시 변동된 패스워드가 메일로 발송</li>
        </ul>

        <h3>검색 엔진 최적화</h3>
        <ul>
          <li>Next.js의 APP router를 활용해 SSR기반으로 작성하여 검색엔진 최적화</li>
          <li>CSR환경에서도 meta tag를 동적으로 생성</li>
        </ul>
      </div>
    </>
  )
}

export default Gugumo
