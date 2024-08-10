import { useState } from "react"
import { motion as m } from "framer-motion"

import { type IPageProps } from "@/types"
import { appearFromBottom } from "@/animations/pageContainer"
import Timeline, { TimelineItem } from "@/components/Timeline"
import PageTitle from "@/components/PageTitle"
import PageTransition from "@/components/PageTransition"
import { cN } from "@/lib"

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
    size: "w-80",
    title: "Août 2023",
    subTitle: "Freelance",
    children: [
      "Nouvelle aventure ! Je me lance en freelance.",
      "N'étant pas passionné par la prospection et la recherche de client, j'atteins rapidement le bout, également dû au full remote.",
    ],
  },
  {
    id: "next",
    size: "flex-1",
    title: "Dans le futur !",
    children: [
      "Désormais, je suis à la recherche d'un CDI, en full remote ou en hybride dans une petite ville. Bien que je reste ouvert à des missions freelance.",
    ],
  },
]

export default function Jobs({ previousRoute }: IPageProps) {
  const [selectedJob, selectJob] = useState("")

  return (
    <PageTransition
      previousRoute={previousRoute}
      className="page:timeline bg-purplish-500 pt-8 px-8 pb-40 lg:pb-16 lg:pt-52 lg:px-[8vw] overflow-hidden"
    >
      <main
        className={cN(
          "grid gap-x-6 md:gap-x-10 gap-y-4 lg:gap-y-8 2xl:gap-y-10",
          "template-[base]",
          "overflow-x-hidden overflow-y-auto 2xl:overflow-y-hidden min-h-full 2xl:px-[5rem] 2xl:pb-24"
        )}
        style={{ gridTemplateRows: "auto auto 1fr" }}
      >
        <PageTitle className="area-[pagetitle]">Mes expériences pro.</PageTitle>

        <div className="area-[timeline] flex flex-wrap">
          <Timeline rgbGradient="212 170 182" beforeSize="flex-1">
            {TMP_DATA.map(({ id, children, ...rest }) => (
              <TimelineItem key={id} onClick={() => selectJob(id)} {...rest}>
                {children.map((child) => (
                  <div key={child}>{child}</div>
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
            className="area-[details] bg-white"
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
            className="area-[details] bg-white"
          >
            Soluti
          </m.div>
        )}
      </main>
    </PageTransition>
  )
}
