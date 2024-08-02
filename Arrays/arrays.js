// Agregar elementos al final de un array:

let numbers = [];
numbers.push(1, 2, 3, 4, 5);
console.log(numbers);
numbers.pop();
console.log(numbers);

//Utiliza el array numbers del ejercicio anterior.
numbers.pop();
console.log(numbers);
numbers.unshift(0);
console.log(numbers);

//Crea un array vacío llamado colors, agregando cada elemento al principio del array.
let colors = ["red", "blue", "green"];

//Eliminar el primer elemento de un array:
colors.shift();
console.log(colors);

//Agregar múltiples elementos al final de un array:
let fruits = [];
fruits.push('apple', 'banana', 'orange');

//Eliminar múltiples elementos al final de un array:
fruits.pop();
fruits.pop();
console.log(fruits);

//Agregar múltiples elementos al principio de un array:
fruits.unshift('grape', 'kiwi');
console.log(fruits);

//Eliminar múltiples elementos al principio de un array:
fruits.shift();
fruits.shift();
console.log(fruits);

//Agregar un elemento específico al final de un array:
colors.push('yellow');
console.log(colors);

//Eliminar un elemento específico del principio de un array:
colors.shift();
console.log(colors);
