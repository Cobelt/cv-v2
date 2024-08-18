import { type ICard } from "@/types"
import Image from "next/image"

export default function Card({ image, title, description }: ICard) {
  return (
    <div
      className="relative grid rounded-lg"
      style={{
        gridTemplateRows: "1fr auto",
        gridTemplateAreas: '"img" "overlap"',
      }}
    >
      <div className="area-[img/overlap]">
        <Image
          src={image.url}
          alt={image.alt}
          className="object-cover rounded-lg"
          width={image.width}
          height={image.height}
        />
      </div>
      <section className="area-[overlap] flex flex-col text-stone-50 bg-[#0000006C] z-10 bg-blend-multiply">
        <h2 className="text-center text-xl mt-2">{title}</h2>
        <p className="text-center text-sm text-gray-600">{description}</p>
      </section>
    </div>
  )
}
