import { motion as m } from "framer-motion"
import { useTranslation } from "react-i18next"
import { fadeInItem } from "../../animations/pageContainer"
import { WithClassNameProps } from "../../types"
import { cN } from "@/lib"
import TextWithTooltip from "../TextWithTooltip"

export function Prefered({ className }: WithClassNameProps) {
  const [t] = useTranslation()

  return (
    <>
      <m.section
        variants={fadeInItem}
        className={cN(
          className,
          "relative hidden sm:flex flex-col lg:flex-row lg:gap-40",
          "text-2xl 3xl:text-3xl font-jostBold selection:bg-none"
        )}
      >
        <div
          className={cN(
            "pill group flex justify-left items-center gap-4",
            "pl-8 pr-4 cursor-pointer bg-blue-500 text-white rounded-full",
            "w-full h-20 lg:w-[18vw] lg:hover:w-[20vw] active:bg-white active:text-stone-800 lg:active:bg-blue-500 lg:active:text-white lg:active:w-full transition-all"
          )}
        >
          <h4 className="flex-1 whitespace-nowrap text-ellipsis overflow-hidden">
            {t("profile.stack.prefered")}
          </h4>
          <span
            className={cN(
              "material-icons font-bold text-3xl lg:text-5xl",
              "rotate-90 lg:rotate-0 group-active:translate-y-20 group-active:rotate-180 lg:group-active:translate-y-0 lg:group-active:rotate-180 transition-transform"
            )}
          >
            chevron_right
          </span>
        </div>
        <ul
          className={cN(
            "lg:absolute inset-0 h-20",
            "flex justify-between items-center whitespace-nowrap transition-colors",
            "pr-20 ml-20 lg:pr-30 2xl:pr-40 lg:ml-[25vw]"
          )}
        >
          <TextWithTooltip tag="li" tooltip="Chokbar">
            React
          </TextWithTooltip>
          <TextWithTooltip tag="li" tooltip="De">
            Typescript
          </TextWithTooltip>
          <TextWithTooltip tag="li" tooltip="Baisé">
            Tailwind
          </TextWithTooltip>
          <TextWithTooltip tag="li" tooltip="Wtf">
            GraphQL
          </TextWithTooltip>
          <TextWithTooltip tag="li" tooltip="Lolilol">
            Strapi
          </TextWithTooltip>
        </ul>
      </m.section>
    </>
  )
}

export function Other({ className }: WithClassNameProps) {
  const [t] = useTranslation()

  return (
    <m.section
      variants={fadeInItem}
      className={cN(
        className,
        "relative hidden sm:flex flex-col lg:flex-row lg:gap-40",
        "text-2xl 3xl:text-3xl font-jostBold selection:bg-none"
      )}
    >
      <div
        className={cN(
          "pill group flex justify-left items-center gap-4",
          "pl-8 pr-4 cursor-pointer bg-blue-500 text-white rounded-full",
          "w-full h-20 lg:w-[23vw] lg:hover:w-[25vw] active:bg-white active:text-stone-800 lg:active:bg-blue-500 lg:active:text-white lg:active:w-full transition-all"
        )}
      >
        <h4 className="flex-1 whitespace-nowrap text-ellipsis overflow-hidden">
          {t("profile.stack.other")}
        </h4>
        <span
          className={cN(
            "material-icons font-bold text-3xl lg:text-5xl",
            "rotate-90 lg:rotate-0 group-active:translate-y-20 group-active:rotate-180 lg:group-active:translate-y-0 lg:group-active:rotate-180 transition-transform"
          )}
        >
          chevron_right
        </span>
      </div>
      <ul
        className={cN(
          "lg:absolute inset-0 h-20",
          "flex justify-between items-center whitespace-nowrap transition-colors",
          "pr-20 ml-20 lg:pr-30 2xl:pr-40 lg:ml-[30vw]"
        )}
      >
        <li>Next</li>
        <li>React Native</li>
        <li>SCSS</li>
        <li>API Rest</li>
        <li>Symfony</li>
      </ul>
    </m.section>
  )
}
