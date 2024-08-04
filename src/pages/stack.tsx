import { motion as m } from "framer-motion"
import {
  animate,
  appearFromLeft,
  appearFromRight,
  container,
  item,
} from "@/animations/pageContainer"
import useAnimatePageProps from "@/hooks/useAnimatePageProps"
import { IPageProps } from "@/types"

export default function Stack({ previousRoute, currentRoute }: IPageProps) {
  const animatePageProps = useAnimatePageProps(previousRoute, currentRoute)

  const counterAnimation =
    animatePageProps == appearFromLeft ? appearFromRight : appearFromLeft

  return (
    <m.div
      {...animate(animatePageProps)}
      className="absolute top-0 left-0 w-full h-full bg-pink-300 lg:px-48 px-12"
    >
      <main className="pt-12 pb-52 lg:pb-12 lg:pt-72 grid gap-10 grid-cols-3">
        <div className="p-1 font-archivo overflow-hidden col-span-3">
          <m.h1
            {...counterAnimation}
            className="text-3xl text-center lg:text-7xl lg:text-right"
          >
            Mes compétences
          </m.h1>
        </div>

        <section>
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
        <section>
          <h2 className="font-jostBold text-2xl">Mes compétences techniques</h2>

          <ul className="font-latoBold text-xl">
            <li className="text-xl">React</li>
            <li className="text-xl">...</li>
          </ul>
        </section>

        <section>
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

        <div className="h-40 col-span-3"></div>
      </main>
    </m.div>
  )
}
