import { animate, useInView, useIsomorphicLayoutEffect } from "framer-motion"
import Link from "next/link"
import { useRef } from "react"

import { cN } from "@/lib"

interface IStat {
  count: number
  text: string
  href?: string
  target?: string
  arrowColor?: string
  counterAnimDuration?: number
  animateFrom?: number
}

export function Stat({
  counterAnimDuration = 1.5,
  animateFrom = 0,
  count,
  text,
  href,
  target,
  arrowColor,
}: IStat) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  useIsomorphicLayoutEffect(() => {
    const element = ref.current

    if (!element) return
    if (!inView) return

    // Set initial value
    element.textContent = String(animateFrom)

    // If reduced motion is enabled in system's preferences
    if (window.matchMedia("(prefers-reduced-motion)").matches) {
      element.textContent = String(count)
      return
    }

    const controls = animate(animateFrom, count, {
      duration: counterAnimDuration,
      ease: "easeOut",
      // ...animationOptions,
      onUpdate(value) {
        element.textContent = value.toFixed(0)
      },
    })

    // Cancel on unmount
    return () => {
      controls.stop()
    }
  }, [ref, inView, animateFrom, count])

  const Tag = href ? Link : "div"

  return (
    <Tag
      href={href ?? ""}
      target={href && target}
      className={cN(
        "flex-1 flex gap-1 self-end items-end justify-center",
        href && "group"
      )}
    >
      <div className="relative">
        <div
          ref={ref}
          className={cN(
            "text-[2rem] md:text-5xl xl:text-7xl font-rubikBold ![line-height:0.85]",
            href && "group-hover:text-stone-50 transition-colors"
          )}
        />
        {href && (
          <div
            className={cN(
              "text-2xl md:text-4xl xl:text-6xl absolute material-icons font-bold",
              "top-[0.2em] lg:top-[0.5em] right-[calc(100%+0.2em)] lg:right-[calc(100%+0.5em)] opacity-30 lg:opacity-0 ",
              "group-hover:top-0 group-hover:right-full group-hover:opacity-100 transition-all",
              arrowColor
            )}
          >
            north_east
          </div>
        )}
      </div>
      <div className="font-rubikReg text-xs md:text-sm xl:text-base">
        {text.split(" ").map((word) => (
          <div key={word}>{word}</div>
        ))}
      </div>
    </Tag>
  )
}
