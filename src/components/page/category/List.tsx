import Link from "next/link"

import { IoCalendarClearOutline } from "react-icons/io5"

import { Post } from "@/types/post.type"
import { animated, useTrail } from "@react-spring/web"

const Lists = ({ data }: ListsState) => {
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
          className="mt-5 transition-colors first:mt-0 hover:text-green-400"
        >
          <Link
            className="flex flex-col flex-wrap justify-between gap-2 md:flex-row md:items-center"
            href={data[index].slug}
          >
            <p className="break-keep">{data[index].title}</p>
            <p className="flex items-center gap-1 text-sm text-gray-500">
              <IoCalendarClearOutline />
              {data[index].date}
            </p>
          </Link>
        </animated.li>
      ))}
    </ul>
  )
}

export default Lists

type ListsState = { data: Post[] }
