// Ejercicio 1: Filtrar productos por disponibilidad
// Enunciado:
    // Tienes un objeto donde las claves son nombres de productos y los valores son booleanos que indican si el producto está en stock o no. Usa Object.entries para filtrar el objeto y obtener solo los productos disponibles. Crear un nuevo objeto availableProducts con los productos disponibles
    // const products = { "Laptop": true, "Smartphone": false, "Tablet": true, "Monitor": false }; // Resultado esperado: { "Laptop": true, "Tablet": true }
   
    let stockProducts = {
        laptop: true, 
        smatphone: false, 
        tablet: true,
        monitor: false,
    };
    
    let products = Object.entries(stockProducts);

    // let availableProducts = {};
    
    // for (let [product, inStock] of products) {
    //     if (inStock) {
    //         availableProducts[product] = inStock;
    //     }
    // }

    // console.log(Object.keys(availableProducts));

// Ejercicio 2: Convertir datos en formato clave-valor a un array de strings
// Enunciado:
    // Tienes un objeto que representa los resultados de una encuesta, con las claves como preguntas y los valores como respuestas. Usa Object.entries para convertir este objeto en un array de strings, donde cada string tiene el formato "Pregunta: Respuesta".
    // const surveyResults = { "favoriteColor": "Blue", "likesPizza": "Yes", "ageGroup": "25-34" }; // Resultado esperado: ["favoriteColor: Blue", "likesPizza: Yes", "ageGroup: 25-34"]

    let surveyResults = {
        favoriteColor: "Blue",
        likesPizza: "Yes",
        ageGroup: "25-34"
    };
    
    let arrayResults = Object.entries(surveyResults).map(([question, answer]) => `${question}: ${answer}`);
    
    console.log(arrayResults);

 // Ejercicio 3: Contar la cantidad de valores únicos
// Enunciado:
    // Tienes un objeto que representa las calificaciones de un grupo de estudiantes en un examen, con sus nombres como claves y las calificaciones como valores. Usa Object.values para contar cuántas calificaciones únicas hay.
    // const grades = { "Alice": 85, "Bob": 75, "Carol": 85, "David": 90, "Eve": 75 }; // Resultado esperado: 3 (porque hay tres calificaciones únicas: 85, 75, 90)

    let grades = { "Alice": 85, "Bob": 75, "Carol": 85, "David": 90, "Eve": 75 };

    let uniqueGrade = Object.values(grades);
    let uniqueGrade2 = [] ;
    
    uniqueGrade.find(function(grade){
    
        if(!uniqueGrade2.includes(grade)){
        uniqueGrade2.push(grade);
    }
    });

    console.log(uniqueGrade2);

// Ejercicio 4: Calcular el total de precios
// Enunciado:
    // Tienes un objeto que representa un carrito de compras, donde las claves son los nombres de los productos y los valores son los precios de esos productos. Usa Object.entries para calcular el precio total de todos los productos en el carrito.
    // const cart = { "Laptop": 1000, "Smartphone": 700, "Tablet": 300, "Monitor": 200 }; // Resultado esperado: 2200

    let cart ={"Laptop": 1000, "Smartphone": 700, "Tablet": 300, "Monitor": 200};

    let cartEntries = Object.entries(cart);
    let cartTotal = [];

    let cartValues = cartEntries.find(function(value){
    
        return value != isNaN;
        if(!uniqueGrade2.includes(grade)){
        uniqueGrade2.push(grade);
    }
    });

    console.log(cartTotal);


// Object.keys(persona);
// Object.values(persona);
// Object.entries(persona);
// Array.isArray(persona);
// String.toString(persona);

// let date = Date.now();
// console.log(date);

// console.log((Math.random()*100)); //random
// console.log((Math.floor()*100)); //redondeo