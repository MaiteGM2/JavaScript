let persona ={
    nombre : "Jaz",
    apellido : "Des..",
    edad : 23,
    esProgramador : true,
    amigos : ["Seba"],
}

console.log (persona.nombre);       //dot notation
console.log (persona["nombre"]);    //bracket notation
console.log (persona['amigos'][0]);

persona.nombre = "Fede";

function getName(persona){
    return{
        nombre: persona.nombre,
        apellido: persona.apellido,
        nombreCompleto: persona.nombre + persona.apellido,
    }
}

let persona2 = getName(persona);

console.log(persona2.nombreCompleto);