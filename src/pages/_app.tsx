import { AppProps } from "next/app"
import { motion as m, AnimatePresence } from "framer-motion"
import { ApolloProvider } from "@apollo/client"
import i18n from "i18next"
import Backend from "i18next-http-backend"
import { initReactI18next } from "react-i18next"
import Head from "next/head"

import client from "@/apollo"
import { API_URL } from "@/lib"
import usePreviousRoute from "@/hooks/usePreviousRoute"
import { IPageProps } from "@/types"

import Arrows from "@/components/Arrows"
import Tabs from "@/components/Tabs"
import Logo from "@/components/Logo"

import "@fontsource/material-icons-rounded"
import "@/styles/globals.scss"
import "@/styles/animations.scss"
import "@/styles/pages.scss"

i18n
  .use(Backend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    lng: "fr", // if you're using a language detector, do not define the lng option
    fallbackLng: ["fr", "en", "ru"],

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },

    backend: {
      loadPath: `${API_URL}/i18n/{{lng}}`,
      crossDomain: true,
    },
  })

function MyApp({ Component, pageProps, router }: AppProps<IPageProps>) {
  const previousRoute = usePreviousRoute()

  return (
    <ApolloProvider client={client}>
      <Head>
        <meta name="description" content="CV de Paul-Emile Moreau" />
        <link rel="shortcut icon" href="/icon/favicon.ico" />
      </Head>
      <div className="text-stone-800 font-latoBold relative h-screen overflow-hidden py-6 md:py-16 px-8 lg:px-[8vw] 2xl:px-[calc(5rem_+_3vw)] 3xl:px-[8vw]">
        <div className="flex sticky z-30">
          <Logo className="flex xl:hidden" />
        </div>
        <div className="flex lg:w-full absolute left-0 right-0 bottom-0 lg:sticky z-30">
          <Logo className="hidden xl:flex" />
          <div className="flex-1">
            <Tabs />
          </div>
        </div>
        <AnimatePresence initial={false}>
          <Component
            {...pageProps}
            previousRoute={previousRoute}
            key={router.pathname}
          />
        </AnimatePresence>
        <Arrows />
      </div>
    </ApolloProvider>
  )
}

export default MyApp
