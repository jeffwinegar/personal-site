# Helper Classes

Output blocks of CSS. These classes will not compile themselves. You can extend them within your Sass element to add the block of CSS to that element. (DO NOT call these classes in the DOM)

## %fluid-image

Adds fluid resizing of images with a max width of what is defined by the image.

### Output Block:

```
%fluid-image {
  width: auto;
  max-width: 100%;
  height: auto;
}
img[src*=svg] {
  width: 100%\9;

  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    width: 100%;
  }
}
```

### Implementation:

Sass:

```
.test-image {
  @extend %fluid-image;
}
```

## %hidden

Hides element visually as well as from assistive technology.

### Output Block:

```
%hidden {
  display: none !important;
}
```

### Implementation:

Sass:

```
.hidden-element {
  @extend %hidden;
}
```

## %visually-hidden

Hides element visually but can still be read by assistive technology.

### Output Block:

```
%visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
```

### Implementation:

Sass:

```
.visually-hidden-element {
  @extend %hidden;
}
```

## %invisible

Hides element form assistive technology only.

### Output Block:

```
%invisible {
  visibility: hidden;
}
```

### Implementation:

Sass:

```
.invisible-element {
  @extend %hidden;
}
```

## %clearfix

Applied to parent element to clear floats of child elements. Can also be used to contain child margins.

### Output Block:

```
%clearfix {

  &:before,
  &:after {
    content: ' ';
    display: table;
  }
  &:after {
    clear: both;
  }
}
```

### Implementation:

Sass:

```
.cleared-parent-element {
  @extend %clearfix;
}
```
