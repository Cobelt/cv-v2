import PageTitle from "@/components/PageTitle"
import PageTransition from "@/components/PageTransition"
import { cN } from "@/lib"
import { type IPageProps } from "@/types"
import ProjectsList from "@/components/Projects"
import Head from "next/head"

export default function Projects({ previousRoute }: IPageProps) {
  return (
    <PageTransition
      previousRoute={previousRoute}
      className="page:projects bg-beige-300 pt-8 px-8 pb-40 lg:pb-16 lg:pt-52 lg:px-[8vw] overflow-hidden"
    >
      <Head>
        <title>Mes projets - polemil.dev</title>
      </Head>
      <main
        className={cN(
          "grid gap-x-6 md:gap-x-10 gap-y-4 lg:gap-y-8 2xl:gap-y-10",
          "template-[base]",
          "overflow-x-hidden overflow-y-auto 2xl:overflow-y-hidden min-h-full 2xl:px-[5rem] 2xl:pb-24"
        )}
      >
        <PageTitle className="area-[pagetitle]">Mes projets</PageTitle>

        <ProjectsList.Dev className="area-[dev]" />

        <ProjectsList.NonDev className="area-[nondev]" />
      </main>
    </PageTransition>
  )
}
