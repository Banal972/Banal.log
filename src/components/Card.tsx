import Image from "next/image"
import Link from "next/link"

import { IoCalendarClearOutline, IoTimeOutline } from "react-icons/io5"

import dayjs from "dayjs"

interface CardProps {
  url: string
  title: string
  date: Date
  tags: string[]
  thumbnail: string
  readingMinutes: number
}

const Card = ({ url, title, thumbnail, date, readingMinutes, tags }: CardProps) => {
  return (
    <Link href={url}>
      <div className="overflow-hidden rounded-t-xl border">
        <div className="relative h-44 w-full md:h-52">
          <Image src={thumbnail} alt="이미지" fill className="object-cover" />
        </div>
        <div className="border-t p-4">
          <div className="flex gap-2">
            {tags.map((tag) => (
              <p key={tag} className="text-sm font-medium text-blue-500">
                {tag}
              </p>
            ))}
          </div>
          <h3 className="mt-2 line-clamp-2 h-14 text-ellipsis break-keep text-xl font-bold leading-6">
            {title}
          </h3>
          <div className="mt-1 flex justify-between text-xs text-gray-500">
            <p className="flex items-center gap-1">
              <IoCalendarClearOutline /> {dayjs(date).format("YYYY-MM-DD")}
            </p>
            <p className="flex items-center gap-1">
              <IoTimeOutline /> {readingMinutes}분
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card
