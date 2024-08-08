import { useState } from "react"
import { motion as m } from "framer-motion"

import { type IPageProps } from "@/types"
import { appearFromBottom } from "@/animations/pageContainer"
import Timeline, { TimelineItem } from "@/components/Timeline"
import PageTitle from "@/components/PageTitle"
import PageTransition from "@/components/PageTransition"

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
    size: "w-80",
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
      className="bg-blue-300 pt-8 pb-40 lg:pb-0 lg:pt-52 px-10 lg:px-[8vw]"
    >
      <main
        className="h-full w-full lg:px-[5rem] lg:pb-12 grid gap-10 grid-cols-[auto 1fr] xl:grid-cols-3"
        style={{ gridTemplateRows: "auto auto 1fr" }}
      >
        <PageTitle className="col-span-2 md:col-span-3">
          Mes expériences pro.
        </PageTitle>

        <div className="col-span-2 md:col-span-3 flex flex-wrap">
          <Timeline rgbGradient="147 197 253">
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
            className="bg-white col-span-3"
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
            className="bg-white col-span-3"
          >
            Soluti
          </m.div>
        )}
      </main>
    </PageTransition>
  )
}
