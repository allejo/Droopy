//
// Welcome to WebOne's Usability Patch
// ---
// This patch is written and entirely maintained by AS Marketing in order to add some features and fix others
// that WebOne is lacking. This patch is no way, shape, or form affiliated with the WebOne project.
//
// If you would like to report a bug to fix concerning THIS patch, feel free to report it here:
//     http://csunas.org/web
//
// If you'd like to contribue to this project and add a new feature, send a pull request here:
//     https://github.com/allejo/Droopy
//
// License: MIT
//


///
/// Global Variables
///

/**
 * For both efficiency and for support of multiple accordions, we need to save the initial order of the accordions
 * when the page loads. We store the original order of the accordions so when we start moving all of them around,
 * then we won't accidentally move the same one multiple times.
 */
var accordions;


///
/// Code
///

/**
 * Move the accordion to another place on the page, typically after a specific node since all the accordions
 * just seem to cluster up in one div.
 *
 * @param {number} accordionNumber  The number of the accordion relative to the page; the 1st, 2nd, 3rd accordion
 *                                  on the page. Like all arrays, start the count at 0.
 * @param {number} nodeNumber       The unique node ID used by Web One to give each element a class
 */
function moveAccordion(accordionNumber, nodeNumber)
{
    // The node the accordion will be appended to
    var node = jQuery(".node-" + nodeNumber);

    if (node.length) // Only move the accordion if the node exists on this page
    {
        accordions.eq(accordionNumber).insertAfter(node);
    }
}

/**
 * Replace all of the instances of a substring in a string
 *
 * @param {string}  str1    The substring that will to be replaced
 * @param {string}  str2    The replacement string that will used in all instances of str1
 * @param {boolean} ignore  Whether or not to ignore case
 */
String.prototype.replaceAll = function(str1, str2, ignore)
{
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
}

jQuery(document).ready(function()
{
    accordions = jQuery("div[id=accordion]");

    // If there is an accordion available on the page, then we'll get working
    if (jQuery("#accordion").length)
    {
        var hash = window.location.hash; // Get the hash from the URL

        // If we have a hash, then start working on on finding the accordion tab
        if (hash.length)
        {
            // Get the name of the accordion from the hash. We will be replacing all hypens with spaces and all
            // underscores with hyphens. This will allow us to find the accordion tab with the respective name
            // that we parsed and fixed from the URL hash.
            var accordionName = hash.replaceAll("-", " ").replace("#", "").replaceAll("_", "-");

            // Get the accordian tab. We'll be searching for which <h2> contains the tab with the name we just
            // generated from the URL hash.
            var accordionHeader = jQuery("h2:contains('" + accordionName + "')");

            // If the accordion tab exists...
            if (accordionHeader.length)
            {
                // Fix the ID name from the header to only allow alphanumeric characters and dashes
                hash = hash.replace(/[^a-z0-9-]/gi, '');

                // Give it an ID
                accordionHeader.attr("id", hash);

                // We'll save the accordion tab for efficiency
                var accordionTab = jQuery("#" + hash);

                // Check if the ID set was successful and see if we can access the accordian tab through the ID
                if (accordionTab.length)
                {
                    accordionTab.click();             // Simulate a click of the tab
                    accordionTab[0].scrollIntoView(); // Scroll into the view of the accordian tab

                    // FIXME: Figure out why this CSS bug is occuring and find a proper fix
                    jQuery(".pane-page-elements h1").css("margin-top", "20px");
                    jQuery(".sidebar .pane-menu-tree h2.pane-title").css("margin-top", "30px");
                }
            }
        }
    }
});