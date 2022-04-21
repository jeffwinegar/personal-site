import React from "react"
import Layout from "./src/components/Layout"

function setInitialTheme() {
  function getInitialColorScheme() {
    // Check for localStorage value
    const persistedColorSchemePreference = JSON.parse(
      window.localStorage.getItem("jw:setting:preferredColorScheme")
    )
    const hasPersistedPreference =
      typeof persistedColorSchemePreference === "string"

    if (hasPersistedPreference && persistedColorSchemePreference !== "auto")
      return persistedColorSchemePreference

    // if no localStorage value or value is 'auto' check media query
    const mql = window.matchMedia("(prefers-color-scheme: dark)")
    const hasMediaQueryPreference = typeof mql.matches === "boolean"

    if (hasMediaQueryPreference || persistedColorSchemePreference === "auto")
      return mql.matches ? "dark" : "light"

    // if browser doesn't support color themes set default to 'light'
    return "light"
  }

  const colorScheme = getInitialColorScheme()

  document.body.setAttribute("data-theme", colorScheme)
}

const ThemeScriptTag = () => {
  const clientSideCode = `(${String(setInitialTheme)})()`

  return <script dangerouslySetInnerHTML={{ __html: clientSideCode }} />
}

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<ThemeScriptTag key="initialThemeScript" />)
}

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
