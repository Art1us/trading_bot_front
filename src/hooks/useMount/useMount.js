import { useEffect, useState } from "react"

export const useMount = (opened, animationTime) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (opened && !mounted) {
      setMounted(true)
    } else if (!opened && mounted) {
      setTimeout(() => {
        setMounted(false)
      }, animationTime)
    }
  }, [opened])

  return {
    mounted,
  }
}
