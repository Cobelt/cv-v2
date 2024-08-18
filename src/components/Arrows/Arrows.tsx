"use client"

import { useQuery } from "@apollo/client"
import { motion as m } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useRouter } from "next/router"
import { useState } from "react"
import { appearFromLeft, appearFromRight } from "../../animations/pageContainer"
import useOnScroll from "../../hooks/useOnScroll"
import { GET_TABS, TabsDataType } from "../../queries/tabs"

const SCROLL_LIMIT = 5

export default function Arrows() {
  const currentRoute = usePathname()
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
          className="hidden lg:block absolute left-0 top-1/2 bottom-1/2 z-20"
          {...appearFromLeft}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link
            href={previousTabUrl}
            onClick={() => setScrollQty(0)}
            tabIndex={10}
          >
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
          className="hidden lg:block absolute right-0 top-1/2 bottom-1/2 z-20"
          {...appearFromRight}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link href={nextTabUrl} onClick={() => setScrollQty(0)} tabIndex={11}>
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
