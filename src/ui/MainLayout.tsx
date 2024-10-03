import { ReactNode } from "react"

const MainLayout = ({ children }: { children: ReactNode }) => {
  return <div className="mx-auto max-w-2xl px-3 py-10 md:px-5 md:py-20">{children}</div>
}

export default MainLayout
