import { useRouter } from "next/router"
import { useEffect, useRef } from "react"

const usePreviousRoute = () => {
  const { asPath } = useRouter()

  const ref = useRef<string | null>(null)

  useEffect(() => {
    ref.current = asPath
  }, [asPath])

  return [ref.current, asPath]
}

export default usePreviousRoute
