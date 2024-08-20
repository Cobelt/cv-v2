import { cN } from "@/lib"
import { TextareaHTMLAttributes } from "react"

interface ITextAreaText extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
}

export default function TextArea({
  label = "Label",
  className,
  placeholder,
  ...inputProps
}: ITextAreaText) {
  return (
    <label className={cN("input-group relative", className)}>
      <textarea
        className="input w-full h-full border-4"
        {...inputProps}
        placeholder={placeholder ?? " "}
      />
      <span
        className={cN(
          "label",
          placeholder && "active",
          "absolute left-0 top-0 origin-top-left transition-all",
          "whitespace-nowrap bg-stone-50 rounded-lg font-bold [line-height:1.2]"
        )}
      >
        {label}
      </span>
    </label>
  )
}
