const dog = document.querySelector(".dog");
console.log("html", dog);

const dogName = "Perro";
console.log("dogName", dogName);

const myFunction = () => {
  console.log("myFunction");
};

myFunction();

const newDog = document.createElement("div");
newDog.classList.add("dog");

const image = document.createElement("img");
image.src = "https://picsum.photos/id/237/500/500";
image.alt = "Dog photo";

const h2 = document.createElement("h2");
h2.textContent = "Hola, soy un perro bebé";

const input = document.createElement("input");
input.type = "text";
input.placeholder = "Escribe el nombre del perro";
input.id = "puppyName";

const pPuppyName = document.createElement("h3");
pPuppyName.id = "name";

const buttonInput = document.createElement("button");
buttonInput.textContent = "Agregar nombre del perro";

const p = document.createElement("p");
p.textContent =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut doloribus sequi aut officiis voluptatem quas magnam ipsum odit vel. Consectetur aliquam sit ipsum voluptatibus eum earum. Minima, ipsam id!";
p.classList.add("moreInfo");

const button = document.createElement("button");
button.textContent = "Clic para leer mas sobre mi";
button.classList.add("button");

document.body.appendChild(newDog);
newDog.appendChild(image);
newDog.appendChild(h2);
newDog.appendChild(input);
newDog.appendChild(buttonInput);
newDog.appendChild(pPuppyName);
newDog.appendChild(p);
newDog.appendChild(button);

// function showMore() {
//   document.querySelector(".moreInfo").style.display = "block";
// }

const showMore = () =>
  (document.querySelector(".moreInfo").style.display = "block");

const addName = () => {
  const name = document.querySelector("#puppyName").value;
  document.querySelector("#name").textContent = `Hola, soy ${name}`;
};

document.querySelector(".button").addEventListener("click", showMore);
buttonInput.addEventListener("click", addName);
