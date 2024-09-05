import Link from "next/link"

import { IoOpenOutline } from "react-icons/io5"

const SlideTodo = () => {
  return (
    <>
      <div className="mt-2 flex items-center gap-3">
        <Link href="https://github.com/Banal972/todoapp" target="_blank">
          <div className="flex items-center gap-2 rounded-md border px-3 py-1 font-bold transition-colors hover:bg-black hover:text-white">
            <IoOpenOutline /> Github
          </div>
        </Link>
      </div>
    </>
  )
}

export default SlideTodo
