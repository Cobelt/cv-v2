import CircularCarousel from "@/components/CircularCarousel"
import PageTitle from "@/components/PageTitle"
import PageTransition from "@/components/PageTransition"
import { cN } from "@/lib"
import { type IPageProps } from "@/types"

export default function Hobbies({ previousRoute }: IPageProps) {
  return (
    <PageTransition
      headTitle="Mes passions"
      previousRoute={previousRoute}
      className="page:hobbies bg-greenish-400 pt-8 px-8 pb-32 lg:pb-16 lg:pt-52 lg:px-[8vw] overflow-hidden"
    >
      <main
        className={cN(
          "grid gap-x-6 md:gap-x-10 gap-y-4 lg:gap-y-8 2xl:gap-y-10",
          "template-[base]",
          "h-full overflow-x-hidden overflow-y-hidden"
        )}
      >
        <PageTitle
          className="area-[pagetitle]"
          subTitle="En dehors du développement"
        >
          Mes passions
        </PageTitle>

        <CircularCarousel
          className="area-[wheel] justify-self-center"
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

        <div className="area-[about] bg-stone-50 m-20 p-12 rounded-xl">
          Détail du hobby actif
        </div>
      </main>
    </PageTransition>
  )
}
