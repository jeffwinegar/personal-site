# Functions

## EM

Converts pixel unit into an EM unit.

### Parameters:

**$target**  
(required) Font size of target element in pixels.

**$parent**  
(optional) Font size of parent element in pixels.  
Default: 16px

### Implementation:

Sass:

```
.em-test {
  font-size: em(10px, 20px);
}
```

Compiled CSS:

```
.em-test {
  font-size: 0.5em;
}
```

## REM

Converts pixel unit into an REM unit.

### Parameters:

**$px**  
(required) Font size of target element in pixels.

### Implementation:

Sass:

```
.rem-test {
  font-size: rem(20px);
}
```

Compiled CSS:

```
.rem-test {
  font-size: 1.25rem;
}
```

## Percent

Calculates percentage value of target to container.

### Parameters:

**$target**  
(required) Size of target element to be calculated.

**$parent**  
(required) Size of container element to be calculated.

### Implementation:

**Example 1**  
Sass:

```
.percent-test {
  width: percent(500px, 1000px);
}
```

Compiled CSS:

```
.percent-test {
  width: 50%;
}
```

**Example 2**  
Sass:

```
.percent-test {
  width: percent(1, 3);
}
```

Compiled CSS:

```
.percent-test {
  width: 33.3333333333%;
}
```
