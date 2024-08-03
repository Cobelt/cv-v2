import { appearFromLeft, appearFromRight } from "@/animations/pageContainer"
import { GET_TABS, TabsDataType } from "@/queries/tabs"
import { useQuery } from "@apollo/client"

const useAnimatePageProps = (currentRoute: string, previousRoute: string) => {
  const { data } = useQuery<TabsDataType>(GET_TABS)
  const tabs = data?.tabs?.data ?? []

  const currentTabIndex = tabs.findIndex(
    (tab) => tab.attributes.url === currentRoute
  )
  const previousTabIndex = tabs.findIndex(
    (tab) => tab.attributes.url === previousRoute
  )
  return currentTabIndex > previousTabIndex ? appearFromLeft : appearFromRight
}

export default useAnimatePageProps
