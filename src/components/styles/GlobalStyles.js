import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  :root {
    --light-rgb: 255, 255, 255;
    --dark-rgb: 30, 30, 30;
    --dk-gray-rgb: 72, 72, 72;
    --gray-rgb: 194, 194, 194;
    --lt-gray-rgb: 226, 226, 226;

    --text-primary-rgb: var(--dark-rgb);
    --text-secondary-rgb: var(--dk-gray-rgb);

    --background-rgb: var(--light-rgb);
    --border-rgb: var(--lt-gray-rgb);
    
    --maxWidth: 55ch;
  }
  
  html {
    box-sizing: border-box;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    
    color: rgb(var(--text-primary-rgb));
    background-color: rgb(var(--background-rgb));
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --text-primary-rgb: var(--light-rgb);
      --text-secondary-rgb: var(--gray-rgb);
      
      --background-rgb: var(--dark-rgb);
      --border-rgb: var(--dk-gray-rgb);
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
    font-size: 1.125rem;
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
    margin: calc(1ex / 0.42) 0;
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
    margin: calc(1ex / 0.38) 0;
  }
  h4 {
    font-size: 1.5em;
    line-height: calc(1ex / 0.37);
    margin: calc(1ex / 0.37) 0;
  }
  h5 {
    font-size: 1.25em;
    line-height: calc(1ex / 0.36);
    margin: calc(1ex / 0.36) 0;
  }
  h6 {
    font-size: 1em;
  }

  h6, p:not([class]) {
    margin: calc(1ex / 0.32) 0;
  }

  a {
    color: inherit;
  }
`

export default GlobalStyles
