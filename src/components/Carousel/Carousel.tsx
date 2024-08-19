import { AnimatePresence, motion as m } from "framer-motion"
import { CSSProperties, useEffect, useState } from "react"

import { container, fadeInItem } from "@/animations/pageContainer"
import { cN } from "@/lib"
import { type ICard } from "@/types"
import Button, { Colors } from "../Button"
import Card from "../Card"
import Github from "../icons/Github"

// export default function Carousel({ children }: { children: ReactNode }) {
//   return (
//     <m.div
//       {...animate(container)}
//       className="slide"
//       // drag="x"
//       // onDrag={detectPaginationGesture}
//       // onDragStart={() => (hasPaginated.current = false)}
//       // onDragEnd={() => (hasPaginated.current = true)}
//       // Snap the component back to the center
//       // if it hasn't paginated
//       // dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
//       // This will be used for components to resolve all
//       // other variants, in this case initial and animate.
//       // custom={direction}
//     >
//       {children}
//     </m.div>
//   )
// }

interface ICarousel {
  cards: ICard[]
  className?: string
  index?: number
  setIndex?(index: number): void
  link?: string
  githubLink?: string
}

export default function Carousel({
  className,
  cards,
  index,
  setIndex,
  link,
  githubLink,
}: ICarousel) {
  const [_index, _setIndex] = useState(0)

  useEffect(() => {
    if (index !== undefined) _setIndex(index)
  }, [index])

  useEffect(() => {
    if (_index !== undefined) setIndex?.(_index)
  }, [_index, setIndex])

  const nextSlide = () => {
    _setIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    _setIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1))
  }

  return (
    <div className={className}>
      <m.div variants={fadeInItem} className="w-full overflow-hidden">
        <div
          className={cN(
            "flex items-stretch justify-between transition-all duration-300"
          )}
          style={
            {
              "--index": index,
              transform: "translateX(calc(-100% * var(--index))",
            } as CSSProperties
          }
        >
          {cards?.map((card) => (
            <Card
              key={card.title}
              className="min-w-full min-h-full border-4 border-stone-50 border-dashed"
              noOverlay
              {...card}
            />
          ))}
        </div>
      </m.div>

      <AnimatePresence>
        <div className="flex justify-between mt-4">
          <m.div
            variants={container}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex gap-8"
          >
            {link && (
              <m.a
                variants={fadeInItem}
                href={link}
                target="_blank"
                className={cN(
                  "group w-10 h-10 xl:w-12 xl:h-12 aspect-square",
                  "flex items-center justify-center",
                  "bg-stone-800 hover:bg-stone-50 text-purplish-400 rounded-full transition-colors"
                )}
              >
                <span
                  className={cN(
                    "material-icons font-bold transition-transform",
                    "text-[2.75rem] xl:text-[3.25rem]",
                    "-translate-x-1 translate-y-1 group-hover:-translate-x-1.5 group-hover:translate-y-1.5",
                    "xl:-translate-x-1.5 xl:translate-y-1.5 xl:group-hover:-translate-x-2.5 xl:group-hover:translate-y-2.5"
                  )}
                >
                  north_east
                </span>
              </m.a>
            )}
            {githubLink && (
              <m.a
                variants={fadeInItem}
                href={githubLink}
                target="_blank"
                className="hover:text-stone-50 transition-colors"
              >
                <Github className="w-10 xl:w-12" />
              </m.a>
            )}
          </m.div>
          <m.div className="flex gap-8">
            <Button
              color={Colors.BLACK}
              className="bg-black bg-opacity-50 text-stone-50 rounded-full p-2 hover:bg-opacity-75 focus:outline-none"
              onClick={prevSlide}
              icon="chevron_left"
              notRounded
              borderless
            />
            {/* <AnimatePresence initial={false}>
        <div
          className="relative grid rounded-lg"
          style={{
            gridTemplateRows: "auto 1fr",
            gridTemplateAreas: '"img" "overlap"',
          }}
        >
          <m.div
            key={index}
            initial={{ opacity: 0, x: 100, width: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, width: "0%" }}
            transition={{ duration: 0.5 }}
          > 
            
          </m.div>
        </div>
      </AnimatePresence> */}
            <Button
              color={Colors.BLACK}
              className="bg-black bg-opacity-50 text-stone-50 rounded-full p-2 hover:bg-opacity-75 focus:outline-none"
              onClick={nextSlide}
              icon="chevron_right"
              notRounded
              borderless
            />
          </m.div>
        </div>
      </AnimatePresence>
    </div>
  )
}
