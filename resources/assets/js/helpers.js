export const mobileMenuButton = (selector = '.mobile-menu-button') => {
  const button = document.querySelector(selector);
  const html = document.documentElement
  button.onclick = function() {
    html.classList.toggle('js-menu-expanded');
  };
}

/**
 * Toggles excerpt/full content
 */
export const showHideContent = (selector) => {
  const moreButton = document.querySelector(`${selector}-more-button`)
  const lessButton = document.querySelector(`${selector}-less-button`)
  const excerpt = document.querySelector(`${selector}-excerpt`)
  const fullContent = document.querySelector(`${selector}-complete`)

  excerpt.style.display = 'block'
  fullContent.style.display = 'none'
  lessButton.style.display = 'inline-block'

  moreButton.onclick = () => {
    excerpt.style.display = 'none'
    fullContent.style.display = 'block'
  }
  lessButton.onclick = () => {
    excerpt.style.display = 'block'
    fullContent.style.display = 'none'
  }
}

export default {
  mobileMenuButton
}
