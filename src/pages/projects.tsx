import Carousel from "@/components/Carousel"
import PageTitle from "@/components/PageTitle"
import PageTransition from "@/components/PageTransition"
import { type IPageProps } from "@/types"

export default function Projects({ previousRoute }: IPageProps) {
  return (
    <PageTransition
      previousRoute={previousRoute}
      className="bg-lime-200 lg:px-48 px-12"
    >
      <main className="pt-8 pb-52 lg:pb-12 lg:pt-72 flex flex-col gap-10">
        <PageTitle className="col-span-3">Mes projets</PageTitle>

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
    </PageTransition>
  )
}
