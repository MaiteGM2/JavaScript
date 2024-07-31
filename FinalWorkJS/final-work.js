function gestionarPedido(){

    function saludo(userName){
        console.log(`Hola ${userName}! Me alegra que nos hayas elegido :)`);
    }
    saludo(`Pedro`);

    function mayorDeEdad(age){
        if(age < 18)[
            console.log(`NO puedes consumir bebidas alcoholicas`)
        ]
    }
    mayorDeEdad(17);

    function costoTotal(amount, unitValue){
        return amount * unitValue;
    }
    let firstValue = costoTotal(25, 1000);

    function aplicarDescuento(){
        let discountAge = firstValue;

        if(age>60){
            discountAge = firstValue - (firstValue * 0.10);
        }
        return discountAge;
    }
    let firstDiscount = aplicarDescuento();

    function metodoDePago(paymentMethod){
        let discountPayment = firstDiscount;

        if(paymentMethod === efectivo){
            discountPayment = firstDiscount - (firstDiscount * 0.10);
        }
        return discountPayment;
    }
    let secondDiscount = metodoDePago("efectivo");

    function horaDelPedido(){
        let date = new Date("Julio 31, 2024 10:20:05");
        let hours = date.getHours();

        if(hours >= 12 && hours <= 13){
            console.warn(`Pueden haber demoras`);
        }
    }
    horaDelPedido();

    function valorDelCubierto(){
        let secondValue = secondDiscount + (secondDiscount*0.05);
        return secondValue;
    }
    let totalValue = valorDelCubierto();

    function resumenDelPedido(){
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
    resumenDelPedido();
}