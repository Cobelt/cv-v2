import { motion as m } from "framer-motion"
import dynamic from "next/dynamic"
import { FormEventHandler, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

import mailSentAnimation from "@/animations/mailSent.json"
import Button from "@/components/Button"
import PageTitle from "@/components/PageTitle"
import PageTransition from "@/components/PageTransition"
import Title from "@/components/Title"
import Feat from "@/features/Contact"
import { cN } from "@/lib"
import { CONTACT_ME, type ContactDataType } from "@/queries/contact"
import { IPageProps } from "@/types"
import { useMutation } from "@apollo/client"
import Head from "next/head"
import { useLocalStorage } from "usehooks-ts"

const Lottie = dynamic(() => import("lottie-react"), { ssr: false })

const ONLY_WRONG_QUESTIONS = [
  "Trop pressé.e d'avoir une réponse ?",
  "Le numéro de contact ne vous plait pas ?",
  "Le formulaire était carrément sympa ?",
  "Une envie de spammer la conscience tranquille ?",
  "On y retourne ?",
]

export default function Contact({ previousRoute }: IPageProps) {
  const [t] = useTranslation()
  const [showThanks, setShowThanks] = useState(false)
  const [lastContactId, saveLastContactId] = useLocalStorage(
    "lastContactId",
    null
  )

  useEffect(() => {
    setShowThanks(!!lastContactId)
  }, [lastContactId])

  const [mutate, { data, loading, called }] =
    useMutation<ContactDataType>(CONTACT_ME)

  useEffect(() => {
    if (called && !loading && data) {
      setShowThanks(true)
    }
  }, [called, data, loading])

  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    mutate({
      variables: {
        data: {
          firstname: event.currentTarget.firstname.value,
          lastname: event.currentTarget.lastname.value,
          email: event.currentTarget.email.value,
          phone: event.currentTarget.phone.value,
          message: event.currentTarget.message.value,
        },
      },
    })
  }

  // const callApi = () => console.log("TODO: Call API discord server")
  return (
    <PageTransition
      headTitle="Contactez-moi"
      previousRoute={previousRoute}
      className="page:contact bg-red-400 overflow-hidden"
    >
      <Head>
        <meta name="robots" content="noindex" />
      </Head>

      <m.main
        className={cN(
          "grid gap-x-6 md:gap-x-10 gap-y-4 lg:gap-y-8 2xl:gap-y-10",
          "template-[base]",
          "h-full overflow-x-hidden overflow-y-auto 2xl:overflow-y-hidden no-scrollbar",
          "px-8 lg:px-[8vw] 2xl:px-[5rem] 2xl:pb-24"
        )}
      >
        <PageTitle className="area-[pagetitle]">{t("contact.me")}</PageTitle>

        {!showThanks ? (
          <Feat.Form
            className="area-[form]"
            onSubmit={onSubmit}
            loading={loading}
          />
        ) : (
          <div className="area-[form] flex flex-col gap-4 items-center bg-stone-50 m-20 p-12 rounded-xl">
            <Title.h1
              className="pb-6 justify-self-center mt-auto"
              text={`#${parseInt(data?.id ?? "0") < 10 ? "0" : ""}${
                data?.id ?? "?"
              } - Merci d'avoir pris contact !`}
            />
            <div className="relative py-12 px-32 -m-4">
              <div className="absolute inset-0 bg-indigo-200 rounded-full blur-2xl"></div>
              <Lottie
                animationData={mailSentAnimation}
                className="w-[14rem] -m-4"
              />
            </div>

            <Title.h6 className="flex items-center gap-2 mt-12">
              {
                ONLY_WRONG_QUESTIONS?.[
                  Math.floor(Math.random() * ONLY_WRONG_QUESTIONS.length)
                ]
              }{" "}
              Renvoyez moi un mail
              <span className="material-icons text-3xl text-indigo-500">
                south_west
              </span>
            </Title.h6>

            <div className="mb-auto">
              <Button
                type="button"
                onClick={() => setShowThanks(false)}
                text="J'ai besoin de renvoyer un mail !"
              />
            </div>
          </div>
        )}
      </m.main>
    </PageTransition>
  )
}
