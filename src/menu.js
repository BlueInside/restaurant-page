export default function () {
  const content = document.getElementById("content");
  let container = document.createElement("div");
  let menuTitle = document.createElement("span");

  addNewMenu("Appetizers");
  populateMenuTitle("Raw Carrot Salad", 4.99);
  populateMenuTitle("Pickle Herring", 5.99);
  populateMenuTitle("Steak Tartare", 5.99);
  content.appendChild(container);

  addNewMenu("Mains");
  populateMenuTitle("Pierogi", 12.99);
  populateMenuTitle("Cabbage Rolls", 10.99);
  populateMenuTitle("Potato Pancakes", 10.49);
  content.appendChild(container);

  addNewMenu("Drinks");
  populateMenuTitle("Vodka", 3.99);
  populateMenuTitle("Apple Juice", 2.99);
  populateMenuTitle("Strawberry Compote", 1.99);
  content.appendChild(container);

  function populateMenuTitle(name, price) {
    let span = document.createElement("span");
    span.innerText = name;
    container.appendChild(span);
    span = document.createElement("span");
    span.innerText = `$${price}`;
    container.appendChild(span);
  }
  function restartNodes() {
    container = document.createElement("div");
    menuTitle = document.createElement("span");
    container.classList.add("container");
    menuTitle.classList.add("menu-title");
  }
  function addNewMenu(name) {
    restartNodes();
    menuTitle.innerText = name;
    container.appendChild(menuTitle);
  }
}
