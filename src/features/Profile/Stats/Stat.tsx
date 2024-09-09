import { animate, useInView, useIsomorphicLayoutEffect } from "framer-motion"
import Link from "next/link"
import { useRef } from "react"

import { cN } from "@/lib"

interface IStat {
  count: number
  text: string
  href?: string
  target?: string
  className?: string
  countClassName?: string
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
  countClassName,
  className,
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
        "stat flex-1 flex gap-1 self-end items-end justify-start md:justify-center",
        href && "group",
        className
      )}
    >
      <div
        ref={ref}
        className={cN(
          "count relative contain-layout",
          "text-[2rem] md:text-5xl lg:text-6xl xl:text-7xl font-rubikBold ![line-height:0.85]",
          href && "has-link group-hover:text-stone-50 transition-colors",
          countClassName,
          "group-hover:after:top-0 group-hover:after:right-full group-hover:after:opacity-100"
        )}
      />
      <div className="font-rubikReg text-xs md:text-sm lg:text-base">
        {text.split(" ").map((word) => (
          <div key={word}>{word}</div>
        ))}
      </div>
    </Tag>
  )
}
