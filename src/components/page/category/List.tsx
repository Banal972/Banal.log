import Link from "next/link"

import { IoCalendarClearOutline } from "react-icons/io5"

import { Post } from "@/types/post.type"
import { animated, useTrail } from "@react-spring/web"

const Lists = ({ data }: { data: Post[] }) => {
  const trails = useTrail(data.length, {
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
  })

  return (
    <ul className="flex-1">
      {trails.map((style, index) => (
        <animated.li
          style={style}
          key={index}
          className="mt-3 flex flex-wrap items-center justify-between gap-2 first:mt-0"
        >
          <Link href={data[index].slug}>{data[index].title}</Link>
          <p className="flex items-center gap-1 text-sm text-gray-500">
            <IoCalendarClearOutline />
            {data[index].date}
          </p>
        </animated.li>
      ))}
    </ul>
  )
}

export default Lists
