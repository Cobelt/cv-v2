import Link from "next/link"
import { motion as m } from "framer-motion"
import {
  appearFromBottom,
  appearFromLeft,
  appearFromRight,
  container,
  item,
} from "@/animations/pageContainer"
import { IPageProps } from "@/types"
import useAnimatePageProps from "@/hooks/useAnimatePageProps"
import Timeline, { TimelineItem } from "@/components/Timeline"
import { useState } from "react"

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

export default function Jobs({ previousRoute, currentRoute }: IPageProps) {
  const animatePageProps = useAnimatePageProps(previousRoute, currentRoute)
  const [selectedJob, selectJob] = useState("")

  const counterAnimation =
    animatePageProps == appearFromLeft ? appearFromRight : appearFromLeft

  return (
    <m.div
      {...animatePageProps}
      className="absolute top-0 left-0 w-full h-full bg-blue-300 pt-12 pb-40 lg:pb-0 lg:pt-52 px-10 lg:px-[8vw]"
    >
      <main
        className="h-full lg:px-[5rem] lg:pb-12 grid gap-10 grid-cols-2 xl:grid-cols-3"
        style={{ gridTemplateRows: "auto auto 1fr" }}
      >
        <div className="p-1 font-archivo overflow-hidden col-span-3">
          <m.h1
            {...counterAnimation}
            className="text-3xl text-center lg:text-7xl lg:text-right"
          >
            Mes expériences pro.
          </m.h1>
        </div>

        <div className="col-span-3 flex flex-wrap">
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
    </m.div>
  )
}
