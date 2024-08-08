import { IconType } from "../../../types"

export default function FranceFlag({
  size,
  height = size,
  width = size,
  className,
  style,
  shouldntPreserveRatio = false,
}: IconType) {
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
      <path fill="#EC1920" d="M2 0h1v3H2z" />
      <path fill="#fff" d="M1 0h1v3H1z" />
      <path fill="#051440" d="M0 0h1v3H0z" />
    </svg>
  )
}
