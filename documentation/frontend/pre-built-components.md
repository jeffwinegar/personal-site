# Pre-build Components

## Flyout Mobile Menu

Mobile menu that overlays the entire viewport and prevents scrolling of site when open. If viewport is shorter than list of menu items the menu will scroll.  
  
*(Menu uses DOM pre-built into base theme. No additional DOM elements needed.)*

### Implementation:

Uncomment Sass partial in `_partials-all.scss`:
```
@import "../utilities/mobile-flyout-menu";
@import "theme-main-menu";
```
*Theme main menu partial component file should follow this import for desktop styles. Do not edit this Sass file.*

### Sass variables:
Add any of these variables to `_theme-variables.scss` to re-define for theme.

*Global*  
**$mobile-menu-switch-max**   
Default: 768  
*(Change to viewport width definded by menu reflow)*

**$mobile-menu-button-color**  
Default: $font-base-color


*Flyout Specific*  
**$mobile-header-height**   
Default: 48px  

**$menu-items**  
Default: 6  
*(Change to number of top-level menu items)*

## Horizontal Scroll Overflow Menu

Creates an inline horizontal scrolling menu when the list of menu items becomes wider than the viewport with a slide in animation to show the user there is an actionable scroll.

### Implementation:

Uncomment Sass partial in `_partials-all.scss`:
```
@import "../utilities/horizontal-scroll-menu";
```

DOM Structure:
```
<div class="horizontal-scroll-menu">
  <ul class="horizontal-scroll-menu-items">
    <li class="horizontal-scroll-menu-item">
      <a href="#" class="horizontal-scroll-menu-link">Scrolling Item 1</a>
    </li>
    <li class="horizontal-scroll-menu-item">
      <a href="#" class="horizontal-scroll-menu-link">Scrolling Item 2</a>
    </li>
    <li class="horizontal-scroll-menu-item">
      <a href="#" class="horizontal-scroll-menu-link">Scrolling Item 3</a>
    </li>
    <li class="horizontal-scroll-menu-item">
      <a href="#" class="horizontal-scroll-menu-link">Scrolling Item 4</a>
    </li>
    <li class="horizontal-scroll-menu-item">
      <a href="#" class="horizontal-scroll-menu-link">Scrolling Item 5</a>
    </li>
    <li class="horizontal-scroll-menu-item">
      <a href="#" class="horizontal-scroll-menu-link">Scrolling Item 6</a>
    </li>
  </ul>
</div>
```
