import React from "react"
import createPersistedState from "use-persisted-state"
import styled from "styled-components"
import { useMedia } from "./hooks/useMedia"

const StyledToggle = styled.fieldset`
  border-radius: 1em;
  border: solid 1px rgb(var(--text-accent-rgb));
  color: rgb(var(--text-accent-rgb));
  display: inline-block;
  font-size: 0.75rem;
  line-height: 1.3333333333;
  margin: 0;
  padding: 1px;
  position: relative;

  legend,
  input[type="radio"] {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  label span {
    border-radius: calc(1em - 2px);
    border: solid 1px transparent;
    display: inline-block;
    min-width: 42px;
    text-align: center;
    padding: 0 5px 1px;
  }

  input[type="radio"] {
    &:checked + span {
      background-color: rgb(var(--text-accent-rgb));
      color: rgb(var(--background-rgb));

      body[data-theme="light"] & {
        font-weight: 300;
      }
      body[data-theme="dark"] & {
        font-weight: 500;
      }
    }

    &:focus-visible + span::after {
      border-radius: 1em;
      bottom: 0;
      content: "";
      height: 100%;
      left: 0;
      outline-offset: 1px;
      outline: 5px auto Highlight;
      outline: 5px auto -webkit-focus-ring-color;
      position: absolute;
      right: 0;
      top: 0;
      width: 100%;
    }
  }
`

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
    <StyledToggle>
      <legend>Select a color scheme preference</legend>
      <label>
        <input
          autoComplete="off"
          checked={colorScheme === "light"}
          name="color-scheme"
          onChange={(e) => setColorScheme(e.target.value)}
          type="radio"
          value="light"
        />
        <span>Light</span>
      </label>
      <label>
        <input
          autoComplete="off"
          checked={colorScheme === "dark"}
          name="color-scheme"
          onChange={(e) => setColorScheme(e.target.value)}
          type="radio"
          value="dark"
        />
        <span>Dark</span>
      </label>
      <label>
        <input
          autoComplete="off"
          checked={colorScheme === "auto"}
          name="color-scheme"
          onChange={(e) => setColorScheme(e.target.value)}
          type="radio"
          value="auto"
        />
        <span>Auto</span>
      </label>
    </StyledToggle>
  )
}
