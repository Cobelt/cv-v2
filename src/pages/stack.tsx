import Button, { Colors } from "@/components/Button"
import PageTitle from "@/components/PageTitle"
import PageTransition from "@/components/PageTransition"
import Title from "@/components/Title"
import { cN } from "@/lib"
import { IPageProps } from "@/types"
import { useState } from "react"
import { useTranslation } from "react-i18next"

const CATEGORIES = ["knowHow", "techs", "softSkills"] as const
const SKILLS = [
  {
    text: "Développer un site vitrine",
    category: "knowHow",
  },
  {
    text: "Développer un site marchand",
    category: "knowHow",
  },
  {
    text: "Développer un backoffice",
    category: "knowHow",
  },
  {
    text: "Développer une app interne",
    category: "knowHow",
  },
  {
    text: "Développer une app mobile",
    category: "knowHow",
  },
  {
    text: "Maintenir et faire évoluer un projet",
    category: "knowHow",
  },
  {
    text: "Maitriser la couche métier d'un projet",
    category: "knowHow",
  },
  {
    text: "JavaScript",
    category: "techs",
    subCategory: "languages",
  },
  {
    text: "TypeScript",
    category: "techs",
    subCategory: "languages",
  },
  {
    text: "PHP",
    category: "techs",
    subCategory: "languages",
  },
  {
    text: "Ruby",
    category: "techs",
    subCategory: "languages",
  },
  {
    text: "C++",
    category: "techs",
    subCategory: "languages",
  },
  {
    text: "React",
    category: "techs",
    subCategory: "framework-front",
  },
  {
    text: "Next",
    category: "techs",
    subCategory: "framework-front",
  },
  {
    text: "Svelte",
    category: "techs",
    subCategory: "framework-front",
  },
  {
    text: "Vue 2",
    category: "techs",
    subCategory: "framework-front",
  },
  {
    text: "Symfony",
    category: "techs",
    subCategory: "framework-back",
  },
  {
    text: "Ruby-On-Rails",
    category: "techs",
    subCategory: "framework-back",
  },
  {
    text: "Silex",
    category: "techs",
    subCategory: "framework-back",
  },
  {
    text: "Sharepoint",
    category: "techs",
    subCategory: "framework-back",
  },
  {
    text: "Cypress",
    category: "techs",
    subCategory: "willing-to-learn",
  },
  {
    text: "Dart + Flutter",
    category: "techs",
    subCategory: "willing-to-learn",
  },
  {
    text: "Svelte (more)",
    category: "techs",
    subCategory: "willing-to-learn",
  },
  {
    text: "Vue (more)",
    category: "techs",
    subCategory: "willing-to-learn",
  },
  {
    text: "Travailler en équipe de tout taille",
    category: "softSkills",
  },
  {
    text: "Communiquer avec mes collègues",
    category: "softSkills",
  },
  {
    text: "M'adapter au besoin",
    category: "softSkills",
  },
  {
    text: "Prendre du recul",
    category: "softSkills",
  },
  {
    text: "Être créatif et inventif",
    category: "softSkills",
  },
  {
    text: "Être rigoureux et précis",
    category: "softSkills",
  },
  {
    text: "Être force de proposition",
    category: "softSkills",
  },
  {
    text: "Être versatile",
    category: "softSkills",
  },
  {
    text: "Être autonome",
    category: "softSkills",
  },
]

export default function Stack({ previousRoute }: IPageProps) {
  const [t] = useTranslation()
  const [tab, setTab] = useState("knowHow")

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
        <PageTitle className="area-[pagetitle]">
          <span className="hover:[letter-spacing:0.3rem] transition-all">
            Mes compétences
          </span>
        </PageTitle>

        <div className="area-[tabs] flex flex-col items-stretch justify-center gap-4 md:gap-8 pt-8 pb-8 md:pt-16 md:pb-52">
          {CATEGORIES.map((category) => (
            <Button
              key={category}
              color={Colors.BLACK}
              className={cN(
                tab === category &&
                  "!bg-stone-50 text-stone-800 hover:text-stone-800",
                "px-6 py-4 md:px-16 md:py-6 text-xl"
              )}
              borderless
              id={category}
              onClick={() => setTab(category)}
            >
              {t("stack.category." + category)}
            </Button>
          ))}
        </div>

        <section className="area-[details] flex flex-col overflow-hidden md:p-16 border-4 border-dashed rounded-lg">
          <Title.h3
            className="px-6 md:px-8 py-4"
            text={t("stack.category." + tab)}
          />

          <div className="pb-8 w-full h-full">
            <div className="py-2 px-6 md:px-8 flex flex-wrap items-center gap-4 h-[calc(100%_-_3rem)] overflow-x-hidden">
              {SKILLS.filter((skill) => skill.category === tab).map((skill) => (
                <span
                  key={skill.text}
                  className="max-h-full bg-stone-50 rounded-full py-4 px-6 md:px-8 whitespace-nowrap overflow-hidden text-ellipsis"
                >
                  {skill.text}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}
