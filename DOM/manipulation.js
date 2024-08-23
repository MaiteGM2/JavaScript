// let addButton1 = document.querySelector(".add-button1");
// let addButton2 = document.querySelector(".add-button2");
// let newElement = document.querySelector("#input-1");
// let firstList = document.getElementById("first-list");
// let secondList = document.getElementById("second-list");

// function createElement(text) {
//   let element = document.createElement("li");
//   element.innerHTML = text;
//   return element;
// }

// addButton1.addEventListener("click", function () {
//   console.log(newElement);
//   firstList.append(createElement(newElement.value));
// });

let buttonTheme = document.querySelector(".theme");
let theme = "black";
let body = document.querySelector("body");
let listContainer = document.querySelector('.list-container')

buttonTheme.addEventListener("click", function () {
  if (theme === "black") {
    body.style.backgroundColor = "#FFFFFF";
    body.style.color = "#000000";
    listContainer.style.color = "#000000";
    theme = "white";

  } else {
    body.style.backgroundColor = "#332F2C";
    body.style.color = "#FFFFFF";
    listContainer.style.color = "#FFFFFF";
    theme = "black";
  }
});
// //////




let addButton = document.querySelector('.add-button');

addButton.addEventListener('click', function(){
    console.log('click');
    let itemsList = document.querySelector('.items-list');
    let inputElement = document.querySelector('.new-element');
    let newTextElement = inputElement.value;

    console.log(inputElement);

    if(newTextElement !== ''){

        let newElement = document.createElement('li');
        newElement.className = 'element';

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        let itemText = document.createElement('span');
        itemText.textContent = newTextElement;

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';


        let element = document.querySelector('.element');

        deleteButton.addEventListener('click', function(){
            itemsList.removeChild(element);
        });

        newElement.appendChild(checkbox);
        newElement.appendChild(itemText);
        newElement.appendChild(deleteButton);

        itemsList.appendChild(newElement);

        inputElement.value = '';

    }
    
});
