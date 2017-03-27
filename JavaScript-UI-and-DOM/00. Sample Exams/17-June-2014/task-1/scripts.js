function createImagesPreviewer(selector, items) {
  var root = document.querySelector(selector);
  var fragment = document.createDocumentFragment();

  //for the image in the center
  var imagePreviewer = document.createElement('div');
  imagePreviewer.style.display = 'inline-block';
  imagePreviewer.style.width = '75%';
  imagePreviewer.style.float = 'left';
  imagePreviewer.style.textAlign = 'center';

  //for the images on the side
  var aside = document.createElement('div');
  aside.style.display = 'inline-block';
  aside.style.width = '25%';
  aside.style.textAlign = 'center';

//the selected image

var selectedParent = document.createElement('div');
selectedParent.classList.add('image-preview');
var selectedImageHeader = document.createElement('h3');
selectedImageHeader.innerText = items[0].title;
var selectedImage = document.createElement('img');
selectedImage.src = items[0].url;
selectedImage.style.width = '80%';

selectedParent.appendChild(selectedImageHeader);
selectedParent.appendChild(selectedImage);
imagePreviewer.appendChild(selectedParent);

//input field
  var input = document.createElement('input');
  var inputHeader = document.createElement('h3');
  inputHeader.innerText = 'Filter';

  //handling the serach in the filter with keyup event

  input.addEventListener('keyup', function(ev){
    var text = ev.target.value;
    var liChildren = listOfItems.getElementsByTagName('li');
    for (var i = 0, len = liChildren.length;  i < len ; i +=1) {
        var currentLi = liChildren[i];
        var header = currentLi.firstElementChild.innerText;
        if(header.toLowerCase().indexOf(text.toLowerCase()) >= 0 ) {
          currentLi.style.display = 'block';
        }
        else {
          currentLi.style.display = 'none';
        }
    }
  }, false);

//add all the items / images

  var listOfItems = document.createElement('ul');
  listOfItems.style.listStyleType = 'none';
  listOfItems.style.height = '500px';
  listOfItems.style.overflowY = 'scroll';

//adding event listener for clicking on an image;

  listOfItems.addEventListener('click', function(ev){
      var target = ev.target;
      if(target.tagName === 'IMG') {
        var header = target.previousElementSibling.innerText;
        var src = target.src;
        selectedImageHeader.innerText = header;
        selectedImage.src = src;
      };     
  }, false);

//hover effect with background color change

  listOfItems.addEventListener('mouseover', function(ev){
    var target = ev.target;
    if(target.tagName === 'IMG') {
      target.parentElement.style.backgroundColor = 'gray';
      //tell the user that this element is clickable
      target.parentElement.style.cursor = 'pointer';
    }
  }, false);

//unhover - when leaving the elements

listOfItems.addEventListener('mouseout', function(ev){
  var target = ev.target;
  if(target.tagName === 'IMG') {
    target.parentElement.style.backgroundColor = '';
  }

}, false);


//added class to the image
  var li = document.createElement('li');
  li.classList.add('image-container');

  //the image elements

  var imageHeader = document.createElement('h3');
  var image = document.createElement('img');
  image.style.width = '90%';

  for (let i = 0, len = items.length; i < len; i +=1) {
      var currentItem = items[i];
      var currentLi = li.cloneNode(true);
      var currentImageHeader = imageHeader.cloneNode(true);
      currentImageHeader.innerText = currentItem.title;

      var currentImage = image.cloneNode(true);
      currentImage.src = currentItem.url;

      currentLi.appendChild(currentImageHeader);
      currentLi.appendChild(currentImage);

      listOfItems.appendChild(currentLi);
  }



  aside.appendChild(inputHeader);
  aside.appendChild(input);
  aside.appendChild(listOfItems);

  fragment.appendChild(imagePreviewer);
  fragment.appendChild(aside);

  root.appendChild(fragment);

}