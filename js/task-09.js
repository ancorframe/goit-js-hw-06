function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const text = body.querySelector(".color");
const btn = body.querySelector(".change-color");

btn.addEventListener("click", chengeColor);
function chengeColor(event) {

  const color = getRandomHexColor();

  body.style.backgroundColor = color;
  text.textContent = color;
  
}
