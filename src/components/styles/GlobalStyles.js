import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  :root {
    --color-dark: #1d1d1f;
    --color-light: #f5f5f7;

    --text-color: var(--color-dark);
    
    --maxWidth: 960px;
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
    line-height: 1.625;
    /* background-image: radial-gradient(
      ellipse 200% 100% at 55% 100%,
      rgb(247, 18, 160) 0%, 
      rgb(121, 8, 177) 46%, 
      rgb(33, 0, 127) 100% 
    ); */
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

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.1;
    + * {
      margin-top: 0.8125em;
    }
  }
  h1 {
    font-size: 2.625em;
  }
  h2 {
    font-size: 1.625em;
  }
  h3 {
    font-size: 1.25em;
  }
  h4, h5 {
    font-size: 1em;
  }
  h6 {
    font-size: 0.8125em;
  }

  a {
    color: inherit;
  }
`

export default GlobalStyles
