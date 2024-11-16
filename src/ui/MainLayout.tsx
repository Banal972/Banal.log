import { ReactNode } from "react"

import Footer from "@/components/ui/Footer"

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-auto max-w-2xl px-3 py-10 md:px-5 md:py-20">
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout
