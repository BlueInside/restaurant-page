import "./styles/style.css";
import renderHomePage from "./home.js";
import renderMenuPage from "./menu.js";
import renderContactPage from "./contact.js";
const content = document.getElementById("content");
const btns = document.querySelectorAll("button");
btns.forEach((btn) => {
  btn.addEventListener("click", renderPageAndMarkButton);
});

function renderPageAndMarkButton(e) {
  btns.forEach((btn) => {
    btn.classList.remove("clicked");
  });
  this.classList.add("clicked");
  const page = e.target.innerText;
  console.log(page);
  content.textContent = "";
  this.add;
  if (page === "Home") renderHomePage();
  if (page === "Menu") renderMenuPage();
  if (page === "Contact") renderContactPage();
}

renderHomePage();
