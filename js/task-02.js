const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.querySelector("#ingredients");

const elements = ingredients.map((value) => {
  const liEl = document.createElement("li");
  liEl.classList.add("item");
  liEl.textContent = value;

  return liEl;
});

ulEl.append(...elements);

console.log(ulEl);

// __________________________________________________

// const ulEl = document.querySelector('#ingredients');
// const liEl = document.createElement('li');

// const elements = [];

// for (let i = 0; i < ingredients.length; i += 1) {
//   const liEl = document.createElement('li');
//   liEl.classList.add('item');
//   liEl.textContent = ingredients[i];

//   elements.push(liEl);
// }

// ulEl.append(...elements);

// console.log(ulEl);

// __________________________________________________

// const ulEl = document.querySelector('#ingredients');
// const liEl = document.createElement('li');

// for (let i = 0; i < ingredients.length; i += 1) {
//   const liEl = document.createElement('li');
//   liEl.classList.add('item');
//   liEl.textContent = ingredients[i];

//   ulEl.appendChild(liEl);
// }

// console.log(ulEl);
