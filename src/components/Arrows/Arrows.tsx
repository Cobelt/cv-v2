import Link from "next/link"
import { motion as m } from "framer-motion"
import { GET_TABS, TabsDataType } from "@/queries/tabs"
import { appearFromLeft, appearFromRight } from "@/animations/pageContainer"
import { useQuery } from "@apollo/client"
import { useRef, useState } from "react"
import useOnScroll from "@/hooks/useOnScroll"
import { useRouter } from "next/router"

const SCROLL_LIMIT = 5

export interface TabType {
  url: string
  text: string
  icon: string
  tabIndex?: number
  currentTab: string
}

export default function Arrows({
  currentRoute,
}: {
  currentRoute: string | null
}) {
  const [scrollQty, setScrollQty] = useState(0)
  const { data } = useQuery<TabsDataType>(GET_TABS)
  const tabs = data?.tabs?.data ?? []

  const currentTabIndex = tabs.findIndex(
    (tab) => tab.attributes.url === currentRoute
  )
  const previousTabUrl = tabs?.[currentTabIndex - 1]?.attributes?.url
  const nextTabUrl = tabs?.[currentTabIndex + 1]?.attributes?.url

  const { push } = useRouter()

  const onScroll = (url: string) => (scrollDirection: number) => {
    let newScrollQty =
      Math.sign(scrollQty) === Math.sign(scrollDirection)
        ? scrollQty + Math.sign(scrollDirection)
        : Math.sign(scrollDirection)

    if (Math.abs(newScrollQty) >= SCROLL_LIMIT) {
      newScrollQty = 0
      if (url) {
        push(url)
      }
    }

    setScrollQty(newScrollQty)
  }

  useOnScroll(onScroll(previousTabUrl), onScroll(nextTabUrl), [
    previousTabUrl,
    nextTabUrl,
  ])

  if (currentTabIndex === -1) return null

  return (
    <>
      {previousTabUrl && (
        <m.div
          className="hidden md:block absolute left-0 top-1/2 bottom-1/2"
          {...appearFromLeft}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link href={previousTabUrl} onClick={() => setScrollQty(0)}>
            <span
              className="material-icons text-4xl lg:text-6xl"
              style={{
                transform: `scale(${
                  1 + (scrollQty < 0 ? Math.abs(scrollQty) / 5 : 0)
                })`,
                transformOrigin: "center left",
                transition: "transform 0.25s",
              }}
            >
              arrow_back
            </span>
          </Link>
        </m.div>
      )}
      {nextTabUrl && (
        <m.div
          className="hidden md:block absolute right-0 top-1/2 bottom-1/2"
          {...appearFromRight}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link href={nextTabUrl} onClick={() => setScrollQty(0)}>
            <span
              className="material-icons text-4xl lg:text-6xl"
              style={{
                transform: `scale(${
                  1 + (scrollQty > 0 ? Math.abs(scrollQty) / 5 : 0)
                })`,
                transformOrigin: "center right",
                transition: "transform 0.25s",
              }}
            >
              arrow_forward
            </span>
          </Link>
        </m.div>
      )}
    </>
  )
}
