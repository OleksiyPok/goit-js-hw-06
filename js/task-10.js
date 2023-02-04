const amountInput = document.querySelector('#controls input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const parentElement = document.querySelector('#boxes');

createButton.addEventListener('click', onClickCreate);
destroyButton.addEventListener('click', onClickDestroy); 

function onClickCreate() {
  createBoxes(amountInput.value)
}

function onClickDestroy() {
  destroyBoxes(parentElement);
}

function createBoxes(amount) {
  const elemCollection = [];
  let elemHeight = 30;
  let elemWidth = 30;

  if (parentElement.lastElementChild) {
    elemHeight = Number(parentElement.lastElementChild.style.height.slice(0, -2));
    elemWidth = Number(parentElement.lastElementChild.style.width.slice(0, -2));
  }

  for (let i = 0; i < (amount); i +=1) {
    const newDiv = document.createElement('div');
    const elemStyle = `height: ${elemHeight += 10}px; width: ${elemWidth += 10}px; background: ${getRandomHexColor()}`;
    newDiv.setAttribute('style', elemStyle);
    elemCollection.push(newDiv);
  }
  
  parentElement.append(...elemCollection);
} 

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function destroyBoxes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}