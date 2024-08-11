import { motion as m } from "framer-motion"
import dynamic from "next/dynamic"
import { useTranslation } from "react-i18next"

import { cN } from "@/lib"
import { type WithClassNameProps } from "@/types"
import arrowAnimation from "@/animations/arrow.json"
import { fadeInItem } from "@/animations/pageContainer"

const Lottie = dynamic(() => import("lottie-react"), { ssr: false })

const EMAIL = "polemil.moro@gmail.com"

export default function MailMeButton({ className }: WithClassNameProps) {
  const [t] = useTranslation()

  return (
    <m.div
      variants={fadeInItem}
      className={cN(
        className,
        "flex mb-4 md:mb-0 mt-8 lg:mt-0 justify-center lg:justify-start self-start"
      )}
    >
      <a
        className="group relative flex flex-col"
        href={"mailto:" + EMAIL}
        onClick={() => navigator.clipboard.writeText(EMAIL)}
      >
        <div className="order-1 lg:order-2 2xl:order-1 flex gap-4 items-center group-hover:text-white transition-colors">
          <span className="material-icons" style={{ fontSize: 64 }}>
            mail
          </span>
          <div className="relative">
            <span className="font-rubikBold text-xl md:text-3xl 2xl:text-4xl">
              {t("profile.contact.email")}
            </span>
            <span className="absolute -bottom-3 left-0 right-0 text-center text-lg font-latoBold opacity-0 text-stone-800 group-hover:opacity-100 group-hover:translate-y-3 transition-all duration-300 delay-200">
              {EMAIL}
            </span>
          </div>
        </div>
        <Lottie
          animationData={arrowAnimation}
          className={cN(
            "order-2 lg:order-1 2xl:order-2 self-end",
            "w-36 lg:w-48 2xl:56 3xl:w-60 max-h-48",
            "lg:rotate-180 2xl:rotate-0 lg:-mt-6 2xl:mt-0 lg:mb-0 2xl:-mb-12 3xl:-mb-16 mr-12 lg:mr-[calc(20rem_-_15vw)]"
          )}
        />
      </a>
    </m.div>
  )
}
