import Link from "next/link"
import { motion as m } from "framer-motion"
import {
  appearFromLeft,
  appearFromRight,
  container,
  item,
} from "@/animations/pageContainer"
import { IPageProps } from "@/types"
import useAnimatePageProps from "@/hooks/useAnimatePageProps"

export default function Educations({
  previousRoute,
  currentRoute,
}: IPageProps) {
  const animatePageProps = useAnimatePageProps(previousRoute, currentRoute)
  const counterAnimation =
    animatePageProps == appearFromLeft ? appearFromRight : appearFromLeft

  return (
    <m.div
      {...animatePageProps}
      className="absolute top-0 left-0 w-full h-full bg-purple-300 lg:px-48 px-12"
    >
      <main className="pt-12 pb-52 lg:pb-12 lg:pt-72 grid gap-10 grid-cols-3">
        <div className="p-1 font-archivo overflow-hidden col-span-3">
          <m.h1
            {...counterAnimation}
            className="text-3xl text-center lg:text-7xl lg:text-right"
          >
            Mes formations
          </m.h1>
        </div>

        <div className="h-40 col-span-3"></div>
      </main>
    </m.div>
  )
}
