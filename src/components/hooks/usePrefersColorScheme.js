import React from "react"

const isRenderingOnServer = typeof window === "undefined"

export const usePrefersColorScheme = () => {
  const [prefersColorScheme, setPrefersColorScheme] = React.useState(() => {
    return !isRenderingOnServer
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : null
  })

  React.useEffect(() => {
    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)")
    const listener = (event) => {
      setPrefersColorScheme(event.matches ? "dark" : "light")
    }
    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener("change", listener)
    } else {
      mediaQueryList.addListener(listener)
    }
    return () => {
      if (mediaQueryList.removeEventListener) {
        mediaQueryList.removeEventListener("change", listener)
      } else {
        mediaQueryList.removeListener(listener)
      }
    }
  }, [])

  return prefersColorScheme
}
