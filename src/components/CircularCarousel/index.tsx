import { CSSProperties, useEffect, useRef, useState } from "react"
import { motion as m } from "framer-motion"
import { findMinimalDiff } from "@/lib"

const START_ANGLE = 360

interface ICarouselItem {
  key: string
  thumbnailIcon?: string
  activeImageUrl?: string
  mainColor?: string
}

interface ICircularCarouselProps {
  items: Array<ICarouselItem>
  counterClockwise?: boolean
  onActiveChange?(active: number): void
}

export default function CircularCarousel({
  items,
  counterClockwise,
  onActiveChange,
}: ICircularCarouselProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [circleWidth, setCircleWidth] = useState(
    ref?.current?.clientWidth ?? 400
  )
  const [active, _setActive] = useState(0)
  const [stackedRotation, setStackedRotation] = useState(0)
  const previousActive = useRef(0)
  const dividedAngle = 360 / items.length

  useEffect(() => {
    if (!ref.current) return
    const resizeObserver = new ResizeObserver(() => {
      setCircleWidth(ref?.current?.clientWidth ?? 400)
    })
    resizeObserver.observe(ref.current)
    return () => resizeObserver.disconnect() // clean up
  }, [])

  function setActive(index: number) {
    const minimalDiff = findMinimalDiff(items, active, index)

    previousActive.current = active
    _setActive(index)
    setStackedRotation(stackedRotation + minimalDiff * dividedAngle)
    onActiveChange?.(index)
  }

  return (
    <div
      className="flex max-w-full"
      style={
        {
          "--item-width": "8rem",
          padding: "calc(var(--item-width) / 2)",
        } as CSSProperties
      }
    >
      <div
        ref={ref}
        className="max-w-full order-2 relative transition-transform duration-300 border-2 border-stone-800 rounded-full aspect-square"
        style={{
          transform: `rotate(${
            (counterClockwise ? -1 : 1) * stackedRotation
          }deg)`,
        }}
      >
        {items.map(({ key, thumbnailIcon }, index) => {
          const angle =
            START_ANGLE + (counterClockwise ? 1 : -1) * index * dividedAngle

          return (
            <m.button
              key={key}
              initial={{
                transform: "rotate(0deg) translate(0) rotate(0deg)",
                opacity: 0,
              }}
              animate={{
                transform: `rotate(${angle}deg) translate(${
                  circleWidth / 2
                }px) rotate(-${angle}deg)`,
                opacity: 1,
              }}
              transition={{ duration: 0.75 }}
              onTap={() => setActive(index)}
              className="absolute flex items-center justify-center duration-300 top-1/2 left-1/2 aspect-square bg-teal-700 text-white rounded-full"
              style={{
                width: "var(--item-width)",
                margin: "calc(-1 * var(--item-width) / 2)",
                boxShadow: "0 0 15px #333",
              }}
            >
              <span
                className="material-icons text-5xl max-w-12 transition-transform duration-300"
                style={{
                  transform: `rotate(${
                    (counterClockwise ? 1 : -1) * stackedRotation
                  }deg)`,
                }}
              >
                {thumbnailIcon}
              </span>
            </m.button>
          )
        })}
      </div>
      {/* <div
        className="order-1 flex items-center justify-center h-16 w-24 text-center my-auto font-bold cursor-pointer [text-orientation:upright] [writing-mode:vertical-lr]"
        onClick={() =>
          setActive(active - 1 < 0 ? items.length - 1 : active - 1)
        }
      >
        PREC
      </div>
      <div
        className="order-3 flex items-center justify-center h-16 w-24 text-center my-auto font-bold cursor-pointer [text-orientation:upright] [writing-mode:vertical-lr]"
        onClick={() => setActive((active + 1) % items.length)}
      >
        SUIV
      </div> */}
    </div>
  )
}
