const catEl = document.querySelector("#categories");

console.log(`Number of categories:`, catEl.children.length);

console.log(`Category:`, catEl.firstElementChild.firstElementChild.textContent);
console.log(
  `Elements:`,
  catEl.firstElementChild.lastElementChild.children.length
);

console.log(
  `Category:`,
  catEl.firstElementChild.nextElementSibling.firstElementChild.textContent
);
console.log(
  `Elements:`,
  catEl.firstElementChild.nextElementSibling.lastElementChild.children.length
);

console.log(`Category:`, catEl.lastElementChild.firstElementChild.textContent);
console.log(
  `Elements:`,
  catEl.lastElementChild.lastElementChild.children.length
);
