import Link from "next/link"

const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex h-[50px] items-center border-b bg-white">
      <div className="mx-auto flex w-full max-w-[1500px] items-center justify-between">
        <Link href={"/"}>로고</Link>
        <nav className="flex gap-2">
          <Link href={"/"}>1</Link>
          <Link href={"/"}>2</Link>
          <Link href={"/"}>3</Link>
          <Link href={"/"}>4</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
