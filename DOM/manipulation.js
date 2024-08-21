let addButton1 = document.querySelector(".add-button1");
let addButton2 = document.querySelector(".add-button2");
let newElement = document.querySelector("#input-1");
let firstList = document.getElementById("first-list");
let secondList = document.getElementById("second-list");


// Crear un nuevo elemento 'li'
const li = document.createElement('li');

// Crear el input de tipo checkbox
const checkbox = document.createElement('input');
checkbox.type = 'checkbox';

// Crear el texto
const text = document.createTextNode('Este es un elemento de lista con un checkbox');

// Agregar el checkbox y el texto al elemento 'li'
li.appendChild(checkbox);
li.appendChild(text);

// Agregar el 'li' a una lista existente en el DOM
// Selecciona la lista donde quieres agregar el 'li'
newElement.appendChild(li);




// function createElement(text) {
//   // <li><input type="checkbox" /> Comprar huevos</li>
//   let element = document.createElement("li");
//   let checkbox = document.createElement('input');
//   checkbox.type = 'checkbox';
//   element.append = checkbox;
//   element.innerHTML = text;
//   return element;
// }

// console.log(createElement(newElement.value));

addButton1.addEventListener("click", function () {
  console.log(newElement);
  firstList.append(newElement);
});

// addButton2.addEventListener("click", function () {
//   secondList.append += `<li>${newElement}</li>`;
// });

let buttonTheme = document.querySelector(".theme");
let theme = "black";
let body = document.querySelector("body");

buttonTheme.addEventListener("click", function () {
  console.log("helloooooo");
  if (theme === "black") {
    body.style.backgroundColor = "#FFFFFF";
    body.style.color = "#000000";
    theme = "white";
  } else {
    body.style.backgroundColor = "#332F2C";
    body.style.color = "#FFFFFF";
    theme = "black";
  }
});

// let deleteButton = document.querySelector('.delete-button');
// let alertDelete = document.querySelector('.alert-delete');

// deleteButton.addEventListener('click', function(){
//   alertDelete.style.
// })
