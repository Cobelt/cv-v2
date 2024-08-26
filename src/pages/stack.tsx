import { useQuery } from "@apollo/client"
import { useState } from "react"
import { useTranslation } from "react-i18next"

import Button, { Colors } from "@/components/Button"
import PageTitle from "@/components/PageTitle"
import PageTransition from "@/components/PageTransition"
import Feat from "@/features/Stack"
import { cN } from "@/lib"
import { GET_SKILLS, type SkillCategoriesDataType } from "@/queries/stack"
import { IPageProps } from "@/types"

const TECHS = "techs",
  KNOW_HOW = "knowHow",
  SOFT_SKILLS = "softSkills"
const CATEGORIES = [TECHS, KNOW_HOW, SOFT_SKILLS] as const

export default function Stack({ previousRoute }: IPageProps) {
  const [t] = useTranslation()
  const [tab, setTab] = useState(TECHS)

  const { data, loading } = useQuery<SkillCategoriesDataType>(GET_SKILLS)
  const { techs, knowHow, softSkills } = data ?? {}

  return (
    <PageTransition
      headTitle="Mes compétences"
      previousRoute={previousRoute}
      className="page:stack bg-blue-500 overflow-hidden"
    >
      <main
        className={cN(
          "grid gap-x-6 md:gap-x-10 gap-y-4 lg:gap-y-8 2xl:gap-y-10",
          "template-[base] md:template-[md]",
          "max-w-full h-full overflow-x-hidden overflow-y-auto xl:overflow-y-hidden no-scrollbar",
          "px-8 lg:px-[8vw] 2xl:px-[5rem] 2xl:pb-24"
        )}
      >
        <PageTitle className="area-[pagetitle] max-w-full overflow-hidden">
          <span className="hover:[letter-spacing:0.3rem] transition-all">
            Mes compétences
          </span>
        </PageTitle>

        <div className="area-[tabs] flex flex-col items-stretch justify-center gap-2 sm:gap-4 md:gap-8 pt-0 pb-0 md:pt-16 md:pb-52">
          {CATEGORIES.map((category) => (
            <Button
              key={category}
              color={Colors.BLACK}
              className={cN(
                tab === category &&
                  " !bg-stone-50 text-stone-800 hover:text-stone-800",
                "text-sm"
              )}
              padding="px-3 py-2 md:px-6 md:py-4 lg:px-16 lg:py-6"
              borderless
              id={category}
              onClick={() => setTab(category)}
            >
              {t("stack.category." + category)}
            </Button>
          ))}
        </div>

        <section className="area-[details] flex flex-col overflow-hidden border-4 border-dashed rounded-lg">
          <div className="w-full h-full">
            <div className="flex flex-wrap gap-4 h-full overflow-x-hidden">
              {tab === TECHS && techs && (
                <Feat.Techs key={TECHS} data={techs?.data} />
              )}
              {tab === KNOW_HOW && knowHow && (
                <Feat.Techs key={TECHS} data={knowHow?.data} />
              )}
              {tab === SOFT_SKILLS && softSkills && (
                <Feat.Techs key={TECHS} data={softSkills?.data} />
              )}
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}
