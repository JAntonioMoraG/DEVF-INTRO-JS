numero=prompt("Ingresa un numero")
res=5
do{
    if(numero<5){
        break
    }
    if(res==5){
        console.log("1")
    }
    res+=5
    console.log(res-5)
}while(res<numero)