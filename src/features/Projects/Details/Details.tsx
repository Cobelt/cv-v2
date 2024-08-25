import { useQuery } from "@apollo/client"
import { AnimatePresence, motion as m } from "framer-motion"
import { useTranslation } from "react-i18next"

import { container, fadeInItemRapid } from "@/animations/pageContainer"
import Title from "@/components/Title"
import { cN } from "@/lib"
import { GET_PROJECTS, type ProjectsDataType } from "@/queries/projects"
import { CSSProperties } from "react"

interface IDetails {
  index: number
  className?: string
}

export default function Details({ className, index }: IDetails) {
  const [t] = useTranslation()

  const { data, loading } = useQuery<ProjectsDataType>(GET_PROJECTS)
  const projects = data?.projects?.data ?? []

  const { name, description, skills, dates, subTitle, link, githubLink } =
    projects?.[index]?.attributes ?? {}

  return (
    <AnimatePresence>
      <m.div
        variants={container}
        initial="hidden"
        animate="show"
        exit="hidden"
        key={index}
        className={cN(
          className,
          "min-h-[20vh] overflow-y-auto flex flex-col gap-4 pr-3 md:pr-0"
        )}
      >
        <m.div variants={fadeInItemRapid}>
          <Title.h1 text={t(name)} />
        </m.div>
        <m.div variants={fadeInItemRapid}>
          <Title.h3 text={t(subTitle ?? "")} />
        </m.div>
        {/* TODO : Chips isDev / isPaused / isDone */}

        <m.time variants={fadeInItemRapid} className="text-stone-50 text-xl">
          {t(dates ?? "")}
        </m.time>

        <m.p
          variants={fadeInItemRapid}
          className="max-h-[30vh] min-h-20 text-sm sm:text-base 2xl:text-xl md:mb-6"
        >
          {t(description)}
        </m.p>

        {!!skills?.data?.length && (
          <m.div
            variants={fadeInItemRapid}
            className="w-full h-0.5 rounded-full bg-stone-800 my-2 2xl:my-6"
          />
        )}

        <m.div
          variants={fadeInItemRapid}
          className="infinite-roller text-xl text-stone-50 min-h-8"
        >
          {skills?.data?.map?.(
            ({ attributes: { key, level } = {} }, index, arr) => (
              <div
                key={key}
                className="inline-block text-lg md:text-2xl lg:text-3xl whitespace-nowrap min-w-28 md:min-w-44"
                style={
                  {
                    "--index": index,
                    "--itemsCount": arr?.length,
                  } as CSSProperties
                }
              >
                {t(key ?? "")}
              </div>
            )
          )}
        </m.div>
      </m.div>
    </AnimatePresence>
  )
}
