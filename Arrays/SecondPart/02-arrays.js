
// Desarrollar una función que reciba el nombre de un alumno, las notas de sus materias, y la nota de aprobación (4/6/7) e imprima:
// Nombre del usuario
// Cantidad de materias cursadas
// Cantidad de materias aprobadas
// Las notas de las materias aprobadas
// Cantidad de materias reprobadas
// Las notas de las materias reprobadas
// Si el alumno pasó de año (aprobó todas las materias)
// Indicar si el alumno tuvo algún 10
// Indicar si el alumno aprobó alguna materia raspando (con la nota mínima de aprobación)


let nameUser = prompt("Ingrese su nombre");
let passingGrade = prompt("Ingrese la nota minima de aprobacion");
let grades = [4,6,8,10];

function resume(){
    let quantySubjects = quantySubjects(grades);                                 // Cantidad de materias cursadas
    let approvedSubjects = approvedSubjects(grades, passingGrade);               // Cantidad de materias aprobadas
    let gradeApprovedSubjects = gradeApprovedSubjects(grades, passingGrade);     // Las notas de las materias aprobadas
    let disapprovedSubjects = disapprovedSubjects(grades);                       // Cantidad de materias reprobadas
    let gradeDisapprovedSubjects = gradeDisapprovedSubjects(grades)              // Las notas de las materias reprobadas
    let yearEnd = yearEnd(quantySubjects, approvedSubjects);                     // Si finalizo el año
    let gradeExcellent = gradeExcellent(grades);                                 // Si obtuvo algun 10
    let luckyGrade = luckyGrade(grades, passingGrade);                           // Si aprobo por poco
}

function quantySubjects(grades){
    let quantySubjects = grades.length + 1;
    console.log(`Cursaste ${quantySubjects} materias.`);
    return quantySubjects;
}

function approvedSubjects(grades, passingGrade){
    let approved = grades.filter(function(grade){
        return grade >= passingGrade;                                     //corregir errores de consola
    });
    return approved.length + 1;
}

function gradeApprovedSubjects(grades, passingGrade){
    let gradeApproved = grades.filter(function(grade){
        return grade >= passingGrade;
    });
    return gradeApproved;
}

function disapprovedSubjects(grades, passingGrade){
    let disapproved = grades.filter(function(grade){
        return grade < passingGrade;
    });
    return disapproved.length + 1;
}

function gradeDisapprovedSubjects(grades, passingGrade){
    let gradeDisapproved = grades.filter(function(grade){
        return grade < passingGrade;
    });
    return gradeDisapproved;
}

function yearEnd(quantySubjects, approvedSubjects){
    let approvedYear;

    if(quantySubjects == approvedSubjects){
        console.log("Felicitaciones! Pasaste de año.")
        approvedYear = True;
    }
    else{
        console.log("No pasaste de año");
        approvedYear = False;
    }
    return approvedYear;
}

function gradeExcellent(grades){
    let excellent = grades.find(function(grade){
        if(grade === 10){
            console.log("Tuviste una o mas notas de 10");
            return grade;
        }
    })
    return excellent;
}

function luckyGrade(grades, passingGrade){
    let lucky = grades.find(function(grade){
        if(grade == passingGrade){
            console.log(`Aprobaste con un ${passingGrade} una o más materias`);
            return grade;
        }
    })
    return lucky;
}