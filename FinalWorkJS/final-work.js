function gestionarPedido(userName, age, paymentMethod){
    saludo(userName);
    mayorDeEdad(age);
    let firstValue = costoTotal(25, 1000);
    let firstDiscount = aplicarDescuento(firstValue, age);
    let secondDiscount = metodoDePago(paymentMethod, firstDiscount);
    horaDelPedido();
    let totalValue = valorDelCubierto(secondDiscount);
    resumenDelPedido(firstValue, firstDiscount, secondDiscount, totalValue, age, paymentMethod);
}

gestionarPedido(Pedro, 17, "efectivo");

function saludo(userName){
    console.log(`Hola ${userName}! Me alegra que nos hayas elegido :)`);
}

function mayorDeEdad(age){
    if(age < 18)[
        console.log(`NO puedes consumir bebidas alcoholicas`)
    ]
}

function costoTotal(amount, unitValue){
    return amount * unitValue;
}

function aplicarDescuento(firstValue, age){
    let discountAge = firstValue;

    if(age>60){
        discountAge = firstValue - (firstValue * 0.10);
    }
    return discountAge;
}

function metodoDePago(paymentMethod, firstDiscount){
    let discountPayment = firstDiscount;

    if(paymentMethod === "efectivo"){
        discountPayment = firstDiscount - (firstDiscount * 0.10);
    }
    return discountPayment;
}

function horaDelPedido(){
    let date = new Date("Julio 31, 2024 10:20:05");
    let hours = date.getHours();

    if(hours >= 12 && hours <= 13){
        console.warn(`Pueden haber demoras`);
    }
}

function valorDelCubierto(secondDiscount){
    let secondValue = secondDiscount + (secondDiscount*0.05);
    return secondValue;
}

function resumenDelPedido(firstValue, firstDiscount, secondDiscount, totalValue, age, paymentMethod){
    console.log(`RESUMEN DE SU PEDIDO:`);
    console.log(`Costo sin descuentos ni impuestos: ${firstValue}.`);
    if(age > 60){
        console.log(`Descuento del 10% por jubilado: ${firstValue - firstDiscount}.`);
    }
    if(paymentMethod === `efectivo`){
        console.log(`Descuento del 10% por efectivo: ${firstDiscount - secondDiscount}.`);
    }
    console.log(`Impuesto del 5%: ${totalValue - secondDiscount}.`);
    console.log(`Costo final: ${totalValue}.`);
}