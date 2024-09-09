import useAnimatePageProps from "@/hooks/useAnimatePageProps"
import { DOMAIN, cN } from "@/lib"
import { motion as m } from "framer-motion"
import Head from "next/head"
import { ReactNode } from "react"

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
  paddingTop = "pt-20 md:pt-24 lg:pt-36",
  paddingBottom = "pb-32 2xl:pb-0",
  paddingHorizontal = "2xl:px-[3vw] 3xl:px-[calc(20vw-10rem)]",
  previousRoute,
}: IPageTransition) {
  const animation = useAnimatePageProps(previousRoute)

  return (
    <m.div
      className={cN(
        "absolute inset-0 pb-32 2xl:pb-0 z-[5] ",
        paddingTop,
        paddingBottom,
        paddingHorizontal,
        "page",
        className
      )}
      {...animation}
    >
      <Head>
        <title>{headTitle ? `${headTitle} - ${DOMAIN}` : DOMAIN}</title>
      </Head>

      {children}
    </m.div>
  )
}
