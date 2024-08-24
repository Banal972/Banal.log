import { Url } from "next/dist/shared/lib/router/router"
import Link from "next/link"

import { HTMLAttributeAnchorTarget, ReactNode } from "react"

const LinkIcon = ({
  href,
  target,
  children,
}: {
  href: Url
  target?: HTMLAttributeAnchorTarget
  children: ReactNode
}) => {
  return (
    <Link href={href} target={target}>
      <div className="flex size-7 items-center justify-center rounded-md border bg-white">
        {children}
      </div>
    </Link>
  )
}

export default LinkIcon
