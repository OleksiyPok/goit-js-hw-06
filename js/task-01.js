const ulCategories = document.querySelector('#categories');
const ulSub = ulCategories.querySelectorAll('ul').length;
console.log(`Number of categories:  ${ulSub}`);
console.log(`\n`);

const h2 = document.querySelectorAll('h2');

for (let i = 0; i < h2.length; i += 1) {
  const quantOfItems = h2[i].nextElementSibling.children.length;
  console.log(`Category: ${h2[i].textContent}`, `\n`);
  console.log(`Elements: ${quantOfItems}`);
  console.log(`\n`);
}
