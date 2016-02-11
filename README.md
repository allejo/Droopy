# Droopy

Droopy is a project started and maintained by AS Marketing for experimenting with client side features that may be proposed to the WebOne project, CSUN's Drupal fork. This project consists of a JavaScript and a CSS file that is used to inject new features into WebOne websites.

**Warning**: Since this tools relies on JavaScript injections, this project requires that JavaScript is enabled in your browsers.

## Installation

1. Upload these files to your webserver so they can be linked to. Do not upload these files via WebOne as WebOne would treat these files as plain text and not JS/CSS files.

2. Add a new block node called "CSS/JS Patch," the name is entirely subjective, to the __sidebar__ and add the following content to that block node. Be sure that when you add this node, it is the last node in the sidebar so it can automatically hide itself so there will be no whitespace.

```html
<link rel="stylesheet" type="text/css" href="http://your.url/Droopy.css">
<script src="http://your.url/Droopy.js"></script>
```

## Available Features

- [Droopy Calendar](#droopy-calendar)
- [Droopy Events by Tag](#droopy-calendar-by-tag)
- [Jump to Accordion](#jump-to-accordion)

### Droopy Calendar

**Difficulty:** Easy  
**Demo:** On the Associated Students [calendar](http://www.csun.edu/as/calendar) page, a Droopy calendar is used.

Calendars in WebOne may be embedded into pages easily but when navigating from month to month, the page requires to be reloaded or navigate away from the existing page. As an alternative, Droopy provides it's own calendar which can be embedded inside of a page an will updated as if it were in an iframe.

This calendar is entirely mobile responsive so it will display on mobile devices.

Add the following code snippet into your Full HTML page and your group's calendar will be displayed automatically; this means you will not be able to load the Associated Students calendar on the Alumni Association website.

```html
<div id="droopyCalendar" aria-live="polite" aria-relevant="additions"></div>
```


### Droopy Events by Tag

**Difficulty:** Easy  
**Demo:** This option is used on the [Sport Clubs](http://www.csun.edu/as/sport-clubs) page to list their upcoming events.

WebOne does not have a "Calendar by Tag" node that lists events containing to a specific tag. This Droopy feature looks for elements with the `.droopy-ebt` class and requires the `data-tag` with its value being the ID of the specific tag. That's it!

```html
<div class="droopy-ebt" data-tag="6546" aria-live="polite" aria-relevant="additions"></div>
```

### Jump to Accordion

**Difficulty:** Easy

This feature allows you to send someone directly to an accordion tab and have the accordion tab open automatically when the page loads.

To create a URL to open a specific tab, you will need to get the exact name of the tab and do the following:

1. Copy the name of the accordion tab
2. Add a pound sign (#) to the URL of the current page in the address bar
3. Paste the name of the accordion tab. Do __not__ press enter
4. Replace all hypens with underscores (_)
5. Replace all spaces with hyphens (-)
6. Keep all symbols, numbers, and capitializations
7. Click in the address bar and hit enter to reload the page to test

##### Troubleshooting

Before you jump to the conclusion that the URL you just made does not work, copy paste the URL in another browser page because some browsers will not fully reload the page when modifying the URL to simply add a pound sign.

##### Examples

__Example 1__

We will need to keep any symbols in the URL, whether it be a question mark or parentheses.

```
Accordion Tab Title: What kind of club sports teams does CSUN offer?
URL hash:            #What-kind-of-club-sports-teams-does-CSUN-offer?
```

__Example 2__

Because we are already using a hypen to symbolize a space, we will need a different symbol for an actual hyphen, so an underscore (_) is supported instead.

```
Accordion Tab Title: Fine-tune your page
URL hash:            #Fine_tune-your-page
```

#### Demo

On the Associated Students [administration](http://www.csun.edu/as/administration) page, there is an accordion tab called "Business Card Order Form" so that will translate to "#Business-Card-Order-Form"

URL

```
http://www.csun.edu/as/administration#Business-Card-Order-Form
```