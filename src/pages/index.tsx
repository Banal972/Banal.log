import Image from "next/image"
import Link from "next/link"

const Card = () => {
  return (
    <Link href="/post">
      <div className="rounded-t-xl border">
        <div className="relative h-52 w-full">
          <Image src="" alt="이미지" fill className="object-cover" />
        </div>
        <div className="border-t p-4">
          <p className="text-sm font-medium text-blue-500">필터1</p>
          <h3 className="mt-2 text-xl font-bold">제목1</h3>
          <div className="mt-1 flex justify-between text-xs text-gray-500">
            <p>2024-00-00</p>
            <p>4분</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

const Filter = ({ name }: { name: string }) => {
  return <div className="cursor-pointer rounded-full border px-2 py-1 text-sm">{name}</div>
}

const Page = () => {
  return (
    <main className="mx-auto max-w-[1400px] pt-10">
      <div className="text-xl font-medium">
        <p>안녕하세요!🖐️</p>
        <p className="mt-1">
          제 블로그인 <span className="font-bold">Banal.log</span>에 오신걸 환영합니다.
        </p>
        <p className="mt-1">블로그는 곧 다시 리뉴얼 할 예정입니다</p>
      </div>

      <div className="mt-12 flex gap-2">
        <Filter name="필터1" />
        <Filter name="필터2" />
        <Filter name="필터3" />
        <Filter name="필터4" />
        <Filter name="필터5" />
      </div>
      <div className="mt-10 grid grid-cols-4 gap-5 gap-y-10">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  )
}

export default Page
