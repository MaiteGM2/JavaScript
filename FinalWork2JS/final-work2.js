function gestionarPedido(){
    let userName = saludo();
    let userAge = mayorDeEdad();
    let product = selectedProduct();
    let amount = amountProduct();
    let productValue = unitValue(product);
    let firstValue = costoTotal(amount, productValue);
    let firstDiscount = aplicarDescuento(firstValue, userAge);
    let paymentMethod = metodoDePago();
    let secondDiscount = descuentoEfectivo(paymentMethod, firstDiscount);
    horaDelPedido();
    let totalValue = valorDelCubierto(secondDiscount);
    resumenDelPedido(firstValue, firstDiscount, secondDiscount, totalValue, userAge, paymentMethod);
}

gestionarPedido();

////// NAME //////

function saludo(){
    let name = prompt("Ingresar su nombre");

    if(validName(name)){
        console.log(`Hola ${name}! Bienvenido a nuestra WEB!`);
        return name;
    }
    else{
        console.log("Nombre invalido, porfavor reingreselo");
    }
}

function validName(name){
    name.trim().lenght;
    return isNaN(name) && name>0 && name<=25;
}

////// AGE //////

function mayorDeEdad(){
    let age = prompt("Ingrese su edad");

    if(validAge(age)){
        console.log(`Tu edad es de ${age}`);
        if(age<18){
            console.log(`NO puedes consumir bebidas alcoholicas`);
        }
        return age;
    }
    else{
        console.log(`Edad invalida. Por favor reingresela.`);
    }
}

function validAge(age){
    parseInt(age);
    age.trim();
    return !isNaN(age) && age > 0 && age <= 100;
}

////// PRODUCT //////

function selectedProduct(){
    let product = prompt("Seleccione el producto deseado");

    if(validProduct(product) && productAvailable(product)){
        console.log(`Se agrego ${product} a su compra`);
        return product;
    }
    else if(validProduct(product)){
        console.log('Producto no disponible. Por favor ingrese otro');
    }
    else{
        console.log('Por favor, reingrese el producto');
    }
}

function productAvailable(product){
    product.trim().toLowerCase();
    return product === 'armario' || product === 'escritorio';
}

function validProduct(product){
    return isNaN(product) || product !== null;
}

////// AMOUNT AND VALUE //////

function amountProduct(){
    let amount = prompt(`Ingrese las unidades deseadas del siguiente producto: ${product}`);

    if(validAmount(amount)){
        console.log(`Se han agregado ${amount} unidades del ${product}`);
        return amount;
    }
    else{
        console.log('Cantidad invalida');
    }
}

function validAmount(){
    amount.trim();
    parseInt(amount);
    return !isNaN(amount) && amount > 0;
}

function unitValue(product){
    let productValue;

    if(product === 'armario'){
        productValue = 100;
    }
    else if(product === 'escritorio'){
        productValue = 80;
    }

    return productValue;
}

////// TOTAL //////

function costoTotal(amount, productValue){
    return amount * productValue;
}

////// DISCOUNT AGE //////

function aplicarDescuento(firstValue, userAge){
    let discountAge = firstValue;

    if(userAge>60){
        discountAge = firstValue - (firstValue * 0.10);
    }
    return discountAge;
}

////// PAYMENT //////

function metodoDePago(){
    let paymentMethod = prompt("Ingrese el metodo de pago deseado");

    if(validPaymentMethod(paymentMethod)){
        console.log(`Metodo de pago seleccionado: ${paymentMethod}`);
    }
    else{
        console.log('No es un metodo de pago valido');
    }
    return paymentMethod;
}


function validPaymentMethod(paymentMethod){
    paymentMethod.trim().toUpperCase();
    return paymentMethod === "EFECTIVO" || "TARJETA" || "APLICACION";
}

function descuentoEfectivo(paymentMethod, firstDiscount){
    let discountPayment = firstDiscount;

    if(paymentMethod === "efectivo"){
        discountPayment = firstDiscount - (firstDiscount * 0.10);
    }
    return discountPayment;
}

////// HOUR //////

function horaDelPedido(){
    let date = new Date("Julio 31, 2024 10:20:05");
    let hours = date.getHours();

    if(hours >= 12 && hours <= 13){
        console.warn(`Pueden haber demoras`);
    }
}

////// TAX //////

function valorDelCubierto(secondDiscount){
    let secondValue = secondDiscount + (secondDiscount*0.05);
    return secondValue;
}

////// RESUME //////

function resumenDelPedido(firstValue, firstDiscount, secondDiscount, totalValue, userAge, paymentMethod){
    console.log(`RESUMEN DE SU PEDIDO:`);
    console.log(`Costo sin descuentos ni impuestos: ${firstValue}.`);
    if(userAge > 60){
        console.log(`Descuento del 10% por jubilado: ${firstValue - firstDiscount}.`);
    }
    if(paymentMethod === `efectivo`){
        console.log(`Descuento del 10% por efectivo: ${firstDiscount - secondDiscount}.`);
    }
    console.log(`Impuesto del 5%: ${totalValue - secondDiscount}.`);
    console.log(`Costo final: ${totalValue}.`);
}