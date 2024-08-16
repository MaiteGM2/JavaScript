// 1. Imagina que sos parte del equipo de desarrollo de Boca, y tu tarea es gestionar el presupuesto del club de fútbol. Cada categoría de gasto del club, como sueldos de jugadores, mantenimiento del estadio, y costos de viajes, se representa como una propiedad en un objeto. Tu tarea es crear una función que calcule el total de todos los gastos del club utilizando un bucle for...in.

let clubExpenses = {
    playerSalaries: 2000,
    stadiumMaintenance: 10000,
    travelCosts: 5000,
}

function budget (clubExpenses){
    let total = 0;
    for(let category in clubExpenses){
        total += clubExpenses[category];
        console.log(`${category}: $${total}`);
    }
    return total;
}
let resultExcercise1 = budget(clubExpenses);
console.log(`Presupuesto: $${resultExcercise1}`)

// 2. Después de haber calculado el total de gastos , ahora necesitas saber cómo se distribuyen esos gastos en diferentes categorías. Tienes un objeto que representa las categorías de gastos del club, con cada propiedad indicando el tipo de gasto y su monto.

// agregado en el anterior ejercicio.

// 3. Imagina que trabajás en el equipo de desarrollo de FIFA y necesitás actualizar las estadísticas de los jugadores cada año después de la temporada. Tu tarea es crear una función que tome un objeto con las estadísticas actuales del jugador y un objeto con los nuevos valores a añadir. La función debe usar un bucle for...in para recorrer las propiedades del objeto de estadísticas y actualizar los valores correspondientes.

let player = {
    name: "Pedro",
    assistance: 20,
    goals: 100,
}

let newStatistics = {
    assistance: 50,
    goals: 150,
}

function update (player, newStatistics){
    for(let property in newStatistics){
        player[property] += newStatistics[property];
    }
    return player;
}
let resultExcercise3 = update(player, newStatistics);
console.log(resultExcercise3);

// 4. Imaginá que trabajás en el equipo de análisis de datos del Mundial de la FIFA. Necesitás saber cuántas veces aparece una letra específica en el name de un jugador.

let playerName = "Lionel Messi";
let character = "i";

function countCharacter(playerName, character) {
    let count = 0;

    for (let char of playerName) {
        if (char.toLowerCase() === character.toLowerCase()) {
            count++;
        }
    }
    return count;
}
let resultExcercise4 = countCharacter(playerName, character);

console.log(`El caracter se repite ${resultExcercise4} veces`);


// 5. Imaginá que estás trabajando en el sistema de compras del Mundial de la FIFA y necesitas calcular el costo total de todos los productos en el carrito de compras de un fanático. Tienes un array que contiene objetos, donde cada objeto representa un producto con propiedades como name y precio.

let cart = [
    {product: "Camiseta de Argentina",
    price: 100000},
    {product: "Pelota",
    price: 150000},
    {product: "Botines",
    price: 125000}
]

function totalCart (cart){
    let total = 0;
    for (let product of cart){
        total += product.price;
    }
    return total;
}
let resultExcercise5 = totalCart(cart);
console.log(`Total de la compra: ${resultExcercise5}`);

// 6. estás trabajando en el sistema de ventas de tickets para la Copa América. Tienes un array de objetos donde cada objeto representa un ticket disponible, con propiedades name (del evento) y disponible (un booleano que indica si el ticket está disponible o agotado).

let ticketsAmerica = [
    {event: "Argentina vs Colombia",
     available: false},
    {event: "Chile vs Peru",
     available: true},
    {event: "Canada vs EUU",
     available: false},
]

function ticketAvailability(ticketsAmerica){
    let report = [];
    for(let ticket of ticketsAmerica){
        report.push(`${ticket.event}: ${ticket.available}`);
    }
    return report;
}
let resultExcercise6 = ticketAvailability(ticketsAmerica);
console.log(resultExcercise6);


//7. Han decidido ofrecer un descuento especial del 15% en todas las categorías de tickets. Tenés un array de objetos donde cada objeto representa un ticket, con propiedades name (del tipo de ticket) y precio (el precio actual del ticket).

let tickets = [
    {name: "Opcion 1",
     price: 200},
    {name: "Opcion 2",
        price: 250},
    {name: "Opcion 3",
        price: 180}
]

function discount (tickets){
    let backup = [];
    let discountedPrice = [];
    tickets.forEach(ticket => {
        backup.push({name: ticket.name, price: ticket.price});
        ticket.price = ticket.price * 0.85;
        discountedPrice.push({name: ticket.name, price: ticket.price});
    });
    return {discountedPrice, backup};
}


let resultExcercise7 = discount(tickets);
let initialPrice = resultExcercise7.backup;
let discountedPrice = resultExcercise7.discountedPrice;

console.log(initialPrice);
console.log(discountedPrice);

//8. Como encargado de ajustar los precios de los videojuegos en Steam para una nueva región, debes convertir los precios a dólares y realizar ajustes basados en la popularidad de cada juego. Mantén una copia del precio original para referencia.

let games = [
    {name: "Horizons 4",
     price: 15000,
     popularity: 9,
    },
    {name: "Outlast",
     price: 20000,
     popularity: 10,
    },
    {name: "Rompecabezas",
     price: 1000,
     popularity: 1,
    }
]

function priceUpdate (games){
    let backup = []
    let gamesUptade = [];
    games.forEach(game => {
        backup.push({name: game.name, price: game.price});
        game.price = game.price / 1345;
        if(game.popularity >= 8){
            game.price = game.price + 5;
        }else{
            game.price = game.price + 2
        };
        gamesUptade.push({name: game.name, price: Math.round(game.price)});
    });
    return{backup, gamesUptade};
}

let resultExcercise8 = priceUpdate(games);
let originalPrice = resultExcercise8.backup;
let pricesUpdate = resultExcercise8.gamesUptade;

console.log(originalPrice);
console.log(pricesUpdate);

//9. Imaginá que sos el encargado de la tienda de merchandising de Argentina y necesitas actualizar el inventario después de una gran venta celebrando un triunfo. Los hinchas han estado comprando productos como locos, ¡y tu tarea es ajustar el stock!

let products = [
    { name: "Camiseta del Campeón", quantity: 100, sold: 90 },
    { name: "Gorra del Dibu", quantity: 50, sold: 20 },
    { name: "Bufanda de los Campeones del Mundo", quantity: 75, sold: 25 }];

function uptadeStock(products){
    let quantityAvailable = 0;
    products.forEach(product => {
        backup.push({quantity: product.quantity});
        quantityAvailable = product.quantity - product.sold;
        if(quantityAvailable > 10){
            console.log(`La ${product.name} está bien abastecida. Cantidad restante en stock: ${quantityAvailable}`);
        }else{
            console.log(`¡La ${product.name} está en bajo stock! Solo quedan ${quantityAvailable} unidades.`);
        }
    });
}

uptadeStock(products);

//10. Imaginá que sos parte del equipo de marketing de BOCA que acaba de lanzar una nueva línea de productos oficiales. Necesitás enviar un correo electrónico a todos los usuarios registrados en tu base de datos para informarles sobre esta novedad.

let users = [
    { name: "Juan Pérez", email: "juan.perez@example.com", preferences: ["Camisetas", "Gorras"] },
    { name: "María García", email: "maria.garcia@example.com", preferences: ["Bufandas"] },
    { name: "Carlos López", email: "carlos.lopez@example.com", preferences: [] }
];
let promotions = {
    "Camisetas": "10% de descuento adicional", 
    "Gorras": "15% de descuento adicional", 
    "Bufandas": "20% de descuento adicional"
};


