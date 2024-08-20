import {
  appearFromBottom,
  appearFromLeft,
  appearFromRight,
  appearFromTop,
} from "@/animations/pageContainer"
import { cN } from "@/lib"
import { ReactNode } from "react"
import Title from "../Title"

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
    <span
      className={cN(
        "flex flex-col justify-center self-center justify-self-end",
        className
      )}
    >
      <Title.h1
        {...counterAnimation}
        className={cN("flex whitespace-nowrap", textAlign, titlePlacement)}
      >
        {children}
      </Title.h1>
      {subTitle && (
        <Title.h4 className="text-center lg:text-right" {...counterAnimation}>
          {subTitle}
        </Title.h4>
      )}
    </span>
  )
}
