export const mobileMenuButton = (selector = '.mobile-menu-button') => {
  const button = document.querySelector(selector);
  const html = document.documentElement
  button.onclick = function() {
    html.classList.toggle('js-menu-expanded');
  };
}

export default {
  mobileMenuButton
}
