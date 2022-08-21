const input = document.querySelector("#validation-input");

input.addEventListener("blur", validation);

function validation(event) {
  if (
    event.currentTarget.value.length <= input.dataset.length &&
    event.currentTarget.value.length >= input.dataset.length
  ) {
      input.classList.add("valid");
      input.classList.remove("invalid");
  } else {
      input.classList.add("invalid");
      input.classList.remove("valid");
  }
}
