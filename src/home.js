export default function () {
  const content = document.getElementById("content");
  const firstItem = document.createElement("div");
  const header1 = document.createElement("h1");
  let para = document.createElement("p");
  let span = document.createElement("span");

  firstItem.classList.add("grid-item");

  header1.classList.add("item-title");
  header1.innerText = "Polish kitchen";
  para.innerText = "Where every flavor tells a story.";

  firstItem.append(header1, para);
  content.appendChild(firstItem);

  const secondItem = document.createElement("div");
  secondItem.classList.add("grid-item");
  span.classList.add("item-title");
  span.innerText = "Opening Hours";
  para = document.createElement("p");
  para.innerText = "Mon-Fri 08:00-22:00 \n Weekend 10:00-05:00";

  secondItem.append(span, para);
  content.appendChild(secondItem);

  const thirdItem = document.createElement("div");
  thirdItem.classList.add("grid-item");
  span = document.createElement("span");
  span.classList.add("item-title");
  span.innerText = "Location";
  para = document.createElement("p");
  para.innerText = "123 Mountain Field, Niedaleko Puszczy, Avenue";

  thirdItem.append(span, para);
  content.appendChild(thirdItem);
}
