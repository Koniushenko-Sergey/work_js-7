



/*Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и
изменяет инлайн-стиль span#text обновляя свойство font-size. 
В результате при перетаскивании ползунка будет меняться размер текста.

*/


const sizeControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

sizeControlEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  const size = event.currentTarget.value;
  textEl.style.fontSize = `${size}px`;
}