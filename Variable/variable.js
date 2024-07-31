
//1.Declarar una variable de tipo string cuyo nombre represente de forma clara su contenido.
let categoryFood = "Fruit";      

//2.Declarar una variable de tipo number cuyo nombre represente de forma clara su contenido.
let amountOfFruit = 10;                   

//3.Declarar una variable de tipo boolean cuyo nombre represente de forma clara su contenido.
let age = 20;
let esMayorDeEdad = age >= 18;            

//4.Declarar dos variables de tipo string. Luego declarar una nueva variable cuyo valor sea la concatenación de las dos variables previamente creadas. 
let firstName = "Maite";                   
let lastName = "Sanchez";                   
let completeName = firstName + lastName;

//5.Declarar dos variables de tipo number.
let ingresoPrincipal = 20;                 
let ingresoSecundario = 5;
    //Luego declarar una nueva variable cuyo valor sea la suma de las dos variables previamente creadas. 
    let ingresoTotal = ingresoPrincipal + ingresoSecundario;
    //Luego declarar una nueva variable cuyo valor sea la resta de las dos variables previamente creadas. 
    let diferenciaDeIngreso = ingresoPrincipal - ingresoSecundario;
    //Luego declarar una nueva variable cuyo valor sea la multiplicación de las dos variables previamente creadas. 
    let productoDeIngreso = ingresoPrincipal*ingresoSecundario;
    //Luego declarar una nueva variable cuyo valor sea la división de las dos variables previamente creadas. 
    let restoDeIngreso = ingresoPrincipal/ingresoSecundario;
    //Luego declarar una nueva variable cuyo valor sea el módulo entre las dos variables previamente creadas. 
    let moduloDeIngreso = ingresoPrincipal%ingresoSecundario;

//6.Declarar una variable de tipo number y otra de tipo string. Luego sumar ambas variables y guardar su resultado en una nueva variable. De qué tipo será la tercera variable?
let averageWeight = 28;                   
let fruitApple = "apple";
let weightApple = fruitApple+ averageWeight; //Variable tipo string

//7.Declarar una variable de tipo booleano cuyo nombre represente su valor. Luego declarar una nueva variable cuyo valor sea opuesto a la variable previamente creada.
const stateTrue = age >= 18;      
const stateFalse = age <= 18;

//8.Crear una variable de tipo number. 
let amountOfOrange = 4;      
    //Reasignar un nuevo valor a esa misma variable para que sea su valor + 1.                
    amountOfOrange ++;
    //Repetir la operación anterior utilizando una estrategia diferente
    amountOfOrange = amountOfOrange + 1;
    //Repetir ambas operaciones con operadores de resta, multiplicación y división.
    amountOfOrange --;
    amountOfOrange = amountOfOrange - 1;
    amountOfOrange = amountOfOrange * 1;
    amountOfOrange = amountOfOrange / 1;

//9.Declarar una constante e intentar reasignarle otro valor luego de su declaración. Que output recibis?
const numberDocument = 1234;                    
//numberDocument = 3333;
console.warn(numberDocument);

//10.Crear dos variables de tipo string y dos variables de tipo number. 
let year = 2024;                            
let hour = 12;
let month = "December";
let day = "Friday";
    //Crear una nueva variable cuyo valor sea un string que incluya las cuatro variables previamente creadas. 
    let date = hour + day + month + year;
    console.log(`Date = ${date}`);
    //Repetir el punto anterior utilizando una estrategia diferente.
    /*let date =  ;*/
//11.Crear dos variables de tipo number.
let numberFirst = 10;                         
let numberSecond = 24;
    //Crear cuatro nuevas variables de tipo boolean comparando los dos valores utilizando operadores de comparación.
    let booleanoFirst = numberFirst < numberSecond;
    let booleanoSecond = numberFirst > numberSecond;
    let booleanoThird = numberFirst == numberSecond;
    let booleanoFourth = numberFirst != numberSecond;

//12.Declarar cinco variables de tipo string cuyo valor contenga operaciones aritméticas. Intenta utilizar diferentes estrategias. 
let stringOne = `10 + 4 = ${10+4}`;                         
let stringTwo =  `10 - 4 = ${10-4}`;
let stringThree =  `10 / 4 = ${10/4}`;
let stringFour =  `10 * 4 = ${10*4}`;
let stringFive =  `10 ** 4 = ${10**4}`;

console.log(`Suma = ${stringOne}`);
console.log(`Resta = ${stringTwo}`);
console.log(`Division = ${stringThree}`);
console.log(`Multiplicacion = ${stringFour}`);
console.log(`Exponenciacion = ${stringFive}`);

//13.Crea un bloque de código que, utilizando variables con nombres representativos, calcule la cantidad de propina a dejar en un restaurante, basada en el total de la cuenta y el porcentaje de propina ingresado por el usuario.
let totalCuenta = 100;
let propina = 10;
let porcentajePropina = (propina/100)*totalCuenta
console.log(`PorcentajePropina = ${porcentajePropina}`);

//14.Crea un bloque de código que calcule el precio final de un producto luego de aplicar un descuento. 
let precioInicial = 200;
let descuentoEnPorcentaje = 50;
let precioFinal = (descuentoEnPorcentaje*precioInicial)/100;
console.log(`PrecioFinal = ${precioFinal}`);

//15.Crea un bloque de código que, tomando el año de nacimiento de una persona, devuelva su edad actual.
let añoActual = 2024;
let añoDeNacimiento = 2005;
let edadActual = añoActual - añoDeNacimiento;
console.log(`Edad = ${edadActual}`);

//16.Crea un bloque de código que, definiendo las variables necesarias, calcule el área de un círculo, un cuadrado y un triángulo.
let ladoCuadrado =  10;
let alturaTriangulo = 15;
let baseTriangulo =  8;
let radioCirculo =  4;
const numeroPi = 3.14159265359;
let areaCirculo =  numeroPi*(radioCirculo**2);
let areaCuadrado =  ladoCuadrado**2;
let areaTriangulo = (baseTriangulo*alturaTriangulo)/2;
console.log(`AreaCirculo = ${areaCirculo}cm2`);
console.log(`AreaCuadrado = ${areaCuadrado}cm2`);
console.log(`AreaTriangulo = ${areaTriangulo}cm2`);