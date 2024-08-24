import { ReactNode } from "react"

const Container = ({
  children,
  className,
  onClick,
}: {
  children: ReactNode
  className?: string
  onClick?: () => void
}) => {
  return (
    <div onClick={onClick} className={`rounded-lg border bg-white px-5 py-7 ${className}`}>
      {children}
    </div>
  )
}

export default Container
