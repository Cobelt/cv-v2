import { ApolloProvider } from "@apollo/client"
import { AnimatePresence, motion as m } from "framer-motion"
import i18n from "i18next"
import Backend from "i18next-http-backend"
import { AppProps } from "next/app"
import Head from "next/head"
import { initReactI18next } from "react-i18next"

import { container, fadeInItem } from "@/animations/pageContainer"
import client from "@/apollo"
import usePreviousRoute from "@/hooks/usePreviousRoute"
import { API_URL, AUTHOR, cN, SITE_DESCRIPTION, THUMBNAIL_URL } from "@/lib"
import { IPageProps } from "@/types"

import Arrows from "@/components/Arrows"
import Logo from "@/components/Logo"
import Tabs from "@/components/Tabs"
import SVG from "@/components/svg"

import "@/styles/_globals.scss"
import "@/styles/animations.scss"
import "@/styles/inputs.scss"
import "@/styles/pages.scss"
import "@/styles/transitions.scss"
import "@fontsource/material-icons-rounded"

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
        <link rel="shortcut icon" href="/icon/favicon.ico" />
        <meta name="description" content={SITE_DESCRIPTION} />
        {/* Meta keywords (optionnel, moins utilisé de nos jours) */}
        <meta
          name="keywords"
          content="CV en ligne, développeur Web, full-stack, front-end, React, JavaScript, TypeScript, développeur, portfolio"
        />

        {/* Auteur */}
        <meta
          name="author"
          content={`${AUTHOR.firstname} ${AUTHOR.lastname}`}
        />

        {/* Open Graph (pour un meilleur partage sur les réseaux sociaux) */}
        <meta property="og:image" content={THUMBNAIL_URL} />
        <meta
          property="og:title"
          content={`${AUTHOR.firstname} ${AUTHOR.lastname} - Développeur Web spécialisé sur React`}
        />
        <meta
          property="og:description"
          content={`Découvrez le CV en ligne de ${AUTHOR.firstname} ${AUTHOR.lastname}, développeur Web Full-Stack spécialisé en React / TypeScript.`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://polemil.dev" />

        {/* Twitter Card (pour un meilleur affichage sur Twitter) */}
        <meta name="twitter:image" content={THUMBNAIL_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${AUTHOR.firstname} ${AUTHOR.lastname} - Développeur Web spécialisé sur React`}
        />
        <meta
          name="twitter:description"
          content={`Découvrez le CV en ligne de ${AUTHOR.firstname} ${AUTHOR.lastname}, développeur Web Full-Stack spécialisé en React / TypeScript.`}
        />
      </Head>

      <div
        className={cN(
          "relative text-stone-800 font-rubikReg h-screen overflow-hidden",
          "py-6 lg:py-16 px-8 lg:px-[8vw] 2xl:px-[calc(5rem_+_3vw)] 3xl:px-[8vw]"
        )}
      >
        <div className="flex justify-between lg:hidden sticky z-30">
          <Logo />

          <m.details variants={container}>
            <m.summary variants={fadeInItem} className="list-none">
              <SVG.flags.France className="h-8 w-8 rounded-lg" />
            </m.summary>
            <m.span variants={fadeInItem}>
              <SVG.flags.GreatBritain className="h-8 w-8 rounded-lg" />
            </m.span>
            <m.span variants={fadeInItem}>
              <SVG.flags.Russia className="h-8 w-8 rounded-lg" />
            </m.span>
          </m.details>
        </div>
        <div className="flex items-center lg:w-full absolute left-0 right-0 bottom-0 lg:sticky z-30 mb-8 lg:mb-0">
          <Logo className="hidden lg:flex" />
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
