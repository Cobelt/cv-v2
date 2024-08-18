import { motion as m } from "framer-motion"
import { useTranslation } from "react-i18next"

import { fadeInItem } from "../../../animations/pageContainer"
import FranceFlag from "../../../components/icons/FranceFlag"
import GreatBritainFlag from "../../../components/icons/GreatBritainFlag"
import RussiaFlag from "../../../components/icons/RussiaFlag"
import { cN } from "@/lib"
import { ReactNode } from "react"
import { WithClassNameProps } from "@/types"

interface ILanguageProps {
  label: string
  language: string
  flag: ReactNode
}

function Language({ label, language, flag }: ILanguageProps) {
  return (
    <div
      className={cN(
        "md:flex-1 flex items-center gap-4 md:gap-0 text-lg md:text-xl lg:text-2xl",
        "relative group cursor-help hover:justify-center md:hover:gap-0",
        "w-[unset] min-w-24 md:min-w-40 h-12"
      )}
    >
      <span title={`Drapeau ${language}`}>{flag}</span>
      <span className="text-left md:ml-4 lg:ml-2 lg:text-center w-28 md:group-hover:w-0 md:group-hover:opacity-0 transition-all overflow-hidden">
        {label}
      </span>
      <span className="flex justify-center absolute -bottom-3 left-0 right-0 text-center text-lg text-stone-800 opacity-100 translate-y-3 md:translate-y-0 md:opacity-0 group-hover:opacity-100 group-hover:translate-y-3 transition-all duration-200 delay-100">
        <span className="hidden md:inline">{language}</span>
        {/* <span className="inline md:hidden">{label}</span> */}
      </span>
    </div>
  )
}
export default function Languages({ className }: WithClassNameProps) {
  const [t] = useTranslation()
  const flagClassName = cN(
    "h-[1.6rem] w-[2.4rem] group-hover:h-[2.4rem] group-hover:w-[3.6rem] rounded-lg transition-all",
    "md:h-8 md:w-8 md:group-hover:h-12 md:group-hover:w-24",
    "grayscale group-hover:grayscale-0"
  )

  return (
    <m.h4
      variants={fadeInItem}
      className={cN(
        "flex flex-wrap sm:flex-nowrap items-center gap-y-2 mt-2 lg:mt-6 gap-x-8 md:gap-x-6 lg:gap-x-8 justify-between",
        className
      )}
    >
      <Language
        label={t("profile.langs.fr")}
        language="Français"
        flag={<FranceFlag shouldntPreserveRatio className={flagClassName} />}
      />

      <Language
        label={t("profile.langs.en")}
        language="Anglais"
        flag={
          <GreatBritainFlag shouldntPreserveRatio className={flagClassName} />
        }
      />

      <Language
        label={t("profile.langs.ru")}
        language="Russe"
        flag={<RussiaFlag shouldntPreserveRatio className={flagClassName} />}
      />
    </m.h4>
  )
}
