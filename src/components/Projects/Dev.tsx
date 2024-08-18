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

      {/* <Slider dots infinite speed={500} slidesToShow={1} slidesToScroll={1}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider> */}
      {/* <Carousel>
        {CAROUSEL_DATA.map((item) => (
          <div key={item.id} className="bg-stone-50 p-4 rounded-xl ">
            <Image
              src={item.imageUrl}
              alt={item.imageAlt}
              width={2000}
              height={2000}
              className="aspect-square max-h-[30rem] max-w-[30rem]"
            />
            <h2>{item.title}</h2>
            <p className="legend">{item.text}</p>
          </div>
        ))}
      </Carousel> */}
    </section>
  )
}
