import Link from "next/link"
import { motion as m } from "framer-motion"
import { item } from "@/animations/pageContainer"
import { EDUCATIONS } from "@/constants"
import { cN } from "@/lib"
import { CSSProperties } from "react"

export interface TabType {
  id: string
  url: string
  text: string
  icon: string
  index: number
  orderOnMobile?: number
  className?: string
}

export default function Tab({
  id,
  url,
  icon,
  text,
  index,
  orderOnMobile,
  className,
}: TabType) {
  return (
    <m.div
      variants={item}
      className={cN(
        orderOnMobile && `order-${orderOnMobile}`,
        `lg:order-${index + 1}`,
        "lg:flex flex-1 w-16 h-16 rounded-full transition-all duration-300",
        "tab group hover:bg-opacity-10 hover:bg-indigo-950 cursor-pointer",
        className
      )}
    >
      <Link
        href={url}
        className="flex-1 flex flex-col 2xl:flex-row items-center justify-center"
        tabIndex={index + 1}
      >
        <span className="material-icons group-hover:tilt-shake p-2 text-2xl md:text-4xl">
          {icon}
        </span>
        <span className="inline-block text-sm 2xl:text-xl">{text}</span>
      </Link>
    </m.div>
  )
}
