/* globals $ */
//untill minute 15

$.fn.gallery = function (columnsPerRow) {
    //for optional parameter
    columnsPerRow = columnsPerRow || 4;

//selecting elements from the css
    var $this = this; // vzema tekushtiq element varhu kojto se izpalnqva plugina
    var $selected = $this.children('.selected');
    var $imageContainers = $this.find('image-container');

//hiding the selected elements
    $selected.hide();

//addint the class as an object in the javascript. 
    $this.addClass('gallery');

    return this;
};