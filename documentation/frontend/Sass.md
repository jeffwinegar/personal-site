# Sass

## Formatting
Create a new Sass file for every new component in the partials folder and add `@import` of file to `_partials-all.scss`. Each component's Sass should be self contained and not reuse other components' selectors or code.

* Use soft tabs (2 spaces) for indentation
* Use dash-cased selector names over camelCase
* Do not use ID selectors
* When using multiple selectors in a rule declaration, give each selector its own line.
* Put a space before the opening brace `{` in rule declarations
* In properties, put a space after, but not before, the `:` character.
* Put closing braces `}` of rule declarations on a new line
* Break apart multi-selector declarations when appropriate.

```
// YES

.component {
  font: {
    size: 1rem;
    weight: 300;
  }
  border: 2px solid white;
}
.one,
.selector,
.per-line {
  // ...
}


// NO

.component{
    font-size:1rem;
    font-weight:300;
    border:2px solid white; }
.no, .nope, .not_good {
    // ...
}
#lol-no {
  // ...
}

```
#### Caclulations
**No mystery calculations.** Do the math with Sass and wrap in `#{...}` to scope your calculations. By doing this it will make things much clearer when looking back through the Sass. *We now have a mixin for percentage calculations, see functions documentation for information.*
```
// YES

.component {
  // line height in px / font size in px
  line-height: #{(30/18)};

  // (child size in px / parent size in px) * 100%
  width: #{(565/980)*100%};
  padding: 0 #{(40/980)*100%};
}


// NO

.component {
  line-height: 1.6666666667;
  width: 57.6530612245%;
  padding: 0 4.0816326531%;
}

```


#### Nested selectors
Keep nesting to a minimum. When possible keep selectors at the root level. **Do not nest selectors more than three (3) levels deep.**
```
// PREFERRED

.component {
  // ...
}
.component-title {
  // ...
}
.component-sub-title {
  // ...
}


// OKAY

.component {
  // ...

  .component-title {
    // ...

    .component-sub-title {
      // ...

      // NO MORE, STOP!
    }
  }
}
```
Seperate nested selectors by one (1) line return after parent declarations. Group component selectors with no line return space between. If Sass file contains more than one component seperate components by two (2) line returns.
```
// YES

.component-1 {
  // ...

  .component-1-title {
    // ...
  }
}


.component-2 {
  // ...
}
.component-2-title {
  // ...
}



// NO

.component-1 {
  // ...
  .component-1-title {
    // ...
  }
}
.component-2 {
  // ...
}
.component-2-title {
  // ...
}

```

## Variables
Use dash-cased variable names over camelCase. All theme variables need to be contained in the `_theme-variables.scss` file. Redefine global variables in theme file to match design. Global variables can be found in the `_global-variables.scss` file.  

**Group variables by component not by what they are defining. Space component blocks with three (3) line returns and comment component name with an underline and one (1) line return after comment.**
```
// YES

// Component 1 variables
// ---------------------------------

$component-1-link-color       : ...;
$component-1-font-color       : ...;
$component-1-background-color : ...;



// Component 2 variables
// ---------------------------------

$component-2-link-color       : ...;
$component-2-font-color       : ...;
$component-2-background-color : ...;


// NO

$component-1-link-color : ...;
$component-2-link-color : ...;

$component-1-font-color : ...;
$component-2-font-color : ...;

$component-1-background-color : ...;
$component-2-background-color : ...;
```  

**Align colons of grouped variables with one space after longest name.**  
```
// YES

$component-link-color       : ...;
$component-font-color       : ...;
$component-background-color : ...;


// NO

$component-link-color : ...;
$component-font-color : ...;
$component-background-color : ...;


// NO

$component-link-color      : ...;
$component-font-color      : ...;
$component-background-color: ...;

```

**Make variables descriptive.**
```
// YES

$component-font-color       : ...;
$component-background-color : ...;


// NO

$component-color      : ...;
$component-background : ...;
```

#### Theme specific variables
**Colors**  
Define colors by color name to use in additional theme variables. Do not use color name variables in your component declarations. Define colors using Hexcode or name value.
```
// YES

$theme-black : black;
$theme-blue : #0088cc;


// Component variables
// ---------------------------------

$component-link-color : $theme-blue;

.component-link {
  color: $component-link-color;
}


// NO

$theme-blue : rgb(0, 136, 204);

.component-link {
  color: $theme-blue;
}
```

## Fonts
####Self-hosted fonts
Create a new folder inside of public named fonts and add in fonts to be hosted. Then create a new folder inside the Sass folder named 'fonts'. Inside of this fonts folder create a new file per font used with the naming convention of `_font-font-name.scss` that will contain the `@font-face` declarations for that font only. Change font file path to match theme structure.  

At the top of `_theme-variables.scss` import all fonts needed then below the imports create general variable names for each font defined by the font-family name followed by any fallback fonts. Do not name font variables by font name.

**File path structure**
```
.
└── resources
    └── assets
        └── sass
            ├── fonts
            │   ├── _font-font-name1.scss
            │   └── _font-font-name2.scss
            └── partials
                └── _theme-variables.scss
```
**Example of:  `_font-roboto-regular.scss`**
```
@font-face {
  font-family: 'robotoregular';
  src: url('<path/to/font>/Roboto-Regular-webfont.eot');
  src: url('<path/to/font>/Roboto-Regular-webfont.eot?#iefix') format('embedded-opentype'),
       url('<path/to/font>/Roboto-Regular-webfont.woff') format('woff'),
       url('<path/to/font>/Roboto-Regular-webfont.ttf') format('truetype'),
       url('<path/to/font>/Roboto-Regular-webfont.svg#robotoregular') format('svg');
  font-weight: normal;
  font-style: normal;
}
```

```
// Imported theme fonts
// @font-face font imports from sass/fonts
// ---------------------------------

@import "../fonts/font-font-name1";
@import "../fonts/font-font-name2";


// Theme font variables
// ---------------------------------

$font-main   : 'font-family Font Name 1', fallback, fallback, sans-serif;
$font-accent : 'font-family Font Name 2', fallback, fallback, serif;
```

