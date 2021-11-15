// document.body.children[1].children[0].href = 'https://google.com';

// alert('piss...');
// window.alert('...off');

let anchorElement = document.getElementById('external-link');
anchorElement.href = 'https://google.com';

//This selects like a css selector
// anchorElement = document.querySelector('a');
// anchorElement.href = 'https://google.com';

//Add a new element
//1. Create it

let newAnchorElement = document.createElement('a');
newAnchorElement.href = 'https://laracasts.com';
newAnchorElement.textContent = 'This leads to Laracasts for when you\'re sick of JavaScript'

//2. Access the parent

let = firstParagraph = document.querySelector('p');

//3. Insert it

firstParagraph.append(newAnchorElement);

// Remove elements
//1. Select it

let firstH1Element = document.querySelector('h1');

//2. Remove it

firstH1Element.remove();
// for older browsers use this
// firstH1Element.parentElement.removeChild(firstH1Element);

//Move elements

firstParagraph.parentElement.append(firstParagraph);

//innerHTML

console.log(firstParagraph.innerHTML);

firstParagraph.innerHTML = 'Yo! This is <strong>important!</strong>';