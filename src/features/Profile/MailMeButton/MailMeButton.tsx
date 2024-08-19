import { motion as m } from "framer-motion"
import dynamic from "next/dynamic"
import { useTranslation } from "react-i18next"

import { fadeInItem } from "@/animations/pageContainer"
import Title, { Tags } from "@/components/Title"
import { cN } from "@/lib"
import { type WithClassNameProps } from "@/types"
import Link from "next/link"

const Lottie = dynamic(() => import("lottie-react"), { ssr: false })

export default function MailMeButton({ className }: WithClassNameProps) {
  const [t] = useTranslation()

  return (
    <m.div
      variants={fadeInItem}
      className={cN(
        className,
        "flex mb-4 md:mb-0 mt-8 lg:mt-0 justify-center lg:justify-start self-center justify-self-start"
      )}
    >
      <Link className="group relative flex flex-col" href="/contact">
        <div className="order-1 lg:order-2 2xl:order-1 flex gap-4 items-center">
          <m.span
            initial={{ x: -100, y: 100, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.25, delay: 1.25 }}
            className="material-icons font-bold text-6xl md:text-7xl group-hover:text-red-400 transition-all group-hover:[transform:translate(10px,-10px)_!important]"
          >
            north_east
          </m.span>
          <Title
            tag={Tags.h1}
            className="group-hover:text-stone-50 transition-colors"
          >
            {t("profile.contact.email")}
          </Title>
        </div>
      </Link>
    </m.div>
  )
}
