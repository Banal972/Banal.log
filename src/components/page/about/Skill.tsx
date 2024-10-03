import { ReactNode } from "react"

const Skill = ({ children }: SkillState) => {
  return <div className="rounded-md bg-gray-600 px-2 text-white">{children}</div>
}

export default Skill

type SkillState = { children: ReactNode }
