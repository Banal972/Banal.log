import Link from "next/link"

import { ReactNode } from "react"

const PrevBtn = ({ link, children }: { link: string; children: ReactNode }) => {
  return (
    <Link
      href={link}
      className="rounded-lg bg-[#d7d780] px-2 py-[2px] font-bold text-black transition-colors hover:bg-[#a3a362]"
    >
      {children}
    </Link>
  )
}

export default PrevBtn
