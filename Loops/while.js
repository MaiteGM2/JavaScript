// 1. Crea una función sumarHastaLimite que reciba un número límite. Usa un bucle while para sumar números consecutivos (1, 2, 3,...) hasta que la suma alcance o supere el límite. Muestra el resultado en la consola. 

function sumToLimit(limitNum){
    let num = 1;
    let sum = 0;

    while(sum < limitNum){
        sum += num;
        num ++;
        console.log(sum);
    }
    return num;
}

let exercise1Result = sumToLimit(10);
console.log(exercise1Result);

// 2. Escribe una función contarPares que reciba un número n. Usa un bucle while para contar cuántos números pares hay entre 1 y n. Muestra el resultado en la consola. 

function countPairs(n){
    let account = 0;
    let num2 = 1;
    while (num2 <= n) {
        if (num2 % 2 === 0) {
            account++;
        }
        console.log(num2)
        num2++;
    }
    return account;
}
let exercise2Result = countPairs(10); 
console.log(exercise2Result);

// 3. Crea una función multiplicar que reciba dos números a y b. Usa un bucle while para multiplicar a por b mediante sumas sucesivas. Muestra el resultado en la consola. 

function multiply(numA, numB) {
      let result= 0;
      let sumCounter = 1;
      while (sumCounter <= numB) {
        result +=  numA;
        sumCounter++;
      }
      return result;
    }

    let result =  multiply(10,20);
    console.log(result);

// // 4. Escribe una función mostrarImpares que reciba un número límite. Usa un bucle while para mostrar en la consola todos los números impares desde 1 hasta el límite. 

function showOddNumbers(limitNum4){
    let num = 1;
    while(num < limitNum4){
        if(num%3 === 0){
            console.log(num);
        }
        num ++;
    }
    return num;
}

showOddNumbers(50);

// 5. Escribe una función calcularFactorial que reciba un número n. Usa un bucle while para calcular el factorial de n. Muestra el resultado en la consola. 

function calculateFactorial (n5){
    let result = n5;

    while (n5 >= 1) { 
        n5--;
        result = result * n5;
    }
    return result;
}

let exercise5Result = calculateFactorial(5);
console.log(exercise5Result);

// 6. Crea una función cuentaRegresiva que reciba un número n. Usa un bucle do while para realizar una cuenta regresiva desde n hasta 1, mostrando cada número en la consola. 

function countdown(n6){
    do{
        console.log (n6);
        n6 --;
    }while(n6 >= 1);
}

countdown(10);

// 7. Escribe una función sumarDigitos que reciba un número n. Usa un bucle while para sumar todos los dígitos de n. Muestra el resultado en la consola. 

function addDigits(n7){
    let sum = 0
    while(n7 > 0){
        sum = parseInt(sum)
        n7 = parseInt(n7)
        sum+= n7%10
        n7/=10
    }
    return sum
}

let exercise7Result = addDigits(22);
console.log(exercise7Result);

// 8. Escribe una función encontrarMayor que reciba un array de números. Usa un bucle while para encontrar y mostrar el mayor número en la consola.

function findGreater(arrayNums){
    let i =0;
    let max = 0;
    while(i < arrayNums.length){
        if(arrayNums[i]>max){
            max = arrayNums[i];
        }
        i++
    }
    return max;
}

let exercise8Result = findGreater([20,30]);
console.log(exercise8Result);

// 9. Escribe un programa que use un bucle do while para contar y mostrar en la consola todos los números impares desde 1 hasta 20.

function oddNumbers(n9){
    do{
        if(n9%2 !== 0){
            console.log(n9)
        }
        n9 ++;
    }while(n9<=20);
}

oddNumbers(1);

// 10. Escribe un programa que use un bucle do while para contar y mostrar en la consola todos los números impares desde 1 hasta 20.

function evenNumbers(n9){
    do{
        if(n9%2 == 0){
            console.log(n9)
        }
        n9 ++;
    }while(n9<=20);
}

evenNumbers(1);