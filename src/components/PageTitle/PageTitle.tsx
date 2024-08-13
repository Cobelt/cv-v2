import { ReactNode } from "react"
import { motion as m } from "framer-motion"
import {
  appearFromBottom,
  appearFromLeft,
  appearFromRight,
  appearFromTop,
} from "@/animations/pageContainer"
import { cN } from "@/lib"

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
}: IPageTitleProps) {
  const counterAnimation =
    COUNTER_ANIMATIONS.find(({ normal }) => pageAnimation === normal)
      ?.counter ?? appearFromLeft

  return (
    <div className={cN(className, "font-archivo")}>
      <m.h1
        {...counterAnimation}
        className={cN(
          textAlign,
          "text-3xl lg:text-5xl 2xl:text-7xl whitespace-nowrap"
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
    </div>
  )
}
