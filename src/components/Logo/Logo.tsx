import { cN } from "@/lib"
import { WithClassNameProps } from "@/types"
import Link from "next/link"

export default function Logo({ className }: WithClassNameProps) {
  return (
    <Link href="/">
      <h2
        className={cN(
          "group flex text-3xl md:text-5xl font-bukhari min-w-20",
          "underline-rounded underline-stone-50",
          className
        )}
      >
        <div className="mr-2 md:mr-3">Polémil</div>
        <div className="bounce-in relative">
          <span
            className={cN(
              "w-1.5 md:w-2 h-1.5 md:h-2 bg-stone-50 rounded-full inline-block origin-[-0.62rem_bottom] md:origin-[-0.55rem_bottom] xl:origin-[-0.45rem_bottom]",
              "opacity-100 group-hover:opacity-0 group-hover:rotate-[115deg] md:group-hover:rotate-[134deg]",
              "[transition:transform_0s,opacity_0.3s_0.55s] group-hover:[transition:transform_0.2s_0s,opacity_0s_0.55s]"
            )}
          />
        </div>
      </h2>
    </Link>
  )
}
