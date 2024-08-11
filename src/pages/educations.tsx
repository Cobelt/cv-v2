import dynamic from "next/dynamic"

import Timeline, { TimelineItem } from "@/components/Timeline"
import diplomaAnimation from "@/animations/diploma.json"
import PageTitle from "@/components/PageTitle"
import PageTransition from "@/components/PageTransition"
import { type IPageProps } from "@/types"
import { cN } from "@/lib"
import Head from "next/head"

const Lottie = dynamic(() => import("lottie-react"), { ssr: false })

export default function Educations({ previousRoute }: IPageProps) {
  return (
    <PageTransition
      previousRoute={previousRoute}
      className="page:timeline bg-indigo-400 pt-8 px-8 pb-40 lg:pb-16 lg:pt-52 lg:px-[8vw] overflow-hidden"
    >
      <Head>
        <title>Mes formations - polemil.dev</title>
      </Head>
      <main
        className={cN(
          "grid gap-x-6 md:gap-x-10 gap-y-4 lg:gap-y-8 2xl:gap-y-10",
          "template-[base]",
          "overflow-x-hidden overflow-y-auto 2xl:overflow-y-hidden min-h-full 2xl:px-[5rem] 2xl:pb-24"
        )}
      >
        <PageTitle className="area-[pagetitle]">Mes formations</PageTitle>

        <div className="area-[timeline]">
          <Timeline rgbGradient="129 140 248" beforeSize="flex-1">
            <TimelineItem
              title="Juillet 2017"
              subTitle="DUT Informatique"
              size="flex-1"
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
              size="flex-1"
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
