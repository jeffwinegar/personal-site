import React from "react"
import Layout from "./src/components/Layout"

const getInitialColorScheme = () => {
  // Check for localStorage value
  const persistedColorSchemePreference = window.localStorage.getItem(
    "jw:setting:preferredColorScheme"
  )
  const hasPersistedPreference =
    typeof persistedColorSchemePreference === "string"

  if (hasPersistedPreference && persistedColorSchemePreference !== "auto")
    return persistedColorSchemePreference

  // if no localStorage value or value is 'auto' check media query
  const mql = window.matchMedia("(prefers-color-scheme: dark)")
  const hasMediaQueryPreference = typeof mql.matches === "boolean"

  if (hasMediaQueryPreference) return mql.matches ? "dark" : "light"

  // if browser doesn't support color themes set default to 'light'
  return "light"
}

export const onRenderBody = ({ setBodyAttributes }) => {
  setBodyAttributes({ "data-theme": getInitialColorScheme })
}

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
