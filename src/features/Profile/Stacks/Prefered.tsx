import { fadeInItem } from "@/animations/pageContainer"
import TextWithTooltip from "@/components/TextWithTooltip"
import { cN } from "@/lib"
import { WithClassNameProps } from "@/types"
import { motion as m } from "framer-motion"
import { useTranslation } from "react-i18next"

export default function Prefered({ className }: WithClassNameProps) {
  const [t] = useTranslation()

  return (
    <>
      <m.section
        variants={fadeInItem}
        className={cN(
          className,
          "relative flex flex-col lg:flex-row lg:gap-40",
          "text-2xl 3xl:text-3xl font-jostBold selection:bg-none"
        )}
      >
        <div
          className={cN(
            "pill group flex justify-left items-center justify-items-center gap-4",
            "pl-8 pr-4 cursor-pointer bg-blue-500 text-stone-50 rounded-full",
            "h-12 lg:h-20 min-w-[20rem] 3xl:min-w-[25rem] w-full lg:w-[18vw] lg:hover:w-[20vw] 2xl:hover:w-[25vw] lg:active:w-[100%_!important] transition-all",
            "active:bg-stone-50 active:text-stone-800 lg:active:bg-blue-500 lg:active:text-stone-50"
          )}
        >
          <h4 className="flex-1 whitespace-nowrap text-ellipsis overflow-hidden">
            {t("profile.stack.prefered")}
          </h4>
          <span
            className={cN(
              "material-icons font-bold text-3xl lg:text-5xl",
              "rotate-90 lg:rotate-0 group-active:translate-y-16 group-active:rotate-180 lg:group-active:translate-y-0 lg:group-active:rotate-180 transition-transform"
            )}
          >
            chevron_right
          </span>
        </div>
        <ul
          className={cN(
            "lg:absolute inset-0 h-20",
            "grid grid-cols-2 md:flex justify-between items-center whitespace-nowrap transition-colors",
            "pr-12 md:pr-16 xl:pr-24 2xl:pr-40 ml-6 md:ml-20 lg:ml-[clamp(20rem,25vw,50%)]",
            "scrolling-text"
          )}
        >
          <TextWithTooltip className="text-center" tag="li" tooltip="Chokbar">
            <span className="linked bubbles">React</span>
          </TextWithTooltip>
          <TextWithTooltip className="text-center" tag="li" tooltip="De">
            <span className="linked-2 bubbles">Typescript</span>
          </TextWithTooltip>
          <TextWithTooltip className="hidden lg:flex" tag="li" tooltip="Baisé">
            Tailwind
          </TextWithTooltip>
          <TextWithTooltip className="text-center" tag="li" tooltip="Wtf">
            GraphQL
          </TextWithTooltip>
          <TextWithTooltip className="text-center" tag="li" tooltip="Lolilol">
            Strapi
          </TextWithTooltip>
        </ul>
      </m.section>
    </>
  )
}
