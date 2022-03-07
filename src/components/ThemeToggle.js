import React from "react"
import createPersistedState from "use-persisted-state"
import { useMedia } from "./hooks/useMedia"

const useColorSchemeState = createPersistedState(
  "jw:setting:preferredColorScheme"
)
const useSystemPrefersColorScheme = () =>
  useMedia(["(prefers-color-scheme: dark)"], ["dark"], "light")

export const ThemeToggle = () => {
  const [colorScheme, setColorScheme] = useColorSchemeState("auto")
  const systemColorScheme = useSystemPrefersColorScheme()

  React.useEffect(() => {
    const themePreference =
      colorScheme === "auto" ? systemColorScheme : colorScheme
    window.document.body.setAttribute("data-theme", themePreference)
  }, [colorScheme, systemColorScheme])

  return (
    <fieldset>
      <legend>Select a color scheme preference</legend>
      <label>
        <input
          autoComplete="off"
          checked={colorScheme === "light"}
          name="color-scheme-option"
          onChange={(e) => setColorScheme(e.target.value)}
          type="radio"
          value="light"
        />
        Light
      </label>
      <label>
        <input
          autoComplete="off"
          checked={colorScheme === "dark"}
          name="color-scheme-option"
          onChange={(e) => setColorScheme(e.target.value)}
          type="radio"
          value="dark"
        />
        Dark
      </label>
      <label>
        <input
          autoComplete="off"
          checked={colorScheme === "auto"}
          name="color-scheme-option"
          onChange={(e) => setColorScheme(e.target.value)}
          type="radio"
          value="auto"
        />
        Auto
      </label>
    </fieldset>
  )
}
