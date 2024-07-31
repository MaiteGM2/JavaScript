//1. Crea un bloque de código que compare dos variables numéricas. Si el número A es mayor que el número B, imprimir en consola ‘El número A es mayor a B‘.

let A = 18;
let B = 10;

if(A > B){
    console.log("El numero A es mayor a B");
}

//2.Crea un bloque de código que tome la edad de un usuario y la compare con un número de referencia. Si la edad es mayor al número de referencia, imprimir en consola un mensaje.

let userAge = prompt("Ingresar Edad",0);

if (userAge >= 18){
    console.log('Eres mayor de edad');
}

//3.Crea un bloque de código que compare dos números e imprima en consola un valor booleano.

let numA = 15;
let numB = 20;

let equal = numA === numB;
console.log(equal);

//4.Crea un bloque de código que compare dos nombres, y si ambos son iguales imprima en consola el nombre.

let name1 = "Ruben";
let name2 = "Ruben";

if(name1 === name2){
    console.log('name1');
}

//5.Crea un bloque de código que compare dos nombres, y si ambos son diferentes imprima en consola un mensaje.

let nameA = "Ruben";
let nameB = "Juan";

if(nameA !== nameB){
    console.log('Los nombres no son iguales');
}

//6.Crea un bloque de código que imprima en consola un número en caso de que sea un número negativo.

let num6 = -20;

if(num6<0){
    console.log(num6);
}

//7.Crea un bloque de código que imprima en consola un número en caso de que NO sea un número negativo.
let num7 = 20;

if(num7>=0){
    console.log(num7);
}

//IF...ELSE

//8.Crea un bloque de código que compare dos números. Si el número es par, imprimir en consola ‘El número es par’. De lo contrario, imprimir ‘El número es impar’.

let numberA = 15;
let numberB = 8;

if(numberA%2 === 0){
    console.log('El numero A es par');
}
else{
    console.log('El numero A es impar');
}

if(numberB%2 === 0){
    console.log('El numero B es par');
}
else{
    console.log('El numero B es impar');
}

//9.Crea un bloque de código que compare dos números y luego imprima en consola si es positivo o negativo.

let numberI = 2;
let numberII = 4;
let dif = numberI + numberII;

if(dif > 0){
    console.log('La diferencia es positiva');
}
else if(dif < 0){
    console.log('La diferencia es negativa');
}
else{
    console.log('No hay diferencia')
}

//10.Crea una función que tome de referencia una variable string cuyo valor sea una letter, y luego imprima en consola si es una vocal o una consonante.

let letter = 'a';

if(letter === 'a'||letter === 'e'||letter === 'i'||letter === 'o'||letter === 'u'){
    console.log('Es una vocal');
}
else if(letter > 'a' && letter <= 'z'){
    console.log('Es una consonante');
}
else{
    console.log('No es una letter valida');
}

//11.Crea un bloque de código que tome de referencia un nombre. Si el nombre ingresado es ‘Pedro’ imprimir en consola ‘Hola Pedro, como estás?’. De lo contrario, imprimir ‘Hola! Cómo te llamas?’.

let name = 'Pedro';

if(name === 'Pedro'){
    console.log('Hola Pedro, como estas?')
}
else{
    console.log('Hola! Como te llamas?');
}

//12.Crea un bloque de código que tome de referencia la nota de un examen y devuelva ‘Estás aprobado’ si la nota es mayor o igual a 7, o ‘Estás desaprobado’ si la nota es menor a 7.

let examValue = 8;

if(examValue >= 7){
    console.log('Estas aprobado');
}
else{
    console.log('Estas desaprobado');
}

//ELSE IF

//13.Crea un bloque de código que tome de referencia un número e imprima en pantalla si el número es menor a 10, mayor a 50, o si está entre esos dos valores.

let numberRef = 8;

if(numberRef<10){
    console.log('Es menor que 10');
}
else if(numberRef>50){
    console.log('Es mayor que 50');
}
else if((numberRef>10) && (numberRef<50)){
    console.log('Esta entre 10 y 50');
}

//14.Crea un bloque de código que compare dos números. Si ambos números son menores a 10, imprimir en consola el múltiplo. Si ambos números son mayores a 50,  imprimir en consola su suma. Sino, imprimir en consola el primer número menos el segundo.

let numberOne = 8;
let numberTwo =  20;

if((numberOne < 10) && (numberTwo < 10)){
    console.log(numberOne * numberTwo);
}
else if((numberOne > 50) && (numberTwo > 50)){
    console.log(numberone + numberTwo);
}
else{
    console.log(numberOne - numberTwo);
}

//15.Crea un bloque de código que tome de referencia un número del 1 al 7 y devuelva el día de la semana correspondiente. Por ejemplo: 1 = ‘lunes’.

let day = 6;

if(day === 1){
    day = 'Lunes';
}
else if(day === 2){
    day = 'Martes';
}
else if(day === 3){
    day = 'Miercoles';
}
else if(day === 4){
    day = 'Jueves';
}
else if(day === 5){
    day = 'Viernes';
}
else if(day === 6){
    day = 'Sabado';
}
else if(day === 7){
    day = 'Domingo';
}
else{
    day = `Numero invalido`;
}

console.log(day);

//16.Crea un bloque de código que reciba un número e imprima en pantalla si es divisible por 2, 3, o ninguno.

let num16 = 18;

if(num16 % 2 === 0 && num16 % 3 === 0){
    console.log('Es divisible por 2 y 3');
}
else if((num16%2) === 0){
    console.log('Es divisible por 2');
}
else if((num16%3) === 0){
    console.log('Es divisible por 3');
}
else{
    console.log('No es divisible por ninguno');
}

//17.Crea un bloque de código que tome de referencia un número del 1 al 12 y devuelva el month correspondiente. Por ejemplo: 1 = ‘Enero’.

let month = 12;

if((month > 12) || (month < 1)){
    console.log('Error');
}
else if(month = 1){
    month = 'Enero';
}
else if(month = 2){
    month = 'Febrero';
}
else if(month = 3){
    month = 'Marzo';
}
else if(month = 4){
    month = 'Abril';
}
else if(month = 5){
    month = 'Mayo';
}
else if(month = 6){
    month = 'Junio';
}
else if(month = 7){
    month = 'Julio';
}
else if(month = 8){
    month = 'Agosto';
}
else if(month = 9){
    month = 'Septiembre';
}
else if(month = 10){
    month = 'Octubre';
}
else if(month = 11){
    month = 'Noviembre';
}
else if(month = 12){
    month = 'Diciembre';
}

console.log(month);

//SWITCH

//18.Crea un bloque de código que tome de referencia un número del 1 al 7. Utiliza una sentencia Switch para imprimir en consola el día de la semana correspondiente.

let daySwitch = 6;

switch(daySwitch){
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
    case 3:
        console.log('Miercoles');
        break;
    case 4:
        console.log('Jueves');
        break;
    case 5:
        console.log('Viernes');
        break;
    case 6:
        console.log('Sabado');
        break;
    case 7:
        console.log('Domingo');
        break;
    default:
        console.log('Error');
        break;
}

//19.Crea un bloque de código que tome de referencia una letter correspondiente al género (‘H’, ‘M’, ‘X’…). Utiliza una sentencia switch para imprimir en consola el género correspondiente.

let genero = `T`;

switch(genero){
    case "H":
        console.log('Hombre');
        break;
    case "M":
        console.log('Mujer');
        break;
    case "X":
        console.log('Sin genero');
        break;
    default:
        console.log('No identificado');
}

//20.Crea un bloque de código que reciba un número del 1 al 10. Utiliza switch para imprimir en consola ‘Uno’, ‘Dos’, ‘Tres’, o ‘Mayor a 3’, según corresponda. 

let numSwitch = 8;

if((numSwitch>=1) && (numSwitch<=10)){
    switch(numSwitch){
        case 1:
            console.log('Uno');
            break;
        case 2:
            console.los('Dos');
            break;
        case 3:
            console.log('Tres');
            break;
        default:
            console.log('Mayor a 3');
    }
}

//21.Crea un bloque de código que tome de referencia una letter. Utiliza switch para imprimir en consola si es una vocal, una consonante, o un caracter especial.

let letterSwitch = 'V';

switch(letterSwitch){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log('Es una vocal');
        break;
    case 'b':
    case 'c':
    case 'd':
    case 'f':
    case 'g':
    case 'h':
    case 'j':
    case 'k':
    case 'l':
    case 'm':
    case 'n':
    case 'p':
    case 'q':
    case 'r':
    case 's':
    case 't':
    case 'v':
    case 'w':
    case 'x':
    case 'y':
    case 'z':
        console.log('Es una consonante');
        break;
    default:
        console.log('Es un caracter especial');
}

//22.Crea un bloque de código que tome de referencia un número del 1 al 4. Utiliza switch para imprimir en consola la estación del año correspondiente.

let season = prompt("Ingrese un numero desde el 1 hasta el 4", '');

switch (season){
    case 1:
        console.log('Primavera');
        break;
    case 2:
        console.log('Verano');
        break;
    case 3:
        console.log('Otono');
        break;
    case 4:
        console.log('Invierno');
        break;
    default:
        console.log('Numero invalido');
}

//OPERADOR TERNARIO

//23.Crea un bloque de código que tome de referencia una variable ‘edad’. Utiliza el operador ternario para imprimir en consola si es o no mayor de edad.

let age = 20;

console.log(age >= 18 ?'Es mayor de edad' : 'Es menor de edad');

//24.Crea un bloque de código que tome de referencia un número. Utiliza el operador ternario para determinar si es par o impar y muestra el resultado en consola.

let number24 = 24;

console.log(number24%2 === 0 ? 'Par' : 'Impar');

//25.Crea un bloque de código que tome de referencia dos números y utilice el operador ternario para determinar cual de los dos es el mayor. Luego imprime en consola el resultado.

let num1 = 8;
let num2 = 4;
let result;

num1 > num2 ? result = num1 + 'es mayor' : result = num2 + 'es mayor'
console.log(result);

//26.Crea un bloque de código que tome de referencia un número del 1 al 7 y utilice el operador ternario para imprimir en consola el día de la semana correspondiente.

let dayTernario = 2;

console.log(
    dayTernario == 1 ? 'Lunes':
    dayTernario == 2 ? 'Martes':
    dayTernario == 3 ? 'Miercoles':
    dayTernario == 4 ? 'Jueves':
    dayTernario == 5 ? 'Viernes':
    dayTernario == 6 ? 'Sabado':
    dayTernario == 7 ? 'Domingo': 
    'Numero no valido'
);

//27.Crea un bloque de código que tome de referencia un número. Utiliza el operador ternario para determinar si es positivo, negativo o cero e imprime el resultado en consola.

let numRef = 0;

console.log(
    numRef > 0 ? 'Positivo':
    numRef < 0 ? 'Negativo':
    'Cero'
  );

//28.Crea un bloque de código que tome de referencia un número del 1 al 100 y utilice el operador ternario para determinar si es múltiplo de 3 y 5 para imprimir el resultado en consola.

let numRef1 = 69;

console.log(
    numRef1 % 3 === 0 && numRef1 % 5 === 0 ? 'Es multiplo de 3 y 5' :
    'No es multiplo de 3 y 5'
  );

//PRACTICAS

//29.Crea un bloque de código que tome de referencia un número del 1 al 100 y, utilizando el tipo de condicional que prefieras, imprimir si es múltiplo de 2, 3 o 5 incluyendo las diferentes combinaciones posibles.

let numRef2 = 24;

if(numRef2 >= 1 && numRef2 <= 100){
   switch(numRef2){
    case (numRef2%2 == 0) && (numRef2%3 == 0) && (numRef2&5 == 0):
        console.log('Multiplo de 2, 3 y 5');
        break;
    case (numRef2%2 == 0) && (numRef2%3 == 0):
        console.log('Multiplo de 2 y 3');
        break;
    case (numRef2%2 == 0) && (numRef2%5 == 0):
        console.log('Multiplo de 2 y 5');
        break;
    case (numRef2%3 == 0) && (numRef2%5 == 0):
        console.log('Multiplo de 3 y 5');
        break;
    case numRef2%2 == 0:
        console.log('Multiplo de 2');
        break;
    case numRef2%3 == 0:
        console.log('Multiplo de 3');
        break;
    case numRef2%5 == 0:
        console.log('Multiplo de 5');
        break;
   }
}
else{
    console.log("Numero invalido");
}

//30.Crea un bloque de código que reciba un numero del 1 al 1000. Utiliza el tipo de condicional que prefieras para imprimir en consola si el numero es par o impar, si es divisible por 2, por 3 o por 5, y si es mayor o menor a 50.

let numRef3 = 100;

if(numRef3 >= 1 && numRef3 <= 1000){
    switch(numRef3){
    case numRef3%2 == 0:
        console.log('Es par y divisible por 2');
        break;
    case numRef3%3 == 0:
        console.log('Es divisible por 3');
        break;
    case numRef3%5 == 0:
        console.log('Es divisible por 5');
        break;
    }
}

//31. Desarrolla 10 nuevas situaciones en donde requieras de utilizar condicionales para su resolución.

//Calcular la edad del usuario segun su fecha de nacimiento.

let dayBirth = 7;
let monthBirth = 12;
let yearBirth = 2005;
let currentDay = 31;
let currentMonth = 7;
let currentYear = 2024;

if(currentMonth >= monthBirth){
    if(currentDay >= dayBirth){
        age1 = currentYear - yearBirth;
    }
    else{
        age1 = currentYear - yearBirth - 1;
    }
}
else{
    age1 = currentYear - yearBirth - 1;
}


//Calcular el valor total de un videojuego sumando los impuestos del pais.

let gameValue = 8000;
let taxArg = 0.75; //75%
let taxChile = 0.19; //19%
let country = 'Argentina';
let totalValue;

if(country === 'Argentina'){
    totalValue = gameValue + (gameValue*taxArg);
}
else if(country === 'Chile'){
    totalValue = gameValue + (gameValue*taxChile);
}
else{
    console.log('Compra no disponible');
}
