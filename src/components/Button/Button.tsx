import { cN } from "@/lib"
import { ButtonHTMLAttributes, ReactNode } from "react"

export enum Colors {
  INDIGO = "indigo",
  PURPLISH = "purplish",
  BLACK = "black",
}

interface IButton
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  children?: ReactNode
  text?: string
  icon?: string
  color?: Colors
  notRounded?: boolean
  borderless?: boolean
  noPressAnim?: boolean
}

const BUTTON_COLOR = {
  [Colors.BLACK]: "text-stone-800 hover:text-stone-50 active:text-stone-200",
  [Colors.INDIGO]: "text-indigo-500 hover:text-stone-50 active:text-stone-200",
  [Colors.PURPLISH]:
    "text-purplish-600 hover:text-stone-50 active:text-stone-200",
}

const BUTTON_BG = {
  [Colors.BLACK]: "hover:bg-stone-800 active:bg-stone-900",
  [Colors.INDIGO]: "hover:bg-indigo-500 active:bg-indigo-600",
  [Colors.PURPLISH]: "hover:bg-purplish-600 active:bg-purplish-700",
}

const BUTTON_BORDER = {
  [Colors.BLACK]: "border-stone-800 active:border-stone-900",
  [Colors.INDIGO]: "border-indigo-500 active:border-indigo-600",
  [Colors.PURPLISH]: "border-purplish-600 active:border-purplish-700",
}

const BORDERLESS_COLOR = {
  [Colors.BLACK]: "text-stone-200 hover:text-stone-50",
  [Colors.INDIGO]: "text-stone-200 hover:text-stone-50",
  [Colors.PURPLISH]: "text-stone-200 hover:text-stone-50",
}
const BORDERLESS_BG = {
  [Colors.BLACK]: "bg-stone-800 hover:bg-stone-900 active:bg-stone-950",
  [Colors.INDIGO]: "bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700",
  [Colors.PURPLISH]:
    "bg-purplish-600 hover:bg-purplish-700 active:bg-purplish-800",
}

export default function Button({
  children,
  text,
  icon,
  color = Colors.INDIGO,
  notRounded = false,
  borderless = false,
  noPressAnim = false,
  ...otherProps
}: IButton) {
  return (
    <button
      {...otherProps}
      className={cN(
        "flex justify-center items-center outline-none hover:shadow-lg active:shadow-sm",
        "font-archivo px-5 py-2.5 transition-all",
        !borderless && "border-4",
        !notRounded && "rounded-lg",
        !noPressAnim && "active:translate-y-0.5",
        borderless ? BORDERLESS_COLOR[color] : BUTTON_COLOR[color],
        borderless ? BORDERLESS_BG[color] : BUTTON_BG[color],
        !borderless && BUTTON_BORDER[color]
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
