import { CSSProperties } from "react"

export interface IPageProps {
  previousRoute: string
  currentRoute: string
}

export interface IconType {
  size?: string | number
  width?: string | number
  height?: string | number
  color?: string
  textColor?: string
  className?: string
  style?: CSSProperties
  shouldntPreserveRatio?: boolean
}
