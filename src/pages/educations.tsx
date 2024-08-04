import { motion as m } from "framer-motion"
import dynamic from "next/dynamic"

import {
  animate,
  appearFromLeft,
  appearFromRight,
} from "@/animations/pageContainer"
import { IPageProps } from "@/types"
import useAnimatePageProps from "@/hooks/useAnimatePageProps"
import Timeline, { TimelineItem } from "@/components/Timeline"
import diplomaAnimation from "@/animations/diploma.json"

const Lottie = dynamic(() => import("lottie-react"), { ssr: false })

export default function Educations({
  previousRoute,
  currentRoute,
}: IPageProps) {
  const animatePageProps = useAnimatePageProps(previousRoute, currentRoute)
  const counterAnimation =
    animatePageProps == appearFromLeft ? appearFromRight : appearFromLeft

  return (
    <m.div
      {...animate(animatePageProps)}
      className="absolute top-0 left-0 w-full h-full bg-indigo-400 lg:px-48 px-12"
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

        <div className="col-span-3 flex flex-wrap">
          <Timeline rgbGradient="129 140 248">
            <TimelineItem
              title="Juillet 2017"
              subTitle="DUT Informatique"
              size="w-[30vw]"
              color="text-rose-500"
              subTitleColor="text-indigo-500"
            >
              <div className="flex justify-center items-center">
                <Lottie
                  animationData={diplomaAnimation}
                  className="w-64 max-h-64 -m-10"
                />
              </div>
            </TimelineItem>

            <TimelineItem
              title="Mai 2018"
              subTitle="Licence Générale Informatique"
              size="w-[30vw]"
              color="text-rose-500"
              subTitleColor="text-indigo-500"
            >
              <div className="flex justify-center items-center">
                <Lottie
                  animationData={diplomaAnimation}
                  className="w-64 max-h-64 -m-10"
                />
              </div>
            </TimelineItem>
          </Timeline>
        </div>
      </main>
    </m.div>
  )
}
