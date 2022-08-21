const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const createEl = ingredients.map((ingredient) => {
  const listEl = document.createElement("li");
  listEl.classList.add("item");
  listEl.textContent = `${ingredient}`;
  return listEl;
});

const listEl = document.querySelector("#ingredients");
listEl.append(...createEl);
