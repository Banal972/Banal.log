import Image from "next/image"
import Link from "next/link"

import { useEffect, useRef, useState } from "react"
import { IoOpenOutline } from "react-icons/io5"

import { Autoplay, Pagination } from "swiper/modules"
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react"

const SlideTodo = () => {
  const { swiperSetting, dotRef } = useSwiperOptions()

  return (
    <>
      {swiperSetting && (
        <Swiper {...swiperSetting}>
          <SwiperSlide>
            <Image
              src={"/asset/about/SlideTodo/slidetodo_img01.png"}
              alt="메인"
              width={0}
              height={0}
              className="h-auto w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={"/asset/about/SlideTodo/slidetodo_img02.png"}
              alt="회원가입"
              width={0}
              height={0}
              className="h-auto w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={"/asset/about/SlideTodo/slidetodo_img03.png"}
              alt="대시보드"
              width={0}
              height={0}
              className="h-auto w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={"/asset/about/SlideTodo/slidetodo_img04.png"}
              alt="메뉴"
              width={0}
              height={0}
              className="h-auto w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={"/asset/about/SlideTodo/slidetodo_img05.png"}
              alt="목표"
              width={0}
              height={0}
              className="h-auto w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={"/asset/about/SlideTodo/slidetodo_img06.png"}
              alt="노트"
              width={0}
              height={0}
              className="h-auto w-full"
            />
          </SwiperSlide>
        </Swiper>
      )}

      <ul ref={dotRef} className="mt-3 flex justify-center" />

      <div className="mt-2 flex items-center gap-3">
        <Link href="https://github.com/Banal972/todoapp" target="_blank">
          <div className="flex items-center gap-2 rounded-md border px-3 py-1 font-bold transition-colors hover:bg-black hover:text-white">
            <IoOpenOutline /> Github
          </div>
        </Link>
        <Link
          href="https://github.com/Banal972/SlideTodo/releases/tag/v1.0.0"
          target="_blank"
        >
          <div className="flex items-center gap-2 rounded-md border px-3 py-1 font-bold transition-colors hover:bg-black hover:text-white">
            <IoOpenOutline /> DOWNLOAD
          </div>
        </Link>
      </div>

      <div className="prose prose-sm max-w-none px-3 py-10 md:prose-base prose-a:text-blue-500 prose-a:underline-offset-8 md:px-5">
        <h4>Tech Stack</h4>
        <ul>
          <li>Expo, React-Native, TanStack-Query, Zustand, Nativewind(TailWindCSS)</li>
        </ul>

        <h4>주요 기능</h4>
        <ul>
          <li>목표를 생성하고 해당 목표에 대한 할일을 등록합니다.</li>
          <li>할일을 완수하면 완수한 %를 그래프로 표시 합니다.</li>
          <li>할일에 대한 노트를 작성할 수 있습니다.</li>
          <li>할일, 완수한 할일, 목표별 할일 등 선택적으로 확인이 가능합니다.</li>
        </ul>

        <h4>Role</h4>
        <div className="rounded bg-gray-200 p-2 px-4">모든 클라이언트 페이지 개발</div>

        <h4>신경쓴 점</h4>
        <ul>
          <li>Zustand를 이용해 모달창을 한번에 관리 하여 props drolling을 최소화</li>
          <li>Expo를 사용하여 파일기반으로 라우팅을 작성하여 컴포넌트를 최소화</li>
          <li>Drawer를 이용하여 메뉴 레이아웃을 개선</li>
          <li>TanStack-Query를 이용하여 캐시 관리</li>
          <li>expo-build-properties를 이용하여 빌드 용량 최소화</li>
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
      </div>
    </>
  )
}

export default SlideTodo

const useSwiperOptions = () => {
  const dotRef = useRef<HTMLUListElement>(null)
  const [swiperSetting, setSwiperSetting] = useState<SwiperProps | null>(null)

  useEffect(() => {
    if (!swiperSetting) {
      setSwiperSetting({
        slidesPerView: 1.5,
        centeredSlides: true,
        spaceBetween: 15,
        pagination: {
          el: dotRef.current,
          clickable: true,
          renderBullet: (_, className: string) => {
            return `<li class="${className}"/>`
          },
        },
        autoplay: {
          delay: 4500,
        },
        modules: [Autoplay, Pagination],
        speed: 600,
        loop: true,
        breakpoints: {
          821: {
            slidesPerView: 3,
            centeredSlides: false,
            spaceBetween: 30,
          },
        },
      })
    }
  }, [swiperSetting])
  return { swiperSetting, dotRef }
}
