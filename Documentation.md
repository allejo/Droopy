# Droopy Stylesheet Classes

Droopy provides CSS classes for general use to make mobile responsiveness simple on WebOne.

## Responsive Classes

Defined in: `_grid.scss`

Droopy's grid system and its respective classes.

```css
.droopy-row {}
.droopy-col-<xs|sm|md|lg>-<1-12> {}
.droopy-offset-<xs|sm|md|lg>-<1-12> {}
.droopy-reset-<xs|sm|md|lg> {}
.droopy-pull-<xs|sm|md|lg>-<left|right> {}
```

## Grids

Convenience class for creating a responsive grid of elements.

```css
.droopy-<2x2|3x3>-grid {}
.droopy-<2x2|3x3>-grid .tile {}
.droopy-<2x2|3x3>-grid .tile img {}
```

## Video Embeds

Responsive YouTube videos so they don't have a set height on all platforms.

```
<div class="droopy-video-embed">
    <iframe></iframe>
</div>
```

## Accordion

An accordion that looks identical to WebOne's with the exception it doesn't expand. This is useful for links.

**CSS**

```css
.droopy-accordion-container {}
    .droopy-accordion {}
```

**HTML**

```html
<div class="droopy-accordion-container">
	<a class="droopy-accordion" href="#" target="_blank">First link</a>
	<a class="droopy-accordion" href="#" target="_blank">Second link</a>
</div>
```

## Spacing

CSS utility functions that will set the margin or padding of an element based on a mulitplier (0, 1, 2, or 3).

**CSS**

```css
.droopy-<m|p><0|1|2|3>[-<sm|md|lg>] {}
.droopy-<m|p>t<0|1|2|3>[-<sm|md|lg>] {}
.droopy-<m|p>r<0|1|2|3>[-<sm|md|lg>] {}
.droopy-<m|p>b<0|1|2|3>[-<sm|md|lg>] {}
.droopy-<m|p>l<0|1|2|3>[-<sm|md|lg>] {}
.droopy-<m|p>x<0|1|2|3>[-<sm|md|lg>] {}
.droopy-<m|p>y<0|1|2|3>[-<sm|md|lg>] {}
```

- `m` - margin
- `p` - padding
- `t` - top
- `r` - right
- `b` - bottom
- `l` - left
- `x` - x-axis (right + left)
- `y` - y-axis (top + bottom)

## Alignment

Align the text of an element based

```css
.droopy-text-<left|center|right>-<xs|sm|md|lg> {}
```

## Buttons

Droopy style buttons

```css
.droopy-btn {}
    &.droopy-btn--red {};
```

## Calendar Icon

Make a calendar icon from a time element

**CSS**

```css
time.droopy-cal {}
```

**HTML**

```html
<time datetime="2015-06-04" class="droopy-cal">
    <em>Thursday</em>
    <strong>June</strong>
    <span>04</span>
</time>
```

## Blockquote

```html
<blockquote class="droopy-blockquote">
    <p>
        Some meaningful quote
    </p>
    <footer>Author</footer>
</blockquote>
```

## Accessibility

Utility classes which hide text or elements for regular users but ensures that it's still available to screenreaders.

```css
.droopy-sr-only--text {}
.droopy-sr-only--element
```

## Forms

Styling for forms on WebOne

```css
.droopy-form-group {}
.droopy-form-group .required {}
```

## Image Modifiers

```css
.droopy-img--fluid {}
.droopy-img--rounded {}
.droopy-img--circle {}
.droopy-img--thumbnail {}
```

## Text Colors

```css
.droopy-text--red {}
```

## Media Objects

```css
.droopy-media-object {}
.droopy-media-object--left .droopy-media-object-image {}
.droopy-media-object--right .droopy-media-object-image {}
```
