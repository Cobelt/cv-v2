import { cN } from "@/lib"
import { motion as m } from "framer-motion"
import { ReactNode } from "react"

export enum Tags {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6",
}

export interface ITitle {
  tag?: Tags
  text?: string
  children?: ReactNode
  className?: string
}

const TITLE_SIZE = {
  [Tags.h1]: "text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl",
  [Tags.h2]: "text-xl md:text-3xl 2xl:text-4xl",
  [Tags.h3]: "text-xl md:text-2xl xl:text-3xl",
  [Tags.h4]: "text-lg lg:text-2xl",
  [Tags.h5]: "text-lg lg:text-2xl",
  [Tags.h6]: "text-base lg:text-xl",
}

export default function Title({
  tag = Tags.h1,
  className,
  text,
  children,
  ...otherProps
}: ITitle) {
  const MTitle = Object.values(otherProps)?.length ? m?.[tag] : tag

  return (
    <MTitle {...otherProps} className={cN(TITLE_SIZE[tag], className)}>
      {text}
      {children}
    </MTitle>
  )
}
