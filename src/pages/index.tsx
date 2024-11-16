const IndexPage = () => {
  return (
    <main>
      <div className="text-center text-white">
        <h1 className="font-poppins pt-72 text-[82px] uppercase leading-snug -tracking-wider">
          welcome to Banal.log
          <p className="text-[62px]">Look around my world</p>
        </h1>
        <p className="mt-10 text-lg font-medium">
          저는 항상 사용자 중심 경험을 만드는데 열정을 불태웁니다
        </p>
      </div>

      <div className="mx-auto mt-32 grid w-full max-w-[1480px] grid-cols-2 gap-5">
        <div className="h-24 rounded-2xl bg-white"></div>
        <div className="h-24 rounded-2xl bg-white"></div>
        <div className="col-span-2 h-24 rounded-2xl bg-white"></div>
      </div>
    </main>
  )
}

export default IndexPage

{
  /* import Link from "next/link"

import { IoLogoGithub, IoMail } from "react-icons/io5"

import { MAINCATEGORYS } from "@/constant/category"
import useFadeIn from "@/hooks/animation/useFadeIn"
import MainLayout from "@/ui/MainLayout"

import { animated, useChain, useSpringRef, useTrail } from "@react-spring/web" */
  /* 
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
  */
  /* <MainLayout>
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
          사용자 경험, 프로젝트의 완성도, 시스템 효율성을 개선하기 위해 틈틈이 기록하고 있습니다.
        </animated.p>

        <div className="mt-6 flex flex-col gap-5 border-t pt-6 md:flex-row">
          <animated.p style={fadeProps3} className="font-bold">
            Category
          </animated.p>
          <ul>
            {trails.map((style, i) => (
              <animated.li style={style} key={i} className="group mt-3 first:mt-0">
                <Link href={MAINCATEGORYS[i].href} className="flex items-center gap-3">
                  <span className="text-nowrap font-medium">{MAINCATEGORYS[i].category}</span>
                  <p className="text-sm transition-colors group-hover:text-green-400">
                    {MAINCATEGORYS[i].label}
                  </p>
                </Link>
              </animated.li>
            ))}
          </ul>
        </div>
      </main>
    </MainLayout> */
}
