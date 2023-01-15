const minusBtnEl = document.querySelector('button[data-action="decrement"]');
const valueEl = document.querySelector("#value");
const plusBtnEl = document.querySelector('button[data-action="increment"]');

// _____________________________________________________________

const counterValue = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

const handleClickDecrement = minusBtnEl.addEventListener("click", () => {
  counterValue.decrement();
  valueEl.textContent = counterValue.value;
});

const handleClickIncrement = plusBtnEl.addEventListener("click", () => {
  counterValue.increment();
  valueEl.textContent = counterValue.value;
});

// _____________________________________________________________

// let counterValue = 0

// const handleClickDecrement= minusBtnEl.addEventListener('click', () => {
//   counterValue -= 1;
//   valueEl.innerHTML = counterValue;
// });

// const handleClickIncrement = plusBtnEl.addEventListener('click', () => {
//   counterValue += 1;
//   valueEl.innerHTML = counterValue;
// });
