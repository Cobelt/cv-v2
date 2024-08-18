import { cN } from "@/lib"
import { CSSProperties } from "react"

interface IDashBorder {
  weight?: number
  height?: number
  width?: number
  className?: string
  style?: CSSProperties
  circle?: boolean
  rectClassName?: string
}
export default function DashBorder({
  className,
  style,
  weight = 4,
  width,
  height,
  circle,
  rectClassName,
}: IDashBorder) {
  return (
    <svg
      className={cN(className, "absolute top-0 left-0 w-full h-full")}
      xmlns="http://www.w3.org/2000/svg"
      style={
        {
          "--width": weight,
          style,
        } as CSSProperties
      }
    >
      <rect
        x={weight / 2}
        y={weight / 2}
        rx={circle ? "50%" : "30"}
        ry={circle ? "50%" : "30"}
        fill="none"
        strokeLinecap="round"
        stroke="currentColor"
        strokeWidth={weight}
        strokeDasharray="20, 20"
        className={cN(rectClassName)}
        style={{
          width: `calc((${width ?? "100%"} - var(--width)) * 1px)`,
          height: `calc((${height ?? "100%"} - var(--width)) * 1px)`,
          maxWidth: "100%",
          maxHeight: "100%",
          transition: "all 0.15s, stroke-dashoffset 0.5s",
        }}
      />
    </svg>
  )
}
