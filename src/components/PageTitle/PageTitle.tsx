import {
  appearFromBottom,
  appearFromLeft,
  appearFromRight,
  appearFromTop,
} from "@/animations/pageContainer"
import { cN } from "@/lib"
import { motion as m } from "framer-motion"
import { ReactNode } from "react"

interface IPageTitleProps {
  children: ReactNode
  subTitle?: ReactNode
  className?: string
  pageAnimation?:
    | typeof appearFromTop
    | typeof appearFromBottom
    | typeof appearFromLeft
    | typeof appearFromRight
  textAlign?: string
  titlePlacement?: string
}

const COUNTER_ANIMATIONS = [
  { normal: appearFromTop, counter: appearFromBottom },
  { normal: appearFromBottom, counter: appearFromTop },
  { normal: appearFromLeft, counter: appearFromRight },
  { normal: appearFromRight, counter: appearFromLeft },
]

export default function PageTitle({
  className,
  children,
  pageAnimation = appearFromLeft,
  subTitle,
  textAlign = "text-right",
  titlePlacement = "items-center justify-end",
}: IPageTitleProps) {
  const counterAnimation =
    COUNTER_ANIMATIONS.find(({ normal }) => pageAnimation === normal)
      ?.counter ?? appearFromLeft

  return (
    <span className={cN("flex flex-col justify-center", className)}>
      <m.h1
        {...counterAnimation}
        className={cN(
          "font-archivo flex text-3xl lg:text-5xl 2xl:text-6xl whitespace-nowrap",
          textAlign,
          titlePlacement
        )}
      >
        {children}
      </m.h1>
      {subTitle && (
        <m.h4
          {...counterAnimation}
          className="text-lg text-center lg:text-2xl font-rubikBold lg:text-right"
        >
          {subTitle}
        </m.h4>
      )}
    </span>
  )
}
