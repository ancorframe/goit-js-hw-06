const input = document.querySelector("#validation-input");

input.addEventListener("blur", validation);

function validation(event) {
  if (
      event.target.value.length === Number(input.dataset.length)
      
  ) {
      inputAdd("valid");
      inputRemove("invalid")
  } else {
      inputAdd("invalid");
      inputRemove("valid");
  }
}

function inputAdd(style) {
    input.classList.add(style);
}

function inputRemove(style) {
    input.classList.remove(style);
}