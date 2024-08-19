// ● Ejercicio 1: Seleccionar un Elemento y Agregar una Clase
// ● Consigna: Selecciona del DOM el elemento p que tiene la clase "intro" y agrégale una nueva clase llamada "highlight".

let exercise1 = document.querySelector('.intro');
exercise1.classList.add('highlight');

console.log(exercise1)


// ● Ejercicio 2: Seleccionar un Elemento por ID y Cambiar su Texto
// ● Consigna: Selecciona del DOM el elemento con el id "header-title" y cambia su texto a "Nuevo Título".

let exercise2 = document.getElementById('header-title');
exercise2.innerHTML = 'New Title';

console.log(exercise2);

// ● Ejercicio 3: Seleccionar Múltiples Elementos y Agregar una Clase
// ● Consigna: Selecciona todos los elementos li dentro de una lista y mostrarlos en consola

let exercise3 = document.querySelectorAll('li');
console.log(exercise3);

// ● Ejercicio 4: Eliminar una Clase de un Elemento
// ● Consigna: Selecciona del DOM el elemento con la clase "warning" y elimínale esa clase.

let exercise4 = document.querySelector('.warning');
exercise4.classList.remove('warning');

console.log(exercise4);

// ● Ejercicio 6: Seleccionar y Cambiar el Contenido de Texto
// ● Consigna: Selecciona del DOM el elemento h1 que tiene la clase "main-title" y cambia su texto a "¡Bienvenidos!".

let exercise6 = document.querySelector('.main-title');
exercise6.innerText = 'Welcome!';
console.log(exercise6);

// ● Ejercicio 7: Seleccionar por ID y Cambiar el Color de Fondo
// ● Consigna: Selecciona del DOM el elemento con el id "footer" y cambia su color de fondo(El que quieras).

let exercise7 = document.getElementById('footer');
exercise7.style.background = '#FF0000';


// ● Ejercicio 8: Seleccionar y Agregar Contenido Adicional
// ● Consigna: Selecciona del DOM el elemento div con la clase "content" y agrega dentro de él un nuevo párrafo que diga "Contenido adicional" (O lo que quieras que diga).

let exercise8 = document.getElementById('content');
exercise8.innerText = 'Contenido Adicional';

console.log(exercise8);

// ● Ejercicio 10: Verificar y Mostrar si un Elemento Tiene una Clase
// ● Consigna: Selecciona del DOM el elemento con la clase "header" y muestra en la consola si tiene la clase "sticky".

let exercise10 = document.querySelector('.header');
let result10 = exercise10.classList.contains('sticky');

console.log(result10);