import Link from "next/link"

import CATEGORYS from "@/constant/category"

const GNB = () => {
  return (
    <div className="w-[200px] flex-none border-r bg-white">
      <div className="sticky top-[50px] p-5 text-sm text-gray-600">
        {CATEGORYS.map((category, index) => (
          <ul className="mt-4 first:mt-0" key={index}>
            <li className="text-base font-semibold text-black">
              <Link href={category.link}>{category.title}</Link>
            </li>
            {category.subItems.map((subItem, subIndex) => (
              <li key={subIndex} className="ml-3">
                <Link href={`${category.link}/${subItem.link}`}>{subItem.title}</Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}

export default GNB
