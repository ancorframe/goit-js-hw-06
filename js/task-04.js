const actions = document.querySelectorAll("#counter button");

const valueEl = document.querySelector("#value");

let counterValue = 0;

const increment = actions[1];
increment.addEventListener("click", () => {
  counterValue++;
  valueEl.textContent = counterValue;
});

const decrement = actions[0];
decrement.addEventListener("click", () => {
  counterValue--;
  valueEl.textContent = counterValue;
});
