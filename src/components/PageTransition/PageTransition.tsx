import { ReactNode, useEffect, useRef, useState } from "react"
import { motion as m } from "framer-motion"
import { SITE_URL, cN } from "@/lib"
import useAnimatePageProps from "@/hooks/useAnimatePageProps"
import Head from "next/head"

interface IPageTransition {
  children: ReactNode
  previousRoute: string
  headTitle?: string
  className?: string
  paddingTop?: string
  paddingBottom?: string
  paddingHorizontal?: string
}

export default function PageTransition({
  children,
  className,
  headTitle,
  paddingTop = "pt-20 lg:pt-52",
  paddingBottom = "pb-32 lg:pb-16",
  paddingHorizontal = "2xl:px-[3vw] 3xl:px-[8vw]",
  previousRoute,
}: IPageTransition) {
  const animation = useAnimatePageProps(previousRoute)

  return (
    <m.div
      className={cN(
        "absolute inset-0",
        paddingTop,
        paddingBottom,
        paddingHorizontal,
        className
      )}
      {...animation}
    >
      <Head>
        <title>{headTitle ? `${headTitle} - ${SITE_URL}` : SITE_URL}</title>
      </Head>

      {children}
    </m.div>
  )
}
