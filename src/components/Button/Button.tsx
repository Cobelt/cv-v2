import { cN } from "@/lib"
import { ButtonHTMLAttributes, ReactNode } from "react"

export enum Colors {
  INDIGO = "indigo",
  PURPLISH = "purplish",
  BLACK = "black",
  BLUE = "blue",
}

interface IButton
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  children?: ReactNode
  text?: string
  icon?: string
  color?: Colors
  rounded?: boolean
  borderless?: boolean
  noPressAnim?: boolean
  padding?: string
}

const BUTTON_COLOR = {
  [Colors.BLACK]: "text-stone-800 hover:text-stone-50 active:text-stone-200",
  [Colors.INDIGO]: "text-indigo-500 hover:text-stone-50 active:text-stone-200",
  [Colors.BLUE]: "text-blue-500 hover:text-stone-50 active:text-stone-200",
  [Colors.PURPLISH]:
    "text-purplish-600 hover:text-stone-50 active:text-stone-200",
}

const BUTTON_BG = {
  [Colors.BLACK]: "hover:bg-stone-800 active:bg-stone-900",
  [Colors.INDIGO]: "hover:bg-indigo-500 active:bg-indigo-600",
  [Colors.BLUE]: "hover:bg-blue-500 active:bg-blue-600",
  [Colors.PURPLISH]: "hover:bg-purplish-600 active:bg-purplish-700",
}

const BUTTON_BORDER = {
  [Colors.BLACK]: "border-stone-800 active:border-stone-900",
  [Colors.INDIGO]: "border-indigo-500 active:border-indigo-600",
  [Colors.BLUE]: "border-blue-500 active:border-blue-600",
  [Colors.PURPLISH]: "border-purplish-600 active:border-purplish-700",
}

const BORDERLESS_COLOR = {
  [Colors.BLACK]: "text-stone-200 hover:text-stone-50",
  [Colors.INDIGO]: "text-stone-200 hover:text-stone-50",
  [Colors.BLUE]: "text-stone-200 hover:text-stone-50",
  [Colors.PURPLISH]: "text-stone-200 hover:text-stone-50",
}
const BORDERLESS_BG = {
  [Colors.BLACK]: "bg-stone-800 hover:bg-stone-900 active:bg-stone-950",
  [Colors.INDIGO]: "bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700",
  [Colors.BLUE]: "bg-blue-500 hover:bg-blue-600 active:bg-blue-700",
  [Colors.PURPLISH]:
    "bg-purplish-600 hover:bg-purplish-700 active:bg-purplish-800",
}
const SHADOW_COLOR = {
  [Colors.BLACK]: "after:border-stone-950",
  [Colors.INDIGO]: "after:border-indigo-700",
  [Colors.BLUE]: "after:border-blue-700",
  [Colors.PURPLISH]: "after:border-purplish-800",
}

export default function Button({
  children,
  text,
  icon,
  color = Colors.INDIGO,
  rounded = false,
  borderless = false,
  noPressAnim = false,
  padding,
  className,
  ...otherProps
}: IButton) {
  return (
    <button
      {...otherProps}
      className={cN(
        "flex justify-center items-center outline-none hover:shadow-lg active:shadow-sm",
        "font-archivo transition-all text-lg md:text-xl",
        "overflow-hidden text-ellipsis whitespace-nowrap",
        padding ?? "px-3 py-2 md:px-5 md:py-2.5",
        !borderless && "border-4",
        rounded && "rounded-lg",
        !noPressAnim && "active:translate-y-0.5",
        borderless ? BORDERLESS_COLOR[color] : BUTTON_COLOR[color],
        borderless ? BORDERLESS_BG[color] : BUTTON_BG[color],
        borderless &&
          "relative after:absolute after:inset-0 after:border-b-4 after:border-r-4",
        borderless ? SHADOW_COLOR[color] : BUTTON_BORDER[color],
        className
      )}
    >
      {children}

      <div className="flex gap-2 justify-center items-center">
        {text && <span>{text}</span>}
        {icon && (
          <span className="material-icons text-3xl font-bold">{icon}</span>
        )}
      </div>
    </button>
  )
}
