function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputEl = document.querySelector("#controls>input");
const mainDivEl = document.querySelector("#boxes");
const buttonCreateEl = document.querySelector("button[data-create]");
const buttonDestroyEl = document.querySelector("button[data-destroy]");

const createBoxes = (amount) => {
  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement("div");
    divEl.style.width = `${30 + 10 * i}px`;
    divEl.style.height = `${30 + 10 * i}px`;
    divEl.style.backgroundColor = getRandomHexColor();

    mainDivEl.appendChild(divEl);
  }

  return mainDivEl;
};

buttonCreateEl.addEventListener("click", () => {
  return createBoxes(inputEl.value);
});

buttonDestroyEl.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  return (mainDivEl.innerHTML = "");
}
