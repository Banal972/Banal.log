import Image from "next/image"
import Link from "next/link"

import { IoOpenOutline } from "react-icons/io5"

import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

export const Dallem = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop
        autoplay={{ delay: 3000 }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <Image
            src="/asset/about/Dallem/240905-081057.png"
            width={0}
            height={0}
            className="h-auto w-full"
            alt="메인"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/asset/about/Dallem/240905-081338.png"
            width={0}
            height={0}
            className="h-auto w-full"
            alt="모든 리뷰"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/asset/about/Dallem/240905-081524.png"
            width={0}
            height={0}
            className="h-auto w-full"
            alt="찜 목록"
          />
        </SwiperSlide>
      </Swiper>

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

      <div className="prose prose-sm max-w-none px-3 py-10 md:prose-base prose-a:text-blue-500 prose-a:underline-offset-8 md:px-5">
        <h4>Tech Stack</h4>
        <ul>
          <li>Next.js(App), TanStack Query, TypeScript, React, Tailwind CSS</li>
        </ul>

        <h4>주요 기능</h4>
        <ul>
          <li>모임을 등록하고 사용자가 원하는 모임에 참여</li>
          <li>모임이 예약이 가능한 날짜 및 시간 등록</li>
          <li>해당 모임을 찜할 수 있으며 언제든지 확인 가능</li>
          <li>해당 모임에 대한 리뷰를 스코어로 남겨 통합 점수를 알 수 있음</li>
        </ul>

        <h4>Role</h4>
        <div className="rounded bg-gray-200 p-2 px-4">
          찜한 목록 페이지 개발,모든 리뷰 페이지 개발,Toast UI 개발,메인 페이지 개발
        </div>

        <h4>메인 페이지 UI 개선</h4>
        <ul>
          <li>
            기존 디자인이 사용자 경험이 떨어지는것 같아 디자인을 하여 UI를 개선
            <div className="shadow-lg">
              <Image
                src={"/asset/about/Dallem/group.png"}
                alt="UI 개선"
                width={0}
                height={0}
                className="!mt-0 h-auto w-full"
              />
            </div>
          </li>
          <li>
            최근에 등록된 모임과 리뷰등을 화면에 보여줘 별도의 검색없이 최신 모임을 손쉽게 확인
          </li>
        </ul>

        <h4>검색 엔진 최적화</h4>
        <ul>
          <li>Next.js의 APP router를 활용해 SSR기반으로 작성하여 검색엔진 최적화</li>
          <li>CSR환경에서도 meta tag를 동적으로 생성</li>
        </ul>

        <h4>효율적인 리뷰 점수 시스템 개발</h4>
        <ul>
          <li>함수형 프로그래밍 기법을 통해 가독성과 유지보수성을 높임</li>
          <li>클린 코드 기반으로 가독성 높고 유지보수가 쉬운 클린 코드 작성</li>
        </ul>

        <h4>타입스크립트 분리</h4>
        <ul>
          <li>같은 동작을 하는 타입이 여러 번 중복 선언될 필요 없어 중복 타입 최소화</li>
          <li>
            <Link href={"/post/typescript-utils"} target="_blank">
              타입스크립트의 유틸리티를 활용하여 중복을 제거
            </Link>
          </li>
          <li>가독성 향상 과 개발 효율 및 실수 방지</li>
        </ul>

        <h4>사용자 경험 개선</h4>
        <ul>
          <li>Toast UI를 통한 사용자 경험 개선</li>
          <li>Sekelton UI를 통한 사용자 경험 개선</li>
        </ul>
      </div>
    </>
  )
}
