import { motion as m } from "framer-motion"
import { useTranslation } from "react-i18next"

import { delayedContainer, fadeInItem } from "@/animations/pageContainer"
import ZigZagArrowSvg from "../icons/ZigZagArrow"
import Linkedin from "../icons/Linkedin"
import Github from "../icons/Github"

export default function Links() {
  const [t] = useTranslation()

  return (
    <m.div
      variants={delayedContainer}
      initial="hidden"
      animate="show"
      className="hidden md:grid py-16 grid-cols-2 flex-col row-start-1 row-end-3 col-start-1 col-end-2 font-rubikBold text-2xl flex-wrap col-span-5 justify-evenly"
    >
      <m.a
        variants={fadeInItem}
        href="mailto:polemil.moro@gmail.com"
        className="group col-span-2 flex gap-12 relative"
      >
        <div className="flex gap-4 items-center group-hover:text-white transition-colors">
          <span className="material-icons" style={{ fontSize: 64 }}>
            mail
          </span>
          <div className="relative">
            <span className="underline-on-hover text-3xl">
              {t("profile.contact.email")}
            </span>
            <span className="absolute -bottom-3 left-0 right-0 text-center text-lg font-latoBold opacity-0 text-stone-800 group-hover:opacity-100 group-hover:translate-y-3 transition-all duration-300 delay-200">
              polemil.moro@gmail.com
            </span>
          </div>
        </div>
        <ZigZagArrowSvg
          size={100}
          className="group-hover:-translate-x-6 group-hover:translate-y-6 mb-10 group-hover:rotate-[350deg] -rotate-[20deg] text-blue-500 transition-transform duration-500"
        />
      </m.a>

      <div className="flex flex-col self-end gap-6">
        <m.a
          variants={fadeInItem}
          href="https://www.linkedin.com/in/paul-emile-moreau/"
          target="_blank"
          className="flex gap-4 hover:gap-6 items-center hover:text-white transition-all"
        >
          <Linkedin textColor="rgb(253 186 116)" size={40} />
          <span className="underline-on-hover">Linkedin</span>
        </m.a>
        <m.a
          variants={fadeInItem}
          href="https://github.com/Cobelt"
          target="_blank"
          className="flex gap-4 hover:gap-6 items-center hover:text-white transition-all"
        >
          <Github size={45} />
          <span className="underline-on-hover">Cobelt</span>
        </m.a>

        <m.a
          variants={fadeInItem}
          href="https://github.com/mue-js"
          target="_blank"
          className="flex gap-4 hover:gap-6 items-center hover:text-white transition-all"
        >
          <Github size={45} />
          <span className="underline-on-hover">MueJS</span>
        </m.a>
      </div>
    </m.div>
  )
}
