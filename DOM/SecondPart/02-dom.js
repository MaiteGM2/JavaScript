// // Ejercicio 1: Manejar Evento para Mostrar un Mensaje: Selecciona un botón con el id "show-message" y agrega un evento click que muestre un mensaje de alerta diciendo "¡Hola, mundo!".

// let button = document.getElementById('show-message');
// button.addEventListener('click', function(){
//     alert('Hola Mundo!');
// })

// // Ejercicio 2: Cambiar el Color de Fondo al Hacer Clic: Selecciona el body y agrega un evento que cambie su color de fondo al color que prefieras.

// let body = document.querySelector('body');

// let colors = [];

// for (let i = 0; i < 10; i++) {
//   let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
//   colors.push(randomColor);
// }

// body.addEventListener('click', function(){
//     body.style.background = colors;
// })

// // Ejercicio 3: Cambiar Texto al Hacer Clic: Selecciona un párrafo con la clase "click-text" y agrega un evento que cambie su texto a "Has hecho clic aquí".

// let text = document.querySelector('click-text');
// text.addEventListener('click', function(){
//     text.innerText = "Has hecho clic aquí";
// })

// // Ejercicio 4: Cambiar el Valor de un Input al Cambiarlo: Selecciona un input de texto y crea un elemento párrafo el cual agreguemos lo que vamos escribiendo en el input.

// let inputText = document.querySelector('#text');
// let h1 = document.querySelector('h1');

// inputText.addEventListener('input', function (event) {
//     h1.textContent = event.target.value;
//   });

// // Ejercicio 5: Validar Formulario al Enviarlo: Selecciona un formulario con el id "signup-form"que tenga 2 inputs y agrega un evento que al enviar el formulario valide si los campos están completos. Si no lo están, muestra un mensaje de error.

// let signupForm = document.getElementById('signup-form');
// signupForm.addEventListener('submit', function(event){
//     event.preventDefault();

//     let nameInput = document.getElementById('name');
//     let emailInput = document.getElementById('email');
//     let errorMessage = document.getElementById('error-message');

//     errorMessage.textContent = '';

//     if (nameInput.value.trim() === '' || emailInput.value.trim() === '') {
//              errorMessage.textContent = 'Por favor, completa todos los campos.';
//     } else {
//         alert('Formulario enviado con éxito.');
//     }
// })
 
// // Ejercicio 6: Evento para Mostrar un Mensaje al Cargar la Página: Agrega un evento al body que muestre un mensaje en consola diciendo "La página se ha cargado".

// window.addEventListener('load', function(){
//     console.log('La pagina se ha cargado');
// })

// // Ejercicio 7: Agregar Elemento a la Lista al Hacer Clic: Selecciona un botón con el id "add-item" y agrega un evento que añada un nuevo elemento li a una lista con la clase "item-list".

// let buttonList = document.getElementById('add-item');
// let list = document.querySelector('.item-list');
// let datos1 = ['hola1'];

// buttonList.addEventListener('click', function(){
//     datos1.forEach(function lists(dato) {
//         let create = document.createElement('li');
//         create.textContent = dato;
//         list.append(create);
//     });
// })

// // Ejercicio 8: Prevenir el Comportamiento por Defecto al Enviar Formulario: Selecciona un formulario con el id "contact-form" y agrega unos eventos para evitar que el formulario se envíe, y luego muestra un mensaje diciendo "El envío del formulario ha sido detenido".

// let listError = document.getElementById('contact-form');
// let buttonError = document.getElementById('button-error');

// listError.addEventListener('submit', function(event){
//     event.preventDefault();
//     alert("El envío del formulario ha sido detenido");
// })

// // Ejercicio 9: Contar y Mostrar Clics en un Botón: Selecciona un botón con la clase "count-button" y agrega un evento que cuente cuántas veces se ha hecho clic en él, mostrando el total en un span con el id "click-count".

// let countButton = document.querySelector('.count-button');
// let clickCount = document.getElementById('click-count');
// let number = 0;

// countButton.addEventListener('click', function(){
//     number++;
//     clickCount.innerText = number;
// })

// // Ejercicio 10: Validar Email en un Formulario: Selecciona un formulario con el id "email-form" y agrega un evento que valide que el campo de email contiene un formato válido antes de enviarlo.

// let emailForm = document.querySelector('submit', function(event){
    
// });

// // Ejercicio 11: Evento para Mostrar/Ocultar Contenido: Selecciona un botón con el id "toggle-content" y un div con la clase "content-box", y agrega un evento que muestre o oculte el contenido del div al hacer clic.

// let toggleContent = document.getElementById('toggle-content');
// let contentBox = document.querySelector('.content-box');

// toggleContent.addEventListener('click', function(){
//     if(contentBox.style.display == none){
//         contentBox.style.display = block;
//     }else{
//         contentBox.style.display = none;
//     }
// })

// // Ejercicio 12: Prevenir el Comportamiento por Defecto en un Enlace: Selecciona un enlace con la clase "no-default" y agrega un evento para evitar que el enlace navegue a otra página, mostrando en su lugar un mensaje en consola.

// let link = document.querySelector('.no-default');

// link.addEventListener('click', function(event){
//     event.preventDefault();
//     console.log("No es posible redirigirlo");
// })

// // Ejercicio 13: Cambiar el Estilo de un Elemento: Selecciona un botón con el id "add-class" y un párrafo con la clase "text". Agrega un evento que añada una clase "highlight" al párrafo y que cambie su estilo (A lo que gustes).

// let addClass = document.getElementById('add-class');
// let text = document.querySelector('.text');

// addClass.addEventListener('click', function(){
//     text.add('highlight');
//     text.style.color = 	#8000FF;
//     text.style.background = solid #008000;
// })

// // Ejercicio 14: Alternar Contenido de Texto: Selecciona un botón con el id "toggle-text" y un párrafo con la clase "text-toggle". Agrega un evento que cambie el texto del párrafo entre "Texto 1" y "Texto 2".

// let toggleText = document.getElementById('toggle-text');
// let textToggle = document.querySelector('text-toggle');

// let textOptions = ["Texto 1", "Texto 2"];
// let counter = 0;

// toggleText.addEventListener('click', function(){
//     textToggle.innerText = [counter];
//     if(counter > 0){
//         counter --;
//     }else{
//         counter ++;
//     }
// })

// // Ejercicio 15: Agregar Contenido HTML Dinámicamente: Selecciona un botón con el id "add-html" y un div con la clase "container". Agrega un evento click que inserte un bloque de HTML dentro del div.

// let addHtml = document.getElementById('add-html');
// let container = document.querySelector('container');

// addHtml.addEventListener('click', function(){
//     container.innerHTML = 
//                 <article>
//                     <h1>Bloque</h1>
//                     <div>
//                         <p>Prueba 1</p>
//                         <p>Prueba 2</p>
//                     </div>
//                 </article>;
// })

// Ejercicio 16: Crear y Agregar un Nuevo Elemento al DOM: Selecciona un botón con el id "create-element". Agrega un evento que cree un nuevo párrafo p con el texto "Elemento creado" y lo añada al final de un div con la clase "content".

let createElement = document.getElementById('create-element');
let content = document.querySelector('content');

createElement.addEventListener('click', function(){
    content.innerHTML += <p>Elemento creado</p>
})

// Ejercicio 17: Cambiar el Color de Fondo de Múltiples Elementos: Selecciona todos los elementos li dentro de una lista con la clase "color-list" y un botón con el id "change-color". Agrega un evento que cambie el color de fondo de cada li

let changeColor = document.getElementById('change-color');
let colorList = document.querySelector('color-list');



// Ejercicio 18: Crear una Lista de Ítems Dinámicamente: Selecciona un botón con el id "create-list". Agrega un evento que cree una nueva lista ul y añada cinco elementos li dentro de ella, agregando la lista al final de un div con la clase "list-container".
// Ejercicio 20: Cambiar el Tamaño de un elemento HTML: Selecciona un elemento con el id "resize-image" y agrega un evento que cambie su estilo.