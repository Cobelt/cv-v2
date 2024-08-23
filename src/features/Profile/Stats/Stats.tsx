import { cN } from "@/lib"
import { WithClassNameProps } from "@/types"
import { animate, useInView, useIsomorphicLayoutEffect } from "framer-motion"
import Link from "next/link"
import { useRef } from "react"

interface IStat {
  count: number
  text: string
  href?: string
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
      className={cN(
        "flex-1 flex gap-1 self-end items-end justify-center",
        href && "group"
      )}
    >
      <div className="relative">
        <div
          ref={ref}
          className={cN(
            "text-5xl md:text-7xl font-rubikBold [line-height:0.85_!important]",
            href && "group-hover:text-stone-50 transition-colors"
          )}
        />
        {href && (
          <div
            className={cN(
              "text-5xl md:text-6xl absolute material-icons font-bold",
              "top-1/2 right-[150%] group-hover:top-0 group-hover:right-full opacity-0 group-hover:opacity-100 transition-all",
              arrowColor
            )}
          >
            north_east
          </div>
        )}
      </div>
      <div className="font-rubikReg text-sm md:text-base">
        {text.split(" ").map((word) => (
          <div key={word}>{word}</div>
        ))}
      </div>
    </Tag>
  )
}

export default function Stats({ className }: WithClassNameProps) {
  return (
    <div
      className={cN("w-full gap-12 grid grid-cols-2 lg:grid-cols-4", className)}
    >
      <Stat
        href="/timeline"
        arrowColor="text-indigo-400"
        count={6}
        text="ans d'expérience"
      />
      <Stat
        href="/projects"
        arrowColor="text-purplish-600"
        count={14}
        text="projets web"
      />
      <Stat
        href="/stack"
        arrowColor="text-blue-500"
        count={25}
        text="technos domptées"
      />
      <Stat count={42} text="machin chose" />
    </div>
  )
}
