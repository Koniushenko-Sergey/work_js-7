


/*Напиши скрипт создания и очистки коллекции элементов.
Пользователь вводит количество элементов в input и нажимает кнопку Создать, 
после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. 
Функция создает столько div, сколько указано в amount и добавляет их в div#boxes. 
*/



const controlsEl = document.querySelector('#controls');
const numberEl = controlsEl.firstElementChild;
const renderBtnEl = document.querySelector('[data-action="render"]');
const destroyBtnEl = document.querySelector('[data-action="destroy"]');
const boxesEl = document.querySelector('#boxes');
let sizeBox = 30;

renderBtnEl.addEventListener('click', renderBoxes);
destroyBtnEl.addEventListener('click', destroyBoxes);

function renderBoxes() {
  boxesEl.append(...createBoxes(numberEl.value));
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
  numberEl.value = '';
  sizeBox = 30;
}

function createBoxes(amount) {
  const divElements = [];

  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement('div');
    divEl.style.backgroundColor = `rgb(${Math.round(
      Math.random() * 255,
    )}, ${Math.round(Math.random() * 255)}, ${Math.round(
      Math.random() * 255,
    )})`;
    divEl.style.height = `${sizeBox}px`;
    divEl.style.width = `${sizeBox}px`;
    divEl.style.border = '1px solid #bdbdbd';
    divEl.style.marginBottom = '5px';

    divElements.push(divEl);
    sizeBox += 10;
  }
  return divElements;
}