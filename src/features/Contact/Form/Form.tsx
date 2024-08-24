import Link from "next/link"
import { CSSProperties, FormEventHandler } from "react"
import { useTranslation } from "react-i18next"

import Button, { Colors } from "@/components/Button"
import Inputs from "@/components/inputs"
import Title from "@/components/Title"
import { AUTHOR, cN } from "@/lib"

interface IForm {
  loading: boolean
  onSubmit: FormEventHandler<HTMLFormElement>
  className?: string
}
export default function Form({ className, onSubmit, loading = false }: IForm) {
  const [t] = useTranslation()
  return (
    <form
      className={cN(
        "template-[form] grid gap-4 bg-stone-50 md:m-20 p-8 md:p-12 rounded-xl",
        className
      )}
      onSubmit={onSubmit}
      style={
        {
          "--color-accent": "rgb(59 130 246)",
        } as CSSProperties
      }
    >
      <Title.h1 className="area-[title] pb-6 justify-self-center">
        Un petit form
        <span className="hidden md:inline">ulaire </span>
        <span className="md:hidden inline">{"' "}</span>
        rapidos
      </Title.h1>

      <Inputs.Text
        className="area-[firstname]"
        name="firstname"
        label="Prénom *"
        required
      />

      <Inputs.Text
        className="area-[lastname]"
        name="lastname"
        label="Nom *"
        required
      />

      <Inputs.Text
        className="area-[email]"
        name="email"
        label="E-mail *"
        type="email"
        required
      />

      <Inputs.Text
        className="area-[phone]"
        name="phone"
        label="N° de téléphone (+33)"
        pattern="^\+33[1-9][0-9]{8}$"
      />

      <Inputs.Area
        className="area-[message] self-stretch"
        name="message"
        label="Message"
      />

      <div className="area-[infos] flex items-center justify-around flex-col md:flex-row">
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
        disabled={loading}
      >
        {loading ? (
          <span className="material-icons text-3xl">pending</span>
        ) : (
          "Envoyer"
        )}
      </Button>
    </form>
  )
}
