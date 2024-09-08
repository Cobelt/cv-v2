import PageTitle from "@/components/PageTitle"
import PageTransition from "@/components/PageTransition"
import Title from "@/components/Title"
import { cN } from "@/lib"
import { type IPageProps } from "@/types"
import { motion as m } from "framer-motion"
import { useRouter } from "next/router"
import { useTranslation } from "react-i18next"

export default function Error404({ previousRoute }: IPageProps) {
  const [t] = useTranslation()
  const router = useRouter()

  return (
    <PageTransition
      headTitle="Erreur 404"
      previousRoute={previousRoute}
      className="page:error bg-red-400 overflow-hidden"
    >
      <m.main
        className={cN(
          "grid gap-x-6 md:gap-x-10 gap-y-4 lg:gap-y-8 2xl:gap-y-10",
          "template-[base]",
          "h-full overflow-x-hidden overflow-y-auto 2xl:overflow-y-hidden no-scrollbar",
          "px-8 lg:px-[8vw] 2xl:px-[5rem] 2xl:pb-24"
        )}
      >
        <PageTitle className="area-[pagetitle]">Erreur 404</PageTitle>

        <div className="area-[close] flex items-center ">
          <button
            onClick={router.back}
            className={cN(
              "material-icons text-4xl lg:text-5xl 2xl:text-6xl text-stone-50",
              "masked-border  before:border-blue-500"
            )}
          >
            close
          </button>
        </div>

        <div
          className="area-[gif] w-full flex flex-col items-center"
          itemProp="video"
          itemScope
          itemType="http://schema.org/VideoObject"
        >
          <Title.h3
            className="mb-6"
            text="Il semblerait que vous vous soyez perdu ?"
          />
          <meta
            itemProp="keywords"
            content="Maes B,Lost In A Field,Pulp Fiction,John Travolta,gif,animated gif,gifs,meme"
          />
          <meta itemProp="dateCreated" content="2019-08-21T13:55:46.603Z" />
          <meta itemProp="uploadDate" content="2019-08-21T13:55:46.603Z" />
          <meta itemProp="author" content="MrKuma" />
          <meta itemProp="creator" content="MrKuma" />
          <meta
            itemProp="embedUrl"
            content="https://tenor.com/embed/6702153591631323153"
          />
          <meta itemProp="representativeOfPage" content="false" />
          <meta
            itemProp="url"
            content="https://tenor.com/fr/view/maes-b-lost-in-a-field-pulp-fiction-john-travolta-gif-14829328"
          />
          <meta itemProp="duration" content="PT0M6S" />
          <meta
            itemProp="contentUrl"
            content="https://media.tenor.com/XQLVLptLIBEAAAPo/maes-b-lost-in-a-field.mp4"
          />
          <meta itemProp="width" content="640" />
          <meta itemProp="height" content="640" />
          <div className="aspect-square max-h-[50vh] max-w-[50vh]">
            <video
              width="833"
              height="833"
              loop
              autoPlay
              preload="auto"
              playsInline
            >
              <source
                src="https://media.tenor.com/XQLVLptLIBEAAAPo/maes-b-lost-in-a-field.mp4"
                type="video/mp4"
              />
              <source
                src="https://media.tenor.com/XQLVLptLIBEAAAPs/maes-b-lost-in-a-field.webm"
                type="video/webm"
              />
            </video>
          </div>
        </div>
      </m.main>
    </PageTransition>
  )
}
