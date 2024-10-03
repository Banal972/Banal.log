import { ReactNode } from "react"

export const Title = ({ children }: TitleState) => {
  return <h1 className="text-lg font-semibold">{children}</h1>
}

type TitleState = { children: ReactNode }
