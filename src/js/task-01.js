const ulEl = document.querySelector("#categories");
const liEl = document.querySelector(".item");

console.log(`Number of categories: ${ulEl.children.length}`);

console.log(`Category: ${liEl.firstElementChild.textContent}`);
console.log(`Elements: ${liEl.lastElementChild.children.length}`);

console.log(`Category: ${ulEl.children[1].firstElementChild.textContent}`);
console.log(`Elements: ${ulEl.children[1].lastElementChild.children.length}`);

console.log(`Category: ${ulEl.lastElementChild.firstElementChild.textContent}`);
console.log(
  `Elements: ${ulEl.lastElementChild.lastElementChild.children.length}`
);

// ________________________________________________________________________________

// const liAllEl = document.querySelectorAll('.item');

// console.log(`Number of categories: ${liAllEl.length}`);

// liAllEl.forEach(item => {
//   console.log(`Category: ${item.firstElementChild.textContent}`);
//   console.log(`Elements: ${item.lastElementChild.children.length}`);
// });
