import { useRouter } from "next/navigation"

const Custom404 = () => {
  const router = useRouter()
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <p className="text-4xl font-bold text-red-500">404</p>
      <p className="mt-5 text-lg">이 페이지는 존재 하지 않는 페이지 입니다.</p>
      <div className="mt-5 flex gap-2">
        <button className="" onClick={() => router.back()} type="button">
          이전으로
        </button>
        <button className="" onClick={() => router.push("/")} type="button">
          처음으로
        </button>
      </div>
    </div>
  )
}

export default Custom404
