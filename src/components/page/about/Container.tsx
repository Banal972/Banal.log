import { ReactNode } from "react"

const Container = ({ children, className, onClick }: ContainerState) => {
  return (
    <div onClick={onClick} className={`rounded-lg border bg-white px-5 py-7 ${className}`}>
      {children}
    </div>
  )
}

export default Container

interface ContainerState {
  children: ReactNode
  className?: string
  onClick?: () => void
}
