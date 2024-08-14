// // 1. Crea una función sumarHastaLimite que reciba un número límite. Usa un bucle while para sumar números consecutivos (1, 2, 3,...) hasta que la suma alcance o supere el límite. Muestra el resultado en la consola.

// function sumToLimit(limitNum){
//     let num = 1;
//     let sum = 0;

//     while(sum < limitNum){
//         sum += num;
//         num ++;
//         console.log(sum);
//     }
//     return num;
// }

// let exercise1Result = sumToLimit(10);
// console.log(exercise1Result);

// // 2. Escribe una función contarPares que reciba un número n. Usa un bucle while para contar cuántos números pares hay entre 1 y n. Muestra el resultado en la consola.

// function countPairs(n){
//     let account = 0;
//     let num2 = 1;
//     while (num2 <= n) {
//         if (num2 % 2 === 0) {
//             account++;
//         }
//         console.log(num2)
//         num2++;
//     }
//     return account;
// }
// let exercise2Result = countPairs(10);
// console.log(exercise2Result);

// // 3. Crea una función multiplicar que reciba dos números a y b. Usa un bucle while para multiplicar a por b mediante sumas sucesivas. Muestra el resultado en la consola.

// function multiply(numA, numB) {
//       let result= 0;
//       let sumCounter = 1;
//       while (sumCounter <= numB) {
//         result +=  numA;
//         sumCounter++;
//       }
//       return result;
//     }

//     let result =  multiply(10,20);
//     console.log(result);

// // 4. Escribe una función mostrarImpares que reciba un número límite. Usa un bucle while para mostrar en la consola todos los números impares desde 1 hasta el límite.

// function showOddNumbers(limitNum4){
//     let num = 1;
//     while(num < limitNum4){
//         if(num%3 === 0){
//             console.log(num);
//         }
//         num ++;
//     }
//     return num;
// }

// showOddNumbers(50);

// // 5. Escribe una función calcularFactorial que reciba un número n. Usa un bucle while para calcular el factorial de n. Muestra el resultado en la consola.

// function calculateFactorial (n5){
//     let result = n5;

//     while (n5 >= 1) {
//         n5--;
//         result = result * n5;
//     }
//     return result;
// }

// let exercise5Result = calculateFactorial(5);
// console.log(exercise5Result);

// // 6. Crea una función cuentaRegresiva que reciba un número n. Usa un bucle do while para realizar una cuenta regresiva desde n hasta 1, mostrando cada número en la consola.

// function countdown(n6){
//     do{
//         console.log (n6);
//         n6 --;
//     }while(n6 >= 1);
// }

// countdown(10);

// // 7. Escribe una función sumarDigitos que reciba un número n. Usa un bucle while para sumar todos los dígitos de n. Muestra el resultado en la consola.

// function addDigits(n7){
//     let sum = 0
//     while(n7 > 0){
//         sum = parseInt(sum)
//         n7 = parseInt(n7)
//         sum+= n7%10
//         n7/=10
//     }
//     return sum
// }

// let exercise7Result = addDigits(22);
// console.log(exercise7Result);

// // 8. Escribe una función encontrarMayor que reciba un array de números. Usa un bucle while para encontrar y mostrar el mayor número en la consola.

// function findGreater(arrayNums){
//     let counter =0;
//     let max = 0;
//     while(counter < arrayNums.length){
//         if(arrayNums[counter]>max){
//             max = arrayNums[counter];
//         }
//         counter++
//     }
//     return max;
// }

// let exercise8Result = findGreater([20,30]);
// console.log(exercise8Result);

// 9. Escribe un programa que use un bucle do while para contar y mostrar en la consola todos los números impares desde 1 hasta 20.

// function oddNumbers(n9){
//     do{
//         if(n9%2 !== 0){
//             console.log(n9)
//         }
//         n9 ++;
//     }while(n9<=20);
// }

// oddNumbers(1);

// // 10. Escribe un programa que use un bucle do while para contar y mostrar en la consola todos los números impares desde 1 hasta 20.

// function evenNumbers(n9){
//     do{
//         if(n9%2 == 0){
//             console.log(n9)
//         }
//         n9 ++;
//     }while(n9<=20);
// }

// evenNumbers(1);

/// PART 2 ///

// 1. Escribe una función que reciba un array de calificaciones y calcule el promedio usando un bucle while. La función debe devolver el promedio y mostrarlo en la consola

// let calif = [3,5,5];
// function calculoPromedio(calif){
//     let contador = 0
//     let promedio = 0
//     while(contador < calif.length){
//         promedio +=  calif[contador]
//         contador ++
//     }
//     return promedio/contador
// }

// let resultExcercise1P2 = calculoPromedio(calif);
// console.log(resultExcercise1P2);

// // 2. Verificar Correos Electrónicos: Escribe una función llamada verificarUsuario que reciba un array de nombres de usuario y un nombre de usuario específico. Usa un bucle while para verificar si el usuario específico está en la lista. Si el usuario existe, muestra un mensaje indicando "Usuario encontrado", de lo contrario, muestra "Usuario no encontrado". let usuarios = ["juan", "maria", "admin", "carlos"]; let usuarioBuscado = "admin";

// function verifyUser(arrayNames, nameUser){
//     let counter = 0;
//     let found = false;
//     while(counter < arrayNames.length){
//         if(nameUser ===  arrayNames[counter]){
//             found = true;
//         }
//         counter ++;
//         console.log(counter);
//     }
//     return found;
// }

// let resultExcercise2P2 = verifyUser(["juan", "maria", "admin", "carlos"], "carlos");
// if(resultExcercise2P2){
//     console.log("Usuario encontrado");
// }else{
//     console.log("Usuario no encontrado");
// }

// // 3. Verificar Longitud de Contraseñas: Escribe una función llamada verificarContraseñas que reciba un array de contraseñas. Usa un bucle while para verificar cuántas contraseñas tienen al menos 8 caracteres. Muestra un mensaje indicando cuántas contraseñas cumplen con esta condición. let contraseñas = ["password", "1234567", "supersecret", "contraseña123"];

// function verifyPassword(arrayPassword){
//     let counter = 0;
//     let fulfills = 0;
//     while(counter < arrayPassword.length){
//         if(arrayPassword[counter].length >= 8){
//             fulfills ++;
//         }
//         counter ++
//     }
//     return fulfills;
// }

// let resultExcercise3P2 = verifyPassword(["password", "1234567", "supersecret", "contraseña123"]);
// console.log(resultExcercise3P2);

// // // 4. Verificar Existencia de un Usuario: Crea una función llamada verificarCorreos que reciba un array de correos electrónicos. Usa un bucle `while` para recorrer el array y verificar que cada correo contenga un "@" y un ".". Si todos los correos son válidos, muestra "Todos los correos son válidos", de lo contrario, muestra "Correo inválido encontrado". let correos = ["correo1@example.com", "correo2@example", "correo3@example.com"];

// function verifyEmails(arrayEmails){
//     let counter = 0;
//     let valid = 0;
//     let subAccountant = 0;
//     while(counter < arrayEmails.length){
//         while(subAccountant < arrayEmails[counter].length){
//             if("@" = ){

//             }
//             subAccountant ++
//         }
//         counter ++
//     }
//     return valid;
// }

// // 5. Escribe una función que reciba un número y determine si es primo usando un bucle do while. La función debe devolver un valor booleano indicando si el número es primo y mostrar el resultado en la consola.

// function primeNumber(num5) {
//   let checker = 2;
//   let prime = true;
//   do {
//     if (num5 % checker === 0) {
//       prime = false;
//     }
//     checker ++;
//   } while (checker < num5);
//   return prime;
// }
// let resultExcercise5P2 = primeNumber(7);
// console.log(resultExcercise5P2);

// // 6. Contar Cantidad de Comentarios : Escribe una función llamada contarComentarios que reciba un array de comentarios. Cada comentario es un string. La función debe usar un bucle while para contar cuántos comentarios hay en la lista y mostrar el total en la consola.

// function countComments(arrayComments){
//     let counter = 0;
//     while(arrayComments.length > counter){
//         counter ++;
//     }
//     return counter;
// }

// let resultExcercise6P2 = countComments(["Muy bueno", "Demasiado bueno", "Pero que pedazo de basura"]);
// console.log(resultExcercise6P2);

/// PART 3 ///

// 1. Escribe una función llamada contarGoles que reciba un array de goles anotados en un partido. Cada elemento del array es un objeto que tiene dos propiedades: equipo y jugador. Usa un bucle while para recorrer el array y contar cuántos goles anotó cada equipo. Let goles=[{equipo: “Argentina”, jugador:”lionel messi”}]

// let goal1 = {
//     team : "Argentina",
//     player : "Messi",
// }

// let goal2 = {
//     team : "Portugal",
//     player : "Cristiano Ronaldo",
// }

// let goal3 = {
//     team : "Argentina",
//     player : "Messi",
// }

// let arrayGoals = [goal1, goal2, goal3]


// function countGoals(arrayGoals){
//     let counter = 0;
//     let teamCounter = 0;
//     while(arrayGoals.length >= counter){
//         console.log(goalcounter.team);
//         if(arrayGoals[counter]){
//             goalcounter.team
//             team += teamCounter ++;
//             console.log(goalcounter.team);
//         }
//         counter ++
//         return teamCounter
//     }

// }
//  countGoals(arrayGoals)

// 2. Crea una función llamada contarToques que reciba un array con el nombre de los jugadores que tocan el balón en una jugada. Usa un bucle while para contar cuántos toques hubo antes de que el balón saliera del campo. La jugada termina cuando encuentres el string "fuera" en el array.

let jugada = ["Messi", "Di Maria", "Doye", "fuera"]

function touch (jugada){
    let counter = 0;
    while(jugada.length >= counter){
        if(jugada[counter] === "fuera"){
            return counter;
        }
        counter ++;
    }
    return counter;
}

let resultExcercise2P3 = touch(jugada);
console.log(resultExcercise2P3);

// Ej del array: let jugada = ["Messi", "Di Maria", "Doye", "fuera"];
// 3. Escribe una función llamada practicarSaques que simule los intentos de un jugador de voleibol para hacer un saque exitoso. Usa un bucle do while para que el jugador siga intentando hasta que consiga hacer un saque exitoso. Usa // Math.random() para simular si el saque fue exitoso (considerando que la probabilidad de éxito es del 30%)

function practicarSaques() {
    let saqueExitoso = false;
    let intentos = 0;

    do {
        intentos++;
        let probabilidad = Math.random();

        if (probabilidad <= 0.3) {
            saqueExitoso = true;
            console.log(`Saque exitoso después de ${intentos} intentos`);
        } else {
            console.log(`Intento ${intentos} fallido. Probando de nuevo...`);
        }
    } while (!saqueExitoso);
    return intentos;
}

let resultExcercise3P3 = practicarSaques();
console.log(resultExcercise3P3);

// 4. Desde la terna arbitral de la AFA, el presidente Chiqui Mafia nos envía una lista con los jugadores que anotaron goles en un partido. Escribe una función llamada recuentoGoleadores que reciba una lista de jugadores que anotaron goles. Usa un bucle do while para contar cuántos jugadores ÚNICOS anotaron al menos un gol, y muestra el resultado en la consola. Ej del array: let jugadoresQueAnotaron = ["Messi", "Di Maria", "Messi", "Riquelme", "Maradona"];

function goalTally(playersWhoScored) {
    let uniquePlayers = [];
    let counter = 0;

    do {
        if (!uniquePlayers.includes(playersWhoScored[counter])) {
            uniquePlayers.push(playersWhoScored[counter]);
        }
        counter++;
    } while (counter < playersWhoScored.length);

    return uniquePlayers.length;
}

let playersWhoScored = ["Messi", "Di Maria", "Messi", "Riquelme", "Maradona"];
let resultExcercise4P3 = goalTally(playersWhoScored);
console.log(resultExcercise4P3);

// 5. En un clásico Boca vs. River, se quiere analizar el rendimiento de algunos jugadores clave. Tienes un objeto llamado rendimientoJugadores que almacena el nombre de cada //  jugador y la cantidad de kilómetros recorridos durante el partido. Crea una función analizarRendimiento que use un bucle while para recorrer el objeto y mostrar en la consola qué jugadores recorrieron más de 10 kilómetros. // let rendimientoJugadores = { "Enzo Pérez": 11.5, "Frank Fabra": 9.8, "Nicolás De La Cruz": 12.3, "Cristian Medina": 10.2 };

function analyzePerformance(playerPerformance) {
    let players = Object.keys(playerPerformance);
    let counter = 0;
    let playerResult = ""

    while (counter < players.length) {
        let player = players[counter];
        let kilometersCovered = playerPerformance[player];

        if (kilometersCovered > 10) {
            console.log(player);
            playerResult += ` ${player}`;
        }

        counter++;
    }
return playerResult;
}

let playerPerformance = {
    "Messi": 11.5,
    "Di Maria": 9.3,
    "Riquelme": 12.7,
    "Maradona": 8.6,
    "Tevez": 10.2
};

let resultExcercise5P3 = analyzePerformance(playerPerformance); 
console.log(resultExcercise5P3)

// 6. Durante el último Superclásico entre Boca y River, se registraron varias tarjetas amarillas y rojas. Tienes un objeto tarjetasPartido donde cada clave es el nombre del jugador y el valor es un objeto con dos propiedades: amarillas y rojas, que indican el número de tarjetas de cada tipo que recibió el jugador. Crea una función resumenTarjetas que use un bucle do while para mostrar en la consola el total de tarjetas amarillas y rojas que recibió cada jugador.

let matchCards = {
    Advincula : {
        yellow : 1,
        red : 0,
    },
    Echeverri : {
        yellow: 2,
        red: 1,
    }
}

function summaryCards(matchCards){
    counter = 0;
    do{
        console.log(matchCards);
    }while(matchCards.length >= counter);
}

summaryCards(matchCards);

// 7. Imagina que estás desarrollando un carrito de compras para una página web. Tienes un array de objetos productos, donde cada objeto representa un producto con su nombre y precio. Escribe una función calcularTotal que recorra el array usando un bucle while y calcule el precio total de los productos en el carrito. Muestra el total en la consola.

let products = [product1, product2]

let product1 = {
    product : "Banana",
    price : 50,
}

let product2 = {
    product : "Manzana",
    price : 55,
}

function calculateTotal (products){
    while()
}

// 8. Imagina que estás validando las entradas de un formulario en una página web. Tienes un array datosIngresados que contiene valores que el usuario ingresó. Escribe una función validarEntradas que recorra los datos usando un bucle do while para verificar que todos los campos sean válidos (por ejemplo, que no estén vacíos). Si todos los campos son válidos, muestra un mensaje en la consola indicando "Formulario válido", de lo contrario, muestra "Formulario inválido".
// 9. Imagina que estás manejando una sección de comentarios en una página web. Tienes un array de objetos comentarios, donde cada objeto tiene un usuario y un comentario. Escribe una función mostrarComentarios que recorra el array usando un bucle while y muestre cada comentario en la consola.
// 10. Imagina que estás creando una barra de progreso para una página web. La barra de progreso se llena a medida que se completa una tarea. Escribe una función simularProgreso que use un bucle do while para simular el avance de la barra, incrementando el progreso en un 10% en cada iteración hasta que alcance el 100%. Muestra el progreso en la consola en cada paso.
// 11. Imagina que estás diseñando una función de filtrado para una tienda en línea. Tienes un array de objetos productos, donde cada objeto tiene un nombre, categoría, y precio.

// Escribe una función filtrarPorCategoria que recorra el array usando un bucle while y devuelva un nuevo array con los productos que pertenecen a una categoría específica. Muestra los productos filtrados en la consola.
