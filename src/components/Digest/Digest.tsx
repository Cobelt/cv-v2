import { motion as m } from "framer-motion"
import { useTranslation } from "react-i18next"

import { cN } from "@/lib"
import { type WithClassNameProps } from "@/types"
import { fadeInItem } from "@/animations/pageContainer"
import Languages from "../Languages"
import { AUTHOR } from "@/lib"

const AVAILABLE = true

export default function Digest({ className }: WithClassNameProps) {
  const [t] = useTranslation()

  return (
    <div
      className={cN(
        className,
        "flex flex-col gap-1 2xl:items-end sm:justify-center",
        "font-jostBold text-xl lg:text-3xl text-left 2xl:text-right"
      )}
    >
      <m.h2
        variants={fadeInItem}
        className="hidden lg:block font-archivo text-5xl mb-1"
      >
        {AUTHOR}
      </m.h2>
      <m.h4 variants={fadeInItem} className="order-2 hover:put-forward">
        {t("profile.xp.webdev.0")}{" "}
        <span className="hidden sm:inline">{t("profile.xp.webdev.1")} </span>
        {t("common.with")}{" "}
        <span className="text-blue-500">
          {t("profile.xp.years.0")}
          <span className="inline">{t("profile.xp.years.1")}</span>
        </span>
      </m.h4>
      <m.h4 variants={fadeInItem} className="order-3 hover:put-forward">
        Diplômé d{"'"}un <span className="text-blue-500">BAC+3</span> en
        informatique
      </m.h4>
      <m.h4 variants={fadeInItem} className="order-4 hover:put-forward">
        <span className="hidden sm:inline">{t("profile.expert.0")}</span>{" "}
        <span className="inline sm:hidden">{t("profile.expert.1")}</span>{" "}
        <span className="text-blue-500">React</span> {t("common.and")}{" "}
        <span className="text-blue-500">Typescript</span>
      </m.h4>
      <m.h4
        variants={fadeInItem}
        className="order-1 lg:order-5 hover:put-forward mb-6 lg:mb-0"
      >
        <span
          className={[
            "material-icons mr-2 text-2xl lg:text-4xl",
            AVAILABLE
              ? "align-sub text-lime-600"
              : "align-middle text-rose-600",
          ].join(" ")}
        >
          adjust
        </span>
        {AVAILABLE ? (
          <>
            <span>{t("profile.available.yes.0")}</span>{" "}
            <span className="hidden lg:inline">
              {t("profile.available.yes.for")}
            </span>
          </>
        ) : (
          <span>{t("profile.available.false")}</span>
        )}
      </m.h4>

      <Languages />
    </div>
  )
}
