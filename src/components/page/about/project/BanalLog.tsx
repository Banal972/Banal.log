import Image from "next/image"
import Link from "next/link"

import { IoOpenOutline } from "react-icons/io5"

import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const BanalLog = () => {
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
            src="/asset/about/BanalLog/240905-081822.png"
            width={0}
            height={0}
            className="h-auto w-full"
            alt="메인"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/asset/about/BanalLog/240905-081834.png"
            width={0}
            height={0}
            className="h-auto w-full"
            alt="리스트"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/asset/about/BanalLog/240905-081846.png"
            width={0}
            height={0}
            className="h-auto w-full"
            alt="글"
          />
        </SwiperSlide>
      </Swiper>

      <div className="mt-5 flex items-center gap-3">
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

      <div className="prose prose-sm max-w-none px-3 py-10 md:prose-base md:px-5">
        <h4>Tech Stack</h4>
        <ul>
          <li>Next.js(Pages), TypeScript, React</li>
        </ul>

        <h4>스터디</h4>
        <ul>
          <li>기술 학습을 위해 Next.js Page route로 작업</li>
          <li>useSpring을 이용한 애니메이션</li>
          <li>마크다운 커스터마이징</li>
        </ul>
      </div>
    </>
  )
}

export default BanalLog
