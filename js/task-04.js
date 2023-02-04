
let counterValue = 0;

const buttonDecrementRef = document.querySelector('[data-action = "decrement"]');
const buttonIncrementRef = document.querySelector('[data-action = "increment"]');
const valueIndicatorRef = document.querySelector('#value');

buttonDecrementRef.addEventListener('click', onButtonDecrementClick);
buttonIncrementRef.addEventListener('click', onButtonIncrementClick);

function onButtonDecrementClick() {
    counterValue -= 1;
    valueIndicatorRef.textContent = counterValue;
}

function onButtonIncrementClick() {
    counterValue += 1;
    valueIndicatorRef.textContent = counterValue;
}

 