"use client"

import useTabs from "@/hooks/useTabs"
import { motion as m } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { appearFromLeft, appearFromRight } from "../../animations/pageContainer"

export default function Arrows() {
  const [scrollQty, setScrollQty] = useState(0)
  const { previousTab, currentTab, nextTab } = useTabs()
  const previousTabUrl = previousTab?.attributes?.url
  const nextTabUrl = nextTab?.attributes?.url

  if (!currentTab) return null

  return (
    <>
      {previousTabUrl && (
        <m.div
          className="group hidden lg:block absolute left-0 top-1/2 z-20"
          {...appearFromLeft}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link
            className="block group-hover:-translate-x-1.5 transition-transform"
            href={previousTabUrl}
            onClick={() => setScrollQty(0)}
            tabIndex={10}
          >
            <span
              className="material-icons text-5xl lg:text-7xl"
              style={{
                transform: `scale(${
                  1 + (scrollQty < 0 ? Math.abs(scrollQty) / 5 : 0)
                })`,
                transformOrigin: "center left",
                transition: "transform 0.25s",
              }}
            >
              chevron_left
            </span>
          </Link>
        </m.div>
      )}

      {nextTabUrl && (
        <m.div
          className="group hidden lg:block absolute right-0 top-1/2 z-20"
          {...appearFromRight}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link
            className="block group-hover:translate-x-1.5 transition-transform"
            href={nextTabUrl}
            onClick={() => setScrollQty(0)}
            tabIndex={11}
          >
            <span
              className="material-icons text-5xl lg:text-7xl"
              style={{
                transform: `scale(${
                  1 + (scrollQty > 0 ? Math.abs(scrollQty) / 5 : 0)
                })`,
                transformOrigin: "center right",
                transition: "transform 0.25s",
              }}
            >
              chevron_right
            </span>
          </Link>
        </m.div>
      )}
    </>
  )
}
