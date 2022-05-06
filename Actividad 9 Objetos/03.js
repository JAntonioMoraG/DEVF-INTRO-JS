/**
 * Verifica si la propiedad name se encuentra dentro del siguiente objeto:
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
    if(num=='name'){
        console.log(true)
        break
    }
    else{
        console.log(false)
    }

}
