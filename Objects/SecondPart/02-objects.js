/// Parte 1 ///

// 1. Crear un objeto con las propiedades nombre y especie de Shrek, y luego extraer esas propiedades con destructuring.

let characterShrek = {
  name: "Shrek",
  species: "ogro",
};

let { name, species } = characterShrek;

console.log(name);
console.log(species);

// 2. Crear un objeto con las propiedades nombre, edad, y especie de Burro, y luego extraer nombre y edad con alias nombrePersonaje y edadPersonaje respectivamente.

let characterBurro = {
  name: "Burro",
  age: 16,
  species: "donkey",
};

let {
  name: nameCharacter,
  age: ageCharacter,
  species: speciesCharacter,
} = characterBurro;

console.log(nameCharacter);
console.log(ageCharacter);
console.log(speciesCharacter);

// 3. Crear un objeto con las propiedades nombre y especie de Fiona, y luego extraer nombre y asignar un valor predeterminado de 'desconocida' a ocupacion.

let characterFiona = {
  name: "Fiona",
  age: 30,
  species: "human/ogro",
};

let { name: nameFiona, occupation = "desconocido" } = characterFiona;

console.log(nameFiona);
console.log(occupation);

// 4. Crear un objeto con las propiedades nombre, especie, y edad de Shrek, y luego usar destructuring en los parámetros de una función para extraer nombre y especie.

function destructuringShrek(characterShrek) {
  return ({ name: nameShrek, species: speciesShrek } = characterShrek);
}

destructuringShrek(characterShrek);

console.log(nameShrek);
console.log(speciesShrek);

// 5. Crear un objeto con las propiedades nombre, especie, edad, y amigos de Shrek, y luego extraer nombre, especie, y amigos, asignando un valor predeterminado de [] a enemigos si no existe.

characterShrek = { ...characterShrek, friends: ["Burro", "Fiona"] };
function destructuringShrek2(character) {
  return ({
    name: nameShrek2,
    species: speciesShrek2,
    enemies = [],
  } = character);
}

destructuringShrek2(characterShrek);

console.log(nameShrek2);
console.log(speciesShrek2);
console.log(enemies);

// 6. Crear un objeto con las propiedades nombre, especie, edad, y amigos de Shrek, y luego extraer nombre y amigos, y luego extraer el primer amigo.

let { name: name2, friends: friends2 } = characterShrek;
let firstFriend = friends2[0];

console.log(firstFriend);

// 7. Crear un array de objetos con las propiedades nombre y edad de Shrek, Burro, y Fiona, y luego extraer nombre y edad de cada objeto en el array. Ponerle un alias adecuado a cada uno.

let charactersInfo = ["names"];
let shrek7 = {
  name7: "Shrek",
  age: 30,
};

let fiona7 = {
  name7: "fiona",
  age: 30,
};

let burro7 = {
  name7: "burro",
  age: 30,
};

let characterArray = [shrek7, fiona7, burro7];
console.log(characterArray);

let [{ age: age7 }, char2, char3] = characterArray;
console.log(age7);

/// Parte 2 ///

// 1. Crear un objeto shrek con las propiedades nombre, especie, edad, y amigos (que es un array de objetos con propiedades nombre y especie). Luego extraer nombre, especie, y los nombres de los amigos.

let shrekDefinitely = {
  nameDefinitely: "Shrek",
  speciesDefinitely: "ogro",
  ageDefinitely: 30,
  friendsDefinitely: [
    {
      friend1: "Burro",
      friend2: "Fiona",
    },
    {
      friend1: "donkey",
      friend2: "human/ogro",
    },
  ],
};

let {
  nameDefinitely,
  speciesDefinitely,
  friendsDefinitely: [{ namesFriends }],
} = shrekDefinitely;

console.log(shrekDefinitely.friendsDefinitely);

let [{ friend1 }] = shrekDefinitely.friendsDefinitely;
console.log()

console.log(friend1);

// console.log(nameDefinitely);
// console.log(speciesDefinitely);
// console.log(namesFriends);

// 2. Crear un objeto pelicula con las propiedades titulo, año, y personajes (que es un array de objetos con propiedades nombre, especie, y rol). Luego extraer el título de la película y los nombres de los personajes principales (aquellos cuyo rol sea 'principal').

let movie = {
  title: "Star Wars",
  year: 1977,
  characters: [
    {namesChar: "Luke",
    speciesChar: 'Human', 
    rollChar: "Principal",
    },
    {
    namesChar: "Chui" ,
    speciesChar: "bogi", 
    rollChar: "secundario",
    }
  ],
};

let {title} = movie;
let [{namesChar}] = movie.characters;

console.log(title, namesChar);

// 3. Crear un objeto misiones con las propiedades titulo, año, y detalles (que es un objeto con propiedades misionPrincipal y misionSecundaria, ambos con propiedades descripcion y personajes (que es un array de nombres)). Luego extraer la descripción de la misión principal y los nombres de los personajes de la misión secundaria.

let missions = {
  title: 'Operation Skyfall',
  year: 2024,
  details: {
      mainMission: {
          description: 'Retrieve the ancient artifact from the lost temple.',
          characters: ['Agent X', 'Dr. Z', 'Commander K']
      },
      secondaryMission: {
          description: 'Neutralize the enemy forces guarding the perimeter.',
          characters: ['Sniper Y', 'Scout J', 'Tech Specialist Q']
      }
  }
};

let mainMissionDescription = missions.details.mainMission.description;

let secondaryMissionCharacters = missions.details.secondaryMission.characters;

console.log('Main Mission Description:', mainMissionDescription);
console.log('Secondary Mission Characters:', secondaryMissionCharacters);

// 4. Crear un objeto evento con las propiedades nombre, fecha, y invitados (que es un array de objetos con propiedades nombre, especie, y confirmado (booleano)). Luego extraer el nombre del evento y los nombres de los invitados confirmados.

let evento = {
  name: 'Galactic Gathering',
  date: '2024-12-15',
  guests: [
      { name: 'Zorg', 
        species: 'Alien', 
        confirmed: true },
      { name: 'Aria', 
        species: 'Human', 
        confirmed: false },
  ]
};

let eventName = evento.name;

let confirmedGuests = evento.guests
  .filter(guest => guest.confirmed)
  .map(guest => guest.name);

console.log('Event Name:', eventName);
console.log('Confirmed Guests:', confirmedGuests);

// 5. Crear un objeto banda con las propiedades nombre, genero, y miembros (que es un array de objetos con propiedades nombre, instrumento, y experiencia (en años)). Luego extraer el nombre del género y los instrumentos de los miembros con más de 5 años de experiencia.

let band = {
  name: 'The Rockers',
  genre: 'Rock',
  members: [
      { name: 'John', instrument: 'Guitar', experience: 8 },
      { name: 'Paul', instrument: 'Bass', experience: 4 },
      { name: 'George', instrument: 'Drums', experience: 6 },
      { name: 'Ringo', instrument: 'Keyboard', experience: 2 }
  ]
};

let genre = band.genre;

let instruments = band.members
  .filter(member => member.experience > 5)
  .map(member => member.instrument);

console.log('Genre:', genre);
console.log('Instruments of members with more than 5 years of experience:', instruments);

/// Parte 3 ///

// 1. Crear una función crearPareja que reciba dos objetos ogro y princesa y devuelva un nuevo objeto pareja combinando sus propiedades, renombrando nombre a nombreOgro y nombrePrincesa. Además, si la edad de cualquiera de ellos es mayor a 28, agregar un array misiones con una misión inicial.

function createCouple(ogre, princess) {
  let couple = {
      ogreName: ogre.name,
      princessName: princess.name,
      ogreAge: ogre.age,
      princessAge: princess.age
  };

  // Verificar si la edad de alguno es mayor a 28 y agregar misiones
  if (ogre.age > 28 || princess.age > 28) {
      couple.missions = ['Main Mission'];
  }

  return couple;
}

let ogre = {
  name: 'Grog',
  age: 30
};

let princess = {
  name: 'Elena',
  age: 25
};

let couple = createCouple(ogre, princess);
console.log(couple);


// 2. Crear una función crearRealeza que reciba dos objetos rey y reina y devuelva un nuevo objeto realeza combinando sus propiedades, renombrando nombre a nombreRey y nombreReina, y poder a poderRey y poderReina. Además, si los reinos son iguales, agregar un array herederos con un heredero inicial.

function createRoyalty(king, queen) {

  let royalty = {
      kingName: king.name,
      queenName: queen.name,
      kingPower: king.power,
      queenPower: queen.power
  };

  if (king.kingdom === queen.kingdom) {
      royalty.heirs = ['Initial Heir'];
  }

  return royalty;
}

let king = {
  name: 'Arthur',
  power: 'Valor',
  kingdom: 'Camelot'
};

let queen = {
  name: 'Guinevere',
  power: 'Wisdom',
  kingdom: 'Camelot'
};

let royalty = createRoyalty(king, queen);
console.log(royalty);


// 3. Crear una función unirPersonajes que reciba un array de objetos personajes y devuelva un nuevo objeto alianza con propiedades nombres (un array de los nombres de los personajes) y reinos (un array de los reinos de los personajes). Además, si cualquier personaje pertenece al reino 'Pantano', agregar 'Pantano' a un array lugaresImportantes.

function uniteCharacters(characters) {

  let alliance = {
      names: [],
      kingdoms: [],
      importantPlaces: []
  };

  characters.forEach(character => {
      alliance.names.push(character.name);
      alliance.kingdoms.push(character.kingdom);
      
      if (character.kingdom === 'Swamp' && !alliance.importantPlaces.includes('Swamp')) {
          alliance.importantPlaces.push('Swamp');
      }
  });

  return alliance;
}

let characters = [
  { name: 'Shrek', kingdom: 'Swamp' },
  { name: 'Fiona', kingdom: 'Swamp' },
  { name: 'Donkey', kingdom: 'Forest' }
];

let alliance = uniteCharacters(characters);
console.log(alliance);


// 4. Crear una función resumenPersonajes que reciba un array de objetos personajes donde cada objeto tiene una propiedad info que a su vez es un objeto con propiedades nombre, edad, y reino. Devuelve un nuevo objeto resumen con propiedades nombres (array de nombres) y edadesMayores (array de edades mayores a 30). Si algún personaje tiene edad mayor a 40, agregar 'mayoresDe40' a un array categorias.

function summarizeCharacters(characters4) {
  let summary = {
      names: [],
      olderAges: [],
      categories: []
  };

  characters4.forEach(character => {
      let { name, age, kingdom } = character.info;

      summary.names.push(name);

      if (age > 30) {
          summary.olderAges.push(age);
      }

      if (age > 40 && !summary.categories.includes('over40')) {
          summary.categories.push('over40');
      }
  });

  return summary;
}

let characters4 = [
  { info: { name: 'Arthur', age: 35, kingdom: 'Camelot' } },
  { info: { name: 'Merlin', age: 50, kingdom: 'Avalon' } },
  { info: { name: 'Lancelot', age: 28, kingdom: 'Camelot' } }
];

let summary = summarizeCharacters(characters4);
console.log(summary);

// Parte 4. Agregamos spread operator

// 1. Crea una función agregarHobbies que reciba dos objetos persona y nuevosHobbies. El objeto persona tiene propiedades nombre, edad, y hobbies (un array de hobbies). El objeto nuevosHobbies tiene una propiedad hobbies que también es un array de nuevos hobbies. Usa el spread operator para combinar el array hobbies de persona con el array hobbies de nuevosHobbies en un nuevo objeto personaActualizada. Devuelve personaActualizada.

function addHobbies(person, newHobbies) {

  let updatedPerson = {
      ...person,
      hobbies: [...person.hobbies, ...newHobbies.hobbies]
  };

  return updatedPerson;
}

let person = {
  name: 'Ana',
  age: 28,
  hobbies: ['reading', 'writing']
};

let newHobbies = {
  hobbies: ['painting', 'traveling']
};

let updatedPerson = addHobbies(person, newHobbies);
console.log(updatedPerson);



// 3. Crea una función agregarCaracteristicas que reciba dos objetos vehiculo y caracteristicas. El objeto vehiculo tiene propiedades marca y modelo, y el objeto caracteristicas tiene propiedades color y tipo. Usa el spread operator para combinar estos objetos en un nuevo objeto vehiculoCompleto. Devuelve vehiculoCompleto, agregando las propiedades de caracteristicas solo si el color es 'rojo'.



// 4. Crea una función eliminarTelefono que reciba un objeto persona y elimine explícitamente la propiedad telefono del objeto. Usa el spread operator para crear un nuevo objeto personaSinTelefono que contenga todas las propiedades del objeto original persona excepto telefono. Devuelve personaSinTelefono.


