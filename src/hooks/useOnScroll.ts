import { useEffect } from "react"

const useOnScroll = (
  onScrollUp: (n: number) => void,
  onScrollDown: (n: number) => void,
  dependencies: Array<unknown>
) => {
  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (event.deltaY < 0) {
        onScrollUp(event.deltaY)
      } else if (event.deltaY > 0) {
        onScrollDown(event.deltaY)
      }
    }
    window.addEventListener("wheel", handleScroll)
    return () => {
      window.removeEventListener("wheel", handleScroll)
    }
  }, [dependencies])

  return null
}

export default useOnScroll
