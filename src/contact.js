export default function () {
  const content = document.getElementById("content");
  const contact = document.createElement("div");
  contact.innerText = "Contact:";
  contact.classList.add("contact");

  const phoneNumber = document.createElement("span");
  phoneNumber.innerText = "PhoneNumber: 123-5555-456";
  const email = document.createElement("span");
  email.innerText = "Email: soRealEmail@notFake.pl";

  content.append(contact, phoneNumber, email);
}
