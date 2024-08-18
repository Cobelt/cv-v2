import useAnimatePageProps from "@/hooks/useAnimatePageProps"
import { SITE_URL, cN } from "@/lib"
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
  paddingTop = "pt-20 md:pt-24 lg:pt-52",
  paddingBottom = "pb-32 lg:pb-16",
  paddingHorizontal = "2xl:px-[3vw] 3xl:px-[15vw]",
  previousRoute,
}: IPageTransition) {
  const animation = useAnimatePageProps(previousRoute)

  return (
    <m.div
      className={cN(
        "absolute inset-0 z-[5]",
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
