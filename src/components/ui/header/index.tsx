import Link from "next/link"
import { usePathname } from "next/navigation"

import { useEffect, useState } from "react"

import { ROUTES } from "@/constant/route"
import { motion } from "motion/react"

const Header = () => {
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState(ROUTES[0].name)

  useEffect(() => {
    const findRouter = ROUTES.find((route) => route.href === pathname)
    if (findRouter) {
      setActiveTab(findRouter.name)
    }
  }, [pathname])

  return (
    <header className="font-poppins absolute left-1/2 top-0 mt-9 -translate-x-1/2 text-base">
      <div className="relative z-10 flex items-center justify-center gap-3 text-lg font-bold text-[#78b7ce]">
        {ROUTES.map((item) => (
          <Link
            key={item.name}
            onClick={() => setActiveTab(item.name)}
            href={item.href}
            className={"relative z-10 px-5 py-1"}
          >
            {activeTab === item.name && (
              <motion.div
                initial={false}
                layoutId="bubble"
                className="absolute inset-0 -z-10 rounded-full bg-white/5"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {item.name}
          </Link>
        ))}
        <button type="button" className={`px-5 py-1`}>
          CONTACT
        </button>
      </div>
    </header>
  )
}

export default Header
