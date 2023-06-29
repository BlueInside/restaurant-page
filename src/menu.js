export default function () {
  const content = document.getElementById("content");
  let container = document.createElement("div");
  let menuTitle = document.createElement("span");

  addNewMenu("Appetizers");
  populateMenuTitle("xyz", 25);
  populateMenuTitle("xyz", 25);
  populateMenuTitle("xyz", 25);
  content.appendChild(container);

  addNewMenu("Mains");
  populateMenuTitle("xyz", 25);
  populateMenuTitle("xyz", 25);
  populateMenuTitle("xyz", 25);
  content.appendChild(container);

  addNewMenu("Drinks");
  populateMenuTitle("xyz", 25);
  populateMenuTitle("xyz", 25);
  populateMenuTitle("xyz", 25);
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
