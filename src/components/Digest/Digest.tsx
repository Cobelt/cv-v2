import { motion as m } from "framer-motion"
import { useTranslation } from "react-i18next"

import { fadeInItem } from "@/animations/pageContainer"
import Languages from "../Languages"

const AVAILABLE = true

export default function Digest() {
  const [t] = useTranslation()

  return (
    <div className="font-jostBold text-xl lg:text-3xl lg:py-12 row-start-3 lg:row-start-2 col-span-5 lg:col-start-2 lg:col-span-3 flex flex-col gap-1 lg:items-end text-left lg:text-right">
      <m.h2
        variants={fadeInItem}
        className="hidden lg:block font-archivo text-5xl mb-1"
      >
        Paul-Emile Moreau
      </m.h2>
      <m.h4 variants={fadeInItem} className="hover:put-forward text-nowrap">
        {t("profile.xp.webdev.0")}{" "}
        <span className="hidden lg:inline">{t("profile.xp.webdev.1")} </span>
        {t("common.with")}{" "}
        <span className="text-blue-500">
          {t("profile.xp.years.0")}
          <span className="hidden lg:inline">{t("profile.xp.years.1")}</span>
        </span>
        .
      </m.h4>
      <m.h4 variants={fadeInItem} className="hover:put-forward text-nowrap">
        Diplômé d{"'"}un <span className="text-blue-500">BAC+3</span> en
        informatique.
      </m.h4>
      <m.h4 variants={fadeInItem} className="hover:put-forward text-nowrap">
        <span className="hidden lg:inline">{t("profile.expert.0")}</span>{" "}
        <span className="inline lg:hidden">{t("profile.expert.1")}</span>{" "}
        <span className="text-blue-500">React</span> {t("common.and")}{" "}
        <span className="text-blue-500">Typescript</span>.
      </m.h4>
      <m.h4 variants={fadeInItem} className="hover:put-forward text-nowrap">
        <span
          className={[
            "material-icons mr-4  text-xl lg:text-4xl",
            AVAILABLE
              ? "align-sub text-lime-600"
              : "align-middle text-rose-600",
          ].join(" ")}
        >
          adjust
        </span>
        {AVAILABLE ? t("profile.available.true") : t("profile.available.false")}
      </m.h4>

      <Languages />
    </div>
  )
}
