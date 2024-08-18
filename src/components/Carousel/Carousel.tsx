import { type ICard } from "@/types"
import { useState } from "react"
import Card from "../Card"
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

const cards: ICard[] = [
  {
    image: {
      url: "https://media.istockphoto.com/id/1672317574/photo/ama-dablam-mountain-peak.webp?b=1&s=170667a&w=0&k=20&c=Ea8yDEHpUemrRuMZUKGPDBE11YTWVksIupMN8FkEBf8=",
      alt: "Image card X",
      width: 800,
      height: 400,
    },
    title: "Card 1",
    description: "This is the description for card 1.",
  },
  {
    image: {
      url: "https://via.placeholder.com/800x400/00FF00/FFFFFF?text=Card+2",
      alt: "Image card X",
      width: 800,
      height: 400,
    },
    title: "Card 2",
    description: "This is the description for card 2.",
  },
  {
    image: {
      url: "https://via.placeholder.com/800x400/0000FF/FFFFFF?text=Card+3",
      alt: "Image card X",
      width: 800,
      height: 400,
    },
    title: "Card 3",
    description: "This is the description for card 3.",
  },
]

export default function Carousel() {
  const [index, setIndex] = useState(0)

  const nextSlide = () => {
    setIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1))
  }

  return (
    <div className="flex items-center justify-between">
      <Card {...cards[0]} />
      {/* <button
        className="bg-black bg-opacity-50 text-stone-50 rounded-full p-2 hover:bg-opacity-75 focus:outline-none"
        onClick={prevSlide}
      >
        <span className="material-icons">chevron_left</span>
      </button>
      <AnimatePresence initial={false}>
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
      </AnimatePresence>
      <button
        className="bg-black bg-opacity-50 text-stone-50 rounded-full p-2 hover:bg-opacity-75 focus:outline-none"
        onClick={nextSlide}
      >
        <span className="material-icons">chevron_right</span>
      </button> */}
    </div>
  )
}
