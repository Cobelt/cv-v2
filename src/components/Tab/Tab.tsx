import Link from "next/link"
import { motion as m } from "framer-motion"
import { item } from "@/animations/pageContainer"

export interface TabType {
  url: string
  text: string
  icon: string
  tabIndex?: number
  currentTab: string
}

export default function Tab({
  url,
  tabIndex,
  icon,
  text,
  currentTab,
}: TabType) {
  return (
    <m.div
      variants={item}
      className={[
        "group flex-1 flex hover:bg-opacity-10 hover:bg-indigo-950 rounded-full cursor-pointer transition-all w-16 h-16",
        currentTab === url
          ? "text-blue-500"
          : "text-stone-800 hover:text-blue-900",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Link
        href={url}
        className="flex-1 flex items-center justify-center"
        tabIndex={tabIndex}
      >
        <span
          className="material-icons group-hover:tilt-shake p-2"
          style={{ fontSize: 32 }}
        >
          {icon}
        </span>
        <span className="hidden xl:inline-block text-xl">{text}</span>
      </Link>
    </m.div>
  )
}
