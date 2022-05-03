let numero=prompt("Ingresa un numero")
let res=0
while(res<numero){
    if(res==0){
        console.log("1")
    }
    res++
    if(res%5==0){
        console.log(res)
    }
}