import { motion as m } from "framer-motion"
import dynamic from "next/dynamic"
import { CSSProperties, ReactNode } from "react"

import hammerAnimation from "@/animations/hammer.json"
import { container, fadeInItem } from "@/animations/pageContainer"
import { cN } from "@/lib"
import styles from "./timeline.module.css"

const Lottie = dynamic(() => import("lottie-react"), { ssr: false })

interface ITimelineItemProps {
  title: string
  subTitle?: string
  children: ReactNode
  color?: string
  bgColor?: string
  subTitleColor?: string
  className?: string
  padding?: string
  length?: string
  size?: string
  onClick?(): void
}

export function TimelineItem({
  title,
  subTitle,
  children,
  color = "text-red-500",
  bgColor = "bg-stone-50",
  subTitleColor = "text-blue-500",
  length = "h-52 md:w-52",
  padding = "p-4",
  size = "w-96",
  className = "",
  onClick = () => {},
}: ITimelineItemProps) {
  return (
    <m.li
      variants={fadeInItem}
      className={cN("relative flex items-center w-2 md:h-2", length, color)}
    >
      <span
        className={cN(
          color,
          "z-10 bg-current rounded-full absolute w-5 h-5 -left-4"
        )}
      />
      <m.div
        whileTap={{ scale: 0.95 }}
        onTap={onClick}
        className={cN(
          styles.textbubble,
          "absolute whitespace-normal hidden md:flex flex-col",
          bgColor,
          size,
          padding,
          className
        )}
      >
        <time className={cN(color, "text-2xl font-archivo")}>{title}</time>
        <h4 className={cN("text-lg font-jostBold mb-2", subTitleColor)}>
          {subTitle}
        </h4>
        <div className="text-xl text-stone-800">{children}</div>
      </m.div>
    </m.li>
  )
}
export default function Timeline({
  rgbGradient,
  children,
  beforeLength = "w-40",
  containerClassName,
}: {
  rgbGradient?: string
  children: ReactNode
  beforeLength?: string
  containerClassName?: string
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
      <ol
        className={cN(
          containerClassName,
          "flex flex-col lg:flex-row gap-3 text-stone-800 transition-all duration-1000 snap-x snap-mandatory w-full"
        )}
      >
        <m.li
          variants={fadeInItem}
          className={cN(beforeLength, "h-2 bg-stone-50 text-stone-50")}
        ></m.li>

        {children}
      </ol>

      <div className="flex justify-center items-center">
        <Lottie
          animationData={hammerAnimation}
          className="flex xl:hidden w-64 max-h-64"
        />
      </div>
    </m.div>
  )
}
