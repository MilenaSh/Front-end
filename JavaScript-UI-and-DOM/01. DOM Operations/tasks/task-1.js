module.exports = function() {

    return function(element, contents) {

        if (typeof element === 'string') {
            // If an id is provided, select the element
            element = document.getElementById(element);

            // The provided id does not select anything
            if (element === undefined || element === null) {
                throw new Error('element does not select anything');
            }
        }

        // The provided first parameter is neither string or existing DOM element
        else if (typeof element !== 'string' && !(element instanceof HTMLElement)) {
            throw new Error('invalid element');
        }

        // Any of the function params is missing
        if (element === null || contents === null || element === undefined || contents === undefined) {
            throw new Error('missing parameter');
        }

        if (!Array.isArray(contents)) {
            throw new Error('contents is not array');
        }


        var finalContent = '';
        for (var i = 0, len = contents.length; i < len; i += 1) {

            // Any of the contents is neither string nor number
            if (typeof contents[i] !== 'string' && typeof contents[i] !== 'number') {
                throw new Error('content element is invalid');
            }

            // Each div's content must be one of the items from the contents array
            finalContent += '<div>' + contents[i] + '</div>';
        }

        // Add divs to the element
        element.innerHTML = finalContent;

    };
};