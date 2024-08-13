import PageTitle from "@/components/PageTitle"
import PageTransition from "@/components/PageTransition"
import { cN } from "@/lib"
import { type IPageProps } from "@/types"
import ProjectsList from "@/components/Projects"

export default function Projects({ previousRoute }: IPageProps) {
  return (
    <PageTransition
      headTitle="Mes projets"
      previousRoute={previousRoute}
      className="page:projects bg-purplish-500 overflow-hidden"
    >
      <main
        className={cN(
          "grid gap-x-6 md:gap-x-10 gap-y-4 lg:gap-y-8 2xl:gap-y-10",
          "template-[base]",
          "overflow-x-hidden overflow-y-auto 2xl:overflow-y-hidden min-h-full",
          "px-8 lg:px-[8vw] 2xl:px-[5rem] 2xl:pb-24"
        )}
      >
        <PageTitle className="area-[pagetitle]">Mes projets</PageTitle>

        <ProjectsList.Dev className="area-[dev]" />

        <ProjectsList.NonDev className="area-[nondev]" />
      </main>
    </PageTransition>
  )
}
