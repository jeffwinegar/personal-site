# Mixins

## sticky-footer

Applies sticky footer. Must wrap all content outside of footer in a container with the class sticky-footer-push, which must be a direct child of the body.

### Parameters:

**$height**  
(required) Height of footer.

**$footer-name**  
(optional) Class name given to main footer.  
Default: '.footer-main'

### Implementation:

DOM structure:

```
<body>
  <div class="sticky-footer-push">
    ...content
  </div>
  <footer class="footer-main"></footer>
</body>
```

Sass:

```
@include sticky-footer($height: 54px);
```

## fluid-grid

Spreads direct children of element horizontally with fluid spacing. Children will wrap if space is not avalable.

### Parameters:

**$list**  
(optional) Parent element is a list.  
Default: false

**$vert-align**  
(optional) Vertical alignment of direct children.  
Default: top

**$font-size**  
(optional) Font size of direct children in pixels.  
  Default: root *(site root font size)*

**$text-align**  
(optional) Text algnment of direct children.  
  Default: left

**$spacer**  
(optional) Wrap spacer exsits in the DOM.  
  Default: false

### Implementation:

DOM structure:

```
<ul class="menu-main">
  <li class="menu-item">Item 1</li>
  <li class="menu-item">Item 2</li>
  <li class="menu-item">Item 3</li>
  <li class="menu-item">Item 4</li>
</ul>
```

Sass:

```
.menu--main {
  @include fluid-grid($list: true);
}
```

## fluid-text

Fluidly changes font size based on viewport width within defined parameters. Pixel sizes defined, mixin converts to REMs and EMs where needed.

### Parameters:

**$font-min**  
(required) Minimum font size. Calculations will stop at this font size.

**$viewport-min**  
(required) Minimum viewport size.  
*Where font size calculations stop and min font size is used*

**$font-max**  
(required) Maximum font size. Calculations will start at this font size.

**$viewport-max**  
(required) Maximum viewport size.  
*Where font size calculations start and max font size is no longer used*

### Implementation:

Sass:

```
.text-block {
  font-size: rem(18px); //fallback font size
  @include fluid-text($font-min: 16px, $viewport-min: 320px, $font-max: 18px, $viewport-max: 480px);
}
```
