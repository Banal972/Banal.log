import Link from "next/link"

const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex h-[50px] items-center border-b">
      <div className="mx-auto flex w-full max-w-[1500px] items-center justify-center px-6">
        <Link href={"/"} className="absolute left-6 font-bold">
          BANAL.LOG
        </Link>
      </div>
    </header>
  )
}

export default Header
