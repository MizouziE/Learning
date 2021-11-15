let paragraphElement = document.querySelector('p');

function changeParagraphText() {
    paragraphElement.textContent = 'Safe!';
}

paragraphElement.addEventListener('click', changeParagraphText);

let inputElement = document.querySelector('input');

function acceptUserInput(event) {
    // let inputText = inputElement.value;
    let inputText = event.target.value;
    console.log(inputText)
    console.log(event)
}

inputElement.addEventListener('input', acceptUserInput);