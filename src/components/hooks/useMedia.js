import React from "react"

export const useMedia = (queries, values, defaultValue) => {
  const mediaQueriesList = queries.map((q) => window.matchMedia(q))

  const getValue = () => {
    const index = mediaQueriesList.findIndex((mql) => mql.matches)

    return typeof values[index] !== "undefined" ? values[index] : defaultValue
  }

  const [value, setValue] = React.useState(getValue)

  React.useEffect(() => {
    const handler = () => setValue(getValue)
    mediaQueriesList.forEach((mql) => mql.addListener(handler))

    return () => {
      mediaQueriesList.forEach((mql) => mql.removeListener(handler))
    }
  })

  return value
}
