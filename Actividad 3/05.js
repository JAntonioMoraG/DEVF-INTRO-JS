number1=prompt("Ingresa un numero")
number2=prompt("Ingresa otro numero")
number3=prompt("Ingresa otro numero")
if(number1>number2 && number1>number3){
    console.log(number1+" Es el mayor")
    if(number2==number3){
        console.log("\n"+number2+" Es igual a "+number3)
    }
}
    
else if(number2>number1 && number2>number3){
    console.log(number2+" Es el mayor")
    if(number1==number3){
        console.log("\n"+number1+" Es igual a "+number3)
    }
}
    
else if(number3>number2 && number3>number1){
    console.log(number3+" Es el mayor")
    if(number1==number2){
        console.log("\n"+number1+" Es igual a "+number2)
    }
}
else
    console.log("Todos los numeros son iguales")    

