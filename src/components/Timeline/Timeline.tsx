import { CSSProperties, ReactNode } from "react"
import styles from "./timeline.module.css"

interface ITimelineItemProps {
  title: string
  children: ReactNode
  color?: string
  bgColor?: string
  size?: string
}

function TimelineItem({
  title,
  children,
  color = "text-red-500",
  bgColor = "bg-white",
  size = "w-40",
}: ITimelineItemProps) {
  return (
    <li
      className={["relative flex items-center h-2", size, bgColor]
        .filter(Boolean)
        .join(" ")}
    >
      <span
        className={[
          color,
          "z-10 bg-current rounded-full absolute w-5 h-5 -right-4",
        ]
          .filter(Boolean)
          .join(" ")}
      />
      <div
        className={[
          styles.textbubble,
          bgColor,
          "w-72 absolute whitespace-normal p-4 min-h-max",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <time
          className={[color, "text-2xl font-bold mb-4"]
            .filter(Boolean)
            .join(" ")}
        >
          {title}
        </time>
        <div className="text-xl">{children}</div>
      </div>
    </li>
  )
}
export default function Timeline({ rgbGradient }: { rgbGradient?: string }) {
  return (
    <div
      className={[
        styles.timeline,
        "flex justify-center whitespace-nowrap w-full",
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ "--rgb-gradient": rgbGradient } as CSSProperties}
    >
      <ol className="text-stone-800 flex gap-3 py-96 transition-all duration-1000 snap-x snap-mandatory">
        <TimelineItem title="Mai 2018">
          <div>
            J{"'"}intègre Artprice ! Une entreprise de cotation d{"'"}art et d
            {"'"}
            artistes.
          </div>
          <div>
            Ils me forment à React et Redux, en parallèle d{"'"}un maintient de
            l{"'"}historique en Ruby-on-Rails.
          </div>
        </TimelineItem>

        <TimelineItem title="Octobre 2019">
          <div>Je quitte Artprice pour rejoindre une agence Web : Soluti.</div>
          <div>
            J{"'"}y travaille quasi uniquement en binôme avec un dev back
            Symfony, tant on est complémentaire.
          </div>
        </TimelineItem>

        <TimelineItem title="Juin 2021">
          <div>Fin de l{"'"}aventure Soluti dûe à un rachat par Pentalog.</div>
          <div>
            Me voici employé chez Abbeal, une ESN, avec laquelle j{"'"}intègre
            les équipes de Cultura, avant de m{"'"}atteler à la refonte de l
            {"'"}app interne.
          </div>
        </TimelineItem>

        <TimelineItem title="Août 2023">
          <div>Nouvelle aventure ! Je me lance en freelance.</div>
          <div>
            N{"'"}étant pas passionné par la prospection et la recherche de
            client, j{"'"}atteins rapidement le bout, également dû au full
            remote.
          </div>
        </TimelineItem>

        <TimelineItem size="w-80" title="Dans le futur !">
          <div>
            Désormais, je suis à la recherche d{"'"}un CDI, en full remote ou en
            hybride dans une petite ville. Bien que je reste ouvert à des
            missions freelance.
          </div>
        </TimelineItem>

        <li className="h-2 w-80 bg-white"></li>
      </ol>
    </div>
  )
}
