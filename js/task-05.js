/*
  Напиши скрипт который, при наборе текста в инпуте input#name-input 
  (событие input), подставляет его текущее значение в span#name-output. 
  Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
  */



/*const inputEl = document.querySelector('input#name-input ');
const spanEl = document.querySelector('pan#name-output');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  spanEl.textContent = event.currentTarget.value || 'незнакомец';
}*/


/*const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInput);

function onInput (event) { 
    spanEl.textContent = event.currentTarget.value || 'незнакомец';
}*/


const array = {
    nameInput: document.querySelector('input#name-input'),
    nameSpan: document.querySelector('span#name-output'),
};

array.nameInput.addEventListener('input', onInput);

function onInput () {
  array.nameSpan.textContent =
    (array.nameInput.value === "") ? 'незнакомец' : array.nameInput.value;
}

console.log(onInputChange);
console.log(array);