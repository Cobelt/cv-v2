import { motion as m } from "framer-motion"

import { type IPageProps } from "@/types"
import { appearFromRight } from "@/animations/pageContainer"
import CircularCarousel from "@/components/CircularCarousel"
import PageTitle from "@/components/PageTitle"
import PageTransition from "@/components/PageTransition"

export default function Hobbies({ previousRoute }: IPageProps) {
  return (
    <PageTransition
      previousRoute={previousRoute}
      className="bg-teal-200 pt-8 pb-40 lg:pb-0 lg:pt-52 px-10 lg:px-[8vw]"
    >
      <main
        className="h-full lg:px-[5rem] lg:pb-12 grid gap-10 grid-cols-2 xl:grid-cols-3"
        style={{ gridTemplateRows: "auto auto 1fr" }}
      >
        <PageTitle className=" row-start-1 col-start-1 col-span-3">
          Mes passions
        </PageTitle>

        <div className="p-1 font-archivo overflow-hidden">
          <m.h1
            {...appearFromRight}
            className="text-3xl text-center lg:text-7xl lg:text-right"
          >
            Mes passions
          </m.h1>
          <m.h4
            {...appearFromRight}
            className="text-lg text-center lg:text-2xl font-rubikBold lg:text-right"
          >
            En dehors du développement
          </m.h4>
        </div>

        <div className="row-start-1 row-span-3 col-start-1 col-span-2 flex max-w-full">
          <CircularCarousel
            items={[
              { key: "worldbuilding", thumbnailIcon: "public" },
              { key: "write", thumbnailIcon: "history_edu" },
              { key: "mao", thumbnailIcon: "music_note" },
              { key: "draw", thumbnailIcon: "draw" },
              { key: "piano", thumbnailIcon: "piano" },
              { key: "cooking", thumbnailIcon: "outdoor_grill" },
              { key: "dog", thumbnailIcon: "pets" },
            ]}
          />
        </div>

        <div className="bg-white row-start-3 m-24 p-12 rounded-xl">
          Détail du hobby actif
        </div>
      </main>
    </PageTransition>
  )
}
