# Droopy Stylesheet Classes

Droopy provides CSS classes for general use to make mobile responsiveness simple on WebOne.

## Responsive Classes

Droopy's grid system and it's respective classes.

```css
.droopy-row {}
.droopy-col-<1-12>-<desktops|tablets|phablets|phone> {}
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

## Alignment

Align the text of an element based

```css
.droopy-text-<left|center|right>-<desktops|tablets|phablets|phone> {}
```

## Buttons

Droopy style buttons

```css
.droopy-btn {}
    &.droopy-btn-red {};
```

## Spacing

Add a uniform amount of margin or padding of 15px.

```css
.droopy-<margin|padding>-<top|right|bottom|left> {}
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
<blockquote class="tile">
    <p>
        Some meaningful quote
    </p>
    <footer>Author</footer>
</blockquote>
```