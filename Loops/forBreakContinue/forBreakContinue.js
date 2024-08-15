
// 1. En una clase, tienes un array con las notas de los alumnos. Escribe una función contarAprobados que reciba este array y cuente cuántos alumnos aprobaron (nota mayor o igual a 6). Usa un bucle for para recorrer el array, continúe para saltar las notas menores a 6 y break para detener el conteo si encuentras una nota igual a 10 (porque es la nota máxima). Muestra el resultado en la consola.

let studentGrades = [4,6,8,2,10];

function countApproved (studentGrades){
    let result = 0;
    for(let counter = 0; studentGrades.length > counter; counter++){
        if(studentGrades[counter] < 6){
            continue;
        }
        result ++;
        if(studentGrades[counter] === 10){
            break;
        }
    }
    return result;
}

let resultExcercise1 = countApproved(studentGrades);
console.log(`Aprobaron ${resultExcercise1} alumnos`);

// 2. Un canal de TV quiere saber si un programa específico está en la programación del día. Escribe una función buscarPrograma que reciba un array con la lista de programas del día y un nombre de programa para buscar. Usa un bucle for para recorrer el array y break para detener la búsqueda una vez que encuentres el programa. Muestra en la consola si el programa fue encontrado o no.

let programsDay = ["Programa 1", "Programa 2", "Programa 3", "Programa 4", "Programa 5", "Programa 6", "Programa 7"];

function searchProgram (programsDay, program){
    let found = false;
    for(let i = 0; programsDay.length > i; i++){
        if(programsDay[i] === program){
            found = true;
            break;
        }
    }
    return found;
}

let resultExcercise2 = searchProgram(programsDay, "Programa 3");
if(resultExcercise2){
    console.log('El programa fue encontrado');
}else{
    console.log('El programa no fue encontrado');
}

searchProgram(programsDay, "Programa 1");

// 3. En una clase, un profesor quiere saber cuántos alumnos obtuvieron notas menores a 4 para ofrecerles clases de apoyo. Escribe una función contarNotasBajas que reciba un array con las notas y cuente cuántas son menores a 4. Usa for para recorrer el array y continue para saltar las notas que no sean menores a 4.

function countLowNotes (studentGrades){
    let disapproved = 0;
    for(let i = 0; studentGrades.length > i; i++){
        if(studentGrades[i] < 6){
            disapproved ++;
        }
    }
    return disapproved;
}

let resultExcercise3 = countLowNotes(studentGrades);
console.log(`Cantidad de alumnos que necesitan apoyo: ${resultExcercise3}`);

// 4. Tienes una lista de programas en un canal de televisión, y quieres seleccionar tus favoritos, pero solo los primeros tres que te gustan. Escribe una función seleccionarFavoritos que reciba un array con la lista de programas y un array con tus programas favoritos. Usa for para recorrer la lista, continue para saltar los que no están en tus favoritos, y break para detenerte una vez que hayas encontrado tres programas favoritos.

let favoritePrograms = ["Programa 2", "Programa 5", "Programa 8", "Programa 1", "Programa 7"];

function selectFavorites (programsDay, favoritePrograms){
    let selectPrograms = [];

    for (let i = 0; i < programsDay.length; i++) {
        if (!favoritePrograms.includes(programsDay[i])) {
            continue;
        }

        selectPrograms.push(programsDay[i]);

        if (selectPrograms.length === 3) {
            break;
        }
    }

    return selectPrograms;
}
let resultExcercise4 = selectFavorites(programsDay, favoritePrograms);
console.log(resultExcercise4);

// 5. En una escuela, el profesor quiere evaluar el desempeño de los alumnos. Escribe una función evaluarDesempeño que reciba un array con las notas de los alumnos y muestre en la consola si cada uno tiene un "Desempeño Excelente" (nota mayor o igual a 9). Usa for para recorrer el array y continue para saltar los que no cumplan con el criterio.

function evaluatePerfomance (studentGrades){
    let excellentPerformance = 0;
    for(let i = 0; studentGrades.length > i; i++){
        if(studentGrades[i] < 9){
            continue;
        }
        excellentPerformance ++;
    }
    return excellentPerformance;
}

let resultExcercise5 = evaluatePerfomance(studentGrades);
console.log(`Cantidad de alumnos con una nota excelente: ${resultExcercise5}`);

// 6. Tienes un objeto alumno que contiene un array de materias, donde cada materia es un objeto con el nombre y la nota. Escribe una función filtrarAprobadas que recorra el array de materias, filtre aquellas con nota mayor o igual a 6 y las guarde en un nuevo array aprobadas. Usa for para recorrer las materias, continue para saltar las materias desaprobadas, y break si el alumno ya ha aprobado 5 materias. Muestra el array aprobadas en la consola.

let student = {
    name: "Pedro",
    subjects: [
        { name: "Matematica", grade: 7 },
        { name: "Fisica", grade: 5 },
        { name: "Practicas Profesionalizantes", grade: 8 },
        { name: "Gestion de Procesos Productivos", grade: 9 },
        { name: "Economia", grade: 6 },
        { name: "Laboratorio", grade: 4 },
        { name: "Sistemas Embebidos", grade: 10 }
    ]
};

function filterPassedSubjects(student) {
    let passedSubjects = [];
    let subjects = student.subjects;

    for (let i = 0; i < subjects.length; i++) {
        if (subjects[i].grade < 6) {
            continue;
        }
        
        passedSubjects.push(subjects[i]);

        if (passedSubjects.length === 5) {
            break;
        }
    }
    return passedSubjects;
}

let resultExcercise6 = filterPassedSubjects(student);
console.log(resultExcercise6);

// 7. Un canal de TV tiene una programación donde cada programa tiene una calificación. Escribe una función buscarMejorPrograma que reciba un array de objetos programas, cada uno con el nombre y la calificación, y encuentre el programa con la mejor calificación. Usa for para recorrer el array, continue para saltar los programas con calificaciones bajas (menos de 7), y break si encuentras un programa con una calificación perfecta de 10. Muestra el nombre del mejor programa en la consola.

let programs = [
    { name: "Program 1", rating: 6 },
    { name: "Program 2", rating: 8 },
    { name: "Program 3", rating: 5 },
    { name: "Program 4", rating: 10 },
    { name: "Program 5", rating: 7 }
];

function findBestProgram(programs) {
    let bestProgram ;
    let bestRating = 0;

    for (let i = 0; i < programs.length; i++) {
        if (programs[i].rating < 7) {
            continue; 
        }

        if (programs[i].rating > bestRating) {
            bestProgram = programs[i];
            bestRating = programs[i].rating;
        }

        if (bestRating === 10) {
            break; 
        }
    }

    return bestProgram;
}

let resultExcercise7 = findBestProgram(programs);
console.log(resultExcercise7);

// 8. En una escuela, algunas materias incluyen clases prácticas. Escribe una función que reciba un objeto alumno con un array de materias, donde cada materia tiene un nombre y un booleano tienePracticas que indica si incluye prácticas. Usa for para recorrer las materias, continue para saltar las materias sin prácticas, y break si encuentras 3 materias con prácticas. Muestra en la consola cuántas materias con prácticas encontró.

let student1 = {
    name: "Pedro",
    subjects: [
        { name: "Matematica", hasPracticals: true },
        { name: "Historia", hasPracticals: false },
        { name: "Biologia", hasPracticals: true },
        { name: "Fisica", hasPracticals: true },
        { name: "Lengua", hasPracticals: false }
    ]
};

function countSubjectsWithPracticals(student1) {
    let subjectsWithPracticals = 0;

    for (let i = 0; i < student1.subjects.length; i++) {
        if (student1.subjects[i].hasPracticals = false) {
            continue; 
        }

        subjectsWithPracticals++;

        if (subjectsWithPracticals === 3) {
            break; 
        }
    }

    return subjectsWithPracticals;
}

let resultExcercise8 = countSubjectsWithPracticals(student); 
console.log(`Materias practicas: ${resultExcercise8}`);

// 9. Tienes una lista de canales de TV argentinos, y quieres saber si uno de tus canales favoritos está en esa lista. Escribe una función buscarCanalFavorito que reciba un array de canales y un array de favoritos. Usa for para recorrer los canales, continue para saltar los que no están en la lista de favoritos, y break si encuentras uno de tus canales favoritos. Muestra en la consola el nombre del canal encontrado o un mensaje indicando que no está en la lista.

let channels = ["Canal 13", "Telefe", "América", "El Trece", "TV Pública"];
let favorites = ["Telefe", "Fox Sports", "ESPN"];

function findFavoriteChannel(channels, favorites) {
    let found = [false, 'ninguno'];
    for (let i = 0; i < channels.length; i++) {
        if (favorites.includes(channels[i])) {
            found = [true, channels[i]];
            break;
        }
    }
    return found;
}

let resultExcercise9 = findFavoriteChannel(channels, favorites);
if(resultExcercise9[0]){
    console.log(`Canal encontrado: ${resultExcercise9[1]}`);
}else {
    console.log('No se encontro ningun canal');
}