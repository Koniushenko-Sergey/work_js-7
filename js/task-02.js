
/* Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, 
  после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM - 
  узлов используй document.createElement(). */


const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsEl = document.querySelector('#ingredients');

const makeItemEl = value => {
  const itemEl = document.createElement('li');
  itemEl.textContent = value;
  return itemEl;
}

const elements = ingredients.map(makeItemEl);

ingredientsEl.append(...elements);
