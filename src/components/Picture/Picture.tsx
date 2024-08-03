import { motion as m } from "framer-motion"
import { useTranslation } from "react-i18next"
import Image from "next/image"

import { fadeInItem } from "@/animations/pageContainer"
import pictureOfMe from "@/../public/me.jpg"
import ZigZagArrowSvg from "../icons/ZigZagArrow"

export default function Picture() {
  const [t] = useTranslation()

  return (
    <m.div
      variants={fadeInItem}
      className="group relative row-start-2 col-start-1 lg:col-start-5 col-span-2 lg:col-span-1 flex justify-end lg:justify-start items-center"
    >
      <Image
        className="hover:scale-105 border-blue-500 border-8 rounded-full overflow-hidden aspect-square object-cover transition-transform"
        src={pictureOfMe}
        alt={t("profile.photo.floki")}
        style={{
          width: "calc(3em + 12vw)",
          maxWidth: "14rem",
          minHeight: "5rem",
          minWidth: "5rem",
        }}
      />
      <div className="flex group-hover:opacity-100 opacity-0 transition-opacity flex-col-reverse absolute top-6 left-2/3 z-10 w-auto text-nowrap text-lg font-rubikBold">
        <ZigZagArrowSvg className="-rotate-45" size={30} />
        <span>{t("profile.photo.me")}</span>
      </div>
      <div className="flex group-hover:opacity-100 opacity-0 transition-opacity flex-col absolute bottom-6 left-2/3 z-10 w-auto text-nowrap text-lg font-rubikBold">
        <ZigZagArrowSvg className="rotate-45" size={30} />
        <span>{t("profile.photo.floki")}</span>
      </div>
    </m.div>
  )
}
