import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  :root {
    --color-dark: #1d1d1f;
    --color-light: #f5f5f7;

    --text-color: var(--color-dark);
    
    --maxWidth: 55ch;
  }
  
  html {
    box-sizing: border-box;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    color: var(--text-color);
    background-color: var(--background-color);
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --text-color: var(--color-light);
      --background-color: var(--color-dark);
    }
  }


  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  ul[class],
  ol[class] {
    padding: 0;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: calc(1ex / 0.32);
  }

  ul[class],
  ol[class] {
    list-style: none;
  }

  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  img {
    max-width: 100%;
    display: block;
  }

  article > * + * {
    margin-top: 1.625em;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  h1, h2 {
    line-height: calc(1ex / 0.42);
  }
  h1 {
    font-size: 2.5em;
  }
  h2 {
    font-size: 2em;
  }
  h3 {
    font-size: 1.75em;
    line-height: calc(1ex / 0.38);
  }
  h4 {
    font-size: 1.5em;
    line-height: calc(1ex / 0.37);
  }
  h5 {
    font-size: 1.25em;
    line-height: calc(1ex / 0.36);
  }
  h6 {
    font-size: 1em;
    line-height: calc(1ex / 0.32);
  }

  p {
    margin: calc(1ex / 0.32) 0;
  }

  a {
    color: inherit;
  }
`

export default GlobalStyles
