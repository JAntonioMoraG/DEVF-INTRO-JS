const FtoC=(farenheit)=>{
    alert(farenheit+"°F= "+(farenheit - 32) * 5/9+"°C")
}
const CtoF=(celsius)=>{
    alert(celsius+"°C= "+(celsius * 9/5) + 32+"°F")
}

while(true){
    opc=prompt("Ingresa 1 para convertir de C a F o 2 para convertir de F a C")
    if(opc == 1 || opc == 2){
        break
    }
}
switch(opc){
    case "1":
        celsius=prompt("ingresa grados C")
        CtoF(celsius)
        break
    case "2":
        farenheit=prompt("ingresa grados F")
        FtoC(farenheit)
        break
}
