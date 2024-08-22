import Link from "next/link"

const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-50 flex h-[50px] w-full items-center border-b bg-white">
      <div className="mx-auto flex w-full max-w-[1500px] items-center justify-center px-6">
        <Link href={"/"} className="absolute left-6 font-bold">
          BANAL.LOG
        </Link>
      </div>
    </header>
  )
}

export default Header
