import { cN } from "@/lib"
import { InputHTMLAttributes } from "react"

interface IInputText extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export default function InputText({
  label = "Label",
  type = "text",
  className,
  placeholder,
  ...inputProps
}: IInputText) {
  return (
    <label className={cN("input-group relative", className)}>
      <input
        className="input w-full border-4"
        type={type}
        {...inputProps}
        placeholder={placeholder ?? " "}
      />
      <span
        className={cN(
          "label",
          placeholder && "active",
          "absolute left-0 top-0 origin-top-left transition-all",
          "whitespace-nowrap bg-stone-50 font-bold [line-height:1.2]"
        )}
      >
        {label}
      </span>
    </label>
  )
}
