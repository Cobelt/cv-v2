import { CSSProperties, ReactNode } from "react"
import { motion as m } from "framer-motion"

import styles from "./timeline.module.css"
import { container, fadeInItem } from "../../animations/pageContainer"
import { cN } from "@/lib"

interface ITimelineItemProps {
  title: string
  subTitle?: string
  children: ReactNode
  color?: string
  bgColor?: string
  subTitleColor?: string
  size?: string
  onClick?(): void
}

export function TimelineItem({
  title,
  subTitle,
  children,
  color = "text-red-500",
  bgColor = "bg-white",
  subTitleColor = "text-blue-600",
  size = "h-52 md:w-52",
  onClick = () => {},
}: ITimelineItemProps) {
  return (
    <m.li
      variants={fadeInItem}
      whileTap={{ scale: 0.95 }}
      onTap={onClick}
      className={cN("relative flex items-center w-2 md:h-2", size, color)}
    >
      <span
        className={cN(
          color,
          "z-10 bg-current rounded-full absolute w-5 h-5 -left-4"
        )}
      />
      <div
        className={cN(
          styles.textbubble,
          bgColor,
          "z-20 w-96 absolute whitespace-normal p-4 hidden md:flex flex-col"
        )}
      >
        <time className={cN(color, "text-2xl font-archivo")}>{title}</time>
        <h4 className={cN("text-lg font-jostBold mb-2", subTitleColor)}>
          {subTitle}
        </h4>
        <div className="text-xl text-stone-800">{children}</div>
      </div>
    </m.li>
  )
}
export default function Timeline({
  rgbGradient,
  children,
}: {
  rgbGradient?: string
  children: ReactNode
}) {
  return (
    <m.div
      variants={container}
      initial="hidden"
      animate="show"
      className={cN(
        styles.timeline,
        "flex justify-center whitespace-nowrap w-full -mx-12"
      )}
      style={{ "--rgb-gradient": rgbGradient } as CSSProperties}
    >
      <ol className="flex flex-col lg:flex-row gap-3 text-stone-800 transition-all duration-1000 snap-x snap-mandatory">
        <m.li variants={fadeInItem} className="h-2 w-40 bg-white"></m.li>

        {children}
      </ol>
    </m.div>
  )
}
