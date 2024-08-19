// 1. Crea un objeto Personaje con las siguientes propiedades:
//      ○ Nombre
//      ○ Raza
//      ○ Edad
//      ○ Clase (por ejemplo: Guerrero, Mago, etc.)
//      ○ Arma

let character = {
    name : "Pepe",
    breed : "Valar",
    age : 150,
    clas : "Warrior",
    weapon : "Sword",
}

// 2. Añade una nueva propiedad Aliado al objeto Personaje. Este debe ser de tipo string.

character = {...character, allied: "friend"};

// 3. Actualiza la propiedad Edad del objeto Personaje para incrementar su valor en 1 usando tanto la notación de punto como la de corchetes.

character.age ++;
console.log(character.age);

character[`age`] ++;
console.log(character[`age`]);

// 4. Crea una función que reciba a Personaje, verifique si la propiedad Edad existe, y si existe, aumente su edad en 1.

function confirmAge(character){
    if(character.age){
        character.age ++;
        console.log(`La edad existe y aumento 1: ${character.age}`);
    }
    else{
        console.log(`La edad no existe`);
    }
    return character.age;
}

let ageExist = confirmAge(character);

// 5. Crea una función que reciba a Personaje, verifique que tenga la propiedad Aliado, y si la tiene, devuelva true o false si el nombre del aliado tiene 10 caracteres.

function confirmAllied(character){
    if(character.allied){
        allied.lenght() > 9? true : false;
    }
    else{
        console.log(`No existe ningun aliado`);
    }
    return allied;
}

// 6. Crea una función que reciba el objeto Personaje y retorne true o false si Nombre es igual al Nombre del aliado.

function repeatedNames(character){
    return character.name === character.allied;
}

//7. Crea una función que reciba el objeto Personaje y retorne una cadena que describa al personaje de la siguiente manera: "Nombre: [nombre], Edad: [edad], Arma: [arma], Raza: [raza]".

function descriptionCharacter(character){
    return `Nombre: ${character.name}, Edad: ${character.age}, Arma: ${character.weapon}, Raza: ${character.breed}`;
}

console.log(descriptionCharacter(character));

// 8. Crea una función que reciba a Personaje y verifique si es mayor de 100 años (considerando que en el universo de El Señor de los Anillos algunas razas pueden vivir mucho más tiempo).

function verifyAge(character){
    if(character.age > 100){
        console.log("Es mayor de 100 años");
        return true;
    }
    else{
        console.log("Es menor de 100 años");
        return false;
    }
}

// 9. Crea una función que reciba a Personaje y devuelva un objeto con Nombre y Edad.

function ageAndName(character){
    return{
        name: character.name,
        age: character.age,
    }
}

let ageAndNameCharacter = ageAndName(character);

// 10. Añade una propiedad Habilidades que sea un array de habilidades del personaje y accede a ese array por medio de notación de punto o corchetes.

character = {...character, skills: ["Super Agility"]};
console.log(character.skills[0]);

//11. Crea una función que reciba una habilidad y la agregue al array Habilidades.

let newSkill = prompt("Ingrese su nueva habilidad");

function newSkills(character){
    return character.skills.push(newSkill);
}

console.log(newSkills(character));

// 12. Crea una función que reciba una habilidad y la devuelva si existe en el array Habilidades.

function verifySkills(character){
    let existSkill = character.skills.find(function(skill){
        return skill === newSkill;
    })
    if(existSkill){
        console.log(`La habilidad ${newSkill} ya existe`);
    }
    else{
        console.log(`La habilidad ${newSkill} no existe`);
    }
    return existSkill;
}

// 13. Crea una función que retorne cuántas habilidades tiene el personaje.

function quantySkills(character){
    return character.skills.length() += 1;
}
console.log(`El personaje tiene ${quantySkills} habilidades`);

//14. Añade una propiedad Aliados que sea un array de nombres de aliados y accede a ese array por medio de notación de punto o corchetes.

character = {...character, allies: ['Pepito', 'Juancito']};
console.log(character.allies[1]);

// 15. Crea una función que reciba un aliado y lo agregue al array Aliados.

function newAllied(character){
    let newAllied = prompt(`Ingrese un nuevo aliado`);
    character.allies.push(newAllied);
}

// 16. Crea una función que reciba un aliado y lo elimine del array Aliados.

function removeAlly(character){
    let unwantedAlly = prompt(`Ingrese el aliado que deseas eliminar`);
    let allyFound = character.allied.find(function(ally){
        return ally === unwantedAlly;
    })
    if(allyFound){
                        //Por te
    }
}

// 17. Crea una función que devuelva una lista de los nombres de los aliados.

function listAllies(character){
    return character.allies;
}

console.log(listAllies(character));

// 18. Crea una función que reciba un nuevo nombre de arma y actualice la propiedad Arma del objeto Personaje.

function upgradeWeapon(character){
    let newWeapon = prompt("Ingrese su nueva arma");
    return character.weapon = newWeapon;
}

console.log(upgradeWeapon(character));

// 19. Crea una función que reciba una clase y devuelva true o false si el personaje tiene esa clase.

character.clas = ["warrior"];

function checkClass(newClass){
    let existingClass = character.clas.find(function(clas){
        return clas === newClass;
    })
    return existingClass;
}

console.log(checkClass("mago"));

// 20. Crea una función que reciba a Personaje, el nombre de una propiedad (como "Edad", "Clase", etc.), y un nuevo valor para esa propiedad. La función debe actualizar la propiedad del objeto Personaje con el nuevo valor proporcionado sin usar métodos avanzados.

let property = prompt(`Ingresar la propiedad que deseas cambiar`);
let newValue = prompt(`Ingresa el nuevo valor`);

function updateCharacterInformation(character, property, newValue){
    character[property] = newValue;
    return character;
}
console.log(updateCharacterInformation(character, property, newValue));
