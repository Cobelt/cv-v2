import { motion as m } from "framer-motion"
import { useTranslation } from "react-i18next"

import { fadeInItem } from "@/animations/pageContainer"
import Feat from "@/features/Profile"
import { AUTHOR, cN } from "@/lib"
import { type WithClassNameProps } from "@/types"

const AVAILABLE = true

export default function Digest({ className }: WithClassNameProps) {
  const [t] = useTranslation()

  return (
    <div className={cN(className, "flex self-center sm:justify-center")}>
      <section
        className={cN(
          "gap-2 self-center sm:justify-center",
          "font-rubikReg font-semibold text-xl lg:text-3xl text-left"
        )}
      >
        <m.h2 variants={fadeInItem} className="hidden lg:block text-7xl mb-1">
          {AUTHOR.firstname}{" "}
          <span className="text-stone-50">{AUTHOR.lastname}</span>
        </m.h2>

        <div className="flex flex-col gap-2 group">
          <m.h6
            variants={fadeInItem}
            className="order-3 group-hover:push-forward"
          >
            {t("profile.xp.webdev.0")}
            <span className="hidden sm:inline">
              {" "}
              {t("profile.xp.webdev.1")}
            </span>
            , spécialisé <span className="text-stone-50">Front-End</span>
            {/* {t("common.with")}{" "}
        <span className="text-stone-50">
          {t("profile.xp.years.0")}
          <span className="inline">{t("profile.xp.years.1")}</span>
        </span> */}
          </m.h6>
          <m.h6
            variants={fadeInItem}
            className="order-4 group-hover:push-forward"
          >
            <span className="">{t("profile.expert.1")}</span>{" "}
            <span className="text-stone-50 anchor cursor-help">React</span>{" "}
            {t("common.and")}{" "}
            <span className="text-stone-50 anchor-2 cursor-help">
              Typescript
            </span>
          </m.h6>
          <m.h6
            variants={fadeInItem}
            className="order-5 group-hover:push-forward"
          >
            Diplômé d{"'"}un <span className="text-stone-50">BAC+3</span> en
            informatique
          </m.h6>
        </div>
        <Feat.Links className="order-6 mt-2 mb-4 sm:mb-0 sm:mt-4" />
        {/* <m.h6
        variants={fadeInItem}
        className="order-2 lg:order-5 group-hover:push-forward mb-6 lg:mb-0"
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
      </m.h6> */}

        {/* <Languages className="order-6 sm:order-7 mr-auto 2xl:mr-0 2xl:ml-auto" /> */}
      </section>
    </div>
  )
}
