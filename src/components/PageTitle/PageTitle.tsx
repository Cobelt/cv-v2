import { ReactNode } from "react"
import { motion as m } from "framer-motion"
import { appearFromLeft, appearFromRight } from "@/animations/pageContainer"
import { cN } from "@/lib"

interface IPageTitleProps {
  children: ReactNode
  className?: string
  pageAnimation?: typeof appearFromLeft | typeof appearFromRight
  textAlign?: string
}

export default function PageTitle({
  className,
  children,
  pageAnimation = appearFromLeft,
  textAlign = "text-right",
}: IPageTitleProps) {
  const counterAnimation =
    pageAnimation == appearFromLeft ? appearFromRight : appearFromLeft

  return (
    <div className={cN(className, "font-archivo overflow-hidden")}>
      <m.h1
        {...counterAnimation}
        className={cN(textAlign, "text-3xl lg:text-7xl pb-3 whitespace-nowrap")}
      >
        {children}
      </m.h1>
    </div>
  )
}
