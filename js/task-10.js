function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelectorAll("#controls button");
const input = document
  .querySelector("input")
  .addEventListener("change", number);
const boxes = document.querySelector("#boxes");

const create = btn[0];
const destroy = btn[1];
let amount = 0;

function number(event) {
  console.log(event.currentTarget.value);
  return (amount = event.currentTarget.value);
}

create.addEventListener("click", createBoxes);

function createBoxes(event) {
  if (amount < 1) {
    alert("change number of boxes");
  }

  let firstEl = 20;
  const step = 10;

  for (let i = 1; i <= amount; i++) {
    firstEl = firstEl + step;

    const box = document.createElement("div");
    box.style.width = `${firstEl}px`;
    box.style.height = `${firstEl}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.marginBottom = "5px";

    boxes.appendChild(box);
  }
}

destroy.addEventListener("click", destroyBoxes);

function destroyBoxes(event) {
  boxes.innerHTML = "";
}
