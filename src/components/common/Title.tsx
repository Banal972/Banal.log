import { ReactNode } from "react"

export const Title = ({ children }: { children: ReactNode }) => {
  return <h1 className="text-lg font-semibold">{children}</h1>
}
