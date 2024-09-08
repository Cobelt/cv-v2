import { fadeInItem } from "@/animations/pageContainer"
import { cN } from "@/lib"
import { WithClassNameProps } from "@/types"
import { motion as m } from "framer-motion"
import { Stat } from "./Stat"

export default function Stats({ className }: WithClassNameProps) {
  return (
    <m.div
      variants={fadeInItem}
      className={cN(
        "overflow-hidden stats grid template-[stats] lg:template-[stats-lg] w-full pl-6 sm:px-[clamp(0rem,10vw,5rem)] lg:px-0 gap-y-6 lg:gap-x-12",
        className
      )}
    >
      <Stat
        href="/timeline"
        countClassName="after:!text-indigo-400"
        count={6}
        text="ans d'expérience"
        className="area-[s1]"
      />
      <Stat
        href="/projects"
        countClassName="after:!text-purplish-600"
        count={14}
        text="projets web"
        className="area-[s2]"
      />
      <Stat
        href="/stack"
        countClassName="after:!text-blue-500"
        count={22}
        text="technos domptées"
        className="area-[s3]"
      />
      <Stat
        href="https://docs.google.com/document/d/1VQQZVnw0dl3XgDyoYZCu7IS47F7ttdg6q0J1BEOPo0g/edit?usp=sharing"
        target="_blank"
        count={6342}
        text="mots"
        className="area-[s4]"
      />
    </m.div>
  )
}
