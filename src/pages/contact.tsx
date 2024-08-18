import PageTitle from "@/components/PageTitle"
import PageTransition from "@/components/PageTransition"
import { cN } from "@/lib"
import { IPageProps } from "@/types"

export default function Contact({ previousRoute }: IPageProps) {
  return (
    <PageTransition
      headTitle="Contactez-moi"
      previousRoute={previousRoute}
      className="page:hobbies bg-red-400 pt-8 px-8 pb-32 lg:pb-16 lg:pt-52 lg:px-[8vw] overflow-hidden"
    >
      <main
        className={cN(
          "grid gap-x-6 md:gap-x-10 gap-y-4 lg:gap-y-8 2xl:gap-y-10",
          "template-[base]",
          "h-full overflow-x-hidden overflow-y-hidden"
        )}
      >
        <PageTitle className="area-[pagetitle]">Get in touch</PageTitle>

        <div className="area-[about] bg-stone-50 m-20 p-12 rounded-xl">
          Contactez moi
        </div>
      </main>
    </PageTransition>
  )
}
