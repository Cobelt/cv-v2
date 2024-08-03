import { motion as m } from "framer-motion"
import { useTranslation } from "react-i18next"

import { fadeInItem } from "@/animations/pageContainer"
import FranceFlag from "../icons/FranceFlag"
import GreatBritainFlag from "../icons/GreatBritainFlag"
import RussiaFlag from "../icons/RussiaFlag"

export default function Languages() {
  const [t] = useTranslation()

  return (
    <m.h4
      variants={fadeInItem}
      className="flex flex-wrap items-center gap-y-2 mt-6 gap-20 justify-between"
    >
      <div className="cursor-help relative group hover:justify-center w-48 flex items-center gap-4 hover:gap-0 h-12">
        <span title="Drapeau Français">
          <FranceFlag
            size=""
            shouldntPreserveRatio
            className="h-8 w-8 group-hover:h-12 group-hover:w-24 rounded-lg transition-all"
          />
        </span>
        <span className="text-left w-36 group-hover:w-0 group-hover:opacity-0 transition-all overflow-hidden">
          {t("profile.langs.fr")}
        </span>
        <span className="absolute -bottom-3 left-0 right-0 text-center text-lg font-latoBold opacity-0 text-stone-800 group-hover:opacity-100 group-hover:translate-y-3 transition-all duration-200 delay-100">
          Français
        </span>
      </div>

      <div className="cursor-help relative group hover:justify-center w-48 flex items-center gap-4 hover:gap-0 h-12">
        <span title="Drapeau Anglais">
          <GreatBritainFlag
            size=""
            shouldntPreserveRatio
            className="h-8 w-8 group-hover:h-12 group-hover:w-24 rounded-lg transition-all"
          />
        </span>
        <span className="text-left w-36 group-hover:w-0 group-hover:opacity-0 transition-all overflow-hidden">
          {t("profile.langs.en")}
        </span>
        <span className="absolute -bottom-3 left-0 right-0 text-center text-lg font-latoBold opacity-0 text-stone-800 group-hover:opacity-100 group-hover:translate-y-3 transition-all duration-200 delay-100">
          Anglais
        </span>
      </div>

      <div className="cursor-help relative group hover:justify-center w-48 flex items-center gap-4 hover:gap-0 h-12">
        <span title="Drapeau Russe">
          <RussiaFlag
            size=""
            shouldntPreserveRatio
            className="h-8 w-8 group-hover:h-12 group-hover:w-24 rounded-lg transition-all"
          />
        </span>
        <span className="text-left w-36 group-hover:w-0 group-hover:opacity-0 transition-all overflow-hidden">
          {t("profile.langs.ru")}
        </span>
        <span className="absolute -bottom-3 left-0 right-0 text-center text-lg font-latoBold opacity-0 text-stone-800 group-hover:opacity-100 group-hover:translate-y-3 transition-all duration-200 delay-100">
          Russe
        </span>
      </div>
    </m.h4>
  )
}
