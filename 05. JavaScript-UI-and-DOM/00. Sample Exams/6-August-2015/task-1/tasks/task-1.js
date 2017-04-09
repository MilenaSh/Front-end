function solve() {
  return function (selector, isCaseSensitive) {
    var isCaseSensitive = isCaseSensitive || false;

    //items control
    var root = document.querySelector(selector);
    root.className = 'items-control';

    //creating the div elements

    //add controls
    var addControls = document.createElement('div');
    addControls.className = "add-controls";

    var labelEnterText = document.createElement('label');
    labelEnterText.innerHTML = 'Enter text';

    var inputElement = document.createElement('input');

    var buttonAdd = document.createElement('button');
    buttonAdd.className = "button";
    buttonAdd.innerHTML = "Add";

    addControls.appendChild(labelEnterText);
    addControls.appendChild(inputElement);
    addControls.appendChild(buttonAdd);

    //search controls
    var searchControls = document.createElement('div');
    searchControls.className = "search-controls";

    labelSearchText = document.createElement('label');
    labelSearchText.innerHTML = "Search:";

    inputSearch = document.createElement('input');

    searchControls.appendChild(labelSearchText);
    searchControls.appendChild(inputSearch);

    //Typing in the input must refresh the contents of the element with class result-controls

    inputSearch.addEventListener('input', function (ev) {
      var textSearch = inputSearch.value;
      var items = document.getElementsByClassName('list-item');

      var len = items.length;

      for (var i = 0; i < len; i += 1) {
        //take the label value      
        var currentItemText = items[i].lastChild.innerHTML;

        if (isCaseSensitive) {
          if (currentItemText.indexOf(textSearch) < 0) {
            items[i].style.display = 'none';
          } else {
            items[i].style.display = '';
          }

        } else {
          if (currentItemText.toLowerCase().indexOf(textSearch.toLowerCase()) < 0) {
            items[i].style.display = 'none';
          } else {
            items[i].style.display = '';
          }

        }
      }

    });

    //result controls
    var resultControls = document.createElement('div');
    resultControls.className = "result-controls";

    var itemsList = document.createElement('ul');
    itemsList.className = "items-list";

    resultControls.appendChild(itemsList);

    buttonAdd.addEventListener('click', function (ev) {
      var text = inputElement.value;

      var item = document.createElement('li');
      item.className = "list-item";

      var itemButton = document.createElement('button');
      var itemLabel = document.createElement('label');
      itemLabel.innerHTML = text;

      var buttonRemove = document.createElement('button');
      buttonRemove.className = 'button';
      buttonRemove.innerHTML = 'X';

      item.appendChild(buttonRemove);
      item.appendChild(itemLabel);

      itemsList.appendChild(item);

    });

//removing element when clicking on a button

  itemsList.addEventListener('click', function(ev){
    var target = ev.target;

    if(target.tagName === 'BUTTON') {
      itemsList.removeChild(target.parentElement);
    }
  });

    root.appendChild(addControls);
    root.appendChild(searchControls);
    root.appendChild(resultControls);

  };
}

module.exports = solve;