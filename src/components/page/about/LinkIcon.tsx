import Link from "next/link"

import { HTMLAttributeAnchorTarget, ReactNode } from "react"

const LinkIcon = ({ href, target, children }: LinkIconState) => {
  return (
    <Link href={href} target={target}>
      <div className="flex size-7 items-center justify-center rounded-md border bg-white">
        {children}
      </div>
    </Link>
  )
}

export default LinkIcon

interface LinkIconState {
  href: string
  target?: HTMLAttributeAnchorTarget
  children: ReactNode
}
