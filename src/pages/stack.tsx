import { IPageProps } from "@/types"
import PageTitle from "@/components/PageTitle"
import PageTransition from "@/components/PageTransition"
import { cN } from "@/lib"

export default function Stack({ previousRoute }: IPageProps) {
  return (
    <PageTransition
      previousRoute={previousRoute}
      className="page:stack bg-blue-500 pt-8 px-8 pb-40 lg:pb-16 lg:pt-52 lg:px-[8vw] overflow-hidden"
    >
      <main
        className={cN(
          "grid gap-x-6 md:gap-x-10 gap-y-4 lg:gap-y-8 2xl:gap-y-10",
          "template-[base] 2xl:template-[2xl]",
          "h-full overflow-x-hidden overflow-y-auto 2xl:overflow-y-hidden no-scrollbar",
          "2xl:px-[5rem] 2xl:pb-24"
        )}
      >
        <PageTitle className="area-[pagetitle]">
          <span className="hover:[letter-spacing:0.3rem] transition-all">
            Mes compétences
          </span>
        </PageTitle>

        <section className="area-[know-how]">
          <h2 className="font-jostBold text-2xl">Mes savoirs faire</h2>

          <h4>Je sais ...</h4>
          <ul className="font-latoBold text-xl">
            <li className="text-xl">Développer un site vitrine</li>
            <li className="text-xl">Développer un site marchand</li>
            <li className="text-xl">Développer un backoffice</li>
            <li className="text-xl">Développer une app interne</li>
            <li className="text-xl">Développer une app mobile</li>
            <li className="text-xl">Maintenir et faire évoluer un projet</li>
            <li className="text-xl">
              Maitriser la couche métier d{"'"}un projet existant
            </li>
          </ul>
        </section>
        <section className="area-[techs]">
          <h2 className="font-jostBold text-2xl">Mes compétences techniques</h2>

          <ul className="font-latoBold text-xl">
            <li className="text-xl">React</li>
            <li className="text-xl">...</li>
          </ul>
        </section>

        <section className="area-[soft-skills]">
          <h2 className="font-jostBold text-2xl">Mes savoirs être</h2>

          <h4>Je sais ...</h4>
          <ul className="font-latoBold text-xl">
            <li className="text-xl">Travailler en équipe de tout taille</li>
            <li className="text-xl">Communiquer avec mes collègues</li>
            <li className="text-xl">M{"'"}adapter au besoin</li>
            <li className="text-xl">Prendre du recul</li>
            <li className="text-xl">Être créatif et inventif</li>
            <li className="text-xl">Être rigoureux et précis</li>
            <li className="text-xl">Être force de proposition</li>
            <li className="text-xl">Être versatile</li>
            <li className="text-xl">Être autonome</li>
          </ul>
        </section>
      </main>
    </PageTransition>
  )
}
