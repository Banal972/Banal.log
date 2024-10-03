import Link from "next/link"

import { ReactNode } from "react"

const PrevBtn = ({ link, children }: PrevBtnState) => {
  return (
    <Link
      href={link}
      className="rounded-lg bg-green-200 px-3 py-1 font-bold text-black transition-colors hover:bg-green-300"
    >
      {children}
    </Link>
  )
}

export default PrevBtn

type PrevBtnState = { link: string; children: ReactNode }
