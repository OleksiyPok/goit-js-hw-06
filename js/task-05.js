const inputArea = document.querySelector('#name-input');
const outputArea = document.querySelector('#name-output');

inputArea.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (!event.currentTarget.value) outputArea.textContent = 'Anonymous';
    else outputArea.textContent = event.currentTarget.value;
}