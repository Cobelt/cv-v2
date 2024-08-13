import { cN } from "@/lib"
import { WithClassNameProps } from "@/types"
import Link from "next/link"
import { CSSProperties } from "react"

export default function Logo({ className }: WithClassNameProps) {
  return (
    <Link href="/">
      <h2
        className={cN(
          "group text-3xl xl:text-5xl font-bukhari min-w-20 underline-rounded",
          className
        )}
        style={
          {
            "--underline-color": "#fff",
          } as CSSProperties
        }
      >
        <div className="mr-3">Polémil</div>
        <div className="bounce-in relative">
          <span
            className={cN(
              "w-2 h-2 bg-white rounded-full inline-block origin-[-0.55rem_bottom] xl:origin-[-0.45rem_bottom] opacity-100 [transition:transform_0s,opacity_0.3s_0.55s]",
              "group-hover:rotate-[134deg] group-hover:opacity-0 group-hover:[transition:transform_0.2s_0s,opacity_0s_0.55s]"
            )}
            style={{
              transition: "",
            }}
          />
        </div>
      </h2>
    </Link>
  )
}
