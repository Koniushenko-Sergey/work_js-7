/*
Счетчик состоит из спана и кнопок, которые должны увеличивать и 
уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
  */



const valueEl = document.querySelector('#value');
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const textContent =  valueEl.textContent;
let counterValue = Number(textContent) || 0;

const increment = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};
const decrement = () => { 
  counterValue -= 1;
  valueEl.textContent = counterValue;
};


incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);


