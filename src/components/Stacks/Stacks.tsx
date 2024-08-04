import { motion as m } from "framer-motion"
import { fadeInItem } from "@/animations/pageContainer"
import { useTranslation } from "react-i18next"

export function Prefered() {
  const [t] = useTranslation()

  return (
    <m.section
      variants={fadeInItem}
      className="hidden md:flex row-start-4 relative col-span-5 text-2xl 3xl:text-3xl font-jostBold gap-40 selection:bg-none"
    >
      <div className="group cursor-pointer pill bg-blue-500 rounded-full w-[18vw] h-20 hover:w-[20vw] transition-all active:w-full text-white justify-left items-center flex gap-4 pl-8 pr-4">
        <h4 className="flex-1 whitespace-nowrap text-ellipsis overflow-hidden">
          {t("profile.stack.prefered")}
        </h4>
        <span className="material-icons font-bold text-xl lg:text-5xl group-active:rotate-180 transition-transform">
          chevron_right
        </span>
      </div>
      <ul className="absolute inset-0 flex flex-wrap justify-between pr-40 ml-[25vw] h-20 items-center transition-all">
        <li>React</li>
        <li>Typescript</li>
        <li>Tailwind</li>
        <li>GraphQL</li>
        <li>Strapi</li>
      </ul>
    </m.section>
  )
}

export function Other() {
  const [t] = useTranslation()

  return (
    <m.section
      variants={fadeInItem}
      className="hidden md:flex row-start-5 relative col-span-5 text-2xl 3xl:text-3xl font-jostBold gap-40 selection:bg-none"
    >
      <div className="group cursor-pointer pill bg-blue-400 rounded-full w-[23vw] h-20 hover:w-[25vw] transition-all active:w-full text-white justify-left items-center flex gap-4 pl-8 pr-4">
        <h4 className="flex-1 whitespace-nowrap text-ellipsis overflow-hidden">
          {t("profile.stack.other")}
        </h4>
        <span className="material-icons font-bold text-xl lg:text-5xl group-active:rotate-180 transition-transform">
          chevron_right
        </span>
      </div>
      <ul className="absolute inset-0 flex flex-wrap justify-between pr-40 ml-[30vw] h-20 items-center transition-all">
        <li>Next</li>
        <li>React Native</li>
        <li>SCSS</li>
        <li>API Rest</li>
        <li>Symfony</li>
      </ul>
    </m.section>
  )
}
