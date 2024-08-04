import { useRouter } from "next/router"
import { useQuery } from "@apollo/client"
import { motion as m } from "framer-motion"
import { useTranslation } from "react-i18next"

import Tab from "../Tab"
import { GET_TABS, TabsDataType } from "@/queries/tabs"
import { container } from "@/animations/pageContainer"

export default function Tabs() {
  const { asPath } = useRouter()
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
      {tabs?.length > 0 &&
        tabs.map((tab, index) => {
          const { attributes } = tab
          return (
            <Tab
              key={attributes.key}
              id={attributes.key}
              url={attributes.url ?? "/" + attributes.key}
              tabIndex={index}
              currentTab={asPath}
              icon={attributes.icon}
              text={t(`tab.${attributes.key}`)}
            />
          )
        })}
    </m.div>
  )
}
