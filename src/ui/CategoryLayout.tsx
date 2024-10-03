import Link from "next/link"
import { useRouter } from "next/router"

import { ReactNode } from "react"

import Footer from "@/ui/Footer"

const CategoryLayout = ({ children }: { children: ReactNode }) => {
  const {
    query: { slug },
  } = useRouter()

  console.log(slug)

  return (
    <div className="relative flex">
      <div className="absolute left-0 top-0 min-h-screen w-48 border-r bg-white px-3 py-5 md:relative">
        <ul className="text-lg">
          <li>
            <Link href={""} className="block">
              All
            </Link>
            <ul className="ml-3 text-base">
              <li>
                <Link href={""} className="block">
                  - 11111
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="box-border flex-1 px-3 py-10 md:px-5 md:py-20">
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default CategoryLayout
