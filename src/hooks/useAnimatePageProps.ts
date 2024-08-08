import { useMediaQuery } from "usehooks-ts"

import {
  appearFromBottom,
  appearFromLeft,
  appearFromRight,
  appearFromTop,
} from "@/animations/pageContainer"
import { GET_TABS, TabsDataType } from "@/queries/tabs"
import { useQuery } from "@apollo/client"
import { usePathname } from "next/navigation"

const useAnimatePageProps = (previousRoute: string) => {
  const matches = useMediaQuery("(min-width: 768px)")
  const { data } = useQuery<TabsDataType>(GET_TABS)
  const currentRoute = usePathname()

  const tabs = data?.tabs?.data ?? []

  const currentTabIndex = tabs.findIndex(
    (tab) => tab.attributes.url === currentRoute
  )
  const previousTabIndex = tabs.findIndex(
    (tab) => tab.attributes.url === previousRoute
  )

  if (matches) {
    return currentTabIndex > previousTabIndex ? appearFromRight : appearFromLeft
  }
  return currentTabIndex > previousTabIndex ? appearFromBottom : appearFromTop
}

export default useAnimatePageProps
