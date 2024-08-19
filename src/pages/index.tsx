import { motion as m } from "framer-motion"
import { useTranslation } from "react-i18next"

import { container, fadeInItem } from "@/animations/pageContainer"

import PageTitle from "@/components/PageTitle"
import PageTransition from "@/components/PageTransition"
import Title, { Tags } from "@/components/Title"
import Feat from "@/features/Profile"
import { cN } from "@/lib"
import { type IPageProps } from "@/types"

export default function Profile({ previousRoute }: IPageProps) {
  const [t] = useTranslation()

  return (
    <PageTransition
      headTitle={t("profile.title") + " ?"}
      previousRoute={previousRoute}
      className="page:profile bg-orange-300 overflow-hidden"
    >
      <m.main
        variants={container}
        initial="hidden"
        animate="show"
        className={cN(
          "grid gap-x-6 md:gap-x-10 gap-y-4 lg:gap-y-8 2xl:gap-y-10",
          "template-[base] sm:template-[sm] lg:template-[lg] 2xl:template-[2xl]",
          "h-full overflow-x-hidden overflow-y-auto 2xl:overflow-y-hidden no-scrollbar",
          "px-8 lg:px-[8vw] 2xl:px-[5rem] 2xl:pb-24"
        )}
      >
        {/* Put it here so it gets behind every other texts */}
        <Feat.MailMeButton className="area-[mailBtn] 2xl:area-[mailBtn/overlap]" />

        <PageTitle className="area-[pagetitle] 2xl:area-[overlap/pagetitle]">
          <div className="group flex gap-3">
            <div>{t("profile.title")}</div>
            <div className="group-hover:tilt-shake">?</div>
          </div>
        </PageTitle>

        <Feat.Picture className="area-[photo]" />

        <m.div
          variants={fadeInItem}
          className="area-[name] flex items-end lg:hidden"
        >
          <Title tag={Tags.h1} className="flex flex-col">
            Paul-Emile <span className="text-5xl sm:text-6xl">Moreau</span>
          </Title>
        </m.div>

        <Feat.Digest className="area-[digest]" />

        <Feat.Stats className="area-[stats]" />
      </m.main>
    </PageTransition>
  )
}
