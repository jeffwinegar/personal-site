import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  :root {
    --light-rgb: 255 255 255;
    --dark-rgb: 22 22 29;
    --dk-gray-rgb: 61 61 69;
    --gray-rgb: 152 152 161;
    --lt-gray-rgb: 202 202 212;
    --blue-rgb: 0 102 204;
    --lt-blue-rgb: 0 153 255;

    --text-primary-rgb: var(--dark-rgb);
    --text-secondary-rgb: var(--dk-gray-rgb);
    --text-accent-rgb: var(--blue-rgb);

    --background-rgb: var(--light-rgb);
    --border-rgb: var(--lt-gray-rgb);
    
    --maxWidth: 800px;
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --text-primary-rgb: var(--lt-gray-rgb);
      --text-secondary-rgb: var(--gray-rgb);
      --text-accent-rgb: var(--lt-blue-rgb);
      
      --background-rgb: var(--dark-rgb);
      --border-rgb: var(--dk-gray-rgb);
    }
  }
  
  html {
    box-sizing: border-box;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    
    color: rgb(var(--text-primary-rgb));
    background-color: rgb(var(--background-rgb));
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
    font-size: 1.125rem;
    line-height: calc(1ex / 0.32);
  }

  ul:not([class]) {
    padding-left: 1.1em;
  }

  ul[class],
  ol[class] {
    list-style: none;
  }
  ul:not([class]) > li,
  ol:not([class]) > li,
  li:not([class]) {
    & + & {
      margin-top: calc(1ex / (0.64 + 0.32))
    }
  }

  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  img {
    max-width: 100%;
    display: block;
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
    margin: calc(1ex / (0.42 + 0.32)) 0;
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
    margin: calc(1ex / (0.38 + 0.32)) 0;
  }
  h4 {
    font-size: 1.5em;
    line-height: calc(1ex / 0.37);
    margin: calc(1ex / (0.37 + 0.32)) 0;
  }
  h5 {
    font-size: 1.25em;
    line-height: calc(1ex / 0.36);
    margin: calc(1ex / (0.36 + 0.32)) 0;
  }
  h6 {
    font-size: 1em;
  }

  h6, p:not([class]) {
    margin: calc(1ex / 0.64) 0;
  }

  a {
    color: inherit;

    &.autolink-anchor {
      fill: currentColor;
    }

    p:not([class]) &,
    li:not([class]) & {
      color: rgb(var(--text-accent-rgb));
      text-decoration-color: rgb(var(--text-accent-rgb) / 50%);
      transition: text-decoration 0.25s ease;

      &:hover {
        text-decoration-color: currentColor;
      }
    }
  }

  blockquote:not([class]) > * {
    font-style: italic;
    color: rgb(var(--text-secondary-rgb));
    padding-left: 0.75em;
    border-left: solid 0.25em rgb(var(--border-rgb));
  }
`

export default GlobalStyles
