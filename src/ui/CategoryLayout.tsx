import Link from "next/link"
import { useRouter } from "next/router"

import { ReactNode, useEffect, useState } from "react"
import { IoCloseSharp, IoMenuSharp } from "react-icons/io5"

import { CATEGORYS, ISUBITEMS } from "@/constant/category"
import Footer from "@/ui/Footer"

const CategoryLayout = ({ children }: { children: ReactNode }) => {
  const {
    query: { slugs },
  } = useRouter()

  const [categorys, setCategorys] = useState<ISUBITEMS[]>([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!slugs) return
    const category = slugs[0]
    setCategorys(CATEGORYS[category].subItems)
    setIsOpen(false)
  }, [slugs])

  return (
    <div className="relative flex">
      <div
        className={`absolute left-0 top-0 z-20 min-h-screen w-44 transition-transform ${isOpen ? "-translate-x-0" : "-translate-x-full"} border-r bg-white px-3 py-5 md:relative md:translate-x-0`}
      >
        <div className="flex justify-between">
          <Link
            href={`/category/${slugs && slugs[0]}`}
            className={`block ${slugs && !slugs[1] && "text-green-400"}`}
          >
            All
          </Link>
          <button className="block text-xl md:hidden" onClick={() => setIsOpen(false)}>
            <IoCloseSharp />
          </button>
        </div>

        <ul className="ml-2 mt-5">
          {categorys.map((category) => (
            <li
              key={category.link}
              className={`mt-2 flex items-center gap-2 overflow-hidden border-t pt-2 text-sm first:mt-0 first:border-t-0 first:pt-0 ${slugs && slugs[1] === category.link && "text-green-400"}`}
            >
              <Link
                href={`/category/${slugs && slugs[0]}/${category.link}`}
                className="line-clamp-1 block w-full text-ellipsis text-nowrap"
              >
                {category.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="box-border flex-1 px-3 py-5 pb-20 md:px-5 md:py-5">
        <div className="block text-xl md:hidden">
          <button type="button" onClick={() => setIsOpen(true)}>
            <IoMenuSharp />
          </button>
        </div>
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default CategoryLayout
