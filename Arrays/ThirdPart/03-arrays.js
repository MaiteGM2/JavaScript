
// 17. Dado un array de números, verifica si todos son mayores que cero. Devuelve en consola el resultado

let numbers = [1, 2, 3, 4];
let allNumbers = numbers.every(function(num){
    return num > 0;
})

if(allNumbers){
    console.log("Todos los numeros son positivos");
}
else{
    console.log("No todos los numeros son positivos");
}

// 18. Validar que todos los strings no son nulos

let strings = ["Hola", "Chau", ];
let allStrings = strings.every(function(string){
    return string !== null;
})

if(allStrings){
    console.log("Ningun string es nulo");
}
else{
    console.log("Hay algun string nulo");
}

// 19. Comprueba si todos los elementos en un array de strings contienen algún carácter. Devuelve en consola el resultado

let strings19 = ["Hola", "Chau", ""];
let allStrings19 = strings19.every(function(string){
    return string !== "";
})

if(allStrings19){
    console.log("Todos los strings tienen contenido");
}
else{
    console.log("No todos los strings tienen contenido");
}

// 20. Confirmar que todos los estudiantes pasaron el examen:

let grades = [6, 10, 4, 8];
let passingGrade = prompt("Ingrese la calificacion minima de aprobacion");

let allGrades = grades.every(function(grade){
    return grade >= passingGrade;
})

if(allGrades){
    console.log("Todos aprobaron el examen");
}
else{
    console.log("No todos aprobaron el examen");
}

// 21. Comprueba si todos los estudiantes en un array tienen una calificación mayor o igual a 6. Devuelve en consola el resultado
    // a. [1,2,4,5,6,7,8,3,2,4,6] 
    // b. [6,7,8,9,10]

let gradesA = [1,2,4,5,6,7,8,3,2,4,6];
let graedsB = [6,7,8,9,10];

let allGradesA = grades.every(function(grade){
    return grade >= 6;
})

let allGradesB = grades.every(function(grade){
    return grade >= 6;
})

if(allGradesA){
    console.log("Todos del curso A aprobaron el examen");
}
else{
    console.log("No todos los de curso A aprobaron el examen");
}

if(allGradesB){
    console.log("Todos del curso B aprobaron el examen");
}
else{
    console.log("No todos los de curso B aprobaron el examen");
}

// 22. Verificar si todas las edades son de adultos:

let ages = [18, 20, 22, 25];

let allAges = ages.every(function(age){
    return age >= 18;
})

if(allAges){
    console.log("Son todos adultos");
}
else{
    console.log("No todos son adultos");
}

// 24. Comprobar si todos los números son divisibles por 5:

let numbers24 = [5, 10, 15, 20, 25];

let allNumbers24 = numbers24.every(function(num){
    return ((num%5) === 0);
})

if(allNumbers24){
    console.log("Todos los numeros son divisibles por 5");
}
else{
    console.log("No todos los numeros son divisibles por 5");
}

// 25. Verificar si al menos un número en un array es mayor que 10.

let numbers25 = [18, 20, 22, 25];

let someNumbers25 = numbers25.some(function(num){
    return numbers25 > 10;
})

if(someNumbers25){
    console.log("Al menos un numero es mayor a 10");
}
else{
    console.log("Ningun numero es mayor a 10");
}

// 26. Comprobar si al menos un string en un array está vacío.

let strings26 = ["Hola", "Chau", ""];
let someStrings26 = strings26.some(function(string){
    return string === "";
})

if(someStrings26){
    console.log("Al menos un string esta vacio");
}
else{
    console.log("Ningun string esta vacio");
}

// 27. Verificar si al menos un estudiante no pasó el examen (calificación menor a 6).

let grades27 = [6, 10, 4, 8];

let someGrade27 = grades27.some(function(grade){
    return grade < 6;
})

if(someGrade27){
    console.log("Al menos un alumno desaprobo");
}
else{
    console.log("Ningun alumno desaprobo");
}

// 28. Comprobar si al menos una edad en un array corresponde a un adolescente (13-17 años).

let ages28 = [15, 18, 21, 82];

let someAge28 = ages28.some(function(age){
    return age >= 13 && age <= 17;
})

if(someAge28){
    console.log("Al menos una persona es adolescente");
}
else{
    console.log("Ninguna persona es adolescente");
}