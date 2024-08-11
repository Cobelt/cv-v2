import Head from "next/head"
import { motion as m } from "framer-motion"
import { useTranslation } from "react-i18next"

import { container, fadeInItem } from "../animations/pageContainer"

import { cN, GetPreviousRouteProp } from "@/lib"
import { type IPageProps } from "@/types"
import Digest from "@/components/Digest"
import Links from "@/components/Links"
import PageTitle from "@/components/PageTitle"
import PageTransition from "@/components/PageTransition"
import Picture from "@/components/Picture"
import * as Stacks from "@/components/Stacks"
import MailMeButton from "@/components/MailMeButton"

export default function Profile({ previousRoute }: IPageProps) {
  const [t] = useTranslation()

  return (
    <PageTransition
      previousRoute={previousRoute}
      className="page:profile bg-orange-300 pt-8 px-8 pb-32 lg:pb-16 lg:pt-52 lg:px-[8vw] overflow-hidden"
    >
      <Head>
        <title>Qui suis-je ? - polemil.dev</title>
      </Head>

      <m.main
        variants={container}
        initial="hidden"
        animate="show"
        className={cN(
          "grid gap-x-6 md:gap-x-10 gap-y-4 lg:gap-y-8 2xl:gap-y-10",
          "template-[base] sm:template-[md] lg:template-[lg] 2xl:template-[2xl]",
          "h-full overflow-x-hidden overflow-y-auto 2xl:overflow-y-hidden no-scrollbar",
          "2xl:px-[5rem] 2xl:pb-24"
        )}
      >
        <PageTitle className="area-[pagetitle]">
          <div className="group flex sm:justify-end lg:justify-start 2xl:justify-end items-center gap-3">
            <div>{t("profile.title")}</div>
            <div className="group-hover:tilt-shake">?</div>
          </div>
        </PageTitle>

        <Picture className="area-[photo]" />

        <m.div
          variants={fadeInItem}
          className="area-[name] flex items-center lg:hidden"
        >
          <h2 className="font-archivo text-3xl sm:text-4xl flex flex-col">
            Paul-Emile{" "}
            <span className="text-[2.75rem] sm:text-6xl">Moreau</span>
          </h2>
        </m.div>

        <Digest className="area-[digest]" />

        <Stacks.Prefered className="area-[pref]" />

        <Stacks.Other className="area-[other]" />

        <MailMeButton className="area-[mailBtn]" />

        <Links className="area-[links]" />
      </m.main>
    </PageTransition>
  )
}

export const getServerSideProps = GetPreviousRouteProp
