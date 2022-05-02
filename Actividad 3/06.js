nombre=prompt("Ingresa Nombre").toLowerCase()
edad=prompt("Ingresa edad")
if(edad>=18){
    console.log("Puedes entrar a discoteca")
    if(nombre=='carlos' || nombre=='mario'){
        console.log("Bienvenido a VIP")
    }
}
else{
    console.log("No Puedes entrar tas chiquito")
}