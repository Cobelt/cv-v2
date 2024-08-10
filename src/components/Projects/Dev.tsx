import { cN } from "@/lib"
import Image from "next/image"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const CAROUSEL_DATA = [
  {
    id: 1,
    title: "Swiper Carousel Example",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
    imageAlt: "Things",
    imageUrl: "https://picsum.photos/200",
  },
  {
    id: 2,
    title: "Swiper Carousel Example",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
    imageAlt: "Stuff",
    imageUrl: "https://picsum.photos/200",
  },
  {
    id: 3,
    title: "Swiper Carousel Example",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
    imageAlt: "Something",
    imageUrl: "https://picsum.photos/200",
  },
]

export default function Dev({ className }: { className: string }) {
  return (
    <section className={className}>
      <h2 className="font-jostBold text-2xl">Projets liés au dev</h2>
      <Carousel>
        {CAROUSEL_DATA.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-xl">
            <Image
              src={item.imageUrl}
              alt={item.imageAlt}
              width={200}
              height={200}
            />
            <h2>{item.title}</h2>
            <p className="legend">{item.text}</p>
          </div>
        ))}
      </Carousel>
    </section>
  )
}
