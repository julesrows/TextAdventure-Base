var description = document.querySelector('#descrip');
console.log (description.tagName);
console.log (description.parentNode.tagName);

var outputChildren = document.querySelectorAll ('output > *');

for (i = 0; i < outputChildren.length; i++ ) {
  console.log (outputChildren[i].tagName);
};

var p = document.querySelector ('output > p');
console.log (p.parentNode.tagName);

var inventory = document.getElementById('inventory');
console.log (inventory.parentNode.tagName); 
