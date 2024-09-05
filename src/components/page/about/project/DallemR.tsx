import Image from "next/image"
import Link from "next/link"

import { IoOpenOutline } from "react-icons/io5"

const DallemR = () => {
  return (
    <>
      <div className="grid grid-cols-2">
        <Image
          src="/asset/about/DallemR/240905-082620.png"
          width={0}
          height={0}
          className="h-auto w-full"
          alt="로그인"
        />
        <Image
          src="/asset/about/Dallem/240905-081057.png"
          width={0}
          height={0}
          className="h-auto w-full"
          alt="메인"
        />
        <Image
          src="/asset/about/Dallem/240905-081338.png"
          width={0}
          height={0}
          className="h-auto w-full"
          alt="모든 리뷰"
        />
        <Image
          src="/asset/about/Dallem/240905-081524.png"
          width={0}
          height={0}
          className="h-auto w-full"
          alt="찜 목록"
        />
      </div>
      <div className="mt-5 flex items-center gap-3">
        <Link href="https://dallaem-refactoring-z35o.vercel.app/" target="_blank">
          <div className="flex items-center gap-2 rounded-md border px-3 py-1 font-bold transition-colors hover:bg-black hover:text-white">
            <IoOpenOutline /> Homepage
          </div>
        </Link>
        <Link href="https://github.com/Banal972/dallaem_refactoring" target="_blank">
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
        <div className="rounded bg-gray-200 p-2 px-4">
          기존 로그인 로직 변경, 클린 코드 위주로 작성, hooks 디자인 패턴 위주로 작성
        </div>

        <h3>기존 로그인 로직 변경</h3>
        <ul>
          <li>기존에 작성되어 있던 로그인 로직 관련이 4~5 파일로 분리되어 있는걸 1~2개로 개선</li>
          <li>Next-auth.js를 도입하여 RSC 와 RCC 구별</li>
          <li>기존 로그인 페이지를 과감하게 없애고 모달창으로 변경하여 페이지 이동을 감소화</li>
        </ul>

        <h3>가독성 향상</h3>
        <pre>
          if (!data || (data && data[0]?.length === 0)) <br />
          =&gt; <br />
          const isEmptyData = !data || (data && data[0]?.length === 0) if (isEmptyData)
        </pre>

        <h3>커스텀 훅</h3>
        <li>
          길어지는 useState를 커스텀 훅으로 만들어 로직을 재사용하거나 분리하는거에 중점을 맞춤
        </li>
        <li>코드의 간소화</li>
        <li>가독성 향상</li>
      </div>
    </>
  )
}

export default DallemR
