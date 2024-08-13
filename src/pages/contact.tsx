import Link from "next/link"
import { motion as m } from "framer-motion"
import { appearFromBottom, container, item } from "../animations/pageContainer"
import PageTitle from "@/components/PageTitle"
import { cN } from "@/lib"
import PageTransition from "@/components/PageTransition"
import { IPageProps } from "@/types"

export default function Contact({ previousRoute }: IPageProps) {
  return (
    <PageTransition
      headTitle="Contactez-moi"
      previousRoute={previousRoute}
      className="page:hobbies bg-greenish-400 pt-8 px-8 pb-32 lg:pb-16 lg:pt-52 lg:px-[8vw] overflow-hidden"
    >
      <main
        className={cN(
          "grid gap-x-6 md:gap-x-10 gap-y-4 lg:gap-y-8 2xl:gap-y-10",
          "template-[base]",
          "h-full overflow-x-hidden overflow-y-hidden"
        )}
      >
        <PageTitle
          className="area-[pagetitle]"
          subTitle="En dehors du développement"
        >
          Get in touch
        </PageTitle>

        <div className="area-[about] bg-white m-20 p-12 rounded-xl">
          Contactez moi
        </div>
      </main>
    </PageTransition>
  )
}
