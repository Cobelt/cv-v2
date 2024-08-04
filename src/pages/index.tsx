import Head from "next/head"
import { motion as m } from "framer-motion"
import { useTranslation } from "react-i18next"

import {
  animate,
  appearFromLeft,
  appearFromRight,
  container,
  delayedContainer,
  fadeInItem,
} from "@/animations/pageContainer"
import { IPageProps } from "@/types"
import useAnimatePageProps from "@/hooks/useAnimatePageProps"
import * as Stacks from "@/components/Stacks"
import Links from "@/components/Links"
import Picture from "@/components/Picture"
import Digest from "@/components/Digest"

export default function Home({ previousRoute, currentRoute }: IPageProps) {
  const [t] = useTranslation()
  const animatePageProps = useAnimatePageProps(previousRoute, currentRoute)
  const counterAnimation =
    animatePageProps == appearFromLeft ? appearFromRight : appearFromLeft
  return (
    <m.div
      {...animate(animatePageProps)}
      className="absolute top-0 left-0 w-full h-full bg-orange-300 pt-12 pb-40 lg:pb-0 lg:pt-52 px-10 lg:px-[8vw]"
    >
      <Head>
        <title>CV Paul-Emile Moreau</title>
        <meta name="description" content="CV de Paul-Emile Moreau" />
        <link rel="icon" href="/icon/favicon.ico" />
      </Head>

      <m.main
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-x-10 gap-y-4 lg:gap-y-10 overflow-hidden h-full lg:px-[5rem] lg:pb-12"
        style={{
          gridTemplateColumns: "auto 1fr 1fr 1fr auto",
          gridTemplateRows: "auto auto 1fr auto auto 1fr",
        }}
      >
        <div className="font-archivo overflow-hidden row-start-1 col-span-5">
          <m.h1
            {...counterAnimation}
            className="text-3xl text-center lg:text-7xl lg:text-right pb-3"
          >
            <div className="group flex justify-end items-center gap-3">
              <div>{t("profile.title")}</div>
              <div className="group-hover:tilt-shake">?</div>
            </div>
          </m.h1>
        </div>

        <Picture />

        <m.div
          variants={fadeInItem}
          className="flex items-center lg:hidden col-start-3 col-span-3"
        >
          <h2 className="font-archivo text-3xl">Paul-Emile Moreau</h2>
        </m.div>

        <Digest />

        <Stacks.Prefered />

        <Stacks.Other />

        <Links />
      </m.main>
    </m.div>
  )
}
