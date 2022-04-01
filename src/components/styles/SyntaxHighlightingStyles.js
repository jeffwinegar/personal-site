import { createGlobalStyle } from "styled-components"

const SyntaxHighlightingStyles = createGlobalStyle`
  pre,
  code {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  }
  
  pre {
    background-color: rgb(var(--background-rgb));
    color: rgb(var(--text-primary-rgb));
    font-size: 0.875rem;
    position: relative;
  }
  code {
    display: inline-block;
    font-size: 0.875em;
    font-weight: 600;

    &::before,
    &::after {
      content: '\`';
    }
  }
  
  .shiki {
    /* spacegray vscode dark syntax highlighting */
    --shiki-color-background: #2b313b;
    --shiki-color-text: #c0c5ce;
    --shiki-line-highlight: #65737e30;
    --shiki-token-comment: #65737e;
    
    border-radius: 4px;
    line-height: 1.5rem;
    width: 100%;

    &[data-line-numbers="true"] {
      code {
        counter-reset: lines;
      }

      .line{
        padding-left: 0;
        
        &::before {
          background-color: var(--shiki-color-background);
          color: var(--shiki-token-comment);
          content: counter(lines);
          counter-increment: lines;
          display: inline-block;
          left: 0;
          padding-right: 1.5rem;
          position: sticky;
          text-align: right;
          width: 3.5rem;
        }
      }
    }
      
    code {
      font-size: inherit;
      font-weight: inherit;
      min-width: 100%;
      padding-left: 0;
      
      &::before,
      &::after {
        content: none;
      }
    }
    
    .code-container {
      overflow-x: auto;
      padding-bottom: 2rem;
      padding-top: 2rem;
      scrollbar-color: var(--shiki-token-comment) var(--shiki-color-background);
      scrollbar-width: thin;

      &::-webkit-scrollbar {
        background-color: var(--shiki-color-background);
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        height: 4px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: var(--shiki-token-comment);
        border-radius: 4px;
      }
      &::-webkit-scrollbar-track {
        background-color: var(--shiki-color-background);
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
      }
    }
    
    .line {
      display: block;
      padding-left: 1.5rem;
      padding-right: 1.125rem;
      position: relative;
      z-index: 1;

      :empty {
        min-height: 1.5rem;
      }

      &.highlight::before {
        color: var(--shiki-color-text);
      }
      &.highlight::after {
        background-color: var(--shiki-line-highlight);
        bottom: 0;
        content: '';
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
      }
    }

    .code-title,
    .language-id {
      font-size: 0.8em;
      line-height: 1.5;
      position: absolute;
    }
    .code-title {
      left: 0.8em;
      top: 0.5em;
    }
    .language-id {
      bottom: 0.75em;
      right: 1.25em;
    }
  }
`

export default SyntaxHighlightingStyles
