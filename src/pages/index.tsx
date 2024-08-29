import Link from "next/link"

import { IoLogoGithub, IoMail } from "react-icons/io5"

import { MAINCATEGORYS } from "@/constant/category"
import useFadeIn from "@/hooks/animation/useFadeIn"
import { animated, useChain, useSpringRef, useTrail } from "@react-spring/web"

const IndexPage = () => {
  const { ref: fadeRef, props: fadeProps1 } = useFadeIn()
  const { ref: fadeRef2, props: fadeProps2 } = useFadeIn("left")
  const { ref: fadeRef3, props: fadeProps3 } = useFadeIn("left")

  const trailsRef = useSpringRef()
  const trails = useTrail(MAINCATEGORYS.length, {
    ref: trailsRef,
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
  })

  useChain([fadeRef, fadeRef2, fadeRef3, trailsRef], [0, 0.2, 0.2, 0.3])

  return (
    <main>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold">Banal.log</h1>
        <div className="flex gap-2">
          <Link href="https://github.com/Banal972" target="_blank">
            <IoLogoGithub />
          </Link>
          <Link href="mailto:spbabo97@naver.com" target="_blank">
            <IoMail />
          </Link>
        </div>
      </div>
      <animated.p style={fadeProps1} className="mt-5 text-sm">
        사용자가 불편함이 없이 상호작용 하고, 복잡한것을 단순화 하는것을 좋아하며
        <br />
        다양한 직군과 소통, 피드백을 받는 것에 재미를 느끼고 틈틈이 기록합니다.
      </animated.p>

      <animated.div style={fadeProps2} className="mt-20 flex gap-5">
        <Link href="/about" className="font-bold">
          About
        </Link>
      </animated.div>
      <div className="mt-6 flex gap-5 border-t pt-6">
        <animated.p style={fadeProps3} className="font-bold">
          Category
        </animated.p>
        <ul>
          {trails.map((style, i) => (
            <animated.li style={style} key={i} className="mt-3 first:mt-0">
              <Link href={MAINCATEGORYS[i].href} className="flex items-center gap-3">
                <span className="font-medium">{MAINCATEGORYS[i].category}</span>
                <p className="text-sm">{MAINCATEGORYS[i].label}</p>
              </Link>
            </animated.li>
          ))}
        </ul>
      </div>
    </main>
  )
}

export default IndexPage
