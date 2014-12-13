Droopy
======

Welcome to Droopy. This is project solely exists for fixing WebOne, a Drupal fork used by CSUN, issues and adding new features to it.

Installation
------------

1. Upload these files to your webserver so they can accesible. Do not upload these files via WebOne as that would just be pointless.

2. Add a new block node called "CSS/JS Patch," the name is entirely subjective, to the __sidebar__ and add the following content to that block node. Be sure that when you add this node, it is the last node in the sidebar so it can automatically hide itself so there will be no whitespace.

       <link rel="stylesheet" type="text/css" href="http://your.url/webonePatch.css">
       <script src="http://your.url/webonePatch.js"></script>

Features
--------

- [Jump to Accordion](#jump-to-accordion)

### Jump to Accordion
---
This feature allows you to send someone directly to an accordion tab and have the accordion tab open automatically when the page loads.

#### Details

Difficulty: Easy

#### How to Use

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

    Accordion Tab Title: What kind of club sports teams does CSUN offer?
    URL hash:            #What-kind-of-club-sports-teams-does-CSUN-offer?

__Example 2__

Because we are already using a hypen to symbolize a space, we will need a different symbol for an actual hyphen, so an underscore (_) is supported instead.

    Accordion Tab Title: Fine-tune your page
    URL hash:            #Fine_tune-your-page

#### Demo

On the Associated Students [administration](http://www.csun.edu/as/administration) page, there is an accordion tab called "Business Card Order Form" so that will translate to "#Business-Card-Order-Form"

URL

    http://www.csun.edu/as/administration#Business-Card-Order-Form
