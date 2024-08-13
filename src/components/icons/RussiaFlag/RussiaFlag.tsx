import { IIcon } from "../../../types"

export default function RussiaFlag({
  size,
  height = size,
  width = size,
  className,
  style,
  shouldntPreserveRatio = false,
}: IIcon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      viewBox="0 0 3 3"
      className={className}
      style={style}
      preserveAspectRatio={shouldntPreserveRatio ? "none" : undefined}
    >
      <path fill="#fff" d="M0 0h3v1H0z" />
      <path fill="#DA291C" d="M0 1h3v1H0z" />
      <path fill="#0032A0" d="M0 2h3v1H0z" />
    </svg>
  )
}
