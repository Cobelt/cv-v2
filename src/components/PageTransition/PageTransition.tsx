import { ReactNode, useEffect, useRef, useState } from "react"
import { motion as m } from "framer-motion"
import { cN } from "@/lib"
import useAnimatePageProps from "@/hooks/useAnimatePageProps"

interface IPageTransition {
  children: ReactNode
  previousRoute: string
  className?: string
}

export default function PageTransition({
  children,
  className,
  previousRoute,
}: IPageTransition) {
  const animation = useAnimatePageProps(previousRoute)

  return (
    <m.div className={cN("absolute inset-0", className)} {...animation}>
      {children}
    </m.div>
  )
}
