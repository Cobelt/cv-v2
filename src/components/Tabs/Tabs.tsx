import { useQuery } from "@apollo/client"
import { motion as m } from "framer-motion"
import { usePathname } from "next/navigation"
import { useTranslation } from "react-i18next"

import { container } from "@/animations/pageContainer"
import { cN, findMinimalDiff } from "@/lib"
import { GET_TABS, TabsDataType } from "@/queries/tabs"
import Tab from "../Tab"

export default function Tabs() {
  const pathname = usePathname()
  const [t] = useTranslation()
  const { data, loading } = useQuery<TabsDataType>(GET_TABS)

  const tabs = data?.tabs?.data ?? []

  const activeTab = tabs.find(({ attributes }) => attributes.url === pathname)
    ?.attributes?.order

  if (loading) return null

  return (
    <m.div
      variants={container}
      initial="hidden"
      animate="show"
      className={cN(
        "tabs lg:px-8 shadow-around",
        "flex lg:gap-x-12 justify-evenly lg:justify-between"
      )}
    >
      {tabs.map(({ attributes }) => {
        if (!attributes) return null
        const { key, order, url, icon } = attributes

        const minimalDiff = findMinimalDiff(tabs, activeTab ?? 0, order)
        const absoluteDiff = Math.abs(minimalDiff)

        let orderOnMobile
        if (absoluteDiff <= 2) {
          orderOnMobile = 3 + minimalDiff
        }

        return (
          <Tab
            key={key}
            id={key}
            url={url ?? "/" + key}
            index={order}
            orderOnMobile={orderOnMobile}
            className={cN(
              activeTab === order
                ? cN("active", "text-stone-50")
                : "text-stone-800 hover:text-stone-200"
            )}
            icon={icon}
            text={t(`tab.v2.${key}`, t(`tab.${key}`))}
          />
        )
      })}
    </m.div>
  )
}
