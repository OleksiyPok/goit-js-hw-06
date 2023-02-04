const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsItems = ingredients.map(ingredient => {
  const itemLi = document.createElement('li');
  itemLi.classList.add('item');
  itemLi.textContent = ingredient;  
  return  itemLi;
});

document.querySelector('#ingredients').append(...ingredientsItems);
