import { CSSProperties, ReactNode } from "react"
import { motion as m } from "framer-motion"

import styles from "./timeline.module.css"
import { container, fadeInItem } from "@/animations/pageContainer"

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
  size = "w-52",
  onClick = () => {},
}: ITimelineItemProps) {
  return (
    <m.li
      variants={fadeInItem}
      whileTap={{ scale: 0.95 }}
      onTap={onClick}
      className={["relative flex items-center h-2", size, bgColor, color]
        .filter(Boolean)
        .join(" ")}
    >
      <span
        className={[
          color,
          "z-10 bg-current rounded-full absolute w-5 h-5 -left-4",
        ]
          .filter(Boolean)
          .join(" ")}
      />
      <div
        className={[
          styles.textbubble,
          bgColor,
          "w-96 absolute whitespace-normal p-4",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <time
          className={[color, "text-2xl font-archivo mb-4"]
            .filter(Boolean)
            .join(" ")}
        >
          {title}
        </time>
        <h4
          className={["text-lg font-jostBold", subTitleColor]
            .filter(Boolean)
            .join(" ")}
        >
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
      className={[
        styles.timeline,
        "flex justify-center whitespace-nowrap w-full -mx-12",
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ "--rgb-gradient": rgbGradient } as CSSProperties}
    >
      <ol className="text-stone-800 flex gap-3 transition-all duration-1000 snap-x snap-mandatory">
        <m.li variants={fadeInItem} className="h-2 w-40 bg-white"></m.li>

        {children}
      </ol>
    </m.div>
  )
}
