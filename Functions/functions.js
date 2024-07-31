//1. Declara una función llamada saludar que muestre en la consola "Hola, mundo!" cuando se llame. Ejecutarla.

function saludar(){
    console.log('Hola, mundo!');
}

saludar();

//2. Declara una función llamada despedirse que muestra en la consola "Adiós, mundo!" y llámala. Ejecutarla.

function despedirse(){
    console.log('Adios, mundo!');
}

despedirse();

//3. Declara una función llamada calcularCuadrado que acepte un número como parámetro y devuelva el cuadrado de ese número. Ejecutarla.

function calcularCuadrado (numEj1){
    return numEj1 * numEj1;
}

let result3 = calcularCuadrado(4);

//4. Escribir una funcion llamada minutosAHoras que reciba un número entero de minutos como parámetro, y devuelva un número representando la misma cantidad de tiempo pero en horas. 

let minutes = 120;
function minutosAHoras(minutes){
    let hour = minutes / 60;
    return hour;
}

let result4 = minutosAHoras(minutes);

//5. Declara una función llamada saludarPersona que acepte un parámetro nombre y muestre en la consola "Hola, " seguido del nombre.

let name5 = 'Pedro';
function saludarPersona(name5){
    console.log(`Hola, ${name5}`);
}

saludarPersona(name5);

//6. Declara una función llamada sumarNumeros que acepte dos números como parámetros y devuelva su suma.

function sumarNumeros(n1, n2){
    return n1 + n2;
}

let result6 = sumarNumeros(6, 10);
console.log (resultado);

//7. Declara una función llamada multiplicarNumeros que acepte tres números como parámetros y devuelva su producto.

function multiplicarNumeros(n1, n2, n3){
    return n1 * n2 * n3;
}
let result7 = multiplicarNumeros(10, 2, 2);
console.log(result7);

//8. Escribir una funcion que se llame concatenar3, que reciba 3 strings como parametros. Definir dentro de la funcion una variable que se llame separador. La funcion debe devolver un solo string, concatenando los 3 ingresados como parametro y separados por el separador. 

let string1 = 'Uno';
let string2 = 'Dos';
let string3 = 'Tres';

function concatenar3(string1, string2, string3){
    const separador = "|";
    return string1 + separador + string2 + separador + string3;
}
let result8 = concatenar3(string1, string2, string3);
console.log (result8);

//9. Escribir una funcion llamada promedioDeCuatroNumero, que reciba 4 numeros como parametros y devuelva el promedio de los numeros introducidos.

let num1 = 2;
let num2 = 4;
let num3 = 6;
let num4 = 8;
let cantidadDeNumeros = 4;

function promedioDeCuatroNumeros (){
    return (num1 + num2 + num3 + num4) / cantidadDeNumeros
}

let result9 = promedioDeCuatroNumeros ();
console.log (result9);

//10. Declara una función llamada presentarPersona que acepta dos parámetros, nombre y edad, y muestre en la consola "Mi nombre es [nombre] y tengo [edad] años."

function presentarPersona(name, age){
    console.log(`Mi nombre es ${name} y tengo ${age}`)
}

presentarPersona('Pedro', 100);

//11. Declara una función llamada areaRectangulo que acepte dos parámetros, ancho y alto, y devuelva el área del rectángulo. Comprobarlo asignando la función a una variable, y mostrando en consola el valor de la misma.

function areaRectangulo(whidt, height){
    return whidt * height;
}
let result11 = areaRectangulo(10, 20);
console.lo(result11);

//12. Declara una función llamada calcularPropina que acepte un número como parámetro y devuelva la cantidad de propina a dejar en base a cuanto salió el total de la comida. Comprobarlo asignando la función a una variable y mostrando en consola el valor de la misma. 

function calcularPropina(price){
    return price + ((price*10)/100);
}
let result12 = calcularPropina(12000);
console.log(result12);

//13. Declara una función llamada calcularSalario que acepta dos parámetros, horasTrabajadas y tarifaPorHora, y devuelva el salario calculado.   

function calcularSalario(horasTrabajadas, tarifaPorHora){
    return horasTrabajadas * tarifaPorHora;
}
let result13 = calcularSalario(32, 500);
console.log (result13);

//14. Declara una función llamada calcularDescuento que acepte un parámetro precioOriginal. La función debe declarar una variable descuento con un valor de 0.1 (10%). Luego, calcula el precio con descuento y devuelve el resultado.
function calcularDescuento(precioOriginal){
    let discount = 0.1;
    return precioOriginal - (precioOriginal * discount);
}
let result14 = calcularDescuento(120);
console.log(result14);

//15. Declara una función llamada evaluarNumero que acepte un parámetro num. La función debe devolver "positivo" si el número es mayor que 0, "negativo" si es menor que 0, y "cero" si es exactamente 0.

function evaluarNumero(num){
    let type = 'undefined';
    num > 0 ? type = 'positive':
    num < 0 ? type = 'negative':
    type = 0;

    return type;
}
let result15 = evaluarNumero(0);

//16. Declara una función llamada evaluarEdad que acepte un parámetro edad. La función debe devolver "Menor de edad" si la edad es menor de 18, y "Mayor de edad" si es 18 o mayor.

function evaluarEdad(age){
    age>18 ? result15 = "Mayor de edad":
    result15 = "Menor de edad";

    return result15;
}

let finalResult = evaluarEdad(10);

//17. Declara una función llamada esPar que acepte un número como parámetro. Si el número es par, debe mostrar en la consola "El número es par". Si es impar, debe mostrar "El número es impar".
 
function esPar(num){
    let result17;
    num%2 == 0 ? result17 = 'Par' : 'Impar';
    console.log(result17);
 }
 esPar(17);

 //18. Declara una función llamada compararNumeros que acepte dos números como parámetros. La función debe mostrar en la consola cuál de los dos números es mayor o si son iguales.

 function compararNumeros(n1, n2){
    if(n1>n2){
        console.log(`${n1} es mayor`);
    }
    else if(n1<n2){
        console.log(`${n2} es mayor`);
    }
    else{
        console.log(`Son iguales`);
    }
 }

 compararNumeros(10, 10);

 //19. Declara una función llamada sumaEsPar que acepte dos números como parámetros. La función debe mostrar en la consola si la suma de los dos números es par o impar.
 
 function sumaEsPar(n1, n2){
    let suma = n1 + n2;
    let result19 = suma%2 === 0 ? 'Par': 'Impar';
    console.log(result19);
 }
 sumaEsPar(12, 28);

 //20. Declara una función llamada ambosPositivos que acepte dos números como parámetros. La función debe mostrar en la consola si ambos números son positivos, si solo uno es positivo, o si ninguno es positivo.
 
 function ambosPositivos(n1, n2){
    if(n1>0 && n2>0){
        console.log('Ambos son positivos');
    }
    else if(n1>0 || n2>0){
        console.log('Solo uno es positivo');
    }
    else{
        console.log('Ninguno es positivo');
    }
 }

 ambosPositivos(2, -10);

 //21. Declara una función llamada calcularImpuesto que acepte un parámetro ingreso. Si el ingreso es menor de 10000, el impuesto es del 10%. Si es entre 10000 y 20000, el impuesto es del 15%. Si es mayor de 20000, el impuesto es del 20%. La función debe devolver el valor del impuesto.

 function calcularImpuesto(n1){
    let result21;

    if(n1<10000){
        result21 = (n1 * 10)/100;
    }
    else if(n1>10000 && n1<20000){
        result21 = (n1 * 15)/100;
    }
    else if(n1>20000){
        result21 = (n1 * 20)/100;
    }
    return result21;
 }
 let impuesto = calcularImpuesto(15000);

 //22. Declara una función llamada clasificarNota que acepte un parámetro nota. Si la nota es 90 o más, devuelve "A". Si es entre 80 y 89, devuelve "B". Si es entre 70 y 79, devuelve "C". Si es entre 60 y 69, devuelve "D". Si es menor de 60, devuelve "F".
  
 function clasificarNota(num){
    let result22;
    if (num>=90){
        result22 = A;
    }
    else if(num>=80 && num<=89){
        result22 = B;
    }
    else if(num>=70 && num<=79){
        result22 = C;
    }
    else if(num<60){
        result22 = F;
    }
    return result22;
  }
  let finalResult22 = clasificarNota(8.5);