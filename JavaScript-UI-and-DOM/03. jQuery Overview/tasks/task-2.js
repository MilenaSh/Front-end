/* globals $ */

/*
Create a function that takes a selector and:
* Finds all elements with class `button` or `content` within the provided element
  * Change the content of all `.button` elements with "hide"
* When a `.button` is clicked:  
  * Find the topmost `.content` element, that is before another `.button` and:
    * If the `.content` is visible:
      * Hide the `.content`
      * Change the content of the `.button` to "show"       
    * If the `.content` is hidden:
      * Show the `.content`
      * Change the content of the `.button` to "hide"
    * If there isn't a `.content` element **after the clicked `.button`** and **before other `.button`**, do nothing
* Throws if:
  * The provided ID is not a **jQuery object** or a `string` 

*/
function solve() {
  return function (selector) {

    if (!selector) {
      throw new Error("The selector cannot be null or undefined!")
    }

    var $root = $(selector);

    if ($root.length === 0) {
      throw new Error("There is no such element!");
    }

    $root.children('.button').html('hide');

    $root.children('.button').click(function () {
      var $button = $(this);
      var $content = $button.nextAll('.content').first();

      if ($content.length) {
        $button.html($button.html() === 'hide' ? 'show' : 'hide');
        $content.css('display', $content.css('display') === 'none' ? '' : 'none');
      }
    });

  };
};

module.exports = solve;