import { motion as m } from "framer-motion"
import { appearFromLeft, appearFromRight } from "../animations/pageContainer"
import { IPageProps } from "@/types"
import useAnimatePageProps from "@/hooks/useAnimatePageProps"
import Carousel from "@/components/Carousel/Carousel"

export default function Projects({ previousRoute, currentRoute }: IPageProps) {
  const animatePageProps = useAnimatePageProps(previousRoute, currentRoute)
  const counterAnimation =
    animatePageProps == appearFromLeft ? appearFromRight : appearFromLeft

  return (
    <m.div
      {...animatePageProps}
      className="absolute top-0 left-0 w-full h-full bg-lime-200 lg:px-48 px-12"
    >
      <main className="pt-12 pb-52 lg:pb-12 lg:pt-72 flex flex-col gap-10">
        <div className="p-1 font-archivo overflow-hidden col-span-3">
          <m.h1
            {...counterAnimation}
            className="text-3xl text-center lg:text-7xl lg:text-right"
          >
            Mes projets
          </m.h1>
        </div>

        <section>
          <h2 className="font-jostBold text-2xl">Projets liés au dev</h2>
          <Carousel />
        </section>

        <section>
          <h2 className="font-jostBold text-2xl">Projets hors dev</h2>
          Carousel
        </section>

        <div className="h-40 col-span-3"></div>
      </main>
    </m.div>
  )
}
