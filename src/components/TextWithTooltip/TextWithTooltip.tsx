import { cN } from "@/lib"
import { ReactNode } from "react"
import { motion as m } from "framer-motion"

interface ITextWithTooltipProps {
  children: ReactNode
  tooltip: ReactNode
  className?: string
  tooltipClassName?: string
  tag: keyof JSX.IntrinsicElements
}

export default function TextWithTooltip({
  children,
  className,
  tag: Tag = "span",
  tooltip,
  tooltipClassName,
}: ITextWithTooltipProps) {
  return (
    <Tag className={cN("relative group", className)}>
      {children}
      {/* <m.span
        key="tooltip"
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: "-100%", opacity: 1 }}
        exit={{ y: 0, opacity: 0 }}
        className={cN("absolute inset-0", tooltipClassName)}
      >
        {tooltip}
      </m.span> */}
    </Tag>
  )
}
