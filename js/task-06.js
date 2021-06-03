/* 
Напиши скрипт, который бы при потере фокуса на инпуте, 
проверял его содержимое на правильное количество символов.
Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, то border инпута становится зеленым, 
если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid.
*/

const targetInput = document.querySelector('input#validation-input');

targetInput.addEventListener('blur', onCheck);
function onInput(isValid) {
    return isValid ? { toAdd: 'valid', toRemove: 'invalid' }:{ toAdd: 'invalid', toRemove: 'valid' }
}

function onCheck() {
    const actions = onInput(targetInput.value.length >= targetInput.getAttribute('data-length'));

    targetInput.classList.add(actions.toAdd);
    targetInput.classList.remove(actions.toRemove);
}

