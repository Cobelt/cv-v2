import { motion as m } from "framer-motion"
import { useTranslation } from "react-i18next"

import { delayedContainer, fadeInItem } from "../../../animations/pageContainer"
import Linkedin from "../../../components/icons/Linkedin"
import Github from "../../../components/icons/Github"
import { WithClassNameProps } from "../../../types"
import { cN } from "@/lib"

export default function Links({ className }: WithClassNameProps) {
  const [t] = useTranslation()

  return (
    <m.div
      variants={delayedContainer}
      initial="hidden"
      animate="show"
      className={cN(
        className,
        "flex lg:flex-col 2xl:flex-row w-full gap-6 justify-evenly lg:justify-center 2xl:py-16 mt-4 sm:mt-0 sm:mb-12 lg:mb-0",
        "font-rubikBold text-lg md:text-2xl"
      )}
    >
      {/* <span className="px-4 pb-8 place-self-center">ou sur</span> */}
      <m.a
        variants={fadeInItem}
        href="https://www.linkedin.com/in/paul-emile-moreau/"
        target="_blank"
        className="flex gap-2 hover:gap-4 md:gap-4 md:hover:gap-6 items-center hover:text-white transition-all"
      >
        <Linkedin textColor="rgb(253 186 116)" className="w-8 md:w-15" />
        <span className="hidden lg:inline">Linkedin</span>
      </m.a>
      <m.a
        variants={fadeInItem}
        href="https://github.com/Le-Polemil"
        target="_blank"
        className="flex gap-2 hover:gap-4 md:gap-4 md:hover:gap-6 items-center hover:text-white transition-all"
      >
        <Github className="w-8 md:w-15" />
        <span className="hidden lg:inline">Github</span>
      </m.a>

      {/* <m.a
        variants={fadeInItem}
        href="https://github.com/mue-js"
        target="_blank"
        className="flex gap-2 hover:gap-4 md:gap-4 md:hover:gap-6 items-center hover:text-white transition-all"
      >
        <Github className="w-8 md:w-15" />
        <span>MueJS</span>
      </m.a> */}
    </m.div>
  )
}
