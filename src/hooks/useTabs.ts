import { GET_TABS, type TabsDataType } from "@/queries/tabs"
import { useQuery } from "@apollo/client"
import { usePathname } from "next/navigation"

const useTabs = () => {
  const currentRoute = usePathname()
  const { data, loading } = useQuery<TabsDataType>(GET_TABS)
  const tabs = data?.tabs?.data ?? []

  const currentTabIndex = tabs.findIndex(
    (tab) => tab.attributes.url === currentRoute
  )
  const previousTab =
    currentTabIndex - 1 >= 0
      ? tabs?.[currentTabIndex - 1]
      : tabs?.[tabs?.length - 1]
  const nextTab =
    currentTabIndex + 1 < tabs?.length ? tabs?.[currentTabIndex + 1] : tabs?.[0]

  return {
    loading,
    tabs,
    previousTab,
    nextTab,
    currentTab: currentTabIndex >= 0 ? tabs?.[currentTabIndex] : null,
  }
}

export default useTabs
