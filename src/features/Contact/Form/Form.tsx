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
        "template-[form] grid gap-4 bg-stone-50 md:mx-20 my-auto p-8 md:p-12 rounded-xl",
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

      <div className="area-[infos] flex flex-wrap items-center justify-around flex-col md:flex-row mb-4">
        <Title.h6>{t("contact.email.text")}</Title.h6>
        <Button
          type="button"
          borderless
          color={Colors.BLUE}
          className="ml-4 group tooltiped overflow-visible"
          onClick={() => navigator.clipboard.writeText(AUTHOR.email)}
        >
          {/* <Title.h4 className="text-blue-500 order-1 lg:order-2 2xl:order-1 flex transition-colors"> */}

          <div className="flex  gap-4 items-center">
            <span className="material-icons">mail</span>
            <div className="">
              <span className="font-rubikBold whitespace-nowrap">
                {t("contact.email.btn")}
              </span>
            </div>
          </div>
          <span className="tooltip-active:bottom font-rubikReg text-base text-stone-800 ">
            {t("contact.email.copied")}
          </span>
          {/* </Title.h4> */}
        </Button>
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
