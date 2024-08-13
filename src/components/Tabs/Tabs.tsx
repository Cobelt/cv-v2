import { useQuery } from "@apollo/client"
import { usePathname } from "next/navigation"
import { motion as m } from "framer-motion"
import { useTranslation } from "react-i18next"

import Tab from "../Tab"
import { GET_TABS, TabsDataType } from "@/queries/tabs"
import { container } from "@/animations/pageContainer"
import { cN, findMinimalDiff } from "@/lib"
import { EDUCATIONS } from "@/constants"

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
        "tabs mb-12 lg:px-8 shadow-around",
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
                ? cN("active", "text-white")
                : "text-stone-800 hover:text-stone-300"
            )}
            icon={icon}
            text={t(`tab.v2.${key}`, t(`tab.${key}`))}
          />
        )
      })}
    </m.div>
  )
}
