import { motion as m } from "framer-motion"
import Image from "next/image"
import { useTranslation } from "react-i18next"

import pictureOfMe from "@/../public/picture.jpg"
import pictureWithoutBg from "@/../public/pictureWithoutBg.png"
import { fadeInItem } from "@/animations/pageContainer"
import ZigZagArrowSvg from "@/components/icons/ZigZagArrow"
import { cN } from "@/lib"
import { WithClassNameProps } from "@/types"
import css from "./Picture.module.scss"

export default function Picture({ className }: WithClassNameProps) {
  const [t] = useTranslation()

  return (
    <m.div
      variants={fadeInItem}
      className={cN(
        "flex items-end md:items-center sm:justify-end",
        "mt-auto lg:mb-auto relative font-rubikBold",
        className
      )}
    >
      <div className="relative group">
        <Image
          className={cN(
            css.picture,
            "min-w-28 min-h-28 blur-0 group-hover:blur",
            "lg:flex-[initial] duration-300"
          )}
          style={{ width: "var(--picture-clamp)" }}
          src={pictureOfMe}
          alt={t("profile.photo.floki")}
        />

        <div
          className="inset-0 absolute border-4 border-stone-50 border-dashed rounded-full z-[5] rotate-[-20deg] group-hover:rotate-12"
          style={{ transition: "all 1s, border-top-color 0.3s" }}
        />
        <div
          className="inset-0 absolute border-4 border-stone-50 group-hover:border-t-[transparent] border-dashed rounded-full z-[7] rotate-[-20deg] group-hover:rotate-12"
          style={{ transition: "all 1s, border-top-color 0.3s" }}
        />

        <Image
          className={cN(
            css.picture,
            css.noBg,
            "min-w-28 min-h-28 z-[4] group-hover:scale-110 origin-bottom group-hover:z-[6]",
            "lg:flex-[initial]"
          )}
          style={{ width: "var(--picture-clamp)" }}
          src={pictureWithoutBg}
          alt={t("profile.photo.floki")}
        />

        <div
          className={cN(
            "hidden lg:flex flex-col-reverse group-hover:fade-in z-10 w-auto text-nowrap text-lg",
            "absolute -top-16 left-0 2xl:right-2/3"
          )}
        >
          <ZigZagArrowSvg className="ml-10 -rotate-[135deg]" size={30} />
          <span>{t("profile.photo.me")}</span>
        </div>
        <div
          className={cN(
            "hidden lg:flex flex-col group-hover:fade-in z-10 w-auto text-nowrap text-lg",
            "absolute -bottom-16 left-0 2xl:right-2/3"
          )}
        >
          <ZigZagArrowSvg className="ml-10 rotate-[135deg]" size={30} />
          <span>{t("profile.photo.floki")}</span>
        </div>
      </div>
    </m.div>
  )
}
