const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.addEventListener("input", range);

function range(event) {

  text.style.fontSize = `${input.value}px`;
}
