import { motion as m } from "framer-motion"
import Link from "next/link"
import { CSSProperties } from "react"
import { useTranslation } from "react-i18next"

import Button, { Colors } from "@/components/Button"
import Inputs from "@/components/inputs"
import PageTitle from "@/components/PageTitle"
import PageTransition from "@/components/PageTransition"
import Title from "@/components/Title"
import { AUTHOR, cN } from "@/lib"
import { IPageProps } from "@/types"

export default function Contact({ previousRoute }: IPageProps) {
  const [t] = useTranslation()

  const callApi = () => console.log("TODO: Call API discord server")
  return (
    <PageTransition
      headTitle="Contactez-moi"
      previousRoute={previousRoute}
      className="page:contact bg-red-400 overflow-hidden"
    >
      <m.main
        className={cN(
          "grid gap-x-6 md:gap-x-10 gap-y-4 lg:gap-y-8 2xl:gap-y-10",
          "template-[base]",
          "h-full overflow-x-hidden overflow-y-auto 2xl:overflow-y-hidden no-scrollbar",
          "px-8 lg:px-[8vw] 2xl:px-[5rem] 2xl:pb-24"
        )}
      >
        <PageTitle className="area-[pagetitle]">{t("contact.me")}</PageTitle>

        <form
          className="area-[form] template-[form] grid gap-4 bg-stone-50 m-20 p-12 rounded-xl"
          onSubmit={callApi}
          style={
            {
              "--color-accent": "rgb(59 130 246)",
            } as CSSProperties
          }
        >
          <Title.h1 className="area-[title] pb-6 justify-self-center">
            Un petit formulaire rapidos
          </Title.h1>

          <Inputs.Text
            className="area-[firstname]"
            name="firstname"
            label="Prénom"
          />

          <Inputs.Text
            className="area-[lastname]"
            name="lastname"
            label="Nom"
          />

          <Inputs.Text className="area-[email]" name="email" label="E-mail" />

          <Inputs.Text
            className="area-[phone]"
            name="phone"
            label="N° de téléphone"
          />

          <Inputs.Area
            className="area-[message] self-stretch"
            name="message"
            label="Message"
          />

          <div className="area-[infos] flex items-center justify-around">
            <Title.h6>{t("contact.email.text")}</Title.h6>
            <Link
              className="group relative flex flex-col"
              href="/contact"
              onClick={() => navigator.clipboard.writeText(AUTHOR.email)}
            >
              <Title.h4 className="text-blue-500 order-1 lg:order-2 2xl:order-1 flex gap-4 items-center transition-colors">
                <span className="material-icons">mail</span>
                <div className="tooltiped">
                  <span className="group-hover:custom-underline font-rubikBold whitespace-nowrap">
                    {t("contact.email.btn")}
                  </span>
                  <span className="tooltip-active:bottom font-rubikReg text-base text-stone-800 ">
                    C{"'"}est copié !
                  </span>
                </div>
              </Title.h4>
            </Link>
          </div>

          <div className="order-1 lg:order-2 2xl:order-1 flex gap-4 items-center group-hover:text-stone-50 transition-colors"></div>

          <Button
            color={Colors.BLUE}
            className="area-[submit]"
            type="submit"
            borderless
          >
            Envoyer
          </Button>
        </form>
      </m.main>
    </PageTransition>
  )
}
