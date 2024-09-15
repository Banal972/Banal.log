import { ReactNode } from "react"

const Skill = ({ children }: { children: ReactNode }) => {
  return <div className="rounded-md bg-gray-600 px-2 text-white">{children}</div>
}

export default Skill
