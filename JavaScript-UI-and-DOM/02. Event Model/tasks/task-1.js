/* globals $ */

/* 

Create a function that takes an id or DOM element and:
  

*/

function solve() {
  return function (selector) {

    //The id is neither a string nor a DOM element
    if (typeof selector !== 'string' && !(selector instanceof HTMLElement)) {
      throw new Error('The id is neither a string nor a DOM element!');
    }

    //The provided DOM element is non-existant
    if (document.getElementById(selector) === null) {
      throw new Error('The provided DOM element is non-existant');
    }

    //Finds all elements with class button or content within the provided element
    var buttons = document.getElementsByClassName('button'),
      content = document.getElementsByClassName('content'),
      i,
      j,
      len;

    //Change the content of all .button elements with "hide" 
  for(i = 0, len = buttons.length; i < len; i+=1){
		buttons[i].innerHTML = 'hide';
		buttons[i].addEventListener('click', function(ev){
			var clickedButton = ev.target;
			var nextSibling = clickedButton.nextElementSibling;
			var firstContent,
				validFirstContent = false;

			while(nextSibling){
				if(nextSibling.className === 'content'){
					firstContent = nextSibling;
					nextSibling = nextSibling.nextSibling;
					while(nextSibling){
						if(nextSibling.className === 'button'){
							validFirstContent = true;
							break;
						}
						nextSibling = nextSibling.nextElementSibling;
					}
					break;
				} else {
					nextSibling = nextSibling.nextElementSibling;
				}
			}

			if (validFirstContent) {
				if (firstContent.style.display === 'none') {
					firstContent.style.display = '';
					clickedButton.innerHTML = 'hide';
				} else {
					firstContent.style.display = 'none';
					clickedButton.innerHTML = 'show';
				}
			}

		});
	}

  };
};

module.exports = solve;