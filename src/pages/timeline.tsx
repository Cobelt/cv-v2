import { motion as m } from "framer-motion"
import dynamic from "next/dynamic"
import { useState } from "react"

import diplomaAnimation from "@/animations/diploma.json"
import { appearFromBottom } from "@/animations/pageContainer"
import PageTitle from "@/components/PageTitle"
import PageTransition from "@/components/PageTransition"
import Timeline, { TimelineItem } from "@/components/Timeline"
import { cN } from "@/lib"
import { type IPageProps } from "@/types"
import Link from "next/link"

const TMP_DATA = [
  {
    id: "artprice",
    title: "Mai 2018",
    subTitle: "Développeur Full-Stack",
    children: [
      "J'intègre Artprice ! Une entreprise de cotation d'art et d'artistes.",
      "Ils me forment à React et Redux, en parallèle d'un maintient de l'historique en Ruby-on-Rails.",
    ],
  },
  {
    id: "soluti",
    title: "Octobre 2019",
    subTitle: "Développeur Full-Stack",
    children: [
      "Je quitte Artprice pour rejoindre une agence Web : Soluti.",
      "J'y travaille quasi uniquement en binôme avec un dev back Symfony, tant on est complémentaire.",
    ],
  },
  {
    id: "abbeal",
    title: "Juin 2021",
    subTitle: "Ingénieur d'études",
    children: [
      "Fin de l'aventure Soluti dûe à un rachat par Pentalog.",
      "Me voici employé chez Abbeal, une ESN, avec laquelle j'intègre les équipes de Cultura, avant de m'atteler à la refonte de l'app interne.",
    ],
  },
  {
    id: "freelance",
    length: "flex-1",
    title: "Août 2023",
    subTitle: "Freelance",
    children: [
      "Nouvelle aventure ! Je me lance en freelance.",
      "N'étant pas passionné par la prospection et la recherche de client, j'atteins rapidement le bout, également dû au full remote.",
    ],
  },
  {
    id: "next",
    length: "flex-1",
    size: "w-80",
    title: "Peut-être chez vous ?",
    children: [
      <div key="hire-me" className="flex justify-center items-center">
        <Link
          href="/contact"
          className={cN(
            "text-indigo-700 border-4 border-indigo-700 dark:border-indigo-500 dark:text-indigo-500",
            "hover:text-stone-50 hover:bg-indigo-800 dark:hover:text-stone-50 dark:hover:bg-indigo-500",
            "focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800",
            "font-archivo rounded-lg px-5 py-2.5 flex justify-center items-center gap-2 transition-colors"
          )}
        >
          M{"'"}embaucher
          <span className="material-icons text-3xl font-bold">north_east</span>
        </Link>
      </div>,
    ],
  },
]

const Lottie = dynamic(() => import("lottie-react"), { ssr: false })
export default function Jobs({ previousRoute }: IPageProps) {
  const [selectedJob, selectJob] = useState("")

  return (
    <PageTransition
      headTitle="Mes expériences pro"
      previousRoute={previousRoute}
      className="page:timeline bg-indigo-400 overflow-hidden"
    >
      <main
        className={cN(
          "grid gap-x-6 md:gap-x-10 gap-y-4 lg:gap-y-8 2xl:gap-y-10",
          "template-[base]",
          "overflow-x-hidden overflow-y-auto 2xl:overflow-y-hidden min-h-full",
          "px-8 lg:px-[8vw] 2xl:px-[5rem] 2xl:pb-24"
        )}
        style={{ gridTemplateRows: "auto auto 1fr" }}
      >
        <PageTitle className="area-[pagetitle]" subTitle="Et mes diplômes">
          Mes expériences pro.
        </PageTitle>

        <div className="area-[timeline] flex flex-wrap">
          <Timeline rgbGradient="129 140 248" beforeLength="flex-1">
            <TimelineItem
              title="Juillet 2017"
              subTitle="DUT Informatique"
              subTitleColor="text-indigo-500"
              color="text-rose-500"
              size="w-56"
              length="w-40"
            >
              <div className="flex justify-center items-center">
                <Lottie
                  animationData={diplomaAnimation}
                  className="w-40 -m-6"
                />
              </div>
            </TimelineItem>

            <TimelineItem
              title="Mai 2018"
              subTitle="Licence Générale Informatique"
              subTitleColor="text-indigo-500"
              color="text-rose-500"
              size="w-56"
              length="w-40"
            >
              <div className="flex justify-center items-center">
                <Lottie
                  animationData={diplomaAnimation}
                  className="w-40 -m-6"
                />
              </div>
            </TimelineItem>

            {TMP_DATA.map(({ id, children, ...rest }) => (
              <TimelineItem
                key={id}
                onClick={() => selectJob(id)}
                subTitleColor="text-indigo-500"
                {...rest}
              >
                {children.map((child, index) => (
                  <div key={typeof child === "string" ? child : index}>
                    {child}
                  </div>
                ))}
              </TimelineItem>
            ))}
          </Timeline>
        </div>

        {selectedJob === "artprice" && (
          <m.div
            key="artprice"
            {...appearFromBottom}
            transition={{ duration: 0.3 }}
            exit={{ y: "100%" }}
            className="area-[details] bg-stone-50"
          >
            Artprice
          </m.div>
        )}

        {selectedJob === "soluti" && (
          <m.div
            key="soluti"
            {...appearFromBottom}
            transition={{ duration: 0.3 }}
            exit={{ y: "100%" }}
            className="area-[details] bg-stone-50"
          >
            Soluti
          </m.div>
        )}
      </main>
    </PageTransition>
  )
}
