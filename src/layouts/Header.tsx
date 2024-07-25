import Link from "next/link"

const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex h-[50px] items-center border-b">
      <div className="mx-auto flex w-full max-w-[1500px] items-center justify-center px-6">
        <Link href={"/"} className="absolute left-6">
          BANAL.LOG
        </Link>
        <nav className="flex gap-6 text-sm">
          <Link href={"/blog"}>블로그</Link>
          <Link href={"/code"}>코드모음</Link>
          <Link href={"/etc"}>기타</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
