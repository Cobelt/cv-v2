import { IPageProps } from "@/types"
import PageTitle from "@/components/PageTitle"
import PageTransition from "@/components/PageTransition"
import { cN } from "@/lib"
import Head from "next/head"

export default function Stack({ previousRoute }: IPageProps) {
  return (
    <PageTransition
      previousRoute={previousRoute}
      className="page:stack bg-blue-500 pt-8 px-8 pb-40 lg:pb-16 lg:pt-52 lg:px-[8vw] overflow-hidden"
    >
      <Head>
        <title>Mes compétences - polemil.dev</title>
      </Head>

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
          <h2 className="font-jostBold text-2xl">Concrètement</h2>

          <h4>Je sais ...</h4>
          <ul className="font-latoBold text-lg">
            <li>Développer un site vitrine</li>
            <li>Développer un site marchand</li>
            <li>Développer un backoffice</li>
            <li>Développer une app interne</li>
            <li>Développer une app mobile</li>
            <li>Maintenir et faire évoluer un projet</li>
            <li>Maitriser la couche métier d{"'"}un projet existant</li>
          </ul>
        </section>
        <section className="area-[techs]">
          <h2 className="font-jostBold text-2xl">Mes technos</h2>

          <ul className="font-latoBold text-lg">
            <h4 className="text-xl">Languages</h4>
            <li>JavaScript/TypeScript/EcmaScript 6+</li>
            <li>PHP</li>
            <li>Ruby</li>
            <li>C++</li>
            <li></li>
            <h4 className="text-xl">Framework Front</h4>
            <li>React</li>
            <li>Next</li>
            <li>Svelte</li>
            <li>Vue 2</li>
            <h4 className="text-xl">Framework Back</h4>
            <li>Symfony</li>
            <li>Ruby-On-Rails</li>
            <li>Silex</li>
            <li>Sharepoint</li>
            <h4 className="text-xl">Willing to learn</h4>
            <li>Cypress</li>
            <li>Dart + Flutter</li>
            <li>Svelte (more)</li>
            <li>Vue (more)</li>
          </ul>
        </section>

        <section className="area-[soft-skills]">
          <h2 className="font-jostBold text-2xl">Mes savoirs être</h2>

          <h4>Je sais ...</h4>
          <ul className="font-latoBold text-lg">
            <li>Travailler en équipe de tout taille</li>
            <li>Communiquer avec mes collègues</li>
            <li>M{"'"}adapter au besoin</li>
            <li>Prendre du recul</li>
            <li>Être créatif et inventif</li>
            <li>Être rigoureux et précis</li>
            <li>Être force de proposition</li>
            <li>Être versatile</li>
            <li>Être autonome</li>
          </ul>
        </section>
      </main>
    </PageTransition>
  )
}
