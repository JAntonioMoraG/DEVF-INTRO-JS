/**
 * Escriba un programa de JavaScript para enumerar las propiedades de un objeto de JavaScript.
    Objeto de muestra:

    var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
 */
    var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };

    for(var num in student){
        console.log(num)
    }