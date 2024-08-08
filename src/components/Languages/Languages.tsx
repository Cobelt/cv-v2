import { motion as m } from "framer-motion"
import { useTranslation } from "react-i18next"

import { fadeInItem } from "../../animations/pageContainer"
import FranceFlag from "../icons/FranceFlag"
import GreatBritainFlag from "../icons/GreatBritainFlag"
import RussiaFlag from "../icons/RussiaFlag"

export default function Languages() {
  const [t] = useTranslation()

  return (
    <m.h4
      variants={fadeInItem}
      className="order-6 flex items-center gap-y-2 mt-6 gap-x-12 md:gap-x-20 justify-between"
    >
      <div className="flex-1 relative group flex items-center gap-4 justify-center hover:justify-center hover:gap-0 w-[unset] md:w-48 h-12 cursor-help">
        <span title="Drapeau Français">
          <FranceFlag
            shouldntPreserveRatio
            className="h-8 w-12 md:h-8 md:w-8 group-hover:h-12 group-hover:w-24 rounded-lg transition-all"
          />
        </span>
        <span className="hidden md:inline text-left w-36 group-hover:w-0 group-hover:opacity-0 transition-all overflow-hidden">
          {t("profile.langs.fr")}
        </span>
        <span className="flex justify-center absolute -bottom-3 left-0 right-0 text-center text-lg font-latoBold text-stone-800 opacity-100 translate-y-3 md:translate-y-0 md:opacity-0 group-hover:opacity-100 group-hover:translate-y-3 transition-all duration-200 delay-100">
          <span className="hidden md:inline">Français</span>
          <span className="inline md:hidden">{t("profile.langs.fr")}</span>
        </span>
      </div>

      <div className="flex-1 relative group flex items-center gap-4 justify-center hover:justify-center hover:gap-0 w-[unset] md:w-48 h-12 cursor-help">
        <span title="Drapeau Anglais">
          <GreatBritainFlag
            shouldntPreserveRatio
            className="h-8 w-12 md:h-8 md:w-8 group-hover:h-12 group-hover:w-24 rounded-lg transition-all"
          />
        </span>
        <span className="hidden md:inline text-left w-36 group-hover:w-0 group-hover:opacity-0 transition-all overflow-hidden">
          {t("profile.langs.en")}
        </span>
        <span className="flex justify-center absolute -bottom-3 left-0 right-0 text-center text-lg font-latoBold text-stone-800 opacity-100 translate-y-3 md:translate-y-0 md:opacity-0 group-hover:opacity-100 group-hover:translate-y-3 transition-all duration-200 delay-100">
          <span className="hidden md:inline">Anglais</span>
          <span className="inline md:hidden">{t("profile.langs.en")}</span>
        </span>
      </div>

      <div className="flex-1 relative group flex items-center gap-4 justify-center hover:justify-center hover:gap-0 w-[unset] md:w-48 h-12 cursor-help">
        <span title="Drapeau Russe">
          <RussiaFlag
            shouldntPreserveRatio
            className="h-8 w-12 md:h-8 md:w-8 group-hover:h-12 group-hover:w-24 rounded-lg transition-all"
          />
        </span>
        <span className="hidden md:inline text-left w-36 group-hover:w-0 group-hover:opacity-0 transition-all overflow-hidden">
          {t("profile.langs.ru")}
        </span>
        <span className="flex justify-center absolute -bottom-3 left-0 right-0 text-center text-lg font-latoBold text-stone-800 opacity-100 translate-y-3 md:translate-y-0 md:opacity-0 group-hover:opacity-100 group-hover:translate-y-3 transition-all duration-200 delay-100">
          <span className="hidden md:inline">Russe</span>
          <span className="inline md:hidden">{t("profile.langs.ru")}</span>
        </span>
      </div>
    </m.h4>
  )
}
