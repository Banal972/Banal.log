import { useEffect, useRef, useState } from "react"

import { Autoplay, Pagination } from "swiper/modules"
import { SwiperProps } from "swiper/react"

const useSwiperOptions = () => {
  const dotRef = useRef<HTMLUListElement>(null)
  const [swiperSetting, setSwiperSetting] = useState<SwiperProps | null>(null)

  useEffect(() => {
    if (!swiperSetting) {
      setSwiperSetting({
        slidesPerView: 1,
        spaceBetween: 30,
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
      })
    }
  }, [swiperSetting])
  return { swiperSetting, dotRef }
}

export default useSwiperOptions
