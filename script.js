// const dog = document.querySelector(".dog");

// const dogName = "Perro";

// const newDog = document.createElement("div");
// newDog.classList.add("dog");

// const image = document.createElement("img");
// image.src = "https://dogtime.com/assets/uploads/2011/03/puppy-development.jpg";
// image.alt = "Dog photo";

// const h2 = document.createElement("h2");
// h2.textContent = "Hola, soy un perro bebé";

// const input = document.createElement("input");
// input.type = "text";
// input.placeholder = "Escribe el nombre del perro";
// input.id = "puppyName";

// const pPuppyName = document.createElement("h3");
// pPuppyName.id = "name";

// const buttonInput = document.createElement("button");
// buttonInput.textContent = "Agregar nombre del perro";

// const p = document.createElement("p");
// p.textContent =
//   "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut doloribus sequi aut officiis voluptatem quas magnam ipsum odit vel. Consectetur aliquam sit ipsum voluptatibus eum earum. Minima, ipsam id!";
// p.classList.add("moreInfo");

// const button = document.createElement("button");
// button.textContent = "Clic para leer mas sobre mi";
// button.classList.add("button");

// document.body.appendChild(newDog);
// newDog.appendChild(image);
// newDog.appendChild(h2);
// newDog.appendChild(input);
// newDog.appendChild(buttonInput);
// newDog.appendChild(pPuppyName);
// newDog.appendChild(p);
// newDog.appendChild(button);

// // function showMore() {
// //   document.querySelector(".moreInfo").style.display = "block";
// // }

// const showMore = () =>
//   (document.querySelector(".moreInfo").style.display = "block");

// const addName = () => {
//   const name = document.querySelector("#puppyName").value;
//   document.querySelector("#name").textContent = `Hola, soy ${name}`;
// };

// document.querySelector(".button").addEventListener("click", showMore);
// buttonInput.addEventListener("click", addName);

/**
 * AfterClass Nivelación
 */

/**
 * Variables types
 */

// const name = "Pedro";
// const surname = "Perez";

// let diceValue = 5;
// diceValue = 4;

// console.log({ name, surname, diceValue });

// if (true) {
//   let diceValue = 6;
//   const name = "Juan";
//   console.log({ name, surname, diceValue });
// }

// console.log({ diceValue });

/**
 * Template strings
 */

// const name = "Pedro";
// const surname = "Perez";
// const age = 25;

// console.log(name + " y " + surname);

// const completeName = `
// ${name}
// ${surname}
// ${age}
// `;
// console.log(completeName);

// function hi(name) {
//   return `Hola ${name}`;
// }

// console.log(`Así se saluda: ${hi("Leo")}`);

/**
 * Literal Objects
 */

// const name = "Pedro";
// const surname = "Perez";
// const age = 25;

// const dog = {
//   name: "Perro",
//   age: 5,
//   owner: { name, surname, age },
// };
// console.log({ dog });

// const dog2 = {
//   // Spread operator
//   ...dog,
//   color: "Black",
// };

// console.log({ dog2 });

/**
 * Arrays
 */

// const arrayNumber = [1, 2, 3, 4, 5];
// // arrayNumber = "Hola"; // Error: Uncaught TypeError: Assignment to constant variable.
// arrayNumber.push(6);
// arrayNumber.push(7);
// arrayNumber.push(8);
// arrayNumber.push(9);

// console.log({ arrayNumber });

// let arrayNumber2 = [...arrayNumber, 10, 11, 12];

// console.log({ arrayNumber2 });

// let arrayNumber3 = arrayNumber2.map((number) => number * 2);
// console.log({ arrayNumber3 });

// let arrayNumber4 = arrayNumber2.map(
//   (number) => `${number} multiplicado por 2 es igual a: ${number * 2}`
// );
// console.log({ arrayNumber4 });

/**
 * Functions
 */

// function(name) {
//   return `Hola ${name}`;
// }

// const hi = function (name) {
//   return `Hola ${name}`;
// };
// console.log(hi("Leo"));

// // const hi2 = (name) => {
// //   return `Hola ${name}`;
// // };
// const hi2 = (name) => `Hola ${name}`;
// console.log(hi2("Pedro"));

// // const getUser = () => {
// //   console.log("Hola");
// //   return {
// //     name: "Pedro",
// //     surname: "Perez",
// //     age: 25,
// //   };
// // };

// const getUser = () => ({
//   name: "Pedro",
//   surname: "Perez",
//   age: 25,
// });

// const user = getUser();
// console.log(user);

/**
 * Objects destructuring
 */

const nameOwner = "Pedro";
const surnameOwner = "Perez";
const ageOwner = 25;

const dog = {
  name: "Perro",
  age: 5,
  owner: { nameOwner, surnameOwner, ageOwner },
};

console.log({ dog });

const useContext = ({ age, name, owner, color = "Negro" }) => {
  return {
    name,
    age,
    owner,
    color,
  };
};

const { name, age, owner } = useContext(dog);

console.log(`
Hola, me llamo ${name}, y tengo ${age} años
Mi amo, se llama ${owner.nameOwner} y tiene ${owner.ageOwner} años
`);
