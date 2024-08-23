import { useQuery } from "@apollo/client"
import { motion as m } from "framer-motion"
import { useState } from "react"
import { useTranslation } from "react-i18next"

import { container, fadeInItem } from "@/animations/pageContainer"
import Carousel from "@/components/Carousel"
import PageTitle from "@/components/PageTitle"
import PageTransition from "@/components/PageTransition"
import { BO_URL, cN } from "@/lib"
import { GET_PROJECTS, ProjectsDataType } from "@/queries/projects"
import { type IPageProps } from "@/types"

import Feat from "@/features/Projects"

export default function Projects({ previousRoute }: IPageProps) {
  const [t] = useTranslation()
  const [index, setIndex] = useState(0)

  const { data, loading } = useQuery<ProjectsDataType>(GET_PROJECTS)
  const projects = data?.projects?.data ?? []

  const { link, githubLink } = projects?.[index]?.attributes ?? {}

  return (
    <PageTransition
      headTitle="Mes projets"
      previousRoute={previousRoute}
      className="page:projects bg-purplish-600 overflow-hidden"
    >
      <m.main
        variants={container}
        initial="hidden"
        animate="show"
        exit="hidden"
        className={cN(
          "grid gap-x-6 md:gap-x-24 gap-y-4 lg:gap-y-8 2xl:gap-y-10",
          "template-[base] lg:template-[lg]",
          "h-full",
          "px-8 lg:px-[8vw] 2xl:px-[5rem] 2xl:pb-24"
        )}
      >
        <PageTitle className="area-[pagetitle]" titleClassName="bubbles">
          Mes projets
        </PageTitle>

        <m.div
          variants={fadeInItem}
          className="hidden lg:block area-[index] font-bukhari text-8xl text-stone-50"
        >
          {index + 1 > 9 ? index + 1 : `0${index + 1}`}
        </m.div>

        <Feat.Details className="area-[desc]" index={index} />

        <Carousel
          className="area-[image]"
          cards={projects?.map(({ attributes }) => ({
            title: attributes?.name,
            description: attributes?.description,
            image: {
              ...attributes?.image?.data?.attributes,
              url: BO_URL + attributes?.image?.data?.attributes?.url,
            },
          }))}
          index={index}
          setIndex={setIndex}
          link={link}
          githubLink={githubLink}
        />
      </m.main>
    </PageTransition>
  )
}
