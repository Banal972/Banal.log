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
        <Link
          href="https://drive.google.com/file/d/1MxiEP_s4-YkMzo78PCywU5rIx1rHkIsT/view?usp=sharing"
          target="_blank"
        >
          <div className="flex items-center gap-2 rounded-md border px-3 py-1 font-bold transition-colors hover:bg-black hover:text-white">
            <IoOpenOutline /> DOWNLOAD
          </div>
        </Link>
      </div>

      <div className="prose prose-sm max-w-none px-3 py-10 md:prose-base md:px-5">
        <h3>Tech Stack</h3>
        <ul>
          <li>Expo, React-Native, React-query, Zustand, Nativewind(TailWindCSS)</li>
        </ul>
      </div>
    </>
  )
}

export default SlideTodo
