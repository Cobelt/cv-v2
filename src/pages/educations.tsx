import dynamic from "next/dynamic"

import Timeline, { TimelineItem } from "@/components/Timeline"
import diplomaAnimation from "@/animations/diploma.json"
import PageTitle from "@/components/PageTitle"
import PageTransition from "@/components/PageTransition"
import { type IPageProps } from "@/types"

const Lottie = dynamic(() => import("lottie-react"), { ssr: false })

export default function Educations({ previousRoute }: IPageProps) {
  return (
    <PageTransition
      previousRoute={previousRoute}
      className="bg-indigo-400 lg:px-48 px-12"
    >
      <main className="pt-8 pb-52 lg:pb-12 lg:pt-72 grid gap-10 grid-cols-3">
        <PageTitle className="col-span-3">Mes formations</PageTitle>

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
    </PageTransition>
  )
}
