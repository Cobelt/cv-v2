import { motion as m } from "framer-motion"
import { useTranslation } from "react-i18next"

import { container, fadeInItem } from "@/animations/pageContainer"

import { cN, GetPreviousRouteProp } from "@/lib"
import { type IPageProps } from "@/types"
import Feat from "@/features/Profile"
import PageTitle from "@/components/PageTitle"
import PageTransition from "@/components/PageTransition"

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
          "template-[base] sm:template-[md] lg:template-[lg] 2xl:template-[2xl]",
          "h-full overflow-x-hidden overflow-y-auto 2xl:overflow-y-hidden no-scrollbar",
          "px-8 lg:px-[8vw] 2xl:px-[5rem] 2xl:pb-24"
        )}
      >
        <PageTitle className="area-[pagetitle] -mb-3 sm:mb-0">
          <div className="group flex justify-end lg:justify-start 2xl:justify-end items-center gap-3">
            <div>{t("profile.title")}</div>
            <div className="group-hover:tilt-shake">?</div>
          </div>
        </PageTitle>

        <Feat.Picture className="area-[photo]" />

        <m.div
          variants={fadeInItem}
          className="area-[name] flex items-end lg:hidden"
        >
          <h2 className="font-archivo text-3xl sm:text-4xl flex flex-col">
            Paul-Emile{" "}
            <span className="text-[2.75rem] sm:text-6xl">Moreau</span>
          </h2>
        </m.div>

        <Feat.Digest className="area-[digest]" />

        <Feat.Stacks.Prefered className="area-[pref]" />

        <Feat.Stacks.Other className="area-[other]" />

        <Feat.MailMeButton className="area-[mailBtn]" />

        <Feat.Links className="area-[links]" />
      </m.main>
    </PageTransition>
  )
}
