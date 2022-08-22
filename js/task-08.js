const form = document.querySelector(".login-form");
console.log("~ form", form);

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const elements = event.currentTarget.elements;

  if (elements.email.value === "" || elements.password.value === "") {
    return alert("Всі поля повинні бути заповнені");
  }

  const mail = elements.email.value;
  const password = elements.password.value;

  const formData = {
    mail,
    password,
  };
  console.log(formData);
  form.reset();
}
