import Image from "next/image"
import Link from "next/link"

import { IoOpenOutline } from "react-icons/io5"

import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const SlideTodo = () => {
  return (
    <>
      <Swiper
        slidesPerView={1.5}
        centeredSlides
        spaceBetween={15}
        loop
        autoplay={{ delay: 3000 }}
        modules={[Autoplay]}
        breakpoints={{
          821: {
            slidesPerView: 3,
            centeredSlides: false,
            spaceBetween: 30,
          },
        }}
      >
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

      <div className="mt-2 flex items-center gap-3">
        <Link href="https://github.com/Banal972/todoapp" target="_blank">
          <div className="flex items-center gap-2 rounded-md border px-3 py-1 font-bold transition-colors hover:bg-black hover:text-white">
            <IoOpenOutline /> Github
          </div>
        </Link>
        <Link
          href="https://drive.google.com/file/d/1MxiEP_s4-YkMzo78PCywU5rIx1rHkIsT/view?usp=sharing"
          target="_blank"
        >
          <div className="flex items-center gap-2 rounded-md border px-3 py-1 font-bold transition-colors hover:bg-black hover:text-white">
            <IoOpenOutline /> DOWNLOAD
          </div>
        </Link>
      </div>

      <div className="prose prose-sm max-w-none px-3 py-10 md:prose-base md:px-5">
        <h4>Tech Stack</h4>
        <ul>
          <li>Expo, React-Native, React-query, Zustand, Nativewind(TailWindCSS)</li>
        </ul>

        <h4>주요 기능</h4>
        <ul>
          <li>....</li>
        </ul>

        <h4>Role</h4>
        <div className="rounded bg-gray-200 p-2 px-4">모든 클라이언트 페이지 개발</div>
      </div>
    </>
  )
}

export default SlideTodo
