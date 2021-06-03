/*
  Напиши скрипт который, при наборе текста в инпуте input#name-input 
  (событие input), подставляет его текущее значение в span#name-output. 
  Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
  */



const array = {
    nameInput: document.querySelector('input#name-input'),
    nameSpan: document.querySelector('span#name-output'),
};

array.nameInput.addEventListener('input', onInput);

function onInput() {
    const valueInput = array.nameInput.value.trim()
    
    array.nameSpan.textContent = (valueInput === "" ) ? 'незнакомец' : valueInput;

}