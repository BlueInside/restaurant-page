import "./styles/style.css";
import renderHomePage from "./home.js";
import renderMenuPage from "./menu.js";
import renderContactPage from "./contact.js";
const content = document.getElementById("content");
const btns = document.querySelectorAll("button");
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const page = e.target.innerText;
    console.log(page);
    content.textContent = "";
    if (page === "Home") renderHomePage();
    if (page === "Menu") renderMenuPage();
    if (page === "Contact") renderContactPage();
  });
});
renderHomePage();
g;
