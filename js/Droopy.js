///
/// This patch is written and entirely maintained by AS Marketing in order to add some features and fix others
/// that WebOne is lacking. This patch is no way, shape, or form affiliated with the WebOne project.
///
/// If you would like to report a bug to fix concerning THIS patch, feel free to report it here:
///     http://csunas.org/web
///
/// If you'd like to contribue to this project and add a new feature, send a pull request here:
///     https://github.com/allejo/Droopy
///
/// License: MIT
///

// Variables to store values used in the script
var cache = {};

// Global constants of useful values
var MonthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];
var MonthNamesShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
  'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];


/**
 * Quick and simple HTML templating function
 *
 * @author John Resig <http://ejohn.org/blog/javascript-micro-templating/>
 *
 * @param  {string} str  Either a template as a string or ID of the respective template
 * @param  {object} data A JSON object with the variables that will be placed inside of the template
 *
 * @return {string}      The compiled HTML
 */
function tmpl (str, data) {
    /* jshint ignore:start */

    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
      tmpl(document.getElementById(str).innerHTML) :

    // Generate a reusable function that will serve as a template
    // generator (and which will be cached).
    new Function("obj",
               "var p=[],print=function(){p.push.apply(p,arguments);};" +

               // Introduce the data as local variables using with(){}
               "with(obj){p.push('" +

               // Convert the template into pure JavaScript
               str
               .replace(/[\r\t\n]/g, " ")
               .split("<%").join("\t")
               .replace(/((^|%>)[^\t]*)'/g, "$1\r")
               .replace(/\t=(.*?)%>/g, "',$1,'")
               .split("\t").join("');")
               .split("%>").join("p.push('")
               .split("\r").join("\\'")
               + "');}return p.join('');");

    // Provide some basic currying to the user
    return data ? fn( data ) : fn;

    /* jshint ignore:end */
}

/**
 * Fetch a remote calendar and store it inside of the specified div
 *
 * @param {string} url  The URL to fetch the calendar from
 * @param {string} elem The element whose HTML will be extracted and injected
 * @param {jQuery} obj  The jQuery object of where to store the fetched calendar
 */
function _fetchDomObject(url, elem, obj) {
    jQuery.get(url, function (data) {
        // Create a dummy element that'll store the calendar we fetch from AJAX
        var tempDiv = document.createElement("div");

        // Store all the content inside the dummy element
        tempDiv.innerHTML = data;

        // Create a jQuery object from it and fetch only the calendar portion
        var $ajaxObj = jQuery(tempDiv);
        var elemContent = $ajaxObj.find(elem);

        // Only save the retrieved content if it's not empty
        if (elemContent.length) {
            obj.html(elemContent);
        }
    });
}

/**
 * Get the file name from a URL
 *
 * @param {String} url  The URL to get the file name from
 *
 * @returns {String}
 */
function getFileNameFromURL(url)
{
    return url.substring(url.lastIndexOf('/') + 1);
}

/**
 * Get the unique ID given to each deparment automatically by Drupal
 *
 * @returns {Number} The unique ID for each department. Returns -1 if it can't be found
 */
function getWebOneGID()
{
    if (Drupal)
    {
        return Drupal.settings.ogContext.gid;
    }

    return -1;
}

/**
 * Get the URL to the Droopy CSS file
 *
 * @returns {String} Returns the URL for the Droopy.css file
 */
function getDroopyCSS()
{
    toast = bacon;

    for (var i = 0; i < document.styleSheets.length; i++)
    {
        var currentCSS = document.styleSheets[i].href;

        if (getFileNameFromURL(currentCSS) == "Droopy.css")
        {
            return currentCSS;
        }
    }

    return "";
}

/**
 * Check all of the stylesheets that are loaded and return whether or not the Droopy.css stylesheet is loaded
 *
 * @returns {Boolean} Returns true if the Droopy.css file is loaded
 */
function isDroopyCSSLoaded()
{
    return (getDroopyCSS() !== "");
}

/**
 * Initialize a Droopy Calendar instance
 *
 * @param {string} id The ID of the object that will be storing the calendar
 */
function initDroopyCalendar(id)
{
    if (jQuery(id).length !== 0)
    {
        var droopyCalendar = jQuery(id);
        var calendarURL = "https://www.csun.edu/calendar-events/month/" + getWebOneGID();

        _fetchDomObject(calendarURL, ".view-id-calendar_events_og", droopyCalendar);

        jQuery(".pager a").live("click", function (event) {
            event.preventDefault();

            _fetchDomObject(jQuery(this).attr("href"), ".view-id-calendar_events_og", droopyCalendar);
        });
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
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2); // jshint ignore:line
};

jQuery(document).ready(function()
{
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

    // If there is an Droopy "Events by Tag" element
    jQuery(".droopy-ebt").each(function () {
        var $this = jQuery(this);
        var tagID = $this.data("tag");

        var tagURL = "https://www.csun.edu/events-by-term/" + getWebOneGID() + "/" + tagID;

        _fetchDomObject(tagURL, ".view-content", $this);
    });

    initDroopyCalendar("#droopyCalendar");
});
