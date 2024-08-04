import { motion as m } from "framer-motion"
import { useTranslation } from "react-i18next"
import dynamic from "next/dynamic"

import { delayedContainer, fadeInItem } from "@/animations/pageContainer"
import arrowAnimation from "@/animations/arrow.json"
import Linkedin from "../icons/Linkedin"
import Github from "../icons/Github"

const Lottie = dynamic(() => import("lottie-react"), { ssr: false })

const EMAIL = "polemil.moro@gmail.com"

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
        href={"mailto:" + EMAIL}
        onClick={() => navigator.clipboard.writeText(EMAIL)}
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
              {EMAIL}
            </span>
          </div>
        </div>
        <Lottie
          animationData={arrowAnimation}
          className="w-64 max-h-64 -m-10 mb-10 -rotate-[50deg] text-blue-500 transition-transform duration-500"
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
