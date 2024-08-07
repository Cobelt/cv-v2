import { useQuery } from "@apollo/client"
import { usePathname } from "next/navigation"
import { motion as m } from "framer-motion"
import { useTranslation } from "react-i18next"

import Tab from "../Tab"
import { GET_TABS, TabsDataType } from "@/queries/tabs"
import { container } from "@/animations/pageContainer"

export default function Tabs() {
  const pathname = usePathname()
  const [t] = useTranslation()
  const { data, loading } = useQuery<TabsDataType>(GET_TABS)

  const tabs = data?.tabs?.data ?? []

  if (loading) return null
  return (
    <m.div
      variants={container}
      initial="hidden"
      animate="show"
      className="tabs flex flex-wrap gap-x-16 w-full px-8 shadow-around absolute left-0 right-0 bottom-0 lg:sticky z-20"
    >
      {tabs.map(({ attributes }, index) => {
        return (
          <Tab
            key={attributes.key}
            id={attributes.key}
            url={attributes.url ?? "/" + attributes.key}
            tabIndex={index + 1}
            currentTab={pathname}
            icon={attributes.icon}
            text={t(`tab.${attributes.key}`)}
          />
        )
      })}
    </m.div>
  )
}
