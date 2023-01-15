const inputEl = document.querySelector("#validation-input");
console.log(inputEl.value);

inputEl.addEventListener("blur", checkValidationOnInput);

function checkValidationOnInput(event) {
  if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
  }
}
