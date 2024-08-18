import { motion as m } from "framer-motion"
import dynamic from "next/dynamic"
import { useTranslation } from "react-i18next"

import { fadeInItem } from "@/animations/pageContainer"
import { cN } from "@/lib"
import { type WithClassNameProps } from "@/types"
import Link from "next/link"

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
      <Link
        className="group relative flex flex-col"
        href="/contact"
        // onClick={() => navigator.clipboard.writeText(EMAIL)}
      >
        {/* <Lottie
          animationData={arrowAnimation}
          className={cN(
            "absolute top-full left-40 z-0",
            "order-2 lg:order-1 2xl:order-2 self-end",
            "w-36 lg:w-48 2xl:56 3xl:w-60 max-h-48",
            "2xl:top-[calc(100%_+_2rem)] 2xl:rotate-[20deg]"
          )}
        /> */}

        <div className="order-1 lg:order-2 2xl:order-1 flex gap-4 items-center group-hover:text-stone-50 transition-colors">
          <m.span
            initial={{ x: "-1000%", y: "1000%", opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
            className="material-icons font-bold text-6xl md:text-7xl"
          >
            north_east
          </m.span>
          <div className="relative">
            <span className="font-archivo text-xl md:text-3xl 2xl:text-4xl">
              {t("profile.contact.email")}
            </span>
            <span className="inline-block bg-stone-50 w-2 h-2 rounded-full" />
            <span className="absolute -bottom-3 left-0 right-0 text-center text-lg opacity-0 text-stone-800 group-hover:opacity-100 group-hover:translate-y-3 transition-all duration-300 delay-200">
              {EMAIL}
            </span>
          </div>
        </div>
      </Link>
    </m.div>
  )
}
