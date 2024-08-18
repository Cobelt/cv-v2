import { fadeInItem } from "@/animations/pageContainer"
import { cN } from "@/lib"
import { WithClassNameProps } from "@/types"
import { motion as m } from "framer-motion"
import { useTranslation } from "react-i18next"

export default function Other({ className }: WithClassNameProps) {
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
          "pl-8 pr-4 cursor-pointer bg-blue-500 text-stone-50 rounded-full",
          "h-12 lg:h-20 min-w-[26rem] 3xl:min-w-[32rem] w-full lg:w-[23vw] lg:hover:w-[25vw] 2xl:hover:w-[30vw] lg:active:w-[100%_!important] transition-all",
          "active:bg-stone-50 active:text-stone-800 lg:active:bg-blue-500 lg:active:text-stone-50"
        )}
      >
        <h4 className="flex-1 whitespace-nowrap text-ellipsis overflow-hidden">
          {t("profile.stack.other")}
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
          "flex justify-between items-center whitespace-nowrap transition-colors",
          "pr-20 lg:pr-30 2xl:pr-40 ml-20 lg:ml-[clamp(28rem,30vw,50%)]"
        )}
      >
        <li>Next</li>
        <li className="hidden 2xl:flex">React Native</li>
        <li>SCSS</li>
        <li>API Rest</li>
        <li>Symfony</li>
      </ul>
    </m.section>
  )
}
