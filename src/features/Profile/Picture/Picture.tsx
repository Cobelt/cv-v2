import { motion as m } from "framer-motion"
import { useTranslation } from "react-i18next"
import Image from "next/image"

import { fadeInItem } from "@/animations/pageContainer"
import pictureOfMe from "@/../public/me.jpg"
import ZigZagArrowSvg from "../../../components/icons/ZigZagArrow"
import { WithClassNameProps } from "@/types"
import { cN } from "@/lib"

export default function Picture({ className }: WithClassNameProps) {
  const [t] = useTranslation()

  return (
    <m.div
      variants={fadeInItem}
      className={cN(
        className,
        "flex sm:items-center sm:justify-end lg:justify-start",
        "group mt-auto sm:mb-auto relative"
      )}
    >
      <Image
        className="flex-1 lg:flex-[initial] hover:scale-105 border-blue-500 border-8 rounded-full md:overflow-hidden aspect-square object-cover transition-transform"
        src={pictureOfMe}
        alt={t("profile.photo.floki")}
        style={{
          width: "calc(3em + 12vw)",
          maxWidth: "14rem",
          minHeight: "5rem",
          minWidth: "5rem",
        }}
      />
      <div className="hidden lg:flex group-hover:opacity-100 opacity-0 transition-opacity flex-col-reverse absolute -top-16 left-0 2xl:left-2/3 z-10 w-auto text-nowrap text-lg font-rubikBold">
        <ZigZagArrowSvg
          className="ml-10 2xl:ml-0 -rotate-[135deg] 2xl:-rotate-45"
          size={30}
        />
        <span>{t("profile.photo.me")}</span>
      </div>
      <div className="hidden lg:flex group-hover:opacity-100 opacity-0 transition-opacity flex-col absolute -bottom-16 left-0 2xl:left-2/3 z-10 w-auto text-nowrap text-lg font-rubikBold">
        <ZigZagArrowSvg
          className="ml-10 2xl:ml-0 rotate-[135deg] 2xl:rotate-45"
          size={30}
        />
        <span>{t("profile.photo.floki")}</span>
      </div>
    </m.div>
  )
}
