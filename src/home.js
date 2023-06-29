export default function () {
  const body = document.querySelector("body");
  body.classList.add("bg");

  const content = document.getElementById("content");

  const element = document.createElement("div");
  const restaurantName = document.createElement("div");

  const header1 = document.createElement("h1");
  header1.innerText = "Simple Food";

  restaurantName.appendChild(header1);

  const description = document.createElement("div");
  description.innerText =
    "welcome to our restaurant where every flavor tells a story.";

  element.append(restaurantName, description);

  content.appendChild(element);
}
