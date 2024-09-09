import { motion as m } from "framer-motion"
import { CSSProperties, ReactNode } from "react"

import { container, fadeInItem } from "@/animations/pageContainer"
import { cN } from "@/lib"
import css from "./timeline.module.scss"

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
        css.timeline,
        "hidden justify-center whitespace-nowrap w-full"
      )}
      style={{ "--rgb-gradient": rgbGradient } as CSSProperties}
    >
      <ol
        className={cN(
          containerClassName,
          "flex flex-col lg:flex-row text-stone-800 transition-all duration-1000 snap-x snap-mandatory w-full"
        )}
      >
        <m.li variants={fadeInItem} className={cN(beforeLength, "relative")} />

        {children}
      </ol>
    </m.div>
  )
}
